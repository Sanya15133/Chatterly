<template>
    <div class="container">
        <h1>Contacts</h1>
        <div class="form" @submit.prevent="onSubmit">
            <h2></h2>
            <button type="submit">
                View messages
            </button>
        </div>
        <ErrorComponent v-if="Message" :Status="Status" :Message="Message" />
    </div>
    <LoadingComponent v-if="isLoading"/>
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
      name: '',
      Status: '',
      Message: '',
      isLoading: false
    }
  },
  methods: {
    async onSubmit () {
      this.Message = ''
      this.Status = ''
      this.name = ''
      this.isLoading = true
      const requestData = {
        name: this.name
      }
      try {
        const getAllContacts = await getContacts()
        this.isLoading = false
        console.log(getAllContacts)
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
