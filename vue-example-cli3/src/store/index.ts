import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

interface Todos{
  id: number,
  text: string,
  done: boolean
}


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
    doneTodos: (state): Todos[] => {
      return state.todos.filter((todo: Todos) => todo.done);
    },
    doneTodosCount: (state, getters): number => {

      return getters.doneTodos.length;
    }
  },

  mutations: {
    increment(state, n: number) {    // es6 使用常量作为函数名
      state.count += n;
    }
  },

  actions: {
    incrementAsync(context, n: number) {
      setTimeout(function () {
        context.commit('increment', n);
      }, 1000);
    }
  }
});

