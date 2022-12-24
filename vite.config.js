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
      "/my": {
        target: "http://127.0.0.1:3000/",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/my/, ""),
      },
    },
  },
});
