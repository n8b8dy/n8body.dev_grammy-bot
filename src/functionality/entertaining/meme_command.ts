import type { CommandContext } from 'grammy'
import type { BotContext } from '@/types/bot'
import { eRT } from '@/utils/text'

type MemeResponse = {
  count: number
  memes: Array<{
    title: string
    preview: Array<string>
  }>
}

export async function memeCommandHandler(ctx: CommandContext<BotContext>) {
  let amount = Number(ctx.match.trim().split(' ')[0])
  if (Number.isNaN(amount) || amount > 8 || amount < 1) amount = 1

  try {
    const resp = await fetch(`${ctx.config.memeEndpoint}/gimme/${amount}`)
    const data: MemeResponse = await resp.json()

    let lastMsgId = ctx.msgId

    for (const meme of data.memes) {
      const text = [
        eRT(meme.title),
        `<tg-spoiler><a href="${meme.preview.at(-1)}">source</a></tg-spoiler>`,
      ].join('\n')

      const reply = await ctx.reply(text, {
        parse_mode: 'HTML',
        reply_parameters: { message_id: lastMsgId },
      })

      lastMsgId = reply.message_id
    }
  } catch (error) {
    return await ctx.reply('Sorry, couldn\'t get any memes.', {
      reply_parameters: { message_id: ctx.msgId },
    })
  }
}
