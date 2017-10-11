import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { store } from './store/index'
import './components/About/data.json'

new Vue({
    el: '#app',
    /* методы примешиваются к глобальному объекту Vue и становятся доступны через this */
    router,
    store,
    render: h => h(App)
})