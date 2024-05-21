import type { CommandMiddleware, Context } from 'grammy'
import prisma from '@/lib/prisma'

export const startHandler: CommandMiddleware<Context> = async (ctx) => {
  const text = [
    `Welcome, ${ctx.from?.first_name || 'user'}!`,
    'This is a bot made by n8body for educational and experimental purposes.',
    'The current version is written in Typescript. Use /help to see all the available commands.',
  ].join(' ')

  const count = await prisma.startSticker.count()
  const sticker = (await prisma.startSticker.findMany({
    take: 1,
    skip: Math.floor(Math.random() * count),
  }))[0]

  await ctx.reply(text, {
    reply_parameters: { message_id: ctx.msg.message_id },
  })
  await ctx.api.sendSticker(ctx.chat.id, sticker.fileId)
}
