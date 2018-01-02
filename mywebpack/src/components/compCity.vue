<template>
	<div id="compCity">
		<img src="../smile.png" alt="" class="smile">
		<label for="">城市名：</label>
		<input type="text" placeholder="请输入城市名" v-model="cityName">
		<button @click="getCityInfo()">Go</button>
		<br>
		<city-list :city="param"></city-list>
	</div>
</template>

<script>
	import cityList from './cityList';

	export default{
		name: 'compCity',
		data: function() {
			return {
				cityName: '',
				param: ''
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
	button{background:#fdfce7;border:1px solid #fabe00;color:#fabe00;outline:none;font-size:14px;line-height:1.4;font-weight:bold;}
	button:hover{background:#fdfce7;border:1px solid #ff8650;color:#ff8650;cursor:pointer;outline:none;}
	.smile{display:block;width:50px;height:50px;margin:10px 0 20px;}
</style>