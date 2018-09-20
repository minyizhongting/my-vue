import Book from '#/views/Book.vue';
import NotFound from '#/views/NotFound.vue';
import My from '#/views/my.vue';
import childA from '#/components/my/childA.vue';
import childB from '#/components/my/childB.vue';
export default [
    {
        path: '/',
        alias: '/home',
        // component: Home
        // 打包构建时，js包会非常大。可以根据不同路由，将组件分割成不同的代码库。当路由被访问时才加载对应组件。
        component: function (resolve) {
            // require(['#/views/Home'], resolve);
            // require.ensure(paths,callback,errorCallback,chunkName)
            // require.ensure([], function() {}, String)，此API的第四个参数是给这个模块命名，否则chunkFilename中的[name]是一个自动分配的、可读性差的id，最后生成的js文件名不友好
            require.ensure(['#/views/Home'], function (require) {
                require(['#/views/Home'], resolve);
            }, function () { }, 'home');
        }
    },
    {
        path: '/my',
        component: My,
        children: [
            {
                path: '/child/a',
                component: childA
            },
            {
                path: '/child/b',
                component: childB
            }
        ]
    },
    {
        path: '/book',
        component: Book
    },
    // 404 置后
    {
        path: '*',
        component: NotFound
    }
];
//# sourceMappingURL=index.js.map