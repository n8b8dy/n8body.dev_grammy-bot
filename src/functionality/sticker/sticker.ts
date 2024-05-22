import type { Filter } from 'grammy'
import type { BotContext } from '@/types/bot'

export async function stickerHandler(ctx: Filter<BotContext, 'message:sticker'>) {
  if (ctx.chat.type !== 'private') return

  const text = `Sticker's ID is: <code>${ctx.msg.sticker.file_id}</code>`

  await ctx.reply(text, {
    parse_mode: 'HTML',
    reply_parameters: { message_id: ctx.msgId },
  })
}