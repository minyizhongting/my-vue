<template>
	<div>
		<div class="nav">
			<!-- 使用router-link组件来导航 -->
			<!-- 通过传入to属性指定链接 -->
			<!-- router-link默认会被渲染成一个a标签，通过配置tag属性可生成别的标签 -->
			<router-link to="/">/home</router-link>&emsp;
			<router-link to="/my">/my</router-link>&emsp;
			<router-link to="/book">/book</router-link>&emsp;
			<router-link to="/whatever">/404</router-link>&emsp;
		</div>
		<div class="main">
			<!-- 路由出口，路由匹配到的组件将渲染在这里 -->
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'App'
	}
</script>

<style>
	.nav{background-color:#f7c002;padding:15px;}
	.nav a{color:#fff;font-size:18px;}
	.main{margin:30px;}
</style>