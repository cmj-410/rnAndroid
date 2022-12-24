import { createApp } from "vue";
import router from "./routers";
import "normalize.css";
import "./styles/index.scss";
import App from "./App.vue";

createApp(App).use(router).mount("#app");
