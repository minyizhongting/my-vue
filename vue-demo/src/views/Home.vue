<template>
	<div>
		<span>Home</span>
		<br><br><br>
		<p>count: {{count}}</p>
		<p>countAlias: {{countAlias}}</p>
		<p>countPlusLocalState: {{countPlusLocalState}}</p>
		<p>doneTodosCount: {{doneTodosCount}}</p>
		<p>getTodoById: {{getTodoById}}</p>
		<button @click="increment()">click increment</button><br><br>
		<button @click="incrementBy()">click incrementBy</button><br><br>
		<button @click="incrementAsync()">click incrementAsync</button><br><br>
		<button @click="incrementAsync2()">click incrementAsync2</button><br><br>
	</div>
</template>


<script>
// 在Vue组件中展示状态，最简单方法就是在计算属性中返回某个状态。当状态变化时，会重新求取计算属性，触发更新相关联的DOM。

// Vuex通过store选项，提供了一种机制将状态从根组件"注入"到每一个子组件中。


// 当一个组件需要获取多个状态时，将这些状态都声明为计算属性会有些冗余，可使用mapState辅助函数帮助我们生成计算属性。
// mapState函数返回的是一个对象，如何与局部计算属性混合使用？可使用对象展开运算符...(现处于ECMAScript stage-3阶段)。

	import {mapState, mapGetters, mapMutations, mapActions} from 'vuex';

	export default {
		name: 'Home',
		data: function() {
			return {
				localCount: 100
			}
		},
		// computed: {
		// 	count() {
		// 		return this.$store.state.count;
		// }	
		// }
		computed: {
			localComputed() {
				// local computed
			},
			// 使用对象展开运算符将此对象混入到外部对象中
			...mapState({
				// 箭头函数可使代码更简练
				count: state => state.count,

				// 传字符串参数'count'等同于'state => state.count'
				countAlias: 'count',

				// 为了能够适应'this'获取局部状态，必须使用常规函数
				countPlusLocalState(state) {
					return state.count + this.localCount;
				}
			}),
			// 当映射的计算属性的名称与state的子节点名称相同时，也可以给mapState传一个字符串数组
			// mapState([
			// 	'count'		// 映射'this.count'为store.state.count
			// ])

			// 通过在根实例注册store选项，该实例会注入到根组件下的所有子组件中，且子组件能通过this.$store访问到。
			// 很容易在任何组件中使用
			// doneTodosCount() {
			// 	return this.$store.getters.doneTodosCount;
			// },
			
			getTodoById() {
				return this.$store.getters.getTodoById(2);
			},

			// mapGetters辅助函数仅仅是将store中的getter映射到局部计算属性
			...mapGetters([
				'doneTodosCount'
			])
			// 若想将一个getter属性改个名字，使用对象形式
			// ...mapGetters({
			// 	'doneCount': 'doneTodosCount'	// 映射'this.doneCount'为'store.getters.doneTodosCount'
			// })

		},
		methods: {
			// 可以在组件中使用this.$store.commit('xxx')提交mutation，或者使用mapMutations辅助函数将组件中的methods映射为store.commit调用(需在根节点注入store)

			// 提交mutations的两种方式，第一种是向store.commit传入额外的参数，第二种是直接使用包含type属性的对象。
			increment() {

				// this.$store.commit('increment');

				this.$store.commit({
					type:'increment'
				});
			},

			incrementBy() {

				this.$store.commit('incrementBy', {
					amount: 10
				});

				// this.$store.commit({
				// 	type:'incrementBy',
				// 	amount: 10
				// });
			},

			// ...mapMutations([
			// 	'increment',	// 将this.increment()映射为this.$store.commit('increment')

			// 	'incrementBy'	// 将this.incrementBy(payload)映射为this.$store.commit('incrementBy', payload)
			// ])

			// 在Vuex中，mutation都是同步事务，
			// store.commit('increment'): 任何由increment导致的状态变更都应该在此刻完成。
			// 若要处理异步，则使用action。

			// action通过store.dispatch方法触发
			// store.dispatch('increment')
			
			// action支持同样的载荷方式和对象进行分发
			// store.dispatch('incrementAsync', {
			// 	amount: 10
			// });


			incrementAsync() {
				this.$store.dispatch('incrementAsync');
			},

			// ...mapActions([
			// 	'incrementAsync' // 将'this.incrementAsync'映射为'this.$store.dispatch('incrementAsync')'
			// ])

			//  store.dispatch可以处理被触发的action的处理函数返回的Promise，并且store.dispatch仍旧返回Promise

			incrementAsync2() {
				this.$store.dispatch('incrementAsync2').then(function() {
					console.log('incrementAsync2 success.');
				});
			}

		}
		
	}
</script>

<style scoped>
	span{color:#f7c002;font-weight:bold;font-size:30px;}
</style>