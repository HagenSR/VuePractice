import Vue from "vue"
import VueRouter from "vue-router"
import tasks from './components/tasks-example/tasks.vue'
import tabs from './components/tab-example/tabs.vue'
import modalHolder from "./components/modal/modal-holder.vue"
import visitor from "./components/visitors/visitor.vue"


Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/", component: visitor },
    { path: "/tasks", component: tasks },
    { path: '/tabs', component: tabs},
    { path: '/modal', component: modalHolder},
    { path: '/visitor', component: visitor}
  ]
});

export default router;