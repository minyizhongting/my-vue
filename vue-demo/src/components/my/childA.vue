<template>
  <div>
    childA info
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import { Component } from 'vue-property-decorator'

  @Component
  export default class childA extends Vue {

  }
</script>