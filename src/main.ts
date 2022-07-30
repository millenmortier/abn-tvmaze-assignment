import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';

import OverviewPageVue from './pages/OverviewPage.vue';
import TvShowDetailPage from './pages/TvShowDetailPage.vue';
import SearchPage from './pages/SearchPage.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: OverviewPageVue,
    },
    {
      path: '/detail',
      component: TvShowDetailPage,
    },
    {
      path: '/search',
      component: SearchPage,
    },
  ],
});

createApp(App).use(router).mount('#app');
