import { Composer } from 'grammy'
import { startHandler } from '@/commands/information/start'
import { helpHandler } from '@/commands/information/help'
import { botHandler } from '@/commands/information/bot'
import { meHandler } from '@/commands/information/me'
import { chatHandler } from '@/commands/information/chat'

export const information = new Composer()

information.command('start', startHandler)
information.command(['help', 'commands'], helpHandler)
information.command('bot', botHandler)
information.command('me', meHandler)
information.command('chat', chatHandler)
