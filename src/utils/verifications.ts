import type { BotContext } from '@/types/bot'

export function verifyCreator(ctx: BotContext) {
  return ctx.from?.id === ctx.config.creatorId
}
