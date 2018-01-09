import my from './my.js';

export default [
	{
		path: '/',
		alias: '/home',
		component (resolve) {
			// require(['#/views/Home'], resolve);
			// 这样写最后生成的js文件名是webpack生成的一堆数字，不友好，解决方案是require.ensure([], function() {})
			require.ensure(['#/views/Home'], function(require) {
				require(['#/views/Home'], resolve);
			}, 'home');
		}
	},

	my,

	{
		path: '/book',
		component (resolve) {
			// require(['#/views/Book'], resolve);
			require.ensure(['#/views/Book'], function(require) {
				require(['#/views/Book'], resolve);
			}, 'book');
		}
	},
	// 404 置后
	{
		path: '*',
		component (resolve) {
			require.ensure(['#/views/NotFound'], function(require) {
				require(['#/views/NotFound'], resolve);
			}, 'notfound');
		}
	}
]