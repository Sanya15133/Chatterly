<template>
  <div class="container">
    <h1>My Account</h1>
    <p v-if="user">Hello {{ user }}</p>
    <img v-if="avatar" :src="avatar" alt="Profile Avatar">
  <div class="form">
    <h2>View</h2>
    <p>Click on the button below to find contacts</p>
    <button @click="$router.push('/contacts')">Contacts</button>
    <br>
    <p>Click on the button below to find messages</p>
    <button @click="$router.push('/inbox')">Messages</button>
  </div>
  </div>
</template>

<style>
.container {
  display: inline-block;
  justify-content: center;
  align-items: center;
  text-align: left;
  width: 300px;
  height: 80%;
  padding: 3%;
  background-color: rgb(241, 240, 231);
  border-radius: 5%;
}

.form {
  justify-content: center;
  display: inline-block;
  align-items: center;
}
</style>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PortalView',
  data () {
    return {
      user: ''
    }
  },
  mounted () {
    this.user = localStorage.getItem('name') as string
    if (!sessionStorage.getItem('reloaded')) {
      sessionStorage.setItem('reloaded', 'true')
      location.reload()
    }
  },
  computed: {
    avatar (): string | undefined {
      return this.$route.query.avatar as string | undefined
    },
    name (): string | undefined {
      return this.$route.params.name as string | undefined
    }
  }
})

</script>
