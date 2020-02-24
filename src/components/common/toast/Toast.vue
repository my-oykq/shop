<template>
<!-- 弹出框组件的封装 -->
  <div class="toast" v-show="isShow">
    <div class="toast-title">{{message}}</div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name:"Toast",
    data () {
      return {
        message:'',
        isShow:false
      }
    },
    methods: {
      show(message="默认文字", duration=2000){
         this.isShow = true;
         this.message = message
         setTimeout(()=>{
          //  延迟隐藏
           this.isShow = false;
          //  清空message
           this.message = ''
         },duration)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    .toast
      position fixed
      color #fff
      // 居中
      top 50%
      left 50%
      transform translate(-50%,-50%)
      padding 8px 10px
      border-radius 8px
      z-index 999
      background-color rgba(0,0,0,.67)
</style>
