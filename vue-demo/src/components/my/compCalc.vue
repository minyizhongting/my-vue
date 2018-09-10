<template>
  <div>
    <h6>Calculation</h6>
    <button @click="calc()">计算</button>
    <input type="text" v-model="numa"> x <input type="text" v-model="numb"> = <input type="text" readonly="readonly"
                                                                                     id="result" v-model="result">
  </div>
</template>

<script>

  import {multi} from '@/static/math.js'; // Tree shaking

  export default {
    name: 'compCalc',
    data: function () {
      return {
        numa: 0,
        numb: 0,
        result: ''
      }
    },
    methods: {
      calc() {
        this.result = multi(this.numa, this.numb);
      }
    }
  }
</script>

<style scoped>
  input {
    width: 50px;
    text-align: center;
  }
</style>