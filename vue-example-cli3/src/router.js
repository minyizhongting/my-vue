import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


const routes = [
  {
    path: '/',
    name: 'index',
    meta: {
      title: '首页'
    },
    component: (resolve) => require(['./views/Home'], resolve)
  },
  {
    path: '/mine',
    name: 'mine',
    meta: {
      title: '我的'
    },
    component: (resolve) => require(['./views/mine/Mine'], resolve)
  },
  {
    path: '/survey',
    name: 'survey',
    meta: {
      title: '答题'
    },
    component: (resolve) => require(['./views/survey/Survey'], resolve),
  },
  {
    path: '/survey/answer',
    name: 'answer',
    meta: {
      title: '答题ing'
    },
    component: (resolve) => require(['./views/survey/Answer'], resolve)
  },
  {
    path: '/survey/result',
    name: 'result',
    meta: {
      title: '答题结果'
    },
    component: (resolve) => require(['./views/survey/Result'], resolve)
  },
  {
    path: '/help',
    name: 'help',
    meta: {
      title: '帮助中心'
    },
    component: (resolve) => require(['./views/help/Help'], resolve)
  }
];


export default new Router({
  routes
})
