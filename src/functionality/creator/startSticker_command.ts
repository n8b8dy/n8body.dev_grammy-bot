import type { CommandContext } from 'grammy'
import type { BotContext } from '@/types/bot'

import { GrammyError } from 'grammy'

import prisma from '@/lib/prisma'
import { verifyCreator } from '@/utils/verifications'

export async function startStickerCommandHandler(ctx: CommandContext<BotContext>) {
  if (!verifyCreator(ctx)) return

  const matches = ctx.match.trim().replace(/\s{2,}/g, ' ').split(' ')

  const method = matches[0].toLowerCase()
  const stickerIDs = matches.slice(1)

  switch (method) {
  case 'add':
    await addStartSticker(ctx, stickerIDs)
    break
  case 'remove':
    await removeStartSticker(ctx, stickerIDs)
    break
  default:
    await ctx.reply(`There is no such method as <code>${method}</code>.`, {
      parse_mode: 'HTML',
    })
  }
}

async function addStartSticker(ctx: CommandContext<BotContext>, stickerIDs: Array<string>) {
  if (stickerIDs.length === 0) return await ctx.reply('You didn\'t provide any stickers IDs.', {
    reply_parameters: { message_id: ctx.msgId },
  })

  for (const stickerID of stickerIDs) {
    try {
      await ctx.api.sendSticker(ctx.config.testLandId, stickerID)
    } catch (error) {
      if (error instanceof GrammyError) return await ctx.reply(`Couldn't find a sticker with ID <code>${stickerID}</code>!`, {
        parse_mode: 'HTML',
        reply_parameters: { message_id: ctx.msgId },
      })

      throw error
    }

    if (await prisma.startSticker.exists({ fileId: stickerID })) {
      await ctx.reply(`Sticker with ID <code>${stickerID}</code> already exists.`, {
        parse_mode: 'HTML',
      })
      continue
    }

    await prisma.startSticker.create({
      data: {
        fileId: stickerID,
      },
    })

    await ctx.reply(`Sticker with ID <code>${stickerID}</code> added successfully!`, {
      parse_mode: 'HTML',
    })
  }

  await ctx.reply('Finished adding stickers.', {
    reply_parameters: { message_id: ctx.msgId },
  })
}

async function removeStartSticker(ctx: CommandContext<BotContext>, stickerIDs: Array<string>) {
  if (stickerIDs.length === 0) return await ctx.reply('You didn\'t provide any stickers IDs.', {
    reply_parameters: { message_id: ctx.msgId },
  })

  for (const stickerID of stickerIDs) {
    if (!await prisma.startSticker.exists({ fileId: stickerID })) {
      await ctx.reply(`Sticker with ID <code>${stickerID}</code> doesn't exist!`, {
        parse_mode: 'HTML',
      })
      continue
    }

    await prisma.startSticker.delete({
      where: { fileId: stickerID },
    })

    await ctx.reply(`Sticker with ID <code>${stickerID}</code> removed successfully!`, {
      parse_mode: 'HTML',
    })
  }

  await ctx.reply('Finished removing stickers.', {
    reply_parameters: { message_id: ctx.msgId },
  })
}
