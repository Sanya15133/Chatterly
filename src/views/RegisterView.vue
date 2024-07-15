<template>
  <section>
    <br>
    <br>
  <div class="form">
      <form @submit.prevent="onSubmit">
        <h1>Register</h1>
        <label>Name</label>
        <input v-model="name" type="text" placeholder="name" required>
        <ErrorComponent v-if="Message" :Status="Status" :Message="Message" />
        <br>
        <label>Email</label>
        <input v-model="email" type="text" placeholder="email" required>
        <br>
        <label>Password</label>
        <input v-model="password" type="password" required placeholder="password">
        <br>
        <label>Confirm Password</label>
        <input v-model="confirmation" type="password" required placeholder="confirmation">
        <br>
        <label>Choose Avatar</label>
        <input v-model="avatar" type="text" placeholder="avatar">
        <p><router-link to="/login">Sign In</router-link> </p>
        <button type="submit">Register</button>
      </form>
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
  height: 90%;
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
import { postContact } from '@/api'
import { defineComponent } from 'vue'
import ErrorComponent from '@/components/ErrorComponent.vue'

export default defineComponent({
  name: 'RegisterForm',
  components: {
    ErrorComponent
  },
  data () {
    return {
      name: '',
      email: '',
      password: '',
      confirmation: '',
      avatar: '',
      Status: '',
      Message: ''
    }
  },
  methods: {
    async onSubmit () {
      this.Message = ''
      this.Status = ''
      const formData = {
        name: this.name,
        email: this.email,
        password: this.password,
        confirmation: this.confirmation,
        avatar: this.avatar
      }
      const regex = /^[A-Z][a-zA-Z]+$/
      const result = regex.test(formData.name)
      if (result === false) {
        this.Message = 'Name field should contain one uppercase letter'
        this.Status = '400'
      }
      const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/
      const emailResult = emailRegex.test(formData.email)
      if (emailResult === false) {
        this.Message = 'Email field should contain an email address'
        this.Status = '400'
      }
      const registerUser = await postContact(formData.name, formData.email, formData.password, formData.avatar)
      console.log(registerUser)
    }
  }
})
</script>
