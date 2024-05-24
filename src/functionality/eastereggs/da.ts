import type { Filter, NextFunction } from 'grammy'
import type { BotContext } from '@/types/bot'

export async function daHandler(ctx: Filter<BotContext, 'message:text'>, next: NextFunction) {
  const match = ctx.msg.text.match(/\s*([dд]+[aа]+[\s.,!?\\()01:;"']*)$/)
  if (!match) return await next()

  if (Math.random() > 0.2) return await next()

  await ctx.reply(`Пиз${match[1].toLowerCase()}`, {
    reply_parameters: { message_id: ctx.msgId }
  })
}
