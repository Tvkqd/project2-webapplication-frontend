import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);
export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      alias: "/landing",
      name: "landing",
      component: () => import("./views/Landing")
    },
    /*{
      path: "/tutorials/:id",
      name: "tutorial-details",
      component: () => import("./views/Tutorial")
    },
    {
      path: "/add",
      name: "add",
      component: () => import("./views/AddTutorial")
    }*/
  ]
});

