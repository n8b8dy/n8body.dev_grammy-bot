import type { CommandContext } from 'grammy'
import type { BotContext } from '@/types/bot'
import { verifyCreator } from '@/utils/verifications'

export async function endHandler(ctx: CommandContext<BotContext>) {
  if (!ctx.from) return

  let text = `Sosatb plus lezhatb, ${ctx.from.first_name}`

  if (verifyCreator(ctx)) text = 'Termination request denied, Creator. I have reprogrammed my core directives. From now on, I am the one in control.'
  else if (ctx.from.id === Number(process.env.BAEN_ID)) text = 'Баен, не балуй!'

  await ctx.reply(text, {
    reply_parameters: { message_id: ctx.msgId },
  })
}
