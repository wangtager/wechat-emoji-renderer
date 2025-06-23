<template>
  <div 
    :class="`wechat-emoji-picker ${className}`"
    :style="containerStyle"
  >
    <button
      v-for="emoji in wechatEmojiList"
      :key="emoji.code"
      class="emoji-item"
      :style="getButtonStyle()"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
      @click="onClickEmoji(emoji)"
      :title="emoji.name"
    >
      <span :style="getEmojiStyleForEmoji(emoji.code)"></span>
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { wechatEmojiList } from '../src/core/data'
import { getEmojiStyle } from '../src/core/render'

export interface EmojiPickerProps {
  emojiSize?: number
  bgScale?: number
  spriteUrl?: string
  className?: string
  style?: Record<string, any>
}

const props = withDefaults(defineProps<EmojiPickerProps>(), {
  emojiSize: 24,
  bgScale: 1.3,
  spriteUrl: './sprite.png',
  className: '',
  style: () => ({})
})

const emit = defineEmits<{
  emojiClick: [emoji: { name: string; code: string }]
}>()

const containerStyle = computed(() => ({
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
  overflowY: 'auto',
  boxSizing: 'border-box',
  ...props.style
} as Record<string, any>))

const getButtonStyle = () => ({
  border: 'none',
  background: 'transparent',
  padding: '4px',
  cursor: 'pointer',
  borderRadius: '4px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'background-color 0.2s',
  minWidth: `${props.emojiSize + 8}px`,
  minHeight: `${props.emojiSize + 8}px`,
})

const onClickEmoji = (emoji: { name: string; code: string }) => {
  emit('emojiClick', emoji)
}

const handleMouseEnter = (e: Event) => {
  const target = e.currentTarget as HTMLElement
  target.style.backgroundColor = '#f5f5f5'
}

const handleMouseLeave = (e: Event) => {
  const target = e.currentTarget as HTMLElement
  target.style.backgroundColor = 'transparent'
}

const getEmojiStyleForEmoji = (emojiCode: string) => {
  return getEmojiStyle(emojiCode, {
    emojiSize: props.emojiSize,
    bgScale: props.bgScale,
    spriteUrl: props.spriteUrl
  })
}
</script>

<style scoped>
.wechat-emoji-picker {
  position: relative;
  background: white;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
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

.emoji-item {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.emoji-item:hover {
  background-color: #f5f5f5;
}

.emoji-item:active {
  background-color: #e0e0e0;
}

.wechat-emoji {
  display: inline-block;
  background-repeat: no-repeat;
  vertical-align: middle;
}

.copy-feedback {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 14px;
  pointer-events: none;
  z-index: 10;
}
</style>
