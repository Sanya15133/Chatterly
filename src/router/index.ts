import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import RegisterView from '../views/RegisterView.vue'
import ContactsView from '../views/ContactsView.vue'
import LoginView from '../views/LogInView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'RegisterForm',
    component: RegisterView
  },
  {
    path: '/login',
    name: 'LoginForm',
    component: LoginView
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
