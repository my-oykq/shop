/* index是store文件中最核心的文件
1.修改state中的任何数据都是通过mutations直接修改
2.将cartList中iid与payload的iid对比-----就不会多次将同一件添加到购物车里

*/
import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
// 1.安装插件
Vue.use(Vuex)
// 2.创建store对象
const state = {
  cartList:[]
}
const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
// 3.挂载Vue实例上
export default store
