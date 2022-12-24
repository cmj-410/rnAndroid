import { createRouter, createWebHashHistory } from "vue-router";
import Layout from "../views/Layout.vue";

const routes = [
  {
    path: "/",
    name: "home",
    redirect: "/home",
    component: Layout,
    children: [
      {
        path: "/home",
        component: () =>
          import(/* webpackChunkName: "homePage" */ "../views/Home.vue"),
      },
      {
        path: "/chat",
        component: () =>
          import(/* webpackChunkName: "chatPage" */ "../views/Chat.vue"),
      },
      {
        path: "/speakHome",
        component: () =>
          import(/* webpackChunkName: "speakHome" */ "../views/speakHome.vue"),
      },
      {
        path: "/personal",
        component: () =>
          import(
            /* webpackChunkName: "personal" */ "../views/PersonalInfo.vue"
          ),
      },
    ],
  },
  {
    path: "/*",
    redirect: "/home",
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});

export default router;
