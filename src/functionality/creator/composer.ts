import type { BotContext } from '@/types/bot'

import { Composer } from 'grammy'

import { startStickerCommandHandler } from '@/functionality/creator/startSticker_command'

export const creator = new Composer<BotContext>()

creator.command(['startSticker', 'startStickers'], startStickerCommandHandler)
