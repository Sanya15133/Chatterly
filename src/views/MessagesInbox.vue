<template>
    <div class="container">
        <h1>Messages</h1>
        <LoadingComponent v-if="isLoading"/>
        <ErrorComponent v-if="Message" :Status="Status" :Message="Message" />
        <div v-else class="form">
            <h2></h2>
            <p></p>
            <button>
            View
            </button>
        </div>
    </div>
</template>

<style>
img {
  border: 2px solid grey;
  border-radius: 10%;
  justify-content: center;
  display: inline-block;
}

.container {
  display: inline-block;
  justify-content: center;
  align-items: center;
  text-align: left;
  width: 300px;
  height: 80%;
  padding: 3%;
  border-radius: 5%;
}

.form {
  display: inline-block;
  justify-content: center;
  align-items: center;
  text-align: center;
  border: 2px solid grey;
  border-radius: 2%;
  background-color: rgb(247, 237, 237);
  padding: 5%;
}

</style>
<script lang="ts">
import ErrorComponent from '@/components/ErrorComponent.vue'
import LoadingComponent from '@/components/LoadingComponent.vue'
import { defineComponent } from 'vue'
import { getChats } from '../api'

type Chat = {
    id: number;
    name: string;
    Message: string;
    Date: string
}

interface Data {
    chats: Chat[];
}

export default defineComponent({
  name: 'MessagesInbox',
  components: {
    ErrorComponent, LoadingComponent
  },
  props: {
    localname: String
  },
  data () {
    return {
      data: {
        chats: [] as Chat[]
      } as Data,
      Status: '',
      Message: '',
      isLoading: false
    }
  },
  async mounted () {
    this.Message = ''
    this.Status = ''
    this.isLoading = true
    try {
      const getAllMessages = await getChats()
      this.data = getAllMessages
      this.isLoading = false
    } catch (error) {
      console.error('Error fetching contact:', error)
      this.Message = 'Error fetching contact'
      this.Status = '500'
      this.isLoading = false
    }
  }
})

</script>
