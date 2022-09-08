import { createRouter, createWebHashHistory } from "vue-router";
import List from '@/views/class-list.vue';
import Edit from '@/views/class-edit.vue';
import Delete from '@/views/class-delete.vue';
import Add from '@/views/class-add.vue';

const routes = [
  {
    path: '/',
    name: 'list',
    component: List
  },
  {
    path: '/edit/:id',
    name: 'edit',
    component: Edit,
    props: true
    },
  {
    path: '/add',
    name: 'add',
    component: Add
  },
  {
    path: '/delete/:id',
    name: 'delete',
    component: Delete,
    props: true
  }

];



const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
