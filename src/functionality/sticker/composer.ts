import type { BotContext } from '@/types/bot'

import { Composer } from 'grammy'

import { stickerCommandHandler } from '@/functionality/sticker/sticker_command'
import { stickerMessageHandler } from '@/functionality/sticker/sticker_message'

export const sticker = new Composer<BotContext>()

sticker.command('sticker', stickerCommandHandler)
sticker.on('message:sticker', stickerMessageHandler)
