import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import VueRouter from "vue-router";
import home from "./components/home";
import about from "./components/about";
import video from "./components/video";

Vue.use(VueRouter);

Vue.config.productionTip = false;

const routes = [
  { path: "/", component: home },
  { path: "/about", component: about },
  { path: "/video", component: video },
];

const router = new VueRouter({
  routes: routes, // short for `routes: routes`
  mode: "history",
});

new Vue({
  vuetify,
  router,
  render: (h) => h(App),
}).$mount("#app");
