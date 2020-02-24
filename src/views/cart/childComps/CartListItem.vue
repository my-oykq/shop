<template>
<!-- 封装每个cartList的item组件 -->
  <div class="shop-item">
      <div class="item-selector">
        <!-- 小图标 -->
      <CheckButtom @click.native="checkClick" :is-checked="product.checked"/>
      </div>
      <!-- 图片 -->
      <div class="item-img">
        <img :src="product.image" alt="商品图片" class="product-img">
      </div>
      <!-- 商品描述，标题，价格 -->
      <div class="item-info">
        <div class="item-title">{{product.title}}</div>
        <div class="item-desc">{{product.desc}}</div>
        <div class="item-bottom">
          <div class="item-price">￥{{product.price}}</div>
          <!-- 去计算 -->
          <div class="item-count">x{{product.count}}</div>
        </div>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
import CheckButtom from "./CheckButtom"

  export default {
    props:{
      product:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    components:{
      CheckButtom
    },
    methods: {
      checkClick(){
        // 取反，点击是激活，在点击就是不激活
        this.product.checked = !this.product.checked
      }
    },

  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    .shop-item
      width 100%
      display -webkit-box
      display -ms-flexbox
      display flex
      font-size 0
      padding 5px
      border-bottom 1px solid #ccc
      .item-selector
        width 14%
        display flex
        justify-content center
        align-items center
      .item-img
         padding 5px
         .product-img
            width 80px
            height 100px
            display block
            border-radius 5px
      .item-info
         font-size 17px
         color #333
         padding 5px 10px
         position relative
         overflow hidden
        .item-title, .item-desc
          width 180px
          white-space nowrap//超出文本不换行
          overflow hidden//超出文本隐藏
          text-overflow ellipsis  //超出文本显示...
         .item-desc
           color #666
           font-size 14px
           margin-top 15px
        .item-bottom
          display flex
          margin-top 10px
          position absolute
          left 10px
          right 10px
          bottom 10px
          .item-price
            flex 2
            color orangered
</style>
