/*
 * React components export
 */
export { WechatEmojiRenderer } from './WechatEmojiRenderer'
export { EmojiPicker } from './EmojiPicker'

/*
 * Component Props types
 */
export type { WechatEmojiRendererProps } from './WechatEmojiRenderer'
export type { EmojiPickerProps } from './EmojiPicker'

/*
 * Core functionality re-exports from main package
 */
export { 
  renderWechatEmoji,
  extractTextFromHtml,
  copyToClipboard,
  isClipboardSupported
} from '../src/index'

/*
 * Type definitions re-exports from main package
 */
export type { WechatEmoji } from '../src/index'
