<template>
  <div class="infobox">
    <label for="">城市信息：</label>
    <span class="info" v-if="info.length">{{info}}</span>
    <span class="info" v-else>null</span>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import axios from 'axios'

  import { Component, Prop, Watch } from 'vue-property-decorator'

  interface CityInfo {
    cityName: string,
    cityId: string | number,
    isChain: number
  }

  @Component
  export default class cityList extends Vue {

    @Prop()
    city: string = ''

    info: CityInfo[] | string = ''

    getCities() {
      var url = '/city/getCityList';
      var _this = this;

      // ajax获取数据成功后会返回一个response对象，包含以下内容：
      // {
      // 	data: {},
      // 	status: 200,
      // 	statusText: 'OK',
      // 	headers: {},
      // 	config: {}
      // }

      // 请求
      // axios({
      // 	method: 'post',
      // 	url: '/user',
      // 	data: {
      // 		name: 'haha',
      // 		info: 'aa'
      // 	}
      // });

      // axios.get(url).then((response) => {
      axios.get(url).then((response: any) => {
        console.log('get data success...');
        let result = '';
        let arr = response.data.result;
        arr.forEach(function (item: CityInfo, idx: number) {
          if (item.cityName == _this.city) {
            result = JSON.stringify(item);
            return false;
          }
        });
        if (result) {
          this.info = result;
        } else {
          this.info = 'no data';
        }

      }, (response: any) => {
        console.error('get data error...');
      });
    }

    @Watch('city')
    function (newVal: string, oldVal: string) {
      this.getCities();
    }

  }


</script>

<style>
  .infobox {
    padding-top: 20px;
  }

  .info {
    color: #ff8650;
  }
</style>