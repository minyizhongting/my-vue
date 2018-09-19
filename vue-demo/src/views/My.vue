<template>
  <div>
    <comp-city></comp-city>
    <br><br>
    <comp-calc></comp-calc>
    <br><br>
    <comp-child></comp-child>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import { Component } from 'vue-property-decorator'

  import compCity from '#/components/my/compCity.vue'
  import compCalc from '#/components/my/compCalc.vue'
  import compChild from '#/components/my/compChild.vue'

  @Component({
    components: {
      compCity,
      compCalc,
      compChild
    }
  })
  export default class My extends Vue {

  }

</script>

<style scoped>
  >>> h6 {
    color: #f7c002;
    font-size: 18px;
    font-weight: bold;
    border-bottom: 2px solid #f7c002;
    margin: 20px 0;
    padding: 10px 0;
  }
</style>

