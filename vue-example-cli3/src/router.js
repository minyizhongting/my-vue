import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Mine from './views/mine/Mine.vue';
import Help from './views/help/Help.vue';
import Survey from './views/survey/Survey.vue';
Vue.use(Router);
export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/mine',
            name: 'mine',
            component: Mine
        },
        {
            path: '/help',
            name: 'help',
            component: Help
        },
        {
            path: '/survey',
            name: 'survey',
            component: Survey
        }
    ]
});
//# sourceMappingURL=router.js.map