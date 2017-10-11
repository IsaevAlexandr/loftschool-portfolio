import Vue from 'vue'
import VueRouter from 'vue-router'

// import about from './components/About'
import appAbout from './components/About'
import appBlog from './components/Blog'
import appWorks from './components/Works'
Vue.use(VueRouter);

const routes = [
    { path: '/', component: appAbout },
    { path: '/blog', component: appBlog },
    { path: '/my-works', component: appWorks }
]

export default new VueRouter({ routes, mode: 'history' })