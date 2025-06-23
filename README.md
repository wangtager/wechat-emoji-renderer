# 微信表情渲染器 (Wechat Emoji Renderer)

一个支持 React、Vue3 和原生 JavaScript 的微信表情渲染库，可以将文本中的表情代码（如 `[微笑]`）转换为对应的表情图标。

## ✨ 特性

- 🎯 **完整表情支持** - 包含 108 个完整的微信表情
- 🚀 **多框架支持** - React、Vue3、原生 JavaScript
- 📦 **按需加载** - 支持 `wechat-emoji-renderer/react` 或 `/vue` 按需导入
- 🎨 **自定义样式** - 支持自定义表情大小、缩放比例等
- 📱 **响应式** - 支持不同设备尺寸
- 🔄 **实时渲染** - 将 `[表情名]` 实时转换为表情图标
- 📋 **剪贴板支持**：内置复制到剪贴板功能
- 💪 **TypeScript**：完整的 TypeScript 类型支持

## 📦 安装

```bash
npm install wechat-emoji-renderer
# 或
yarn add wechat-emoji-renderer
# 或
pnpm add wechat-emoji-renderer
```

## 🚀 快速开始

### React 使用

```tsx
import React from 'react'
import { WechatEmojiRenderer, EmojiPicker } from 'wechat-emoji-renderer/react'

function App() {
  const [text, setText] = React.useState('你好[微笑]今天天气不错[太阳]')

  return (
    <div>
      {/* 渲染包含表情的文本 */}
      <WechatEmojiRenderer 
        text={text}
        emojiSize={24}
        spriteUrl="./sprite.png"
      />
      
      {/* 表情选择器 */}
      <EmojiPicker 
        onSelectEmoji={(emoji) => setText(text + emoji.code)}
        emojiSize={24}
        spriteUrl="./sprite.png"
      />
    </div>
  )
}
```

### Vue3 使用

```vue
<template>
  <div>
    <!-- 渲染包含表情的文本 -->
    <WechatEmojiRenderer 
      :text="text"
      :emoji-size="24"
      sprite-url="./sprite.png"
    />
    
    <!-- 表情选择器 -->
    <EmojiPicker 
      @emoji-click="onClickEmoji"
      :emoji-size="24"
      sprite-url="./sprite.png"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { WechatEmojiRenderer, EmojiPicker } from 'wechat-emoji-renderer/vue'

const text = ref('你好[微笑]今天天气不错[太阳]')

const onClickEmoji = (emoji) => {
  text.value += emoji.code
}
</script>
```

### 原生 JavaScript 使用

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        .wechat-emoji {
            background-image: url('./sprite.png');
            background-repeat: no-repeat;
            position: relative;
        }
    </style>
</head>
<body>
    <div id="output"></div>
    <div id="picker"></div>

    <script type="module">
        import { renderWechatEmoji, wechatEmojis, getEmojiStyle } from 'wechat-emoji-renderer'

        // 渲染文本
        const text = '你好[微笑]今天天气不错[太阳]'
        const rendered = renderWechatEmoji(text, {
            emojiSize: 24,
            spriteUrl: './sprite.png'
        })
        document.getElementById('output').innerHTML = rendered

        // 创建表情选择器
        const picker = document.getElementById('picker')
        wechatEmojis.forEach(emoji => {
            const button = document.createElement('button')
            const span = document.createElement('span')
            
            const style = getEmojiStyle(emoji.code, {
                emojiSize: 24,
                spriteUrl: './sprite.png'
            })
            Object.assign(span.style, style)
            
            button.appendChild(span)
            button.onclick = () => console.log(emoji.code)
            picker.appendChild(button)
        })
    </script>
</body>
</html>
```

## 🎨 API 文档

### WechatEmojiRenderer 组件

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| text | string | - | 包含表情代码的文本 |
| emojiSize | number | 24 | 表情显示大小（px） |
| bgScale | number | 1.3 | 背景图缩放比例 |
| spriteUrl | string | './assets/sprite.png' | 雪碧图路径 |
| className | string | '' | 自定义CSS类名 |
| style | object | {} | 自定义样式 |

### EmojiPicker 组件

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| onSelectEmoji (React) / @emoji-click (Vue) | function | - | 表情点击回调 |
| emojiSize | number | 24 | 表情显示大小（px） |
| bgScale | number | 1.3 | 背景图缩放比例 |
| spriteUrl | string | './assets/sprite.png' | 雪碧图路径 |
| className | string | '' | 自定义CSS类名 |
| style | object | {} | 自定义样式 |

### 核心函数

#### renderWechatEmoji(text, options)

将包含表情代码的文本渲染为HTML。

```javascript
const html = renderWechatEmoji('你好[微笑]', {
  emojiSize: 24,
  bgScale: 1.3,
  spriteUrl: './assets/sprite.png',
  className: 'my-emoji'
})
```

#### getEmojiStyle(emojiCode, options)

获取单个表情的CSS样式对象。

```javascript
const style = getEmojiStyle('[微笑]', {
  emojiSize: 24,
  spriteUrl: './assets/sprite.png'
})
```

## 📝 支持的表情

包含完整的 108 个微信表情：

**表情类**：微笑、撇嘴、色、发呆、得意、流泪、害羞、闭嘴、睡、大哭、尴尬、发怒、调皮、呲牙、惊讶、难过、冷汗、抓狂、吐、偷笑、愉快、白眼、傲慢、困、惊恐、憨笑、悠闲、咒骂、疑问、嘘、晕、衰、骷髅、敲打、再见、擦汗、抠鼻、鼓掌、坏笑、右哼哼、鄙视、快哭了、委屈、阴险、亲亲、可怜、笑脸、生病、脸红、破涕为笑、恐惧、失望、无语、嘿哈、捂脸、奸笑、机智、皱眉、耶、吃瓜、加油、汗、天啊、Emm、社会社会、旺柴、好的、打脸、哇、翻白眼、666、让我看看、叹气、苦涩、裂开

**手势类**：强、弱、握手、胜利、抱拳、勾引、拳头、OK、合十

**物品类**：嘴唇、爱心、心碎、拥抱、啤酒、咖啡、蛋糕、玫瑰、凋谢、菜刀、炸弹、便便、月亮、太阳、庆祝、礼物、红包、福、烟花、爆竹、猪头

**动作类**：跳跳、发抖、转圈

## 🎯 自定义样式

### CSS 变量

```css
.wechat-emoji {
  /* 自定义表情间距 */
  margin: 0 2px;
  
  /* 自定义垂直对齐 */
  vertical-align: middle;
  
  /* 自定义边框 */
  border-radius: 2px;
}
```

### 响应式设计

```css
/* 移动端适配 */
@media (max-width: 768px) {
  .wechat-emoji {
    width: 16px !important;
    height: 16px !important;
  }
}
```

## 📁 项目结构

```
wechat-emoji-renderer/
├── src/                    # 核心代码
│   ├── core/              # 核心渲染逻辑
│   │   ├── data.ts        # 表情数据
│   │   └── render.ts      # 渲染函数
│   ├── utils/             # 工具函数
│   └── index.ts           # 主入口
├── react/                 # React 组件
│   ├── WechatEmojiRenderer.tsx
│   ├── EmojiPicker.tsx
│   └── index.ts
├── vue/                   # Vue 组件
│   ├── WechatEmojiRenderer.vue
│   ├── EmojiPicker.vue
│   └── index.ts
├── examples/              # 示例代码
│   ├── native-js/         # 原生JS示例
│   ├── react-demo/        # React示例
│   └── vue-demo/          # Vue示例
└── dist/                  # 构建输出
```

## 🔧 开发

```bash
# 克隆项目
git clone <repository-url>
cd wechat-emoji-renderer

# 安装依赖
npm install

# 开发模式
npm run dev

# 构建
npm run build

# 类型检查
npm run type-check
```

## 📄 许可证

MIT License

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📞 支持

如有问题，请提交 Issue 或联系开发者。

---

**注意**: 本库仅用于技术学习和开发目的，表情图标版权归原作者所有。
