import type { BotContext } from '@/types/bot'

import { Composer } from 'grammy'

import { daHandler } from '@/functionality/eastereggs/da'
import { endHandler } from '@/functionality/eastereggs/end'

export const eastereggs = new Composer<BotContext>()

eastereggs.on('message:text', daHandler)
eastereggs.command('end', endHandler)
