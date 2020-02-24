<template>
  <div>
    <!-- 导航 -->
    <nav-bar class="nav-bar"><div slot="center">购物车({{cartLength}})</div></nav-bar>
    <!-- 商品列表 -->
    <cart-list/>
    <!-- 底部汇总 -->
    <BottomBar/>
  </div>
</template>

<script type="text/ecmascript-6">
import NavBar from 'components/common/navBar/NavBar'
import BottomBar from './childComps/BottomBar'
import CartList from './childComps/CartList'
// 导入mapGetters，读取getters中的属性
import {mapGetters} from 'vuex'
  export default {
    components:{
      NavBar,
      CartList,
      BottomBar
    },
    computed:{
      // 将 getter 混入 computed 对象中,来读取getters中的数据
     ...mapGetters(['cartLength'])
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .nav-bar
    background-color var(--color-tint)
    color #fff

</style>
