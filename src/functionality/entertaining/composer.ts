import type { BotContext } from '@/types/bot'
import { Composer } from 'grammy'
import { memeHandler } from '@/functionality/entertaining/meme'

export const entertaining = new Composer<BotContext>()

entertaining.command(['meme', 'memes'], memeHandler)
