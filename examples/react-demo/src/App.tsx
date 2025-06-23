import React, { useState } from 'react'
import {
  WechatEmojiRenderer,
  EmojiPicker,
  type WechatEmoji,
  copyToClipboard
} from 'wechat-emoji-renderer/react'
import './App.css'

/*
 * Main application component
 */
function App() {
  const [inputText, setInputText] = useState(
    '你好[微笑]，今天天气不错[太阳]！我很开心[愉快]'
  )
  const [emojiSize, setEmojiSize] = useState(24)
  const [bgScale, setBgScale] = useState(1.3)
  const [copyFeedback, setCopyFeedback] = useState('')

  const handleEmojiSelect = async (emoji: WechatEmoji) => {
    setInputText(prev => prev + emoji.code)

    try {
      await copyToClipboard(emoji.code)
      setCopyFeedback(`已复制 ${emoji.code}`)
      setTimeout(() => setCopyFeedback(''), 2000)
    } catch (err) {
      setCopyFeedback('复制失败')
      setTimeout(() => setCopyFeedback(''), 2000)
    }
  }

  return (
    <div className="app">
      <div className="container">
        <h1>🎉 微信表情渲染器 - React 示例</h1>

        <div className="main-layout">
          <div className="left-panel">
            <div className="input-section">
              <div className="section-title">📝 文本输入</div>
              <div className="input-area">
                <textarea
                  value={inputText}
                  onChange={e => setInputText(e.target.value)}
                  placeholder="请输入包含微信表情的文本，例如：你好[微笑]，今天天气不错[太阳]"
                />
              </div>
            </div>

            <div className="emoji-picker-section">
              <div className="section-title">😊 表情选择器</div>
              <p className="emoji-picker-description">
                点击表情可以插入到文本中并复制：
              </p>
              <EmojiPicker
                onSelectEmoji={handleEmojiSelect}
                emojiSize={24}
                bgScale={bgScale}
                spriteUrl="./sprite.png"
              />
            </div>

            <div className="controls-section">
              <div className="section-title">🔧 自定义选项</div>
              <div className="control-group">
                <span className="control-label">表情大小:</span>
                <input
                  className="control-slider"
                  type="range"
                  min="16"
                  max="32"
                  value={emojiSize}
                  onChange={e => setEmojiSize(Number(e.target.value))}
                />
                <span className="control-value">{emojiSize}px</span>
              </div>
              <div className="control-group">
                <span className="control-label">缩放比例:</span>
                <input
                  className="control-slider"
                  type="range"
                  min="1"
                  max="2"
                  step="0.1"
                  value={bgScale}
                  onChange={e => setBgScale(Number(e.target.value))}
                />
                <span className="control-value">{bgScale}</span>
              </div>
            </div>
          </div>

          <div className="right-panel">
            <div className="section-title">🖼️ 预览效果</div>
            <div className="preview-content">
              <WechatEmojiRenderer
                text={inputText}
                emojiSize={emojiSize}
                bgScale={bgScale}
                spriteUrl="./sprite.png"
              />
            </div>
          </div>
        </div>

        {copyFeedback && <div className="copy-feedback">{copyFeedback}</div>}
      </div>
    </div>
  )
}

export default App
