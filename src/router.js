import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '@/views/HomeView.vue';
import CompanyDetails from '@/views/CompanyDetails.vue';

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView,
  },
  {
    path: '/company/:id',
    name: 'CompanyDetails',
    component: CompanyDetails,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;