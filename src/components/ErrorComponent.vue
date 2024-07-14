<template>
  <div class="error-box">
    <p>{{ Status }}</p>
    <p>{{ Message }}</p>
  </div>
</template>

<style>
.error-box {
    background-color: rgb(183, 187, 192);
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
    Status: String,
    Message: String
  }
})
</script>
