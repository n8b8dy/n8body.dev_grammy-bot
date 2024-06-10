import type { Filter, NextFunction } from 'grammy'
import type { BotContext } from '@/types/bot'

export async function yaMessageHandler(ctx: Filter<BotContext, 'message:text'>, next: NextFunction) {
  const match = ctx.msg.text.match(/\s*((?:[yй]+[aа]+|я+)[\s.,!?\\()01:;"']*)$/i)
  if (!match) return await next()

  if (Math.random() > 0.2) return await next()

  await ctx.reply(`Головка от ху${match[1].toLowerCase()}`, {
    reply_parameters: { message_id: ctx.msgId },
  })

  await ctx.reply("додик")
}
