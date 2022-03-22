import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "MainView" */ '../views/MainView.vue'),
  },
  {
    path: '/:id',
    name: 'modal',
    component: () => import(/* webpackChunkName: "MainView" */ '../views/MainView.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'notfound',
    component: () => import(/* webpackChunkName: "NotFound" */ '../views/NotFound.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

/*
router.beforeEach((to, from) => {
  console.log('beforeEach');
  console.log('to', to);
  console.log('to.name', to.name);

  return (to.name === 'modal') ? { name: 'modal' } : { name: 'notfound' };
});
*/

export default router;
