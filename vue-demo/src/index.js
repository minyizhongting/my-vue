import Vue from 'vue';
// import VueResource from 'vue-resource';  // 不再推荐使用
import axios from 'axios';
import router from './routes/';
import App from './App.vue';
import '@/static/index.css';
// 安装其他插件时，可以直接引入并使用Vue.use()来注册。
// Vue.use(VueResource);
// axios不是vue插件，所以只能在每个需要发送请求的组件中即时引入。
// 为了解决这个问题，在引入axios之后，通过修改原型链，来更方便的使用。
// 如下设置后，就可以按照vue-resource的形式发送请求了。
Vue.prototype.$http = axios;
new Vue({
    el: '#app',
    router: router,
    render: function (h) { return h(App); }
});
//# sourceMappingURL=index.js.map