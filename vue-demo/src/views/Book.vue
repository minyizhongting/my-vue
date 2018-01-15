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
/* 若希望scoped样式中的选择器可以影响子组件，可以使用>>>操作符 */
/* SASS中用/deep/代替>>> */
	.red{color:red;}
	>>> .total{color:green;}
</style>





