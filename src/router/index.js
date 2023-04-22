import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Public',
    component: () => import('@/view/public/index.vue'),
    children: [
      {
        path: '/',
        name: 'Index',
        component: () => import('@/view/public/Index-list.vue')
      },
      {
        path: '/detail',
        name: 'Detail',
        component: () => import('@/view/public/detail.vue')
      },
      {
        path: '/Collections',
        name: 'Collections',
        component: () => import('@/view/public/components/collectionsList.vue')
      },
      {
        path: '/person',
        name: 'Person',
        component: () => import('@/view/person/person.vue')
      },
      {
        path: '/safe',
        name: 'Safe',
        component: () => import('@/view/person/safe.vue')
      },
    ]
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
