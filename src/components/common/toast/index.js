import Toast from './Toast.vue'

const obj = {}

obj.install = function(Vue){
  // 1.创建组件构造器
  const toastConstructor = Vue.extend(Toast)
  // 2.new这种方式，根据组件构造器，创建出一个组件实例对象
  const toast = new toastConstructor()
    // 3.将组件实例对象，手动挂载到某个元素上,创建出元素才能挂载
    toast.$mount(document.createElement("div")),
    // 4.toast.$el对应的就是div
    document.body.appendChild(toast.$el)
    // 5.把toast挂载到原型上边
    Vue.prototype.$toast = toast
}
export default obj
