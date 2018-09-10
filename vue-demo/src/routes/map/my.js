export default {
  path: '/my',
  component(resolve) {
    require.ensure(['#/views/my'], function (require) {
      require(['#/views/my'], resolve);
    }, 'my');
  },
  children: [
    {
      path: '/child/a',
      component(resolve) {
        require.ensure(['#/components/my/childA'], function (require) {
          require(['#/components/my/childA'], resolve);
        }, 'childa');
      }
    },
    {
      path: '/child/b',
      component(resolve) {
        require.ensure(['#/components/my/childB'], function (require) {
          require(['#/components/my/childB'], resolve);
        }, 'childb');
      }
    }
  ]
}