<template>
<!-- v-if--有数据展示没有数据不展示 -->
  <div class="detail_baseinfo" v-if="Object.keys(goods).length !== 0">
    <!-- 轮播图下面，商品详情的展示 -->
    <div class="info-title">{{goods.title}}</div>
    <!-- 价格 -->
    <div class="detail_price">
      <span class="new_price">{{goods.newPrice}}</span>
      <span class="old-price">{{goods.oldPrice}}</span>
      <span class="dis_price">{{goods.discount}}</span>
    </div>

    <div class="info_other" >
      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span>{{goods.services[goods.services.length-1].name}}</span>
    </div>

     <div class="info_service" >
      <span class="info-service-item" v-for="index in goods.services.length-1" :key="index">
        <img :src="goods.services[index-1].icon" class="detail_img">
        <span>{{goods.services[index-1].name}}</span>
      </span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name:"DetailBaseInfo",
    props:{
      // 从父组件把一些商品信息传递到这个组件中
      goods:{
        type:Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .detail_baseinfo
    margin-top 15px
    padding 0 8px
    border-bottom 5px solid #f2f5f8
    .info-title
       color #222
  .detail_price
    margin-top 10px
    .new_price
       color var(--color-high-text)
       font-size 24px
    .old-price
       font-size 13px
       margin-left 5px
       color #999
       text-decoration line-through
    .dis_price
      background-color var(--color-high-text)
      border-radius 10px
      padding 2px 5px
      color #ffffff
      margin-left 5px
      font-size 12px
  .info_other
     margin-top 15px
     display flex
     justify-content space-between
     line-height 30px
     font-size 13px
     color #999
     border-bottom 1px solid rgba(100,100,100,.1)
  .info_service
    display flex
    justify-content  space-between
    .info-service-item
      font-size 13px
      color #333
      line-height 60px
      .detail_img
        width 14px
        height 14px
        position relative
        top 2px

</style>
