<template>
	<div class="infobox">
		<label for="">城市信息：</label>
		<span class="info" v-if="info.length">{{info}}</span>
		<span class="info" v-else>null</span>
	</div>
</template>

<script>
	export default {
		name: 'cityList',
		props: {
			city: {
				type: String,
				required: true	
			}
		},
		data: function() {
			return {
				info: []
			}
		},
		methods: {
			getCities() {
				var url = '/city/getCityList';
				var _this = this;
				this.$http.get(url).then((response) => {
					console.log('get data success...');
					var result = '';
					var obj = response.data.result;
					obj.forEach(function(item, idx, arr) {
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
			city: function(newVal, oldVal) {
				this.getCities();
			}
		},
		created: function() {
			if (this.param) {
				this.getCities();
			}
		}
	}


</script>

<style>
	.infobox{padding-top:20px;}
	.info{color:#ff8650;}
</style>