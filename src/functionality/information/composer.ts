import type { BotContext } from '@/types/bot'

import { Composer } from 'grammy'

import { startCommandHandler } from '@/functionality/information/start_command'
import { helpCommandHandler } from '@/functionality/information/help_command'
import { botCommandHandler } from '@/functionality/information/bot_command'
import { meCommandHandler } from '@/functionality/information/me_command'
import { chatCommandHandler } from '@/functionality/information/chat_command'

export const information = new Composer<BotContext>()

information.command('start', startCommandHandler)
information.command(['help', 'commands'], helpCommandHandler)
information.command('bot', botCommandHandler)
information.command('me', meCommandHandler)
information.command('chat', chatCommandHandler)
