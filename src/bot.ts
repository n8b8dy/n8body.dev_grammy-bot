import 'dotenv/config'

import { Bot } from 'grammy'
import { information } from '@/commands'
import { sticker } from '@/commands'
import { entertaining } from '@/commands'
import { creator } from '@/commands'

const bot = new Bot(process.env.BOT_TOKEN as string)

bot.use(information)
bot.use(sticker)
bot.use(entertaining)
bot.use(creator)

bot.start().catch(error => console.error(error))
