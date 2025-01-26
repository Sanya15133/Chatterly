<template>
    <div class="container">
        <h1>Messages</h1>
        <LoadingComponent v-if="isLoading"/>
        <ErrorComponent v-if="Message" :Status="Status" :Message="Message" />
        <div v-else class="form">
            <div v-for="(item, index) in data.chats" :key="index" class="card">
            <p>{{ item.name }}</p>
            <p>{{ item.message }}</p>
        </div>
    </div>
</div>
</template>

<style>
.container {
  display: block;
  border-radius: 5%;
}

.form {
  display: block;
  border: 2px solid grey;
  border-radius: 2%;
  background-color: rgb(247, 237, 237);
  padding: 5%;
  border: none;
  justify-content: left;
  align-items: left;
  text-align: left;
  width: 100%;
  height: 40%;
}

</style>
<script lang="ts">
import ErrorComponent from '@/components/ErrorComponent.vue'
import LoadingComponent from '@/components/LoadingComponent.vue'
import { defineComponent } from 'vue'
import { getChatsByName } from '../api'

type Chat = {
    id: number;
    name: string;
    message: string;
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
  data () {
    return {
      data: {
        chats: [] as Chat[]
      } as Data,
      Status: '',
      Message: '',
      isLoading: false,
      name: localStorage.getItem('name') as string
    }
  },
  async mounted () {
    this.Message = ''
    this.Status = ''
    this.isLoading = true
    try {
      console.log(this.name, 'here')
      const getAllMessages = await getChatsByName(this.name)
      this.data = getAllMessages
      this.isLoading = false
    } catch (error) {
      this.Message = 'Error fetching contact'
      this.Status = '500'
      this.isLoading = false
    }
  }
})

</script>
