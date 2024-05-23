import type { BotContext } from '@/types/bot'
import { Composer } from 'grammy'
 import { daHandler } from '@/functionality/eastereggs/da'

export const eastereggs = new Composer<BotContext>()

eastereggs.on('message:text', daHandler)
