<template>
<!-- 小箭头组件 ，多个地方用到，抽取出来-->
  <div class="back-top" @click="balckClick">
    <img src="~assets/img/common/top.png" alt="">
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {

      }
    },
    methods: {
      /*可以在BackTop组件做点击处理，在这里写过于麻烦，因为点击小箭头需要滑动，滑动是内容区在滑动，在此做处理不合适，
      因此在Home组件通过给BackTop绑定点击事件，即可 */
      balckClick(){

      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .back-top
    position fixed
    right 10px
    bottom 60px
   .back-top>img
      width 43px
      height 43px
</style>
