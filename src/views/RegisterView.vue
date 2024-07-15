<template>
  <section>
    <br>
    <br>
  <div class="form">
      <form @submit.prevent="onSubmit" id="form">
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
  <LoadingComponent v-if="isLoading"/>
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
import LoadingComponent from '../components/LoadingComponent.vue'
import router from '@/router'

export default defineComponent({
  name: 'RegisterForm',
  components: {
    ErrorComponent, LoadingComponent
  },
  props: {
    localname: String,
    localavatar: String
  },
  data () {
    return {
      name: '',
      email: '',
      password: '',
      confirmation: '',
      avatar: '',
      Status: '',
      Message: '',
      isLoading: false
    }
  },
  methods: {
    async onSubmit () {
      this.Message = ''
      this.Status = ''
      this.isLoading = true
      const formData = {
        name: this.name,
        email: this.email,
        password: this.password,
        confirmation: this.confirmation,
        avatar: this.avatar
      }
      if (formData.name.length < 5) {
        this.Message = 'Name field should contain more than four letters'
        this.Status = '400'
      }
      if (formData.password.length < 5) {
        this.Message = 'Password field should contain more than four letters'
        this.Status = '400'
      }
      if (formData.password !== formData.confirmation) {
        this.Message = 'Passwords should match'
        this.Status = '400'
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
      try {
        const registerUser = await postContact(formData.name, formData.email, formData.password, formData.avatar)
        this.isLoading = false
        this.$router.push({
          name: 'PortalView',
          params: {
            name: registerUser.user.name
          },
          query: {
            avatar: registerUser.user.avatar
          }
        })
      } catch (error) {
        this.Message = 'User already exists, redirecting you to login page'
        this.Status = '400'
        this.isLoading = false
        router.push({ path: '/login' })
      }
    }
  }
})

</script>
