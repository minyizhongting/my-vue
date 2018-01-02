<template>
	<div>
		<comp-city></comp-city>
		<br><br>
		<comp-calc></comp-calc>
	</div>
</template>

<script>
	import compCity from './components/compCity.vue';

	import compCalc from './components/compCalc.vue';

	export default {
		name: 'App',
		components: {
			compCity,
			compCalc
		}
	}

</script>

