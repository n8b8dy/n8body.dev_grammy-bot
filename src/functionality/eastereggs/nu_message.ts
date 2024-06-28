import type { Filter, NextFunction } from 'grammy'
import type { BotContext } from '@/types/bot'

export async function nuMessageHandler(ctx: Filter<BotContext, 'message:text'>, next: NextFunction) {
  const match = ctx.msg.text.match(/(^|\s+)([нn]+у+[\s.,!?\\()01:;"']*)$/i)
  if (!match) return await next()

  if (Math.random() > 0.1) return await next()

  await ctx.reply(`Баранки гну!1!`, {
    reply_parameters: { message_id: ctx.msgId },
  })
}
