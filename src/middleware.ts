import type { NextFunction } from 'grammy'
import type { BotContext } from '@/types/bot'

export async function contextMiddleware(ctx: BotContext, next: NextFunction){
  ctx.config = {
    openai: {
      key: process.env.OPENAI_KEY,
      org: process.env.OPENAI_ORG,
      proj: process.env.OPENAI_PROJ,
    },
    creatorId: Number(process.env.CREATOR_ID),
    testLand: Number(process.env.TESTLAND_ID),
    memeEndpoint: process.env.OPENAI_PROJ,
  }

  await next();
}
