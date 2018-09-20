<template>
  <div id="compCity">
    <p>
      <img :src="smileUrl" alt="" class="smile">
      <span>Hi !</span>
    </p>
    <br>
    <div>
      <h6>Search</h6>
      <label for="">城市名：</label>
      <input type="text" placeholder="请输入城市名" v-model="cityName">
      <button @click="getCityInfo()">Go</button>
    </div>
    <city-list :city="param"></city-list>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import { Component } from 'vue-property-decorator'

  import cityList from '#/components/my/cityList.vue'

  const smileUrl = require('@/static/smile.png')

  @Component({
    components: {
      cityList
    }
  })

  export default class compCity extends Vue{

    cityName: string = ''
    param: string = ''
    smileUrl = smileUrl

    getCityInfo() {
      this.param = this.cityName;
      console.log('param: ', this.cityName);
    }

  }
</script>

<style scoped>
  .smile {
    display: inline-block;
    width: 50px;
    height: 50px;
    padding: 10px 10px 0;
  }
</style>