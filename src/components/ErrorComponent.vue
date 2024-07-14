<template>
  <div>
    <h2></h2>
  </div>
</template>

<style></style>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  name: "ErrorComponent",
  data() {
    return {
      status: "",
      error: ""
    }
  },
  props: {
    status: Number,
    error: String
  }
})
</script>
