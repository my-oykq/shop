<template>
  <div class="tab-menu">
    <!-- 左侧导航 -->
    <scroll class="content">
      <div class="menu-list-item"
        v-for="(category, index) in slideBarList" :key="index"
        :class="{active:index === currentIndex}" @click="indexClick(category, index)">
        {{category.title}}
      </div>
    </scroll>
  </div>
</template>

<script type="text/ecmascript-6">
import Scroll from 'common/scroll/Scroll'
  export default {
    components: {
      Scroll
    },
    props:{
      slideBarList:{
        type:Array,
        default(){
          return []
        }
      }
    },
    data () {
      return {
        currentIndex:0
      }
    },
    methods: {

      // 把左侧item的信息maitKey传过去，index代表每个item下标
      // 将点击的数据存在临时对象中，并发送给父组件
      indexClick(category,index){
        const obj = {
          maitKey:category.maitKey,
          index
        }
        // 实现点击切换动态效果
        this.currentIndex = index
        // 点击左侧右侧切换，把事件触发出去到父组件
        this.$emit("itemClick",obj)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .tab-menu
    width 100%;
    .content
      position: fixed;
      top: 44px;
      right: 0;
      bottom: 49px;
      left: 0;
      overflow: hidden;
      width: 100px;
      background-color: #f6f6f6;
      .menu-list-item
        height 45px
        line-height 45px
        text-align center
        font-size 16px
      .active
        font-weight 700
        // 激活的背景颜色
        background-color #fff
        color var(--color-high-text)
        border-left 3px solid var(--color-high-text)
</style>
