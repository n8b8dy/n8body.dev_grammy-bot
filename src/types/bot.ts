import type { Context } from 'grammy'

export interface BotConfig {
  openai: {
    key: string
    org: string
    proj: string
  },
  creatorId: number
  testLand: number
  memeEndpoint: string
}

export interface BotContext extends Context { config: BotConfig }
