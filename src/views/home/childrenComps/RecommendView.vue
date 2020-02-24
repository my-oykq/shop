<template>
  <div class="recommend">
    <div v-for="(item,index) in recommends" class="recommends-item" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="" class="recommends-img">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name:"RecommendView",
    // 拿到数据展示
    props:{
      recommends:{
        type:Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .recommend
    width 100%
    display flex
    text-align center
    font-size 12px
    // margin-top 12px
    padding 10px 0 20px
    border-bottom 8px solid #eeeeee
    .recommends-item
    /* 每个图片均等分布 */
      flex 1
      .recommends-img
        width 70px
        height 70px
        margin-bottom 10px
</style>
