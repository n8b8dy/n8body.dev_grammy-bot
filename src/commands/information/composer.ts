import { Composer } from 'grammy'
import { startHandler } from '@/commands/information/start'
import { helpHandler } from '@/commands/information/help'
import { meHandler } from '@/commands/information/me'
import { botHandler } from '@/commands/information/bot'

export const information = new Composer()

information.command('start', startHandler)
information.command(['help', 'commands'], helpHandler)
information.command('me', meHandler)
information.command('bot', botHandler)
