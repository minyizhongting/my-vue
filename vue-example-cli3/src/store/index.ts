import Vue from 'vue'
import Vuex from 'vuex'

import survey from './modules/survey';
import help from './modules/help';

Vue.use(Vuex);




export default new Vuex.Store({
  modules: {
    survey,
    help
  }
});

