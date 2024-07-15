<template>
      <br>
      <br>
    <div class="form">
        <form @submit.prevent="onSubmit">
          <h1>Sign In</h1>
          <label>Name</label>
          <input v-model="name" type="text" placeholder="name" required>
          <br>
          <label>Password</label>
          <input v-model="password" type="password" placeholder="password" required>
          <br>
         <button type="submit">Sign In</button>
        </form>
    </div>
    <br>
    <ErrorComponent v-if="Message" :Status="Status" :Message="Message" />
    <LoadingComponent v-if="isLoading"/>
</template>

<style scoped>
.form {
  display: inline-block;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 300px;
  height: 300px;
  padding: 3%;
  margin-left: auto;
  margin-right: auto;
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
import { signInContact } from '@/api'
import ErrorComponent from '@/components/ErrorComponent.vue'
import LoadingComponent from '@/components/LoadingComponent.vue'
import router from '@/router'
// import bcrypt from 'bcrypt'
// && bcrypt.checkpw(verifyFormData.password, formData.password)

export default defineComponent({
  name: 'LoginForm',
  components: {
    ErrorComponent, LoadingComponent
  },
  data () {
    return {
      name: '',
      password: '',
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
        password: this.password
      }
      try {
        const verifyFormData = await signInContact(formData.name, formData.password)
        this.isLoading = false
        if (verifyFormData.name !== formData.name) {
          this.Message = 'User not found'
          this.Status = '404'
          router.push({ path: '/register' })
        } else {
          this.$router.push({
            name: 'PortalView',
            params: {
              name: verifyFormData.user.name
            },
            query: {
              avatar: verifyFormData.user.avatar
            }
          })
        }
      } catch (error) {
        console.error('error logging in:', error)
        this.Message = 'Server error'
        this.Status = '500'
        this.isLoading = false
      }
    }
  }
})
</script>
