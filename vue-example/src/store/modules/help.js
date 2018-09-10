const help = {
  namespaced: true,
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
    doneTodos: state => {
      return state.todos.filter(todo => todo.done);
    },
    doneTodosCount: (state, getters) => {   // 可以接受getter作为第二个参数，访问其他getter
      return getters.doneTodos.length;
    }
  },
  mutations: {
    increment(state, n) {    // es6 使用常量作为函数名
      state.count += n;
    }
  },
  actions: {
    // incrementAsync({ commit }, n) {  // 参数解构来简化代码
    //     commit('increment', n)
    // },
    incrementAsync(context, n) {
      setTimeout(function () {
        context.commit('increment', n);    // 与store实例具有相同属性和方法的context对象
      }, 1000);
    }
  }
};

export default help;
