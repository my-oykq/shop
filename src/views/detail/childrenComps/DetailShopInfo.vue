<template>
  <div class="detail_info">
    <!-- logo ,商品展示-->
    <div class="detail_top">
      <img :src="shop.logo" alt="" class="shop_img">
      <span class="title">{{shop.name}}</span>
    </div>

    <div class="detail_middle">
      <div class="detail_middle-item shop_middle_left">
        <div class="detail_sells">
          <div class="sells-count">{{shop.sells | sellCount}}</div>
          <div class="sells_text">总销量</div>
        </div>
        <div class="info_goods">
          <div class="goods_count">{{shop.goodsCount}}</div>
          <div class="goods_text">全部宝贝</div>
        </div>
      </div>
     <div class="detail_middle-item shop_middle_right" v-if="shop.score">
        <table>
          <tr v-for="(item, index) in shop.score" :key="index">
            <td class="shop_title">{{item.name}}</td>
            <td  class="shop_score" :class="{'score-better':item.isBetter}">{{item.score}}</td>
            <td class="shop_better" :class="{'better-more':item.isBetter}"><span>{{item.isBetter ? '高':'低'}}</span></td>
          </tr>
        </table>
     </div>
    </div>
    <div class="shop_bottom">
       <div class="shop_enter">进店逛逛</div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        message:'商家展示'
      }
    },
    // 从父组件把一些商品信息传递到这个组件中
    props:{
      shop:{
        type:Object,
        default(){
          return {}
        }
      }
    },

    filters:{
      sellCount(value){
        if(value < 10000) return value;
        // 保留一位小数
        return (value/10000).toFixed(1) + '万'
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .detail_info
    padding 22px 8px
    border-bottom 5px solid #f2f5f8
    .detail_top
       display flex
       .shop_img
         width 45px
         height 45px
         border-radius 50%
         border 1px solid rgba(0,0,0,.1)
       .title
         margin-left 15px
         position relative
         top 18px
    .detail_middle
       margin-top 20px
       display flex
       justify-content space-evenly
       align-items center
       .detail_middle-item
         flex 1
       .shop_middle_left
         display flex
         justify-content space-evenly
         border-right 1px solid rgba(0, 0, 0, .1)
         .detail_sells, .info_goods
           font-size 12px
           line-height 25px
         .info_goods
           text-align center
          .sells-count, .goods_count
            font-size 18px
            color #333

       .shop_middle_right

         font-size 13px
         width 140px
         color #333
       .shop_middle_right table
          width 120px
          margin-left 30px
       .shop_middle_right table td
          padding 6px 2px
       .shop_title
         margin-right 5px
       .shop_score
         color  #5ea732
       .score-better
          color  #f13e3a
       .shop_better span
          color #fff
          background-color #5ea732
       .better-more span
          background-color #f13e3a
          color #ffffff

    .shop_bottom
      text-align center
      margin-top 25px

      .shop_enter
        background-color #f2f5f8
        width 150px
        height 30px
        line-height 30px
        border-radius 10px
        text-align center
        display inline-block
</style>
