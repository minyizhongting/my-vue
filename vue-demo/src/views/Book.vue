<template>
	<div>
		<comp-book @calculate="calculateTotal" />
		<p class="red">totalPriceResult: {{totalPriceResult}}</p>
	</div>
	
</template>

<script>

	import compBook from '#/components/book/compBook.vue';

	export default {
		name: 'Book',
		data() {
			return {
				totalPriceResult: 0
			}
			
		},
		components: {
			compBook
		},
		methods: {
			calculateTotal(sum) {
				this.totalPriceResult = sum;
			}
		}
	}
</script>

<style scoped>
	.red{color:red;}
	>>> .total{color:green;}
</style>





