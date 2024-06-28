<template>
  <section>
  <div class="chats">
  <div class="form">
  <fieldset class="contact-form">
    <form>
      <label>Contact Name</label><input v-model="name" type="text">
      <br>
    </form>
  </fieldset>
</div>
</div>
</section>
</template>

<style scoped>
.form {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
  text-align: center;
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
  name: 'ChatsView',
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
