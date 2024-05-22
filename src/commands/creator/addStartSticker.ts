import { CommandMiddleware, Context, GrammyError } from 'grammy'
import prisma from '@/lib/prisma'

export const addStartStickerHandler: CommandMiddleware<Context> = async (ctx) => {
  const stickerIds = ctx.match.split(' ').filter(str => str !== '')

  if (stickerIds.length === 0) return await ctx.reply('You didn\'t provide any stickers IDs.', {
    reply_parameters: { message_id: ctx.msgId },
  })

  const testLandId = Number(process.env.TESTLAND_ID as string)

  for (const stickerId of stickerIds) {
    try {
      await ctx.api.sendSticker(testLandId, stickerId)
    } catch (error) {
      if (error instanceof GrammyError) return await ctx.reply(`Couldn't find a sticker with ID <code>${stickerId}</code>!`, {
        parse_mode: 'HTML',
        reply_parameters: { message_id: ctx.msgId },
      })

      throw error
    }

    await prisma.startSticker.create({
      data: {
        fileId: stickerId,
      }
    })

    await ctx.reply(`Sticker with ID <code>${stickerId}</code> added successfully!`, {
      parse_mode: 'HTML',
    })
  }
}
