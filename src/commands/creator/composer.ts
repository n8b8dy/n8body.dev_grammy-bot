import type { BotContext } from '@/types/bot'
import { Composer } from 'grammy'
import { creatorVerificationMiddleware } from '@/commands/creator/middleware'
import { addStartStickerHandler } from '@/commands/creator/addStartSticker'

export const creator = new Composer<BotContext>()

creator.use(creatorVerificationMiddleware)

creator.command(['addStartSticker', 'addStartStickers'], addStartStickerHandler)
