import type { CommandMiddleware, Context } from 'grammy'

export const meHandler: CommandMiddleware<Context> = async (ctx) => {
  const ph = '[DATA EXPUNGED]'

  const text = [
    `Username: ${ctx.from?.username || ph}`,
    `ID: ${ctx.from?.id || ph}`,
    `First name: ${ctx.from?.first_name || ph}`,
    `Last name: ${ctx.from?.last_name || ph}`,
    `Bot: ${ctx.from?.is_bot || ph}`,
    `Premium: ${ctx.from?.is_premium || ph}`,
  ].join('\n')

  await ctx.reply(text, {
    reply_parameters: { message_id: ctx.msg.message_id },
  })
}
