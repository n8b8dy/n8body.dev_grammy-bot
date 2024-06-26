import 'dotenv/config'

import type { BotContext } from '@/types/bot'

import { Bot } from 'grammy'

import { contextMiddleware } from '@/middleware'
import {
  information,
  sticker,
  eastereggs,
  entertaining,
  creator,
} from '@/functionality'

const bot = new Bot<BotContext>(process.env.BOT_TOKEN)

// middleware
bot.use(contextMiddleware)

// functionality
bot.use(information)
bot.use(sticker)
bot.use(entertaining)
bot.use(eastereggs)
bot.use(creator)

bot.start().catch(error => console.error(error))
