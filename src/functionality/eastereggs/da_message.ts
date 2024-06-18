import type { Filter, NextFunction } from 'grammy'
import type { BotContext } from '@/types/bot'

const wordVariants = ["Пиз", "Ампыл", "Ман"]

export async function daMessageHandler(ctx: Filter<BotContext, 'message:text'>, next: NextFunction) {
  const match = ctx.msg.text.match(/(?:^|\s+)*([dд]+[aа]+[\s.,!?\\()01:;"']*)$/i)
  if (!match) return await next()

  if (Math.random() > 0.2) return await next()

  await ctx.reply(`${wordVariants[Math.floor(Math.random() * wordVariants.length)]}${match[1].toLowerCase()}`, {
    reply_parameters: { message_id: ctx.msgId },
  })
}
