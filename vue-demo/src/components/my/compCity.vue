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

<script>
  import cityList from '#/components/my/cityList.vue';

  import smileUrl from '@/static/smile.png';

  export default {
    name: 'compCity',
    data: function () {
      return {
        cityName: '',
        param: '',
        smileUrl: smileUrl
      }
    },
    components: {
      cityList
    },
    methods: {
      getCityInfo() {
        this.param = this.cityName;
        console.log('param: ', this.cityName);
      }
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