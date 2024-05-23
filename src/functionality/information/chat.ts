import type { CommandContext } from 'grammy'
import type { BotContext } from '@/types/bot'
import { eRT } from '@/utils/text'

export async function chatHandler(ctx: CommandContext<BotContext>) {
  // TODO: Don't be lazy
  const text = Object.entries(ctx.chat).map(([k, v]) => {
    return `${k.charAt(0).toUpperCase() + k.slice(1).replaceAll('_', ' ')}: <code>${eRT(v)}</code>`
  }).join('\n')

  await ctx.reply(text, {
    parse_mode: 'HTML',
    reply_parameters: { message_id: ctx.msgId },
  })
}
