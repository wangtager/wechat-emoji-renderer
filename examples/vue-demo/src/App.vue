<template>
  <div class="demo-container">
    <h1>Wechat Emoji Renderer - Vue Demo</h1>

    <div class="renderer-section">
      <h2>Rendered Text</h2>
      <div class="rendered-text-box">
        <WechatEmojiRenderer :text="rawText" />
      </div>
    </div>

    <div class="input-section">
      <h2>Input</h2>
      <textarea v-model="rawText" rows="5" class="raw-text-input"></textarea>
      <div class="emoji-picker-container">
        <button @click="toggleEmojiPicker" class="toggle-button">
          {{ showEmojiPicker ? 'Close' : 'Open' }} Emoji Picker
        </button>
        <div v-if="showEmojiPicker" class="picker-wrapper">
          <EmojiPicker @emoji-click="onEmojiClick" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { WechatEmojiRenderer, EmojiPicker } from 'wechat-emoji-renderer/vue';

const rawText = ref('Hello, [微笑]! This is a test of Wechat Emoji Renderer [强]. How are you doing today? [呲牙]');
const showEmojiPicker = ref(false);

const toggleEmojiPicker = () => {
  showEmojiPicker.value = !showEmojiPicker.value;
};

const onEmojiClick = (emoji: { code: string }) => {
  rawText.value += emoji.code;
};
</script>

<style scoped>
.demo-container {
  max-width: 800px;
  margin: 40px auto;
  padding: 20px;
  border-radius: 8px;
  background-color: #2f2f2f;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  color: #f0f0f0;
}

h1, h2 {
  border-bottom: 2px solid #444;
  padding-bottom: 10px;
  margin-bottom: 20px;
}

.renderer-section, .input-section {
  margin-bottom: 30px;
}

.rendered-text-box {
  padding: 20px;
  border: 1px solid #444;
  border-radius: 4px;
  background-color: #242424;
  min-height: 60px;
  text-align: left;
  line-height: 1.8;
  font-size: 1.2em;
}

.raw-text-input {
  width: 100%;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #444;
  background-color: #3a3a3a;
  color: #f0f0f0;
  font-family: inherit;
  font-size: 1em;
  margin-bottom: 20px;
  box-sizing: border-box;
}

.emoji-picker-container {
  position: relative;
}

.toggle-button {
  padding: 10px 20px;
  border-radius: 4px;
  border: none;
  background-color: #007aff;
  color: white;
  font-size: 1em;
  cursor: pointer;
  transition: background-color 0.2s;
}

.toggle-button:hover {
  background-color: #0056b3;
}

.picker-wrapper {
  position: absolute;
  bottom: 100%;
  left: 0;
  margin-bottom: 10px;
  z-index: 10;
}
</style> 