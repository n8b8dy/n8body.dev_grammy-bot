import type { CommandMiddleware, Context } from 'grammy'

export const helpHandler: CommandMiddleware<Context> = async (ctx) => {
  const text = [
    'Here\'s a list of all the functionality of the bot:',
    '',
    '<b>— Information Commands:</b>',
    '  <b>/start</b> — shows initial message',
    '  <b>/help</b>, <b>/commands</b> — shows this message',
    '  <b>/bot</b> — shows story about the bot (AI powered, xd)',
    '  <b>/me</b> — shows information about the user',
    '  <b>/chat</b> — shows information about the chat (cannot be used in private chats)',
    '',
    '<b>— Sticker Commands:</b>',
    '  <b>[sticker]</b> — returns the sticker\'s ID (can be used only in private chats)',
    '  <b>/sticker [ID]</b> — shows the sticker with the provided ID',
    '',
    '<b>— Entertaining Commands:</b>',
    '  <b>/meme [?:AMOUNT]</b> — sends a random meme or the provided amount of memes',
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
