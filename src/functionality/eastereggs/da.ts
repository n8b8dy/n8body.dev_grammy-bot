import type { BotContext } from '@/types/bot'
import { Filter } from 'grammy'

export async function daHandler(ctx: Filter<BotContext, 'message:text'>) {
  const match = ctx.msg.text.match(/\s*([dд]+[aа]+\W*)$/i)
  if (!match) return

  await ctx.reply(`Пиз${match[1].toLowerCase()}`, {
    reply_parameters: { message_id: ctx.msgId }
  })
}
