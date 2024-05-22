import { Composer } from 'grammy'
import { stickerHandler } from '@/commands/sticker/sticker'

export const sticker = new Composer()

sticker.command('sticker', stickerHandler)
sticker.on('message:sticker', async (ctx) => {
  if (ctx.chat.type !== 'private') return

  const text = `Sticker's ID is: <code>${ctx.msg.sticker.file_id}</code>`

  await ctx.reply(text, {
    parse_mode: 'HTML',
    reply_parameters: { message_id: ctx.msgId },
  })
})
