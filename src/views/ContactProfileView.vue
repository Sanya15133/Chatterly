<template>
    <div class="container">
      <h1>Contact name</h1>
      <p class="name"></p>
      <img class="avatar" />
    <div class="form">
      <p>Click on the button below to view messages</p>
      <button @click="$router.push('chats/:name')">Messages</button>
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
  name: 'ContactView'
})
</script>
