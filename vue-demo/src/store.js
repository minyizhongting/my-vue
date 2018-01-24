import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const moduleA = {
	// 若希望模块具有更高的封装度和复用度，可以通过添加namespaced:true的方式使其成为命名空间模块。
	// 当模块被注册后，它的所有getter、action及mutation都会自动根据模块的注册路径调整命名。
	namespaced: true, 
	state: {
		count: 0
	},
	getters: {
		doubleCount(state) {
			return state.count * 2;
		},
		sumWithRootCount(state, getters, rootState) { // 模块内部的getter，根节点状态会作为第三个参数暴露出来
			return state.count + rootState.count;
		}
	},
	mutations: {
		increment(state) { // 模块内部的mutation和getter，接受的第一个参数是模块的局部状态
			state.count++;
		}
	},
	actions: {
		incrementIfOddOnRootSum({state, commit, rootState}) { // 模块内部的action，局部状态通过context.state暴露出来，根节点状态则为context.rootState
			if ((state.count + rootState.count) %2 == 1) {
				commit('increment');
			}
		}
	}
};

const moduleB = {
	state: {},
	getters: {}
};

// 每个Vuex应用的核心就是store(仓库).
// 可以通过store.state获取对象状态，通过store.commit触发状态变更。

const store = new Vuex.Store({
	modules: {
		a: moduleA,
		b: moduleB
	},
	state: {
		count: 5,
		todos: [
			{id: 1, done: true},
			{id: 2, done: false},
			{id: 3, done: true}
		]
	},
	
	// Vuex允许在store中定义"getter"(可以认为是store的计算属性)
	// Getter会暴露为store.getters对象
	// Getter接受state作为其第一个参数，也可以接受其他getter作为第二个参数
	getters: {
		doneTodos: state => {
			return state.todos.filter(todo => todo.done)
		},
		doneTodosCount: (state, getters) => {
			return getters.doneTodos.length;
		},
		// 也可以通过让getter返回一个函数，实现给getter传参，对store里的数组进行查询时非常有用
		getTodoById: (state) => (id) => {
			return state.todos.find(todo => todo.id == id)
		}
	},

	// 更改vuex的store中的状态的唯一方法就是提交mutation
	// mutation必须是同步函数
	// mutation类似于事件，每个mutation都有一个字符串的事件类型(type)和一个回调函数(handler)
	// 不能直接调用一个mutation handler，这个选项更像是一个事件注册。若要唤醒一个mutation handler，要以相应的type调用store.commit方法
	// store.commit('increment');
	// 提交mutation的另一种方式是直接使用包含type属性的对象：
	// store.commit({
	// 	type: 'increment',
	// 	amount: 10
	// });
	mutations: {
		// 可以向store.commit传入额外的参数，即mutation的载荷，大多数情况下载荷应该是个对象，包含多个字段
		increment: function(state) {
			state.count++;
		},
		incrementBy: function(state, payload) {
			state.count += +payload.amount;
		}
	},

	// action类似于mutaion，不同在于：
	// action提交的是mutation，而不是直接变更状态；
	// action可以包含任意异步操作。
	actions: {
		// action函数接受一个与store实例具有相同方法和属性的context对象
		// increment({commit}) {	// ES6的参数解构来简化代码
		// 	commit('increment');
		// }
		increment(context) { 
			context.commit('increment');
		},
		// mutation必须同步执行，action内部可以执行异步操作
		incrementAsync({commit}) {
			setTimeout(() => {
				commit('increment');
			}, 1000)
		},
		incrementAsync2({commit}) {
			return new Promise(function(resolve, reject) {
				setTimeout(() => {
					commit('increment'),
					resolve()
				}, 1000);
			})
		}
	}
});


export default store;
