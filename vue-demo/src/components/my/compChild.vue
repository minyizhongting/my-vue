<template>
  <div>
    <h6>Children router</h6>
    <router-link to="/child/a">/child/a</router-link>&emsp;
    <router-link to="/child/b">/child/b</router-link>
    <br><br>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({

  })
</script>

<style scoped>
  a {
    color: #2b99ff;
  }
</style>