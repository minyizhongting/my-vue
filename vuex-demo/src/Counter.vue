<template>
	<div id="app">
		Clicked: {{$store.state.count}} times, count is {{evenOrOdd}}.<br><br>
		<button @click="increment">+</button>
		<button @click="decrement">-</button>
		<button @click="incrementIfOdd" :disabled="ifDisabled">Increment if odd</button>
		<button @click="incrementAsync">Increment async</button>
	</div>
</template>

<script>
	import {mapGetters, mapActions} from 'vuex';

	export default {
		computed: mapGetters([
			'evenOrOdd',
			'ifDisabled'
		]),
		methods: mapActions([
			'increment',
			'decrement',
			'incrementIfOdd',
			'incrementAsync'
		])
	}

</script>