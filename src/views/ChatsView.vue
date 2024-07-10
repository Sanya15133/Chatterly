<template>
  <div class="form">
    <h1>Messages</h1>
    <div class="name-outline">
    <img><p></p>
  </div>
  <br>
  <div class="outline">
    <div class="msg-box">
    <p id="message-area"></p>
    <p id="date"></p>
  </div>
  </div>
<br>
<form class="container" @submit.prevent="onSubmit">
      <label for="messageInput"></label>
      <input id="messageInput" v-model="message" type="text" placeholder="Message"/>
      <button type="submit">Send</button>
      <br />
    </form>
</div>
</template>

<style scoped>
.name-outline {
  display: block;
  border: 1px solid black;
  height: 5vh;
  padding: 1%;
  text-align: left;
  background-color: white;
}

.msg-box {
  display: block;
  border: 1px solid black;
  padding: 1%;
  margin: 3%;
  background-color: white
}

.outline {
  display: block;
  border: 1px solid black;
  height: 50vh;
  background-image: url('https://img.freepik.com/premium-photo/embossed-paper-texture-patternlight-bacground_546139-39.jpg')
}

label {
  display: block;
  margin: 0.5em 0 0.2em;
}

input {
  flex-shrink: 1;
  box-sizing: border-box;
  width: 80%;
}

button {
  cursor: pointer;
  display: block;
  margin-left: 10px;
}
.form {
  display: inline-block;
  justify-content: center;
  align-items: center;
  text-align: left;
  width: 300px;
  height: 80%;
  padding: 3%;
}

.container {
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  flex-shrink: 1;
}
.user-detail {
  display: flex;
  justify-content: space-between;
  text-align: left;
}
input, button {
  height: 40px;
  padding: 0.5em;
  margin-bottom: 1em;
}
</style>

<script lang="ts">
import { defineComponent } from 'vue'
import { connectToSocket } from '../websocket'

export default defineComponent({
  name: 'ChatsView',
  data () {
    return {
      name: '',
      message: '',
      date: new Date(),
      connection: connectToSocket()
    }
  },
  mounted () {
    console.log(this.connection)
    if (this.connection) {
      console.log('WebSocket created')
    } else {
      console.error('Failed to create WebSocket')
    }
    this.connection.onopen = (event) => {
      console.log('Connection opened', event)
    }
    this.connection.onmessage = (event) => {
      console.log('Server: ' + event.data)
    }
    this.connection.onerror = (event) => {
      console.error('Error', event)
    }
    this.connection.onclose = (event) => {
      console.error('Connection closed', event)
    }
  },
  methods: {
    onSubmit () {
      this.connection.send(this.message)
      document.getElementById('message-area')?.append(this.message)
      this.message = ''
    }
  }
})
</script>
