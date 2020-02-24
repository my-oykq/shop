<template>
  <div class="tab-control">
    <div v-for="(item, index) in titles"
    class="control-item" :key="index"
    :class="{active:index === currentIndex}" @click="tabClick(index)">
    <!-- 判断当前的状态是处于点击的状态 -->
      <span class="active-item">{{item}}</span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name:"TabControl",
    props:{
      titles:{
        type:Array,
        default(){
          return []
        }
      }
    },

    // 点击出现红颜色并且文字底部出现横线
    data () {
      return {
        // 1.记录当前的动态
        currentIndex:0

      }
    },
    methods: {
      tabClick(index){
        this.currentIndex = index
      // 根据点切换商品，把index传出到父组件Home来切换商品,在Home组件接收自定义事件--子传父
      // TabControl这个组件内部发生了点击事件，需要把这个点击事件传到外面Home这个组件，Home这个组件拿到点击哪个index根据这个点击事件来切换数据
        this.$emit('tabClick', index)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .tab-control
    display flex
    text-align center
    background #ffffff
    .control-item
      flex 1
      height 40px
      line-height 40px
      font-size 16px
      /* 字体与横线的距离 */
    .control-item>span
       padding 5px
    .active
      color var(--color-high-text)
      .active-item
        border-bottom 2px solid var(--color-tint)
</style>
