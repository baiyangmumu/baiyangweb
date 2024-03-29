/// <reference types="vite/client" />
//解决main.ts文件有红线报错问题
declare module '*.vue' {
    import type { DefineComponent } from "vue";
    const component: DefineComponent<{},{},any>
    export default component
    
}
//声明element-plus 汉化,不然main.ts 里面的报错
declare module 'element-plus/dist/locale/zh-cn.mjs';

 //baseURL: 'http://127.0.0.1:8080/',
//环境变量智能提示
interface ImportMetaEnv {
    [x: string]: string | undefined;
    readonly VITE_API_URL: string
    // 更多环境变量...
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }