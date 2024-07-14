<template>
    <div class="spinner-overlay">
    <div class="spinner-container">
    <div class="d-flex justify-content-center">
  <div class="spinner-border" role="status">
  </div>
</div>
</div>
</div>
</template>

<style>
.spinner-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
}

.spinner-container {
    color: black;
    text-align: center;
    justify-content: center;
}
</style>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'LoadingPage',
  data () {
    return {
      loading: true
    }
  }
})
</script>
