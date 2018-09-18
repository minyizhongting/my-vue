const help = {
  // 若希望模块具有更高的封装度和复用度，可以通过添加namespaced:true的方式使其成为命名空间模块。
  // 当模块被注册后，它的所有getter、action及mutation都会自动根据模块的注册路径调整命名。
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
    doneTodosCount: (state, getters) => {
      // 接受state作为第一个参数
      // 可以接受getter作为第二个参数，访问其他getter
      // 还可接受第三个参数rootState，为根结点状态
      return getters.doneTodos.length;
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
    // 模块内部的mutation和getter，接受的第一个参数是模块的局部状态
    increment(state, n) {    // es6 使用常量作为函数名
      state.count += n;
    }
  },

  // action类似于mutaion，不同在于：
  // action提交的是mutation，而不是直接变更状态；
  // action可以包含任意异步操作。

  actions: {
    // incrementAsync({ commit }, n) {  // ES6的参数解构来简化代码
    //     commit('increment', n)
    // },
    // action函数接受一个与store实例具有相同方法和属性的context对象
    incrementAsync(context, n) {
      setTimeout(function () {
        context.commit('increment', n);
      }, 1000);
    }
  }
};

export default help;
