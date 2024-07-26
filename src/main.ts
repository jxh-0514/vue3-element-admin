/*
 * @Descripttion:
 * @version:
 * @Author: 杭
 * @Date: 2024-07-02 13:53:18
 * @LastEditors: 杭
 * @LastEditTime: 2024-07-02 16:57:07
 */
import { createApp } from "vue";
import App from "./App.vue";
import setupPlugins from "@/plugins";

// 本地SVG图标
import "virtual:svg-icons-register";

// 样式
import "element-plus/theme-chalk/dark/css-vars.css";
import "@/styles/index.scss";
import "uno.css";
import "animate.css";
import "leaflet/dist/leaflet.css";

const app = createApp(App);
app.use(setupPlugins);
app.mount("#app");
