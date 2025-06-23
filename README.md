# 微信表情渲染器 (Wechat Emoji Renderer)

[![npm version](https://img.shields.io/npm/v/wechat-emoji-renderer.svg)](https://www.npmjs.com/package/wechat-emoji-renderer)

一个支持 React、Vue3 和原生 JavaScript 的微信表情渲染库，可以将文本中的表情代码（如 `[微笑]`）转换为对应的表情图标。

## ✨ 特性

- 🎯 **完整表情支持** - 包含 108 个完整的微信表情
- 🚀 **多框架支持** - 为 React、Vue3 和原生 JavaScript 提供统一的解决方案
- 📦 **按需加载** - 支持通过 `wechat-emoji-renderer/react` 或 `wechat-emoji-renderer/vue` 按需导入，优化打包体积
- 🎨 **高度可定制** - 支持自定义表情大小、雪碧图路径等
- 📱 **响应式** - 轻松适配不同设备尺寸
- 🔄 **实时渲染** - 将包含 `[表情名]` 的文本实时转换为行内表情图标
- 📋 **表情选择器** - 内置 React 和 Vue 的 `EmojiPicker` 组件，方便用户选择表情
- 💪 **TypeScript** - 使用 TypeScript 构建，提供完整的类型定义

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
import React, { useState } from 'react';
import { WechatEmojiRenderer, EmojiPicker } from 'wechat-emoji-renderer/react';
import 'wechat-emoji-renderer/dist/vue/style.css'; // 引入样式

function App() {
  const [text, setText] = useState('你好[微笑]，今天天气不错[太阳]');

  return (
    <div>
      {/* 渲染包含表情的文本 */}
      <WechatEmojiRenderer 
        text={text}
        emojiSize={24}
      />
      
      {/* 表情选择器 */}
      <EmojiPicker 
        onSelectEmoji={(emoji) => setText(prev => prev + emoji.code)}
      />
    </div>
  );
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
    />
    
    <!-- 表情选择器 -->
    <EmojiPicker 
      @emoji-click="onClickEmoji"
      :emoji-size="24"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { WechatEmojiRenderer, EmojiPicker } from 'wechat-emoji-renderer/vue';
import 'wechat-emoji-renderer/dist/vue/style.css'; // 引入样式

const text = ref('你好[微笑]，今天天气不错[太阳]');

const onClickEmoji = (emoji) => {
  text.value += emoji.code;
};
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
            /* 更多样式... */
        }
    </style>
</head>
<body>
    <div id="output"></div>
    <div id="picker"></div>

    <script type="module">
        import { renderWechatEmoji, wechatEmojiList, getEmojiStyle } from 'wechat-emoji-renderer';

        // 渲染文本
        const text = '你好[微笑]，今天天气不错[太阳]';
        const rendered = renderWechatEmoji(text, { spriteUrl: './sprite.png' });
        document.getElementById('output').innerHTML = rendered;

        // 创建表情选择器
        const picker = document.getElementById('picker');
        wechatEmojiList.forEach(emoji => {
            const button = document.createElement('button');
            const span = document.createElement('span');
            
            Object.assign(span.style, getEmojiStyle(emoji.code, { spriteUrl: './sprite.png' }));
            
            button.appendChild(span);
            button.onclick = () => console.log(emoji.code);
            picker.appendChild(button);
        });
    </script>
</body>
</html>
```

## 📖 运行示例

在开始之前，请先在项目根目录安装依赖并构建项目：

```bash
npm install
npm run build
```

### 原生 JavaScript 示例

使用任何可以提供静态文件服务的工具。例如，使用 `live-server`：

```bash
npx live-server examples/native-js
```
然后在浏览器中打开对应的地址 (通常是 `http://localhost:8080`)。

### React 示例

```bash
cd examples/react-demo
npm install
npm run dev
```
应用将会在 `http://localhost:3000` 上运行。

### Vue 示例

```bash
cd examples/vue-demo
npm install
npm run dev
```
应用将会在 `http://localhost:5173` 上运行。

## 🎨 API 文档

### `WechatEmojiRenderer` 组件 (React & Vue)

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| text | `string` | - | 包含表情代码的文本 |
| emojiSize | `number` | `24` | 表情显示大小（px） |
| bgScale | `number` | `1.3` | 背景图缩放比例，用于高分屏适配 |
| spriteUrl | `string` | (内置) | 雪碧图路径 |
| className | `string` | `''` | 自定义CSS类名 |
| style | `object` | `{}` | 自定义内联样式 |

### `EmojiPicker` 组件 (React & Vue)

| 属性/事件 | 类型 | 说明 |
|------|------|--------|
| `onSelectEmoji` (React) | `(emoji) => void` | 表情点击回调，`emoji` 为 `{ name: string; code: string }` |
| `@emoji-click` (Vue) | `(emoji)` | 表情点击事件，`emoji` 为 `{ name: string; code: string }` |
| `emojiSize` | `number` | 表情显示大小（px），默认为 `24` |
| `spriteUrl` | `string` | 雪碧图路径，默认为内置路径 |
| `className` | `string` | 自定义CSS类名 |
| `style` | `object` | 自定义内联样式 |

### 核心函数

#### `renderWechatEmoji(text, options)`

将包含表情代码的文本渲染为HTML字符串。

```javascript
const html = renderWechatEmoji('你好[微笑]', {
  emojiSize: 24,
  spriteUrl: './assets/sprite.png',
  className: 'my-emoji'
});
```

#### `getEmojiStyle(emojiCode, options)`

获取单个表情的CSS样式对象。

```javascript
const style = getEmojiStyle('[微笑]', {
  emojiSize: 24,
  spriteUrl: './assets/sprite.png'
});
```

## 📝 支持的表情

包含完整的 108 个微信表情，例如：`[微笑]`, `[撇嘴]`, `[色]`, `[发呆]`, `[得意]`, `[流泪]`, `[害羞]`, `[闭嘴]`, `[睡]`, `[大哭]`, `[旺柴]`, `[666]` 等。

## 🔧 本地开发

```bash
# 克隆项目
git clone <repository-url>
cd wechat-emoji-renderer

# 安装依赖
npm install

# 监视模式，实时构建
npm run dev

# 完整构建
npm run build

# 类型检查
npm run type-check
```

## 📄 许可证

[MIT](LICENSE)

---

**注意**: 本库仅用于技术学习和开发目的，表情图标版权归属原作者。
