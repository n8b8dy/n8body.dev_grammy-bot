import { Composer } from 'grammy'
import { startHandler } from '@/commands/information/start'
import { helpHandler } from '@/commands/information/help'

export const information = new Composer()

information.command('start', startHandler)
information.command(['help', 'commands'], helpHandler)
