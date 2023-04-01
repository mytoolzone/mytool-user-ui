import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [{
  path: '/login',
  redirect: '/login'
},
{
  path: '/',
  name: 'Public',
  component: () => import('@/view/public/index.vue')
},
{
  path: '/init',
  name: 'Init',
  component: () => import('@/view/init/index.vue')
},
{
  path: '/login',
  name: 'Login',
  component: () => import('@/view/login/index.vue')
}
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
