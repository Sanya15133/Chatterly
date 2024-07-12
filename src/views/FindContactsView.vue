<template>
  <section>
      <br>
    <div class="form">
    <div class="contact-form">
      <h1>Search Contacts</h1>
        <form @submit.prevent="onSubmit">
        <label>Contact Name</label><input v-model="name" type="text" />
        <br/>
        <button type="submit">Find Contact</button>
        <br />
      </form>
    </div>
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
  height: 250px;
  padding: 3%
}

form {
  display: inline-block;
  height: 80%;
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

<script lang='ts'>
import { getContactsByName } from '@/api'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ContactsView',
  data () {
    return {
      name: ''
    }
  },
  methods: {
    onSubmit () {
      const formData = {
        name: this.name
      }
      const contactExists = getContactsByName(this.name)
      if (contactExists === undefined) {
        alert('Contact does not exist')
      }
    }
  }
})

</script>
