import { Composer } from 'grammy'
import { memeHandler } from '@/functionality/entertaining/meme'

export const entertaining = new Composer()

entertaining.command(['meme', 'memes'], memeHandler)
