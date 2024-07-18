<template>
  <div class="container">
    <h1>Contacts</h1>
    <LoadingComponent v-if="isLoading"/>
    <ErrorComponent v-if="Message" :Status="Status" :Message="Message" />
    <div v-else class="form">
      <div v-for="(item, index) in data.users" :key="index">
        <h2>{{ item.name }}</h2>
        <img v-if="item.avatar" :src="item.avatar" alt="Profile Avatar">
        <button type="submit">
        Start a conversation
      </button>
      </div>
    </div>
  </div>
</template>

<style>
  .container {
    display: inline-block;
    justify-content: center;
    align-items: center;
    text-align: left;
    width: 300px;
    height: 80%;
    padding: 3%;
    background-color: rgb(241, 240, 231);
    border-radius: 5%;
  }
</style>
<script lang="ts">
import { getContacts } from '@/api'
import ErrorComponent from '@/components/ErrorComponent.vue'
import LoadingComponent from '@/components/LoadingComponent.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ContactList',
  components: {
    ErrorComponent, LoadingComponent
  },
  props: {
    localname: String
  },
  data () {
    return {
      data: [],
      Status: '',
      Message: '',
      isLoading: false
    }
  },
  async mounted () {
    this.data = []
    this.Message = ''
    this.Status = ''
    this.isLoading = true
    try {
      const getAllContacts = await getContacts()
      this.data = getAllContacts
      this.isLoading = false
      console.log(getAllContacts)
    } catch (error) {
      console.error('Error fetching contact:', error)
      this.Message = 'Error fetching contact'
      this.Status = '500'
      this.isLoading = false
    }
  }
})

</script>
