import 'dotenv/config'

import { Bot } from 'grammy'
import { information } from '@/commands'
import { sticker } from '@/commands'
import { entertaining } from '@/commands/entertaining'

const bot = new Bot(process.env.BOT_TOKEN as string)

bot.use(information)
bot.use(sticker)
bot.use(entertaining)

bot.start().catch(error => console.error(error))
