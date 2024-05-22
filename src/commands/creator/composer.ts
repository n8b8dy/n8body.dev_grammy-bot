import { Composer } from 'grammy'
import { addStartStickerHandler } from '@/commands/creator/addStartSticker'

export const creator = new Composer()

creator.use(async (ctx, next) => {
  if (ctx.from?.id !== Number(process.env.CREATOR_ID as string)) return
  await next()
})

creator.command(['addStartSticker', 'addStartStickers'], addStartStickerHandler)
