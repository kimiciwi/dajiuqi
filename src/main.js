
import Vue from 'vue';
import App from './App.vue';

import Home from './components/home/Home.vue';
import Vip from './components/vip/vip.vue'
import Shopcart from './components/shopcart/shopcart.vue'
import Search from './components/search/search.vue'


import MintUi from 'mint-ui';
import 'mint-ui/lib/style.css';
Vue.use(MintUi);

import './static/libs/mui-master/dist/css/mui.css';

import VueRouter from 'vue-router';
Vue.use(VueRouter);

let router = new VueRouter({
  routes:[
    { path:'/',redirect:{name:'home'} },
    {name:'home',path:'/home',component:Home},
    {name:'vip',path:'/vip',component:Vip},
    {name:'shopcart',path:'/shopcart',component:Shopcart},
    {name:'search',path:'/search',component:Search},
  ]
})

import Axios from 'axios';
Vue.prototype.$ajax = Axios;
Axios.defaults.baseURL = 'http://182.254.146.100:8899/api/';

new Vue({
  el:'#app',
  router,
  render:c=>c(App)
})











/*

//引入第三方包 开始
import Vue from 'vue';

//引入组件 开始
import Home from './components/home/Home.vue'
import App from './App.vue';
//引入组件 结束


//MintUi: 开始
import MintUi from 'mint-ui';
import 'mint-ui/lib/style.css';
Vue.use(MintUi);
//MintUi: 结束

// Mui: 开始
import './static/libs/mui-master/dist/css/mui.css';
// Mui: 结束


//VueRouter: 开始
import VueRouter from 'vue-router';
Vue.use(VueRouter);
let router = new VueRouter({
   routes:[
        {name:'home',path:'/home',component:Home}
   ]
})
//VueRouter: 结束

//Axios: 开始
import Axios from 'axios';
Vue.prototype.$ajax = Axios;
Axios.defaults.baseURL = 'http://182.254.146.100:8899/api/';
//Axios: 结束


//引入第三方包 结束


new Vue({
    el:'#app',
    router,
    render:c=>c(App)
})
*/