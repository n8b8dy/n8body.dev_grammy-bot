import { Composer } from 'grammy'
import { stickerHandler } from '@/commands/sticker/sticker'

export const sticker = new Composer()

sticker.command('sticker', stickerHandler)
