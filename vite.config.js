import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      // input: {
      //   main: './src/main.js',
      //   // background: './src/background/index.js',
      //   // content: './src/content/index.js',
      // },
      // 多文件打包配置
      input: {
        background: './src/background/index.js',
        content: './src/content/index.js',
        index: './index.html',
      },
      // html也需要打包

      output: {
        entryFileNames: '[name].js',
        chunkFileNames: '[name].js',
        assetFileNames: '[ext]/[name].[ext]',
      },
    },
  },
});
