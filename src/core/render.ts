import { emojiMap, calculateBackgroundStyle } from './data'

/**
 * Render WeChat emoji text to HTML string
 * @param text text containing emoji codes
 * @param options rendering options
 * @returns rendered HTML string
 */
export function renderWechatEmoji(
  text: string,
  options: {
    emojiSize?: number
    bgScale?: number
    spriteUrl?: string
    className?: string
  } = {}
): string {
  const {
    emojiSize = 24,
    bgScale = 1.3,
    spriteUrl = './assets/sprite.png',
    className = ''
  } = options

  /*
   * Match all text in [emoji_name] format
   */
  return text.replace(/\[([^\]]+)\]/g, (match) => {
    const emoji = emojiMap.get(match)
    
    /*
     * If emoji not found, return original text
     */
    if (!emoji) {
      return match
    }

    /*
     * Calculate background style
     */
    const style = calculateBackgroundStyle(emoji.position, emojiSize, bgScale)

    /*
     * Build inline style string
     */
    const styleString = Object.entries({
      ...style,
      backgroundImage: `url(${spriteUrl})`,
      backgroundRepeat: 'no-repeat',
      position: 'relative' as const
    }).map(([key, value]) => `${key.replace(/([A-Z])/g, '-$1').toLowerCase()}:${value}`).join(';')

    /*
     * Return HTML span element
     */
    return `<span class="wechat-emoji ${className}" style="${styleString}" title="${emoji.name}"></span>`
  })
}

/**
 * Get individual emoji CSS style object
 * @param emojiCode emoji code like '[微笑]'
 * @param options style options
 * @returns CSS style object
 */
export function getEmojiStyle(
  emojiCode: string,
  options: {
    emojiSize?: number
    bgScale?: number
    spriteUrl?: string
  } = {}
): React.CSSProperties | null {
  const {
    emojiSize = 24,
    bgScale = 1.3,
    spriteUrl = './assets/sprite.png'
  } = options

  const emoji = emojiMap.get(emojiCode)
  if (!emoji) {
    return null
  }

  const style = calculateBackgroundStyle(emoji.position, emojiSize, bgScale)

  return {
    ...style,
    backgroundImage: `url(${spriteUrl})`,
    backgroundRepeat: 'no-repeat',
    position: 'relative' as const
  }
}

/**
 * Extract plain text from HTML containing emoji elements
 * @param html HTML containing emoji elements
 * @returns plain text string
 */
export function extractTextFromHtml(html: string): string {
  /*
   * Replace emoji elements back to emoji codes
   */
  return html.replace(/<span[^>]*title="([^"]*)"[^>]*><\/span>/g, (match, title) => {
    const emoji = Array.from(emojiMap.values()).find(e => e.name === title)
    return emoji ? emoji.code : match
  })
}

