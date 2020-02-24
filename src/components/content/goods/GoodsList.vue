<template>
<!-- 商品列表 -->
  <div class="goods">
    <!-- goods-item="item"拿到每个item，传到GoodsListItem子组件并且展示每一张图片 -->
    <goods-list-item v-for="(item, index) in goods" :key="index" :goods-item="item"/>

  </div>
</template>

<script type="text/ecmascript-6">
import GoodsListItem from './GoodsListItem'
  export default {
    name:"GoodsList",
    components:{
      GoodsListItem
    },
    props:{
      goods:{
        type:Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .goods
    display flex
    flex-wrap wrap
    /* 均等富裕空间0- */
    justify-content space-around
    padding 2px
</style>
