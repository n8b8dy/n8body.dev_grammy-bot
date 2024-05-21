import type { CommandMiddleware, Context } from 'grammy'
import { GrammyError } from 'grammy'

export const stickerHandler: CommandMiddleware<Context> = async (ctx) => {
  const stickerId = ctx.match.trim().split(' ')[0]

  if (!stickerId) return await ctx.reply('You didn\'t provide a sticker ID.')

  try {
    await ctx.api.sendSticker(ctx.chat.id, stickerId, {
      reply_parameters: { message_id: ctx.msg.message_id },
    })
  } catch (error) {
    if (error instanceof GrammyError) return await ctx.reply(`Couldn't find a sticker with ID <code>${stickerId}</code>!`, {
      parse_mode: 'HTML',
      reply_parameters: { message_id: ctx.msg.message_id },
    })

    throw error
  }
}
