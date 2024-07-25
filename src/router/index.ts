import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import RegisterView from '../views/RegisterView.vue'
import FindContactsView from '../views/FindContactsView.vue'
import LoginView from '../views/LogInView.vue'
import PortalView from '../views/PortalView.vue'
import ContactProfileView from '../views/ContactProfileView.vue'
import ChatsView from '@/views/ChatsView.vue'
import ContactsList from '../views/ContactsList.vue'
import MessagesInbox from '@/views/MessagesInbox.vue'
import UserChats from '../views/UserChats.vue'

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
    path: '/portal/:name',
    name: 'PortalView',
    component: PortalView,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/contacts',
    name: 'ContactsList',
    component: FindContactsView,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/all-contacts',
    name: 'ContactList',
    component: ContactsList,
    props: true,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/contacts/:name',
    name: 'ContactView',
    component: ContactProfileView,
    props: true,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/chats',
    name: 'ChatsView',
    component: ChatsView,
    props: true,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/chats/:name',
    name: 'UserChats',
    component: UserChats,
    props: true,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/inbox',
    name: 'MessagesInbox',
    component: MessagesInbox,
    props: true,
    meta: {
      requiresAuth: true
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    const token = localStorage.getItem('token')
    if (token) {
      next()
    } else {
      next('/login')
    }
  } else {
    next()
  }
})

export default router
