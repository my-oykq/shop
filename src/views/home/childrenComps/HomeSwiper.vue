<template>
<!-- 最外层包裹轮播图 -->
  <div class="swiper_nav">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <!-- 每一张图片，遍历 -->
        <div class="swiper-slide" v-for="(item, index) in barner" :key="index">
          <a :href="item.link">
            <img :src="item.image" alt="努力加载中，请稍候~~~" @load="imageLoad">
          </a>
        </div>
      </div>

      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
  export default {
    name:'HomeSwiper',
    props:{
      barner:{
        type:Array,
        default(){
          return[]
        }
      }
    },
    data () {
      return {
        isLoad:false
      }
    },
    mounted () {
      new Swiper('.swiper-container',{
        loop:true,//循环模式选项
        autoplay:true,
         observer:true,//修改swiper自己或子元素时，自动初始化swiper
        // 需要分页器
        pagination:{
          el:'.swiper-pagination'
        }
      })
    },
    methods: {
      imageLoad(){
        // 为了不让HomeSwiper多次发出事件，使用isLoad变量来进行状态的记录
        if( !this.isLoad){
          // 加载完成之后发出事件，在Home中获取正确的值
          this.$emit('swiperImageLoad')
          // console.log('---')
          // 重置isLoad，取反就是false，就不会再次触发事件了
          this.isLoad = true
        }
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .swiper_nav
     background #fff
     .swiper-container
       width 100%
       height 100%
       .swiper-wrapper
          width 100%
          height 100%
          .swiper-slide
            display flex
            /*给img图片给width：100%是填充父元素的宽度 */
            img
              width 100%
       .swiper-pagination
          >.swiper-pagination-bullet-active
            background-color rgba(212,62,46,1.0)
</style>
