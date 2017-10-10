import Vue from 'vue'
import Vuex from 'vuex'
import VueResourse from 'vue-resource'

/*подключить плагин*/
Vue.use(Vuex);
Vue.use(VueResourse);

import skills from './modules/skills';
import blog from './modules/blog';

/* подключаем модули */
export const store = new Vuex.Store({
    getters: {
        /* Модуль VueResourse */
        $http: () => (VueResourse)
    },
    modules: {
        skills,
        blog
    }
})