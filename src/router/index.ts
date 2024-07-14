import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import RegisterView from '../views/RegisterView.vue'
import FindContactsView from '../views/FindContactsView.vue'
import LoginView from '../views/LogInView.vue'
import PortalView from '../views/PortalView.vue'
import ContactProfileView from '../views/ContactProfileView.vue'
import ErrorComponent from '@/components/ErrorComponent.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'RegisterForm',
    component: RegisterView
  },
  {
    path: '/portal',
    name: 'PortalView',
    component: PortalView
  },
  {
    path: '/login',
    name: 'LoginForm',
    component: LoginView
  },
  {
    path: '/contacts',
    name: 'ContactsList',
    component: FindContactsView
  },
  {
    path: '/contacts/:name',
    name: 'ContactView',
    component: ContactProfileView
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
