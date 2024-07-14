<template>
  <div class="error-box">
    <p>{{ Status }}</p>
    <p>{{ Message }}</p>
  </div>
</template>

<style>
.error-box {
    background-color: grey;
    border: 1px solid black;
    justify-content: center;
    text-align: center;
    height: 70%;
    width: 70%
}
</style>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ErrorBox',
  props: {
    Status: String,
    Message: String
  }
})
</script>
