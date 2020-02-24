<template>
<!-- 图片展示组件 -->
  <div class="goods_info" v-if="detailInfo.detailImage">
    <div class="goods_desc">
      <div class="start"></div>
      <div class="desc">{{detailInfo.desc}}</div>
      <div class="end"></div>
    </div>
    <div class="detail_key">{{detailInfo.detailImage[0].key}}</div>
    <div class="detail_list">
      <img v-for="(item, index) in detailInfo.detailImage[0].list"
      :src="item" alt="" :key="index" @load="imageLoad">
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props:{
      /* 接收父组件传递过来的商品详情数据 */
      detailInfo:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    data () {
      return {
        counter:0,//记录图片的个数
        imageLength:0,//记录图片的长度
      }
    },
    methods: {
      imageLoad(){
        // 判断所有图片加载完成之后那么进行一次加载就可以了，++this.counter先加再对比---->this.counter+=1
        if(++this.counter === this.imageLength){
          this.$emit('imageLoad')//---此代码是向外面传递点击监听事件，到那时图片有很多，加载起来很慢，因此用if判断
        }
      }
    },
    watch: {
      /*监视商品详情数据---获取图片的个数 */
      detailInfo(){
        this.imageLength = this.detailInfo.detailImage[0].list.length
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .goods_info
    padding 20px 0
    border-bottom 5px solid  #f2f5f8
    .goods_desc
      padding 0 15px
      .desc
        padding 15px 0
        font-size 15px
        color #333
        letter-spacing 2px
    .goods_desc .start, .goods_desc .end
       width 90px
       height 1px
       background-color #a3a3a5
       position relative
    .goods_desc .start::before, .goods_desc .end::after
       content ''
       width 5px
       height 5px
       position absolute
       bottom 0
       background-color #333
    .goods_desc .end::after
       right 0
    .start
      float left
    .end
      float right
    .detail_key
      margin 10px 0 10px 15px
      font-size 15px
    .detail_list>img
      width 100%
</style>
