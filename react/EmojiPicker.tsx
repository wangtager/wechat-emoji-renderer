import React, { useEffect } from 'react'
import { wechatEmojis, type WechatEmoji } from '../src/core/data'
import { getEmojiStyle } from '../src/core/render'

export interface EmojiPickerProps {
  onSelectEmoji?: (emoji: WechatEmoji) => void
  emojiSize?: number
  bgScale?: number
  spriteUrl?: string
  className?: string
  style?: React.CSSProperties
}

/**
 * WeChat Emoji Picker Component
 * Displays all available WeChat emojis for user selection
 */
export const EmojiPicker: React.FC<EmojiPickerProps> = ({
  onSelectEmoji,
  emojiSize = 24,
  bgScale = 1.3,
  spriteUrl = './sprite.png',
  className = '',
  style = {}
}) => {
  const onClickEmoji = (emoji: WechatEmoji) => {
    onSelectEmoji?.(emoji)
  }

  useEffect(() => {
    /*
     * Inject scrollbar styles for emoji picker
     */
    const styleId = 'wechat-emoji-picker-scrollbar-styles'
    if (!document.getElementById(styleId)) {
      const styleElement = document.createElement('style')
      styleElement.id = styleId
      styleElement.textContent = `
        .wechat-emoji-picker {
          scrollbar-width: thin;
          scrollbar-color: #c1c1c1 #f1f1f1;
        }
        .wechat-emoji-picker::-webkit-scrollbar {
          width: 6px;
        }
        .wechat-emoji-picker::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 3px;
        }
        .wechat-emoji-picker::-webkit-scrollbar-thumb {
          background: #c1c1c1;
          border-radius: 3px;
        }
        .wechat-emoji-picker::-webkit-scrollbar-thumb:hover {
          background: #a1a1a1;
        }
      `
      document.head.appendChild(styleElement)
    }
  }, [])

  return (
    <div
      className={`wechat-emoji-picker ${className}`}
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(9, 1fr)',
        gap: '4px',
        padding: '16px',
        backgroundColor: '#fff',
        border: '1px solid #e0e0e0',
        borderRadius: '8px',
        width: '100%',
        maxWidth: '800px',
        maxHeight: '280px',
        overflowY: 'auto' as const,
        boxSizing: 'border-box' as const,
        ...style
      }}
    >
      {wechatEmojis.map(emoji => {
        const emojiStyle = getEmojiStyle(emoji.code, {
          emojiSize,
          bgScale,
          spriteUrl
        })

        if (!emojiStyle) {
          return null
        }

        return (
          <button
            key={emoji.code}
            className="emoji-item"
            style={{
              border: 'none',
              background: 'transparent',
              padding: '4px',
              cursor: 'pointer',
              borderRadius: '4px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'background-color 0.2s',
              minWidth: `${emojiSize + 8}px`,
              minHeight: `${emojiSize + 8}px`,
            }}
            onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = '#f5f5f5'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.backgroundColor = 'transparent'
            }}
            onClick={() => onClickEmoji(emoji)}
            title={emoji.name}
          >
            <span style={emojiStyle}></span>
          </button>
        )
      })}
    </div>
  )
}

export default EmojiPicker
