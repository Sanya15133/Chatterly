<template>
  <div class="form">
    <h1>Messages</h1>
    <div class="name-outline">
      <p v-if="user">{{ user }}</p>
  </div>
  <br>
  <div class="outline">
  </div>
<br>
<form class="container" @submit.prevent="onSubmit">
    <label for="messageInput"></label>
    <input id="messageInput" v-model="contactMessage" type="text" placeholder="Message" required/>
    <button type="submit">Send</button>
    <br />
    <ErrorComponent v-if="Message" :Status="Status" :Message="Message" />
</form>
</div>
<LoadingComponent v-if="isLoading"/>
</template>

<style scoped>
.name-outline {
  display: block;
  border: 1px solid lightgray;
  height: 5vh;
  padding: 1%;
  text-align: left;
  background-color: white;
}

.msg-box {
  border: 1px solid #ccc;
  padding: 1px;
  margin-bottom: 10px;
  border-radius: 1px;
  background-color: #f9f9f9 !important;
  height: 60px;
}

.msg-box p {
  margin: 0;
}

.outline {
  padding: 20px;
}

.outline {
  display: block;
  border: 1px solid lightgray;
  height: 50vh;
  background-image: url('https://img.freepik.com/premium-photo/embossed-paper-texture-patternlight-bacground_546139-39.jpg')
}

input {
  flex-shrink: 1;
  box-sizing: border-box;
  width: 200px;
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
  width: 300px;
  height: 80%;
  padding: 3%;
  box-sizing: border-box;
  border: none
}

.container {
  display: inline-flex;
  box-sizing: border-box;
  width: 10%;
  text-align: left;
  justify-content: left;
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
import ErrorComponent from '../components/ErrorComponent.vue'
import LoadingComponent from '../components/LoadingComponent.vue'

export default defineComponent({
  name: 'ChatsView',
  components: {
    ErrorComponent, LoadingComponent
  },
  data () {
    return {
      contactName: '',
      contactMessage: '',
      Message: '',
      Status: '',
      date: new Date(),
      isLoading: false,
      connection: connectToSocket(),
      user: ''
    }
  },
  async mounted () {
    this.user = localStorage.getItem('name') as string
    if (!this.connection) {
      this.Message = 'Websocket not working'
      this.Status = '500'
    }
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
    async onSubmit () {
      this.isLoading = true
      this.connection.send(this.contactMessage)
      const newMsgBox = document.createElement('div')
      newMsgBox.classList.add('msg-box')
      newMsgBox.style.backgroundColor = '#f9f9f9'
      newMsgBox.style.border = '1px solid #ccc'
      newMsgBox.style.padding = '1px'
      newMsgBox.style.marginBottom = '10px'
      newMsgBox.style.borderRadius = '1px'
      newMsgBox.style.height = '60px'
      newMsgBox.style.display = 'flex'
      newMsgBox.style.flexDirection = 'column'
      newMsgBox.style.justifyContent = 'space-between'
      const message = document.createElement('p')
      message.style.margin = '0'
      message.innerText = this.contactMessage
      const theDate = document.createElement('p')
      theDate.style.margin = '0'
      theDate.innerText = new Date().toLocaleTimeString()
      newMsgBox.appendChild(message)
      newMsgBox.appendChild(theDate)
      const outline = document.querySelector('.outline')
      if (outline) {
        outline.appendChild(newMsgBox)
      }
      this.contactMessage = ''
      try {
        this.Message = ''
        this.Status = ''
        this.isLoading = false
      } catch (error) {
        this.Message = 'Error fetching contact'
        this.Status = '500'
        this.isLoading = false
      }
    }
  }
})
</script>
