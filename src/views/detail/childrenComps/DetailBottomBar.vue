<template>
<!-- 底部工具栏的封装 -->
  <div class="detail_bottom">
    <div class="bottom_item bottom_item_left">
      <div>
        <i class="icon service"></i>
        <span class="text">客服</span>
      </div>
      <div>
        <i class="icon shop"></i>
        <span class="text">店铺</span>
      </div>
      <div>
        <i class="icon select"></i>
        <span class="text">收藏</span>
      </div>
    </div>
    <div class="bottom_item bottom_item_right">
      <div class="cart" @click="cartClick">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {

      }
    },
    methods: {
      cartClick(){
        // 把这个点击加入购物车事件自定义事件传到父组件，因为是内部组件，需要把这个点击事件传给父组件，父组件通过这个事件才好把每一个商品
        // 加入到购物车
        this.$emit('addToCart')

      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .detail_bottom
    height 58px
    background #ffffff
    position fixed
    display flex
    text-align center
    left 0
    right 0
    bottom 0
    .bottom_item
      flex 1
      display flex
    .bottom_item>div
      flex 1
    .bottom_item_left .text
      font-size 13px
    .bottom_item_left .icon
      width 22px
      height 22px
      /* 行内元素设置宽高不生效，转换成块级元素设置的宽高才能生效 */
      display block
      margin 10px auto 3px
      background url("~assets/img/detail/detail_bottom.png") 0 0/100%
    .bottom_item_left .service
      background-position 0 -54px
    .bottom_item_left .shop
      background-position 0 -98px
    .bottom_item_right
      font-size 15px
      color #333
      line-height 58px
    .bottom_item_right .cart
      background-color #ffe817
    .bottom_item_right .buy
      background-color #f69
      color #ffffff
</style>
