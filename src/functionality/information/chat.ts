import type { CommandMiddleware, Context } from 'grammy'
import { eRT } from '@/utils/text'

export const chatHandler: CommandMiddleware<Context> = async (ctx) => {
  // TODO: Don't be lazy
  const text = Object.entries(ctx.chat).map(([k, v]) => {
    return `${k.charAt(0).toUpperCase() + k.slice(1).replaceAll('_', ' ')}: <code>${eRT(v)}</code>`
  }).join('\n')

  await ctx.reply(text, {
    parse_mode: 'HTML',
    reply_parameters: { message_id: ctx.msgId }
  })
}
