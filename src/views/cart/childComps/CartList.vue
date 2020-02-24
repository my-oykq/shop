<template>
  <div class="cart_list">
    <scroll class="content" ref="scroll">
      <!-- 把遍历得到的每个item传递到CartListItem组件 -->
      <cart-list-item v-for="(item, index) in cartList" :key="index" :product="item"/>
    </scroll>
  </div>
</template>

<script type="text/ecmascript-6">
import { mapGetters } from 'vuex'
import CartListItem from './CartListItem'

import Scroll from 'components/common/scroll/Scroll'
  export default {
    name:"CartList",
    components:{
      Scroll,
      CartListItem
    },
    computed:{
      ...mapGetters(['cartList'])
    },
    activated(){
      this.$refs.scroll.refresh()
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .cart_list
    height 100vh
    .content
      height calc(100% - 44px - 49px)
      overflow hidden
</style>
