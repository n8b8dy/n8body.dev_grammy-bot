import { escape } from 'html-escaper'

// escapeReplyText
export function eRT(text?: string | number | boolean, placeholder = '<i>[DATA EXPUNGED]</i>'){
  return text === undefined ? placeholder : escape(String(text))
}
