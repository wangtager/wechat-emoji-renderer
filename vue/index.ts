import WechatEmojiRenderer from './WechatEmojiRenderer.vue'
import EmojiPicker from './EmojiPicker.vue'

/*
 * Export components
 */
export { WechatEmojiRenderer, EmojiPicker }

/*
 * Export core functionality
 */
export { 
  renderWechatEmoji,
  extractTextFromHtml,
  copyToClipboard,
  isClipboardSupported
} from '../src/index'

/*
 * Export types
 */
export type { WechatEmoji } from '../src/index'

/*
 * Default export
 */
export default {
  WechatEmojiRenderer,
  EmojiPicker
}
