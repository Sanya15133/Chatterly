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
    <div v-for="(item, index) in data.chats" :key="index" :class="['msg-box', item.name === name ? 'msg-user' : 'msg-receiver']">
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

.msg-user {
background-color: #cfc5c5 !important;
text-align: right;
display: flex;
justify-content: flex-end;
}

.msg-receiver {
background-color: #f9f9f9 !important;
text-align: left;
display: flex;
justify-content: flex-start;
}

.outline {
padding: 20px;
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
    ErrorComponent,
    LoadingComponent
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
      contactMessage: '',
      Message: '',
      Status: '',
      isLoading: false,
      connection: connectToSocket()
    }
  },
  async mounted () {
    try {
      const user = localStorage.getItem('name') as string
      const getMessage = await getChatsByName(user)
      this.data.chats = getMessage.chats
      this.$nextTick(() => {
        this.scroll()
      })
      if (!this.connection) {
        this.Message = 'Websocket not working'
        this.Status = '500'
      }
      this.connection.onopen = (event) => {
        console.log('Connection opened', event)
        this.$nextTick(() => {
          this.scroll()
        })
      }
      this.connection.onerror = (event) => {
        console.error('Error', event)
      }
      this.connection.onclose = (event) => {
        console.error('Connection closed', event)
      }
    } catch (error) {
      console.log('Error in created hook:', error)
      this.Message = 'An error occurred while fetching chats'
      this.Status = '500'
      this.isLoading = false
    }
  },
  methods: {
    async onSubmit () {
      this.isLoading = true
      try {
        if (this.connection) {
          this.connection.onmessage = async (event) => {
            const text = await event.data.text()
            this.connection.send(text)
          }
        }
        const personName = this.name as string
        await postChats(personName, this.contactMessage)
        const newChat: Chat = {
          name: personName,
          message: this.contactMessage,
          date: new Date().toLocaleTimeString()
        }
        this.data.chats.push(newChat)
        this.contactMessage = ''
        this.isLoading = false
        this.$nextTick(() => {
          this.scroll()
        })
      } catch (error) {
        console.error('Error submitting message:', error)
        this.Message = 'Error submitting message'
        this.Status = '500'
        this.isLoading = false
      }
    },
    scroll () {
      const container = document.querySelector('.outline')
      if (container !== null) {
        container.scrollTop = container.scrollHeight
      }
    }
  }
})
</script>
