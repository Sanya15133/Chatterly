<template>
  <section>
      <br>
    <div class="form">
    <LoadingComponent/>
    <div class="contact-form">
      <h1>Search Contacts</h1>
        <form @submit.prevent="onSubmit">
        <label>Contact Name</label><input v-model="name" type="text" />
        <ErrorComponent v-if="Message" :Status="Status" :Message="Message" />
        <br/>
        <button type="submit">Find Contact</button>
        <br />
      </form>
    </div>
  </div>
  </section>
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

<script lang='ts'>
import { getContactsByName } from '@/api'
import { defineComponent } from 'vue'
import ErrorComponent from '../components/ErrorComponent.vue'
import LoadingComponent from '../components/LoadingComponent.vue'

export default defineComponent({
  name: 'ContactsView',
  components: {
    ErrorComponent, LoadingComponent
  },
  data () {
    return {
      Status: '',
      Message: '',
      name: '',
      loading: false
    }
  },
  methods: {
    async onSubmit () {
      this.loading = true
      const formData = {
        name: this.name
      }
      const contactExists = await getContactsByName(this.name)
      if (contactExists === undefined) {
        this.Message = 'Contact does not exist'
        this.Status = '404'
      }
    }
  }
})

</script>
