import type { CommandContext } from 'grammy'
import type { BotContext } from '@/types/bot'

export async function helpCommandHandler (ctx: CommandContext<BotContext>) {
  const text = [
    'Here is a list of all the bot\'s functionality:',
    '',
    '<b>— Information Commands:</b>',
    '  <b>/start</b> — Shows the initial message.',
    '  <b>/help</b>, <b>/commands</b> — Shows this message.',
    '  <b>/bot</b> — Shows an AI generated story about the bot. New story can be generated once every 24 hours.',
    '  <b>/me</b> — Shows information about the user (Warning: It can show some data you may not want everyone to see).',
    '  <b>/chat</b> — Shows information about the current chat.',
    '',
    '<b>— Sticker Commands:</b>',
    '  <b>[sticker]</b> — Returns the sticker\'s ID (Can be used only in private chats).',
    '  <b>/sticker [ID]</b> — Shows the sticker with the provided ID.',
    '',
    '<b>— Entertaining Commands:</b>',
    '  <b>/meme(s) [?:amount]</b> — sends a random meme or the provided amount of memes',
    '',
    '<b>— Admin Commands:</b>',
    '  (under construction)',
    '',
    '<b>— Creator Commands...</b> you don\'t need them',
    '',
    '<tg-spoiler>And some <b>easter eggs</b>!</tg-spoiler>',
  ].join('\n')

  await ctx.reply(text, {
    parse_mode: 'HTML',
    reply_parameters: { message_id: ctx.msgId }
  })
}
