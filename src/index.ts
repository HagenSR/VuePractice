import Vue from "vue";
import VueRouter from "vue-router";
import tasks from './components/tasks.vue';


Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/", component: tasks },
    { path: "/practice", component: tasks },
  ]
});

export default router;