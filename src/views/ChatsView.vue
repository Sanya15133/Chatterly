<template>
  <div class="form">
    <img>
    <P>Contact name</P>
    <p>Message here</p>
    <p>Date Time</p>
<br>
    <form class="container">
      <label></label><input v-model="name" type="text">
      <button>Send</button>
      <br>
    </form>
</div>
</template>

<style scoped>

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
  cursor: pointer;
  display: inline-block;
  margin-left: 10px;
}

.form {
  margin: auto;
  width: 80%;
  border: 1px solid black;
  display: inline-block;
  justify-content: center;
  align-items: center;
  text-align: left;
  padding: 1em;
}
.container {
  display: flex;
  justify-content: space-between;
}
input, button {
  height: 40px;
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
