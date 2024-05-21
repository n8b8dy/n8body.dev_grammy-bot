import 'dotenv/config'

import { Bot } from 'grammy'
import { information } from '@/commands'
import { sticker } from '@/commands'


const bot = new Bot(process.env.BOT_TOKEN as string)

bot.use(information)
bot.use(sticker)

bot.start().catch(error => console.error(error))
