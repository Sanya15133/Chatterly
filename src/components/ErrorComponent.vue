<template>
  <div class="error-box">
    <p>{{ Status }}</p>
    <p>{{ Message }}</p>
  </div>
</template>

<style>
.error-box {
    background-color: azure;
    border: 1px solid black;
    justify-content: center;
    text-align: center;
}
</style>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ErrorBox',
  props: {
    Status: Number,
    Message: String
  }
})
</script>
