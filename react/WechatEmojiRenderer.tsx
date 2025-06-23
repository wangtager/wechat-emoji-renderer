import React, { useEffect } from 'react'
import { renderWechatEmoji } from '../src/core/render'

export interface WechatEmojiRendererProps {
  text: string
  emojiSize?: number
  bgScale?: number
  spriteUrl?: string
  className?: string
  style?: React.CSSProperties
}

/**
 * WeChat Emoji Renderer Component
 * Renders text with emoji codes to display actual emoji icons
 */
export const WechatEmojiRenderer: React.FC<WechatEmojiRendererProps> = ({
  text,
  emojiSize = 24,
  bgScale = 1.3,
  spriteUrl = './sprite.png',
  className = '',
  style = {}
}) => {
  const renderedHtml = renderWechatEmoji(text, {
    emojiSize,
    bgScale,
    spriteUrl,
    className
  })

  useEffect(() => {
    /*
     * Inject base styles for emoji rendering
     */
    const styleId = 'wechat-emoji-styles'
    if (!document.getElementById(styleId)) {
      const styleElement = document.createElement('style')
      styleElement.id = styleId
      styleElement.textContent = `
        .wechat-emoji {
          display: inline-block;
          vertical-align: middle;
          margin: 0 1px;
        }
      `
      document.head.appendChild(styleElement)
    }
  }, [])

  /*
   * Inline styles (can be overridden by CSS file)
   */
  const containerStyle: React.CSSProperties = {
    lineHeight: 1.4,
    wordBreak: 'break-word',
    ...style
  }

  return (
    <div 
      className={`wechat-emoji-container ${className}`}
      style={containerStyle}
      dangerouslySetInnerHTML={{ __html: renderedHtml }}
    />
  )
}

/*
 * Inject styles to page on component mount
 */
if (typeof document !== 'undefined') {
  const injectStyles = () => {
    const styleId = 'wechat-emoji-base-styles'
    if (!document.getElementById(styleId)) {
      const style = document.createElement('style')
      style.id = styleId
      style.textContent = `
        .wechat-emoji {
          display: inline-block;
          vertical-align: middle;
          margin: 0 1px;
        }
      `
      document.head.appendChild(style)
    }
  }
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectStyles)
  } else {
    injectStyles()
  }
}

export default WechatEmojiRenderer
