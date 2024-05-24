import type { CommandContext } from 'grammy'
import type { BotContext } from '@/types/bot'

import { GrammyError, InputMediaBuilder } from 'grammy'

import { eRT } from '@/utils/text'

export async function meHandler(ctx: CommandContext<BotContext>) {
  if (!ctx.from) return

  const text = [
    `<b>Username:</b> <code>${eRT(ctx.from.username)}</code>`,
    `<b>ID</b>: <code>${eRT(ctx.from.id)}</code>`,
    `First name: ${eRT(ctx.from.first_name)}`,
    `Last name: ${eRT(ctx.from.last_name)}`,
    `Bot: ${eRT(ctx.from.is_bot)}`,
    `Premium: ${eRT(ctx.from.is_premium)}`,
  ].join('\n')

  const replyWithoutMedia = async () => await ctx.reply(text, {
    parse_mode: 'HTML',
    reply_parameters: { message_id: ctx.msgId },
  })

  try {
    const profilePhotos = await ctx.api.getUserProfilePhotos(ctx.from.id)
    if (profilePhotos.total_count === 0) return await replyWithoutMedia()

    const mediaGroup = profilePhotos.photos.slice(0, 10).map(photoSize => InputMediaBuilder.photo(photoSize[0].file_id))

    mediaGroup[0].caption = text
    mediaGroup[0].parse_mode = 'HTML'

    await ctx.replyWithMediaGroup(mediaGroup, {
      reply_parameters: { message_id: ctx.msgId },
    })

  } catch (error) {
    if (error instanceof GrammyError) return await replyWithoutMedia()

    throw error
  }
}
