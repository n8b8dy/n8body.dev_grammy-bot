import type { BotContext } from '@/types/bot'

import { Composer } from 'grammy'

import { addStartStickerHandler } from '@/functionality/creator/addStartSticker'

export const creator = new Composer<BotContext>()

creator.command(['addStartSticker', 'addStartStickers'], addStartStickerHandler)
