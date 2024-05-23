import type { BotContext } from '@/types/bot'

import { Composer } from 'grammy'

import { startHandler } from '@/functionality/information/start'
import { helpHandler } from '@/functionality/information/help'
import { botHandler } from '@/functionality/information/bot'
import { meHandler } from '@/functionality/information/me'
import { chatHandler } from '@/functionality/information/chat'

export const information = new Composer<BotContext>()

information.command('start', startHandler)
information.command(['help', 'commands'], helpHandler)
information.command('bot', botHandler)
information.command('me', meHandler)
information.command('chat', chatHandler)
