<template>
<!-- 每一个商品列表item、 -->
  <div class="goods-item" @click="goodsClick">
    <img v-lazy="showImage">
    <div class="goods-info">
       <!-- 标题 -->
      <p>{{goodsItem.title}}</p>
     <!-- 价格 -->
      <span class="price">￥{{goodsItem.price}}</span>
      <!-- 搜藏 -->
      <span class="collet">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name:"GoodsListItem",
    props:{
      goodsItem:{
        type:Object,
        default(){
          return {}
        }
      }
    },
   methods: {
     goodsClick(){
      //  路由跳转,拿到详情信息
       this.$router.push('/detail/'+ this.goodsItem.iid)
     }
   },
   computed:{
    //  判断图片的显示，如果有image就显示image，否则显示img图片
     showImage(){
       return this.goodsItem.image || this.goodsItem.show.img
     }
   }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .goods-item
    padding-bottom 40px
    position relative
    width 48%
  .goods-item>img
    display flex
    width 100%
    border-radius 5px
  .goods-info
    font-size 12px
    text-align center
    position absolute
    bottom 5px
    left 0
    right 0
    overflow hidden
    text-align center
  .goods-info>p
      overflow hidden
      text-overflow ellipsis
      white-space nowrap
      margin-bottom 3px
  .price
    margin-right 20px
    color: var(--color-high-text);
  .collet
    position relative
  .collet::before
     content ''
     position absolute
     left -15px
     top 0

     width 15px
     height 15px
     background url("~assets/img/common/collect.svg") 0 0/14px 14px
</style>
