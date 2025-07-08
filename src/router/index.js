import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/Home.vue'
import WorkExperienceBlog from '@/views/WorkExperience.vue'

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage,
  },
  {
    path: '/work-experience',
    name: 'WorkExperienceBlog',
    component: WorkExperienceBlog,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router 