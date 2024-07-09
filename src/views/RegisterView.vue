<template>
  <section>
    <br>
    <br>
  <div class="form">
    <fieldset>
      <form @submit.prevent="onSubmit">
        <h1>Register</h1>
        <label>Name</label>
        <input v-model="name" type="text">
        <br>
        <label>Email</label>
        <input v-model="email" type="text">
        <br>
        <label>Password</label>
        <input v-model="password" type="password">
        <br>
        <label>Confirm Password</label>
        <input v-model="confirmation" type="password">
        <br>
        <label>Choose Avatar</label>
        <input v-model="avatar" type="text">
        <p>Sign in</p>
        <button type="submit">Register</button>
      </form>
    </fieldset>
  </div>
  </section>
</template>

<style scoped>
.form {
  display: inline-block;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 300px;
  height: 80%;
  padding: 3%
}

form {
  display: inline-block;
}

label {
  display: block;
  margin: 0.5em 0 0.2em;
}

input {
  width: 100%;
  padding: 0.5em;
  margin-bottom: 1em;
  box-sizing: border-box;
}

button {
  padding: 0.5em 2em;
  cursor: pointer;
}
</style>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'RegisterForm',
  data () {
    return {
      name: '',
      email: '',
      password: '',
      confirmation: '',
      avatar: ''
    }
  },
  methods: {
    onSubmit () {
      const formData = {
        name: this.name,
        email: this.email,
        password: this.password,
        confirmation: this.confirmation,
        avatar: this.avatar
      }
      const regex = /^[A-Z][a-zA-Z]+$/
      const result = regex.test(this.name)
      if (result === false) {
        alert('Name field should contain one uppercase letter')
      }
      const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/
      const emailResult = emailRegex.test(this.email)
      if (emailResult === false) {
        alert('Email field should contain an email address')
      }
      function isValidUrl (string: string) {
        try {
          const url = new URL(string)
          return true
        } catch (err) {
          return false
        }
      }
      if (!isValidUrl(this.avatar)) {
        alert('Invalid Url')
      }
      // i need to send data here
      console.log(formData)
    }
  }
})
</script>
