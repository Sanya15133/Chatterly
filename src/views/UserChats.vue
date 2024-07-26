<template>
    <div class="form">
      <h1>Messages</h1>
      <div class="name-outline">
      <img v-if="avatarValue" :src="avatarValue" alt="User-Avatar" />
      <p v-if="name" class="name">{{ name }}</p>
    </div>
    <br>
    <ErrorComponent v-if="Message" :Status="Status" :Message="Message" />
    <div v-else class="outline">
      <div v-for="(item, index) in data.chats" :key="index" class="msg-box">
      <p id="message-area">{{ item.message }}</p>
      <p id="time">{{ item.date }}</p>
    </div>
    </div>
  <br>
  <form class="container" @submit.prevent="onSubmit">
      <label for="messageInput"></label>
      <input id="messageInput" v-model="contactMessage" type="text" placeholder="Message" required/>
      <button type="submit">Send</button>
      <br />
  </form>
  </div>
  <LoadingComponent v-if="isLoading"/>
  </template>

  <style scoped>
  .name-outline {
  display: flex;
  border: 1px solid lightgray;
  height: 5vh;
  padding: 1%;
  text-align: right;
  background-color: white !important;
  align-items: center
  }

  img {
  border: 1px solid lightgray;
  width: 20%;
  border-radius: 30%;
  display: inline-block;
  vertical-align: left;
  height: 90%
  }

  .name {
  display: inline-block;
  margin-left: 10px;
  text-align: center;
  justify-content: right;
  }

  .msg-box {
  display: block;
  border: 1px solid lightgray;
  padding: 1%;
  margin: 3%;
  background-color: white;
  }

  .outline {
  display: block;
  border: 1px solid lightgray;
  overflow: auto;
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
  display: inline-flex;
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
import { getChatsByName, postChats } from '@/api'

type Chat = {
  id: number,
  name: string,
  message: string,
  date: string
}

interface Data {
  chats: Chat[];
}

export default defineComponent({
  name: 'UserChats',
  components: {
    ErrorComponent, LoadingComponent
  },
  props: {
    name: String
  },
  computed: {
    avatarValue (): string | undefined {
      return this.$route.query.avatar as string | undefined
    }
  },
  data () {
    return {
      data: {
        chats: [] as Chat[]
      } as Data,
      contactName: '',
      contactMessage: '',
      Message: '',
      Status: '',
      date: new Date(),
      isLoading: false,
      connection: connectToSocket()
    }
  },
  async mounted () {
    this.isLoading = true
    try {
      await getChatsByName(this.contactName)
      this.isLoading = false
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
    } catch (error) {
      this.Message = 'Error mounting component'
      this.Status = '500'
      this.isLoading = false
    }
  },
  methods: {
    async onSubmit () {
      this.isLoading = true
      this.connection.send(this.contactMessage)
      const personName = this.name as string
      await postChats(personName, this.contactMessage)
      document.getElementById('message-area')?.append(this.contactMessage)
      this.contactMessage = ''
      document.getElementById('time')?.append(new Date().toLocaleTimeString())
      try {
        this.Message = ''
        this.Status = ''
        this.isLoading = false
      } catch (error) {
        console.error('Error fetching contact:', error)
        this.Message = 'Error fetching contact'
        this.Status = '500'
        this.isLoading = false
      }
    }
  }
})
</script>
