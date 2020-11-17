import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import Dashboard from "./views/Dashboard.vue";
import Forms from "./views/Forms.vue";
import Tables from "./views/Tables.vue";
import UIElements from "./views/UIElements.vue";
import Login from "./views/Login.vue";
import Modal from "./views/Modal.vue";
import Card from "./views/Card.vue";
import Blank from "./views/Blank.vue";
import Templates from "./views/Templates.vue";
import VideoList from "./views/VideoList.vue";
import VideoManager from "./views/VideoManager.vue";
import ChatMenu from "./views/ChatMenu.vue";
import NotFound from "./views/NotFound.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Login",
    component: Login,
    meta: { layout: "empty" },
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/forms",
    name: "Forms",
    component: Forms, 
  },
  {
    path: "/card",
    name: "Card",
    component: Card,
  },
  {
    path: "/tables",
    name: "Tables",
    component: Tables,
  },
  {
    path: "/ui-elements",
    name: "UIElements",
    component: UIElements,
  },
  {
    path: "/modal",
    name: "Modal",
    component: Modal,
  },
  {
    path: "/blank",
    name: "Blank",
    component: Blank,
  },
  {
    path: "/templates",
    name: "Templates",
    component: Templates,
  },
  {
    path: "/videolist",
    name: "VideoList",
    component: VideoList,
  },
  {
    path: "/videomanager",
    name: "VideoManager",
    component: VideoManager,
  },
  {
    path: "/chatmenu",
    name: "ChatMenu",
    component: ChatMenu,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
