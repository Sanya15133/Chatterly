<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'App',
  setup () {
    const router = useRouter()

    const isAuthenticated = computed(() => {
      return localStorage.getItem('token') || false
    })

    const logout = () => {
      localStorage.removeItem('token')
      localStorage.removeItem('name')
      sessionStorage.clear()
      location.reload()
      router.push('login')
    }

    return {
      isAuthenticated,
      logout
    }
  }
})
</script>

<template>
  <nav>
    <router-link to="/">Register</router-link>&nbsp;
    <router-link to="/login">Sign In</router-link>&nbsp;
    <router-link v-if="isAuthenticated" to="/chats">Chats</router-link>&nbsp;
    <router-link v-if="isAuthenticated" to="/chats/:name"></router-link>
    <router-link v-if="isAuthenticated" to="/contacts">Find Contacts</router-link> &nbsp;
    <router-link v-if="isAuthenticated" to="/portal/:name">Portal</router-link> &nbsp;
    <router-link v-if="isAuthenticated" to='/contacts/:name'></router-link>
    <router-link v-if="isAuthenticated" to="/all-contacts">All Contacts</router-link>&nbsp;
    <router-link v-if="isAuthenticated" to="/inbox">Inbox</router-link>&nbsp;
    <p class="logout" v-if="isAuthenticated" @click="logout">Logout</p>
  </nav>
  <router-view />
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Baskervville+SC&family=Ysabeau:ital,wght@0,1..1000;1,1..1000&display=swap');

#app {
  text-align: center;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  font-size: medium;
}

.logout {
  font-weight: bold;
  color: #dae4ee;
  font-size: medium;
}

nav a.router-link-exact-active {
  color: #e8c6f5;
}

body {
  background-color: rgb(120, 189, 189);
}

.form {
  background-color: rgb(241, 240, 231);
  border-radius: 5%;
  border: none
}

h1 {
  font-family: 'Ysabeau', fallback, sans-serif;
  font-size: xx-large;
  text-align: center;
}

button {
  background-color: rgb(204,188,175);
  border-radius: 2%;
  box-shadow: #111111;
}
</style>
