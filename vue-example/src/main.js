// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import routes from './router'
import VueRouter from 'vue-router'
import iview from 'iview'
import store from './store'
import axios from 'axios'

// mock
// 第一种方式，引入mock.js
// 第二种方式，使用json-server，创建伪RESTful服务器的工具
require('./mock');

// Vue.use(axios);
Vue.prototype.$axios = axios;

Vue.use(iview);

Vue.use(VueRouter);

const routerConfig = {routes};

const router = new VueRouter(routerConfig);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})
