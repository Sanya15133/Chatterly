<template>
  <div class="form">
    <div class="name-outline">
    <img><P>Contact name</P>
  </div>
  <br>
  <div class="outline">
    <div class="msg-box">
    <p>Message here</p>
    <p>Date Time</p>
  </div>
  </div>
<br>
    <form class="container">
      <label></label><input v-model="name" type="text">
      <button>Send</button>
      <br>
    </form>
</div>
</template>

<style scoped>
.name-outline {
  display: block;
  border: 1px solid black;
  height: 8vh;
  padding: 0;
  text-align: left;
}

.msg-box {
  display: block;
  border: 1px solid black;
  padding: 1%;
  margin: 5%;
}

.outline {
  display: block;
  margin-top: 0%;
  border: 1px solid black;
  height: 50vh
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
  cursor: pointer;
  display: inline-block;
  margin-left: 10px;
}

.form {
  margin: auto;
  margin-top: 0%;
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
.user-detail {
  display: flex;
  justify-content: space-between;
  text-align: left;
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
