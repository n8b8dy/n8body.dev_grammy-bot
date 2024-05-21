import type { CommandMiddleware, Context } from 'grammy'

export const startHandler: CommandMiddleware<Context> = async (ctx) => {
  const text = [
    `Welcome, ${ctx.from?.first_name || 'user'}!`,
    'This is a bot made by n8body for educational and experimental purposes.',
    'The current version is written in Typescript. Use /help to see all the available commands.',
  ].join(' ')

  await ctx.reply(text, {
    reply_parameters: { message_id: ctx.msg.message_id },
  })
}
