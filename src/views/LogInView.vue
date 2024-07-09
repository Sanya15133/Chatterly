<template>
    <section>
      <br>
      <br>
    <div class="form">
      <fieldset>
        <form @submit.prevent="onSubmit">
          <h1>Sign In</h1>
          <label>Name</label>
          <input v-model="name" type="text">
          <br>
          <label>Password</label>
          <input v-model="password" type="password">
          <br>
         <button type="submit">Sign In</button>
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

export default defineComponent({
  name: 'LoginForm',
  data () {
    return {
      name: '',
      password: ''
    }
  },
  methods: {
    onSubmit () {
      const formData = {
        name: this.name,
        password: this.password
      }
      // i need to check data here
      console.log(formData)
    }
  }
})
</script>
