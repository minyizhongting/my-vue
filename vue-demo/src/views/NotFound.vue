<template>
  <div class="pic">
    <img :src="nourl" alt="">
  </div>
</template>
<script lang="ts">
  import Vue from 'vue'
  import { Component } from 'vue-property-decorator'

  const noUrl = require('@/static/404.jpg')
  const bgUrl = require('@/static/bg.jpg')

  @Component
  export default class NotFound extends Vue {

    nourl = noUrl

    mounted() {
      document.getElementsByTagName('body')[0].style.backgroundImage = 'url(' + bgUrl + ')';
    }

    destroyed() {
      document.getElementsByTagName('body')[0].style.backgroundImage = '';
    }
  }

</script>
<style scoped>
  .pic {
    width: 80%;
    max-width: 800px;
    position: absolute;
    top: 10%;
    left: 50%;
    -webkit-transform: translate(-50%, 0);
    transform: translate(-50%, 0);
  }

  .pic img {
    width: 100%;
  }
</style>