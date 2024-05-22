import { Composer } from 'grammy'
import { memeHandler } from '@/commands/entertaining/meme'

export const entertaining = new Composer()

entertaining.command(['meme', 'memes'], memeHandler)
