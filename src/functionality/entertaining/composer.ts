import type { BotContext } from '@/types/bot'
import { Composer } from 'grammy'
import { memeCommandHandler } from '@/functionality/entertaining/meme_command'

export const entertaining = new Composer<BotContext>()

entertaining.command(['meme', 'memes'], memeCommandHandler)
