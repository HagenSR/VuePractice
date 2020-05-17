import Vue from "vue";
import VueRouter from "vue-router";
import practice from './components/practice.vue';


Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/", component: practice },
    { path: "/practice", component: practice },
  ]
});

export default router;