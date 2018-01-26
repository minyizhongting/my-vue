import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
	count: 0
};

// 将disabled绑定到一个布尔值上，如果为真，则disabled属性就加在button上
const getters = {
	evenOrOdd: state => state.count % 2 == 0 ? 'even' : 'odd',
	ifDisabled: state => state.count % 2 == 0 ? true : false 
};

const mutations = {
	increment(state) {
		state.count++;
	},
	decrement(state) {
		state.count--;
	}
};

const actions = {
	increment({ commit }) {
		commit('increment');
	},
	decrement({ commit }) {
		commit('decrement');
	},
	incrementIfOdd({ commit, state }) {
		if ((state.count + 1) % 2 == 0) {
			commit('increment');
		}
	},
	incrementAsync({ commit }) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				commit('increment');
				resolve();
			}, 1000);
		})
	}
};



export default new Vuex.Store({
	state,
	getters,
	mutations,
	actions
});

