<template>
<!-- 对scroll进一步的封装  ref一般给子组件绑定，做标记，明确的去拿到某一个子组件-->
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <!-- 代替在Home组件中scroll包裹着的组件 -->
        <slot></slot>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import BScroll from 'better-scroll'
  export default {
    name:"Scroll",
    data () {
      return {
        scroll:null
      }
    },
    props:{
      probeType:{
        type:Number,
        default:0
      },
      // 上拉加载更多
      pullUpLoad:{
        type:Boolean,
        default:true
      }
    },
    mounted () {
      // 1.
        this.scroll = new BScroll(this.$refs.wrapper,{
          // 解决原生dom的点击事件，流行，新款，精选能够点击
          click:true,
          // 实时监听
          probeType:this.probeType,
          // 动态的上拉加载
          pullUpLoad:this.pullUpLoad
      })
      // 2.监听滚动的位置--来使小箭头处于显示和隐藏
      this.scroll.on('scroll',(position)=>{
        // 这里不需要实时用position，哪个组件想用通过自定义事件把position传到父组件Home
        this.$emit('scroll',position)
      })
      // 监听上拉加载
     this.scroll.on('pullingUp',()=>{
      //  在这个组件无需做上拉加载更多
       this.$emit('pullingUp')
     })
    },
    methods: {
      // 通过记录滑动的位置，在该需要的组件中调用该方法即可，scrollTo(x， y， 事件),x, y在调用这个函数名时可以传入确定的参数
      scrollTo(x, y, time=300){
       this.scroll && this.scroll.scrollTo(x, y, time)
      },
      // 完成加载
      finishPullUp(){
        this.scroll && this.scroll.finishPullUp()
      },
      // 缓存组件
      getScrollY(){
        return this.scroll ? this.scroll.y : 0
      },
      // 刷新
      refresh(){
        this.scroll && this.scroll.refresh()
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>


</style>
