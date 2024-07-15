<template>
  <div class="container">
    <h1>My Account</h1>
    <p>{{ name }}</p>
    <img v-if="avatarUrl" :src="avatarUrl" alt="Profile Avatar">
  <div class="form">
    <h2>View</h2>
    <p>Click on the button below to view contacts</p>
    <button @click="$router.push('contacts')">Contacts</button>
    <p>Click on the button below to view messages</p>
    <button @click="$router.push('chats')">Messages</button>
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
  props: {
    name: String
  },
  computed: {
    avatarUrl (): string | undefined {
      return this.$route.query.avatar as string | undefined
    }
  }
})

</script>
