<template>
  <div class="infobox">
    <label for="">城市信息：</label>
    <span class="info" v-if="info.length">{{info}}</span>
    <span class="info" v-else>null</span>
  </div>
</template>

<script>

  // import axios from 'axios';

  export default {
    name: 'cityList',
    props: {
      city: {
        type: String,
        required: true
      }
    },
    data: function () {
      return {
        info: []
      }
    },
    methods: {
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
        this.$http.get(url).then((response) => {
          console.log('get data success...');
          var result = '';
          var arr = response.data.result;
          arr.forEach(function (item, idx) {
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

        }, (response) => {
          console.error('get data error...');
        });
      }
    },
    watch: {
      city: function (newVal, oldVal) {
        this.getCities();
      }
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