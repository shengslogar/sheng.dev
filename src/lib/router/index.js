import Vue from 'vue'
import VueRouter from 'vue-router'
import RouteNames from './names';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      name: RouteNames.Landing.Index,
      path: '/',
      component: () => import('../../views/landing/LandingIndex'),
    },
  ],
});
