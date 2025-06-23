import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    vue(),
    dts({
      insertTypesEntry: true,
      beforeWriteFile: (filePath, content) => {
        const newFilePath = filePath.replace(/wechat-emoji-renderer-vue\.es\.d\.ts$/, 'index.d.ts');
        return { filePath: newFilePath, content };
      },
    }),
  ],
  css: {
    postcss: {},
  },
  build: {
    outDir: "dist/vue",
    lib: {
      entry: path.resolve(__dirname, "index.ts"),
      name: "WechatEmojiRendererVue",
      fileName: (format) => `wechat-emoji-renderer-vue.${format}.js`,
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
        exports: "named",
      },
    },
  },
}); 