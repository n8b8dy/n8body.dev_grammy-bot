import type { NextFunction } from 'grammy'
import type { BotContext } from '@/types/bot'

export async function creatorVerificationMiddleware(ctx: BotContext, next: NextFunction) {
  if (ctx.from?.id !== ctx.config.creatorId) return
  await next()
}