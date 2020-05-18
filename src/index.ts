import Vue from "vue";
import VueRouter from "vue-router";
import tasks from './components/tasks-example/tasks.vue';
import tabs from './components/tab-example/tabs.vue'


Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/", component: tabs },
    { path: "/tasks", component: tasks },
    { path: '/tabs', component: tabs}
  ]
});

export default router;