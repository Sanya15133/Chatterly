<template>
  <div class="container">
    <h1>Contacts</h1>
    <div class="contact-form">
        <form @submit.prevent="onSubmit">
          <label>Contact Name</label>
          <input v-model="contactname" type="text" required/>
          <ErrorComponent v-if="Message" :Status="Status" :Message="Message" />
          <br/>
          <button type="submit">Find Contact</button>
          <br />
        </form>
      </div>
    <LoadingComponent v-if="isLoading"/>
    <ErrorComponent v-if="Message" :Status="Status" :Message="Message" />
    <div v-else class="form">
      <div v-for="(item, index) in data.users" :key="index" class="card">
        <h2>{{ item.name }}</h2>
        <img v-if="item.avatar" :src="item.avatar" alt="Profile Avatar">
        <button @click="$router.push(`/chats/${item.name}`)">
        Start a conversation
      </button>
      <br>
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
    border-radius: 5%;
    border: none
  }

  .card {
  display: inline-block;
  justify-content: center;
  align-items: center;
  text-align: center;
  border: 1px solid lightgrey;
  border-radius: 2%;
  background-color: rgb(247, 237, 237);
  padding: 5%;
}

img {
  border: 1px solid lightgrey;
  border-radius: 10%;
  justify-content: center;
  display: inline-block;
}

.form {
  display: inline-block;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 300px;
  height: 250px;
  padding: 3%;
  border: none
}

</style>
<script lang="ts">
import ErrorComponent from '@/components/ErrorComponent.vue'
import LoadingComponent from '@/components/LoadingComponent.vue'
import { defineComponent } from 'vue'
import { getContactsByName, getContacts } from '@/api'

type User = {
  id: number;
  name: string;
  avatar: string;
};

interface Data {
  users: User[];
}

export default defineComponent({
  name: 'ContactsView',
  components: {
    ErrorComponent, LoadingComponent
  },
  props: {
    name: String,
    avatar: String
  },
  data () {
    return {
      data: {
        users: [] as User[]
      } as Data,
      Status: '',
      Message: '',
      isLoading: false,
      contactname: ''
    }
  },
  async mounted () {
    this.Message = ''
    this.Status = ''
    this.isLoading = true
    try {
      const getAllContacts = await getContacts()
      this.data = getAllContacts
      this.isLoading = false
    } catch (error) {
      this.Message = 'Error fetching contact'
      this.Status = '500'
      this.isLoading = false
    }
  },
  methods: {
    async onSubmit () {
      this.Message = ''
      this.Status = ''
      this.isLoading = true
      try {
        const contactExists = await getContactsByName(this.contactname)
        this.isLoading = false
        if (!contactExists) {
          this.Message = 'Contact does not exist'
          this.Status = '404'
        } else {
          this.$router.push({
            name: 'ContactView',
            params: {
              name: contactExists.user.name
            },
            query: {
              avatar: contactExists.user.avatar
            }
          })
        }
      } catch (error) {
        this.Message = 'Error fetching contact'
        this.Status = '500'
        this.isLoading = false
      }
    }
  }
})

</script>
