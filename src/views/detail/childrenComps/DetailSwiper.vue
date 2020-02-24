<template>
  <div class="detail">
    <!-- 轮播图 -->
    <div class="banner">
      <van-swipe indicator-color="#ff6527" :autoplay="3000">
        <van-swipe-item v-for="(item,index) in topImages" :key = "index" class="detail-item">
                <img :src="item" class="banner_img"/>
        </van-swipe-item>
      </van-swipe>
    </div>
    
  </div>
</template>

<script type="text/ecmascript-6">
// import {Swiper, SwiperItem} from 'components/common/swiper'
  export default {
    props:{
      topImages:{
        type:Array,
        default(){
          return []
        }
      }
    },
    components:{

    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
 .detail
   height 100%
   width 100%
   .banner
     width 100%
     height 300px
   .van-swipe
    height 300px
    background-color:#fff;
    .banner_img
      width 100%

</style>


