import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Mine from './views/mine/Mine.vue';
import Help from './views/help/Help.vue';
import Survey from './views/survey/Survey.vue';
import Answer from './views/survey/Answer.vue';
import Result from './views/survey/Result.vue';
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
            component: Survey,
        },
        {
            path: '/survey/answer',
            name: 'answer',
            component: Answer
        },
        {
            path: '/survey/result',
            name: 'result',
            component: Result
        }
    ]
});
//# sourceMappingURL=router.js.map