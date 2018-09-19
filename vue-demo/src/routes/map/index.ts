import my from './my.js';

export default [
  {
    path: '/',
    alias: '/home',
    component(resolve) {
      // require(['#/views/Home'], resolve);
      // require.ensure([], function() {}, String)，此API的第三个参数是给这个模块命名，否则chunkFilename中的[name]是一个自动分配的、可读性差的id，最后生成的js文件名不友好
      require.ensure(['#/views/Home'], function (require) {
        require(['#/views/Home'], resolve);
      }, 'home');
    }
  },

  my,

  {
    path: '/book',
    component(resolve) {
      // require(['#/views/Book'], resolve);
      require.ensure(['#/views/Book'], function (require) {
        require(['#/views/Book'], resolve);
      }, 'book');
    }
  },
  // 404 置后
  {
    path: '*',
    component(resolve) {
      require.ensure(['#/views/NotFound'], function (require) {
        require(['#/views/NotFound'], resolve);
      }, 'notfound');
    }
  }
]