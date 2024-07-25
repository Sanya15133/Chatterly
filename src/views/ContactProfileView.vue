<template>
    <div class="container">
      <h1>{{ name }}</h1>
      <img v-if="avatarUrl" :src="avatarUrl" alt="Contact Avatar">
    <form class="form" @submit.prevent="onSubmit">
      <label></label>
      <p>Click on the button below to view messages with {{ name }}</p>
      <button type="submit">Messages</button>
    </form>
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
  img {
    border: 1px solid lightgray;
    height: 50%;
    width: 50%;
    justify-content: center;
    border-radius: 5%;
    align-items: center;
    display: block;
  }
  </style>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ContactView',
  props: {
    name: String
  },
  methods: {
    async onSubmit () {
      this.$router.push({
        name: 'UserChats',
        params: {
          name: this.name
        },
        query: {
          avatar: this.avatarUrl
        }
      })
    }
  },
  computed: {
    avatarUrl (): string | undefined {
      return this.$route.query.avatar as string | undefined
    }
  }
})

</script>
