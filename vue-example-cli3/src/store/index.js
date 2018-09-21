import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        count: 0,
        todos: [
            {
                id: 1,
                text: 'first',
                done: true
            },
            {
                id: 2,
                text: 'second',
                done: false
            }
        ]
    },
    getters: {
        doneTodos: (state) => {
            return state.todos.filter((todo) => todo.done);
        },
        doneTodosCount: (state, getters) => {
            return getters.doneTodos.length;
        }
    },
    mutations: {
        increment(state, n) {
            state.count += n;
        }
    },
    actions: {
        incrementAsync(context, n) {
            setTimeout(function () {
                context.commit('increment', n);
            }, 1000);
        }
    }
});
//# sourceMappingURL=index.js.map