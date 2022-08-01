import { createApp } from 'vue';
import './style.css';
import './typography.css';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';

import GenreOverviewPageVue from './pages/GenreOverviewPage.vue';
import TvShowDetailPage from './pages/TvShowDetailPage.vue';
import SearchPage from './pages/SearchPage.vue';
import ShowsByRatingPageVue from './pages/ShowsByRatingPage.vue';
import FavoritesPage from './pages/FavoritesPage.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: GenreOverviewPageVue,
    },
    {
      path: '/by-rating',
      component: ShowsByRatingPageVue,
    },
    {
      path: '/favorites',
      component: FavoritesPage,
    },
    {
      path: '/detail/:id(\\d+)',
      component: TvShowDetailPage,
    },
    {
      path: '/search',
      component: SearchPage,
    },
  ],
});

createApp(App).use(router).mount('#app');
