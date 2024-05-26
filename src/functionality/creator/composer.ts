import type { BotContext } from '@/types/bot'

import { Composer } from 'grammy'

import { addStartStickerHandler } from '@/functionality/creator/addStartSticker'
import { removeStartStickerHandler } from '@/functionality/creator/removeStartSticker'

export const creator = new Composer<BotContext>()

creator.command(['addStartSticker', 'addStartStickers'], addStartStickerHandler)
creator.command(['removeStartSticker', 'removeStartStickers'], removeStartStickerHandler)
