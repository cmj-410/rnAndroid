import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      "/chatApi": {
        target: "https://api.openai.com/v1/",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/chatApi/, ""),
      },
      "/baidutrans": {
        target: "https://fanyi-api.baidu.com/api/trans/vip/translate?",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/baidutrans/, ""),
      },
      "/theWeather": {
        target: "http://www.weather.com.cn/data/sk/",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/theWeather/, ""),
      },
      "/wea2": {
        target: "http://www.weather.com.cn/data/cityinfo/",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/wea2/, ""),
      },
      "/my": {
        target: "http://127.0.0.1:3000/",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/my/, ""),
      },
    },
  },
});
