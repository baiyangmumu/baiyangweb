import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueSetupEstend from 'vite-plugin-vue-setup-extend-plus';


// https://vitejs.dev/config/
export default defineConfig({
  //base: "baiyang",
  //开发环境端口号有效,
  server: {
    port: 80,//端口
    open: false,//启动项目自动打开浏览器
    host: '0.0.0.0' //0.0.0.0开放所以ip可以访问,locahost只能本机访问 
  },
  plugins: [
    
    vue(),
    vueSetupEstend(),// 使用<script setup lang="ts"  name="XXXX">上的name作为缓存
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
