import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './map/';

Vue.use(VueRouter);

var router = new VueRouter({
  routes
});

export default router;