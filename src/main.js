import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import vuetify from "./plugins/vuetify";
import home from "./components/home";
import about from "./components/about";
import video from "./components/video";

Vue.config.productionTip = false;
Vue.use(VueRouter);
const routes = [
  { path: "/", components: home },
  { path: "/about", components: about },
  { path: "/video", components: video },
];
const router = new VueRouter({
  routes: routes,
  mode: "history",
});

new Vue({
  vuetify,
  router,
  render: (h) => h(App),
}).$mount("#app");
