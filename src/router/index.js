import VueRouter from 'vue-router'
import Vue from 'vue'

const Home = () => import("../views/home/Home.vue")
const Cart = () => import("../views/cart/Cart.vue")
const Category = () => import("../views/category/Category.vue")
const Profile = () => import("../views/profile/Profile.vue")
const Dtail = () => import("../views/detail/Dtail.vue")
// 声明使用
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path:'/home',
    component:Home
  },
  {
    path:'/category',
    component:Category
  },
  {
    path:'/cart',
    component:Cart
  },
  {
    path:'/profile',
    component:Profile
  },
  {
    path:'/detail/:iid',
    component:Dtail
  }
]

const router = new VueRouter({
  routes,
  mode:'history'
})

export default router

