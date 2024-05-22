import type { BotContext } from '@/types/bot'

import { Composer } from 'grammy'

import { creatorVerificationMiddleware } from '@/functionality/creator/middleware'
import { addStartStickerHandler } from '@/functionality/creator/addStartSticker'

export const creator = new Composer<BotContext>()

creator.use(creatorVerificationMiddleware)

creator.command(['addStartSticker', 'addStartStickers'], addStartStickerHandler)
