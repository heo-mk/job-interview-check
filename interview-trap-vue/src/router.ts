import {createRouter, createWebHistory} from 'vue-router'
import HomePage from './pages/HomePage.vue'
import CategoryPage from './pages/CategoryPage.vue'
import QuestionDetailPage from './pages/QuestionDetailPage.vue'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {path: '/', component: HomePage},
    {path: '/questions/:categorySlug', component: CategoryPage},
    {path: '/questions/:categorySlug/:slug', component: QuestionDetailPage},
  ],
})
