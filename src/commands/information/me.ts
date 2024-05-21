import type { CommandMiddleware, Context } from 'grammy'
import { eRT } from '@/utils/text'

export const meHandler: CommandMiddleware<Context> = async (ctx) => {
  const text = [
    `<b>Username:</b> <code>${eRT(ctx.from?.username)}</code>`,
    `<b>ID</b>: <code>${eRT(ctx.from?.id)}</code>`,
    `First name: ${eRT(ctx.from?.first_name)}`,
    `Last name: ${eRT(ctx.from?.last_name)}`,
    `Bot: ${eRT(ctx.from?.is_bot)}`,
    `Premium: ${eRT(ctx.from?.is_premium)}`,
  ].join('\n')

  await ctx.reply(text, {
    parse_mode: 'HTML',
    reply_parameters: { message_id: ctx.msg.message_id },
  })
}
