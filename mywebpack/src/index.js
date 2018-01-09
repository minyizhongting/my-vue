import Vue from 'vue';
import VueResource from 'vue-resource';
import router from './routes/';
import App from './App.vue';

import '@/static/index.css';

Vue.use(VueResource);
  
new Vue({
	el: '#app',
	router,
	render: (h) => h(App)
});