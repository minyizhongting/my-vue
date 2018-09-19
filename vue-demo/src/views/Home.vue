<template>
  <div>
    <span>{{msg}}</span>
  </div>
</template>


<script lang="ts">
  import Vue from 'vue'
  // import Component from 'vue-class-component'
  import { Component } from 'vue-property-decorator'

  @Component
  export default class Home extends Vue {
    msg = 'Home'
  }

  // export default {
  //   name: 'Home',
  //   data: function () {
  //     return {
  //       msg: 'Home'
  //     }
  //   }
  // }
</script>

<style scoped>
  span {
    color: #f7c002;
    font-weight: bold;
    font-size: 30px;
  }
  div {
    display: flex;
    height: 50px;
    align-items: center;
  }
</style>