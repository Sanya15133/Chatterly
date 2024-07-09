<template>
  <div class="form">
    <div class="name-outline">
    <img><p></p>
  </div>
  <br>
  <div class="outline">
    <div class="msg-box">
    <p id="message"></p>
    <p id="date"></p>
  </div>
  </div>
<br>
    <div class="container">
      <label></label><input v-model="name" type="text">
      <button>Send</button>
      <br>
    </div>
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
  height: 80%;
  border: 1px solid black;
  padding: 3%
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
    this.connection.onopen = (event: Event) => {
      console.log('Connection opened', event)
    }
    this.connection.onmessage = (event: Event) => {
      console.log('Server: ' + event)
    }
    this.connection.onerror = (event: Event) => {
      console.error('Error', event)
    }
    this.connection.onclose = (event: Event) => {
      console.error('Connection closed', event)
    }
  }
})
</script>
