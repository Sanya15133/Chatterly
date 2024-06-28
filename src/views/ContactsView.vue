<template>
  <section>
      <h1>Contacts Page</h1>
      <p>Add your contacts here</p>
      <br>
    <div class="form">
    <fieldset class="contact-form">
        <form @submit.prevent="onSubmit">
        <label>Contact Name</label><input v-model="name" type="text" />
        <button type="submit">Add Contact</button>
        <br />
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
  height: 10vh;
  text-align: center;
  width: 80%;

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

<script lang='ts'>
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
    }
  }
})

</script>
