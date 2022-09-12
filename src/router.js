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
      path: "/about",
      name: "about",
      component: () => import("./views/About-App")
    },
    {
      path: "/hello",
      name: "hello",
      component: () => import("./components/HelloWorld")
    },
    {
      path: "/add",
      name: "add",
      component: () => import("./components/AddCourse")
    }
  ]
});