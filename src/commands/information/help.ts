import type { CommandMiddleware, Context } from 'grammy'

export const helpHandler: CommandMiddleware<Context> = async (ctx) => {
  const text = [
    'Here\'s a list of all the functionality of the bot:',
    '',
    '*— Information Commands:*',
    '  */start* - shows initial message',
    '  */help*, */commands* - shows this message',
    '  */bot *- shows story about the bot (AI powered, xd)',
    '  */me* - shows information about the user',
    '  */chat* - shows information about the chat (cannot be used in private chats)',
    '',
    '*— Sticker Commands:*',
    '  *[sticker]* - returns the sticker\'s ID (can be used only in private chats)',
    '  */sticker [ID]* - shows the sticker with the provided ID',
    '*— Entertaining Commands:*',
    '  */meme [?:AMOUNT]* - sends a random meme or the provided amount of memes',
    '',
    '*— Admin Commands:*',
    '  (under construction)',
    '',
    '*— Creator Commands...* you don\'t need them',
    '',
    '||And some *easter eggs*!||',
  ].join('\n').replace(/([-().!\[\]])/g, `\\$1`)

  await ctx.reply(text, {
    parse_mode: 'MarkdownV2',
    reply_parameters: { message_id: ctx.msg.message_id }
  })
}
