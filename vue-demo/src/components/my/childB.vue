<template>
  <div>
    childB info
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import { Component } from 'vue-property-decorator'

  @Component
  export default class childB extends Vue {

  }
</script>