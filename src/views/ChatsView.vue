<template>
  <div class="form">
    <div class="name-outline">
    <img><p>Contact name</p>
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
  padding: 1%;
  text-align: left;
}

.msg-box {
  display: block;
  border: 1px solid black;
  padding: 1%;
  margin: 3%;
}

.outline {
  display: block;
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
  margin-left: 10px
}
.form {
  display: inline-block;
  justify-content: center;
  align-items: center;
  text-align: left;
  width: 80%;
  height: 80%
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
import { socket } from '../websocket'

export default defineComponent({
  name: 'ChatsView',
  data () {
    return {
      name: '',
      message: '',
      date: Date.now()
    }
  },
  methods: {
    onSubmit () {
      const formData = {
        name: this.name,
        message: this.message,
        date: this.date
      }
      // Here you can send formData through the socket or perform other actions
    }
  },
  mounted () {
    socket.addEventListener('message', (event: MessageEvent) => {
      console.log(event.data) // Handle incoming messages from WebSocket
    })
  }
})
</script>
