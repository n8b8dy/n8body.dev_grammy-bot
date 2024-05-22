import type { Context } from 'grammy'

export interface BotConfig {
  openai: {
    key: string
    org: string
    proj: string
  },
  creatorId: number
  testLandId: number
  memeEndpoint: string
}

export interface BotContext extends Context { config: BotConfig }
