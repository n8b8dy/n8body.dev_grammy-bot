import 'dotenv/config'

import type { BotContext } from '@/types/bot'

import { Bot } from 'grammy'

import { contextMiddleware } from '@/middleware'
import { information } from '@/commands'
import { sticker } from '@/commands'
import { entertaining } from '@/commands'
import { creator } from '@/commands'

const bot = new Bot<BotContext>(process.env.BOT_TOKEN as string)

// middleware
bot.use(contextMiddleware)

// commands
bot.use(information)
bot.use(sticker)
bot.use(entertaining)
bot.use(creator)

bot.start().catch(error => console.error(error))
