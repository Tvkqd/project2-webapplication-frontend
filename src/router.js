import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);
export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "list-view",
      component: () => import("./views/List-View")
    },
    {
      path: "/add",
      name: "add",
      component: () => import("./components/AddCourse")
    },
    {
      path: "/update",
      name: "update",
      component: () => import("./components/UpdateCourse")
    },
    {
      path: "/delete",
      name: "delete",
      component: () => import("./components/UpdateCourse")
    }
  ]
});