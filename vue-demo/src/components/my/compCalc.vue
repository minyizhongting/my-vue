<template>
  <div>
    <h6>Calculation</h6>
    <button @click="calc()">计算</button>
    <input type="text" v-model="numa"> x <input type="text" v-model="numb"> = <input type="text" readonly="readonly"
                                                                                     id="result" v-model="result">
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import { Component } from 'vue-property-decorator'

  import {multi} from '@/static/math.ts'; // Tree shaking

  @Component
  export default class compCalc extends Vue{

    numa: number = 0
    numb: number = 0
    result: number = 0

    calc() {
      this.result = multi(this.numa, this.numb);
    }
  }
</script>

<style scoped>
  input {
    width: 50px;
    text-align: center;
  }
</style>