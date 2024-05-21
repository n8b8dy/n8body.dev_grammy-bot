import { Composer } from 'grammy'
import { startHandler } from './start'

export const information = new Composer()

information.command('start', startHandler)
