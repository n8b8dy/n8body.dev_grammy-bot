import type { BotContext } from '@/types/bot'

import { Composer } from 'grammy'

import { stickerCommandHandler } from '@/functionality/sticker/stickerCommand'
import { stickerHandler } from '@/functionality/sticker/sticker'

export const sticker = new Composer<BotContext>()

sticker.command('sticker', stickerCommandHandler)
sticker.on('message:sticker', stickerHandler)
