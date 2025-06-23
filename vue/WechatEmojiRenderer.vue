<template>
  <div 
    :class="`wechat-emoji-container ${className}`"
    :style="{
      lineHeight: 1.4,
      wordBreak: 'break-word',
      ...style
    }"
    v-html="renderedHtml"
  />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { renderWechatEmoji } from '../src/core/render'

export interface WechatEmojiRendererProps {
  text: string
  emojiSize?: number
  bgScale?: number
  spriteUrl?: string
  className?: string
  style?: Record<string, any>
}

const props = withDefaults(defineProps<WechatEmojiRendererProps>(), {
  emojiSize: 24,
  bgScale: 1.3,
  spriteUrl: './sprite.png',
  className: '',
  style: () => ({})
})

/*
 * Calculate rendered HTML with emoji replacements
 */
const renderedHtml = computed(() => {
  return renderWechatEmoji(props.text, {
    emojiSize: props.emojiSize,
    bgScale: props.bgScale,
    spriteUrl: props.spriteUrl
  })
})
</script>

<style scoped>
.wechat-emoji-container {
  display: inline-block;
}

:deep(.wechat-emoji) {
  display: inline-block;
  vertical-align: middle;
  margin: 0 1px;
}
</style>
