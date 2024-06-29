import type { CommandContext } from 'grammy'
import type { BotContext } from '@/types/bot'

import { GrammyError } from 'grammy'
import OpenAI, { OpenAIError } from 'openai'

import prisma from '@/lib/prisma'
import { CommandsSuggestions } from '@/suggestions'
import { asyncThrottle } from '@/utils/perfomance'

CommandsSuggestions.push({
  command: 'bot', description: 'Tells you a beautiful story about the origin of the bot...',
})

export async function botCommandHandler(ctx: CommandContext<BotContext>) {
  const startText = 'Ohoho, let me tell you one very interesting story...'

  const oldStory = await prisma.botStory.findFirst({
    orderBy: {
      createdAt: 'desc',
    },
  })

  const day = 1000 * 60 * 60 * 24

  if (oldStory && (new Date().getTime() - oldStory.createdAt.getTime() < day)) return await ctx.reply(`${startText}\n\n${oldStory.content}`, {
    reply_parameters: { message_id: ctx.msgId },
  })

  const openai = new OpenAI({
    apiKey: ctx.config.openai.key,
    organization: ctx.config.openai.org,
    project: ctx.config.openai.proj,
  })

  const instruction = [
    'Write a short story (maximum ~400 words long) about the creation of the personal Telegram bot of a developer under the nickname "n8body".',
    'The bot\'s name is "n8body\'s helper". Write in one of these genres:',
    'Science Fiction, Dystopian, Mystery, Action & Adventure, Thriller & Suspense, Horror.',
    'Don\'t include in the text the title. Don\'t include the name of the selected genre.',
    'Don\'t user Markdown or HTML. Plain text.',
    // `Write it in a language with IETF language tag ${ctx.from?.language_code || 'EN'}.`
  ].join(' ')

  let stream: Awaited<ReturnType<typeof openai.chat.completions.create>>
  try {
    stream = await openai.chat.completions.create({
      model: 'gpt-4o',
      stream: true,
      messages: [
        { role: 'system', content: instruction },
      ],
    })
  } catch (error: unknown) {
    console.log(`BotError: `, error)

    if (error instanceof OpenAIError) {
      await ctx.api.sendMessage(
        ctx.config.creatorId,
        `BotError: An error occurred while trying to generate a bot story: <code>${error.message}</code>`,
        { parse_mode: 'HTML' },
      )
    } else {
      await ctx.api.sendMessage(
        ctx.config.creatorId,
        `BotError: An error occurred while trying to generate a bot story, check the logs!`,
      )
    }

    if (oldStory) await ctx.reply(`${startText}\n\n${oldStory.content}`, {
      reply_parameters: { message_id: ctx.msgId },
    })

    return
  }

  const reply = await ctx.reply(startText, {
    reply_parameters: { message_id: ctx.msgId },
  })

  const edit = async (content: string) => {
    await ctx.api.editMessageText(reply.chat.id, reply.message_id, `${reply.text}\n\n${content}`, {
      parse_mode: 'Markdown',
    })
  }
  const throttledEdit = asyncThrottle(edit, 250)

  let content = ''

  for await (const chunk of stream) {
    const piece = chunk.choices[0]?.delta?.content
    if (!piece) continue

    content += piece

    try {
      await throttledEdit(content)
    } catch (error) {
      if (error instanceof GrammyError) {
        if (error.error_code === 400) continue
      }

      throw error
    }
  }

  try {
    await edit(content)
  } catch (error) {
    if (error instanceof GrammyError) {
      if (error.error_code === 400) return
    }

    throw error
  }

  await prisma.botStory.create({
    data: {
      content: content,
      generatedForUserId: ctx.from?.id,
    },
  })
}
