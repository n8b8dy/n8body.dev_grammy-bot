import type { CommandContext } from 'grammy'
import type { BotContext } from '@/types/bot'

import { GrammyError } from 'grammy'

import prisma from '@/lib/prisma'
import { verifyCreator } from '@/utils/verifications'

export async function addStartStickerHandler(ctx: CommandContext<BotContext>) {
  if (!verifyCreator(ctx)) return

  const stickerIds = ctx.match.split(' ').filter(str => str !== '')

  if (stickerIds.length === 0) return await ctx.reply('You didn\'t provide any stickers IDs.', {
    reply_parameters: { message_id: ctx.msgId },
  })

  for (const stickerId of stickerIds) {
    try {
      await ctx.api.sendSticker(ctx.config.testLandId, stickerId)
    } catch (error) {
      if (error instanceof GrammyError) return await ctx.reply(`Couldn't find a sticker with ID <code>${stickerId}</code>!`, {
        parse_mode: 'HTML',
        reply_parameters: { message_id: ctx.msgId },
      })

      throw error
    }

    if (await prisma.startSticker.exists({ fileId: stickerId })) {
      await ctx.reply(`Sticker with ID <code>${stickerId}</code> already exists.`, {
        parse_mode: 'HTML',
      })
      continue
    }

    await prisma.startSticker.create({
      data: {
        fileId: stickerId,
      },
    })

    await ctx.reply(`Sticker with ID <code>${stickerId}</code> added successfully!`, {
      parse_mode: 'HTML',
    })
  }

  await ctx.reply('Finished adding stickers.', {
    reply_parameters: { message_id: ctx.msgId },
  })
}
