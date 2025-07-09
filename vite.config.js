import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  build: {
    outDir: './packages/im-tab/dist',
    rollupOptions: {
      input: {
        main: './src/main.js',
        background: './src/background/index.js',
        content: './src/content/index.js',
      },
      output: {
        entryFileNames: '[name].js',
        chunkFileNames: '[name].js', // 添加这个配置项来指定 chunk 文件名
        assetFileNames: '[ext]/[name].[ext]', // 添加这个配置项来指定静态资源文件名
      },
    },
  },
});
