<template>
  <section>
    <div class="form">
      <div class="contact-form">
        <h1>Search Contacts</h1>
        <form @submit.prevent="onSubmit">
          <label>Contact Name</label>
          <input v-model="contactname" type="text" required/>
          <ErrorComponent v-if="Message" :Status="Status" :Message="Message" />
          <br/>
          <button type="submit">Find Contact</button>
          <br />
        </form>
      </div>
    </div>
  </section>
  <LoadingComponent v-if="isLoading"/>
</template>

<style scoped>
.form {
  display: inline-block;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 300px;
  height: 250px;
  padding: 3%
}

form {
  display: inline-block;
  height: 80%;
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
  padding: 0.5em 2em;
  cursor: pointer;
}
</style>

<script lang="ts">
import { getContactsByName } from '@/api'
import { defineComponent } from 'vue'
import ErrorComponent from '../components/ErrorComponent.vue'
import LoadingComponent from '../components/LoadingComponent.vue'

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
      Status: '',
      Message: '',
      isLoading: false,
      contactname: ''
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
        console.error('Error fetching contact:', error)
        this.Message = 'Error fetching contact'
        this.Status = '500'
        this.isLoading = false
      }
    }
  }
})
</script>
