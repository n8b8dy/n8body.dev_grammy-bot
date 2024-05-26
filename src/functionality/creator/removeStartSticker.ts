import type { CommandContext } from 'grammy'
import type { BotContext } from '@/types/bot'

import prisma from '@/lib/prisma'
import { verifyCreator } from '@/utils/verifications'

export async function removeStartStickerHandler(ctx: CommandContext<BotContext>) {
  if (!verifyCreator(ctx)) return

  const stickerIds = ctx.match.split(' ').filter(str => str !== '')

  if (stickerIds.length === 0) return await ctx.reply('You didn\'t provide any stickers IDs.', {
    reply_parameters: { message_id: ctx.msgId },
  })

  for (const stickerId of stickerIds) {
    if (!await prisma.startSticker.exists({ fileId: stickerId })) {
      await ctx.reply(`Sticker with ID <code>${stickerId}</code> doesn't exist!`, {
        parse_mode: 'HTML',
      })
      continue
    }

    await prisma.startSticker.delete({
      where: { fileId: stickerId },
    })

    await ctx.reply(`Sticker with ID <code>${stickerId}</code> removed successfully!`, {
      parse_mode: 'HTML',
    })
  }

  await ctx.reply('Finished removing stickers.', {
    reply_parameters: { message_id: ctx.msgId },
  })
}
