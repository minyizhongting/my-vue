import Vue from 'vue'
import Vuex from 'vuex'
import survey from './modules/survey'
import help from './modules/help'

Vue.use(Vuex);

// 每个Vuex应用的核心就是store(仓库).
// 可以通过store.state获取对象状态，通过store.commit触发状态变更。

export default new Vuex.Store({
  modules: {
    survey,
    help
  }
});
