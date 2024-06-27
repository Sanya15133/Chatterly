import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactsView from '../views/ContactsView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'RegisterForm',
    component: HomeView
  },
  {
    path: '/contacts',
    name: 'ContactsList',
    component: ContactsView
  },
  {
    path: '/chats',
    name: 'chats',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ChatsView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
