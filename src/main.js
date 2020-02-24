import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant'
import 'vant/lib/index.css';
import ElementUI from 'element-ui'
import FastClick from 'fastclick'
import toast from 'components/common/toast'
import 'element-ui/lib/theme-chalk/index.css'
import VueLazyLoad from 'vue-lazyload'


Vue.use(ElementUI)
Vue.use(VueLazyLoad,{
  loading: require('assets/img/common/a.gif')
})

Vue.use(Vant)
// 安装插件
Vue.use(toast)
// 解决移动端300ms延迟
FastClick.attach(document.body)




new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')


