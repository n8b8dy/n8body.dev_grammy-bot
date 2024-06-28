import type { Filter, NextFunction } from 'grammy'
import type { BotContext } from '@/types/bot'

export async function tyMessageHandler(ctx: Filter<BotContext, 'message:text'>, next: NextFunction) {
  const match = ctx.msg.text.match(/\S*([тt]+ы+[\s.,!?\\()01:;"']*)$/i)
  if (!match) return await next()

  if (Math.random() > 0.1) return await next()

  await ctx.reply(`Затычка от пиз${match[1].toLowerCase()}`, {
    reply_parameters: { message_id: ctx.msgId },
  })
}
