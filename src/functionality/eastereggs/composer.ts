import type { BotContext } from '@/types/bot'

import { Composer } from 'grammy'

import { daMessageHandler } from '@/functionality/eastereggs/da_message'
import { yaMessageHandler } from '@/functionality/eastereggs/ya_message'
import { endCommandHandler } from '@/functionality/eastereggs/end_command'

export const eastereggs = new Composer<BotContext>()

eastereggs.on('message:text', daMessageHandler)
eastereggs.on('message:text', yaMessageHandler)
eastereggs.command('end', endCommandHandler)
