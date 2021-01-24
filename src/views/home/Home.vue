<template>
  <div id="home">
    <nav-bar class="home-color"><div slot="center">购物街</div></nav-bar>
    <!-- 通过ref来操作组件对象，拿到TabControl的currentIndex -->
    <tab-control
          :titles="['流行', '新款', '精选']"
          @tabClick="tabClick"
          ref="topControl"
          class="fixed" v-show="tabFixed"/>
    <!-- ref目的是能拿到Scroll组件里的scrollTo方法 a-3 :pul-up-loade="true",上垃加载-->
    <scroll class="content"
            ref="scroll"
            :probe-type="3" @scroll="contentScroll"
             :pul-up-loade="true" @pullingUp="loadMore">
      <!-- 轮播图 -->
        <home-swiper :barner = "barner" @swiperImageLoad="swiperImageLoad"/>
        <!-- 轮播图下边导航 -->
        <recommend-view :recommends="recommends"/>
        <!-- 本周流行 -->
        <feature-view/>
        <!-- 父组件接收传过来的自定义事件 -->
        <tab-control
          :titles="['流行', '新款', '精选']"
          @tabClick="tabClick"
          ref="tabControl"
          />
        <!-- 商品列表goods,向子组件传参数 -->
        <goods-list :goods="showGoods"/>
    </scroll>
    <!-- native是用于监听原生组件点击事件 判断小箭头的显示盒隐藏-->
    <back-top @click.native="backClick" v-show="isShowTop"/>
  </div>
</template>

<script type="text/ecmascript-6">

import HomeSwiper from './childrenComps/HomeSwiper'
import RecommendView from './childrenComps/RecommendView'
import FeatureView from './childrenComps/FeatureView'
/* 封装的公共组件 */
import NavBar from 'components/common/navBar/NavBar'
import Scroll from 'components/common/scroll/Scroll'
import TabControl from 'components/content/tabControl/TabControl'
import BackTop from 'components/content/backTop/BackTop'
import GoodsList from 'components/content/goods/GoodsList'
import { getHomeMulidata, getHomeGoods } from 'network/home'
  export default {
    components:{
      NavBar,
      HomeSwiper,
      RecommendView,
      FeatureView,
      TabControl,
      GoodsList,
      Scroll,
      BackTop
    },

    data () {
      return {
        // 用变量保存发送请求拿到的数据
         barner:[],//轮播图
         recommends:[],//轮播图下面导航
         goods:{
           'pop':{page:0,list:[]},
           'new':{page:0,list:[]},
           'sell':{page:0,list:[]},
         },
        //  点击切换类型，默认是pop--这里是动态的
         currentType:'pop',
         isShowTop:false,//小箭头的显示与隐藏
        //  tabControl达到吸顶效果---y
        tabOffsetTop:0,
        tabFixed:false,//默认不吸顶
        savaY:0,//离开时保持原来Y轴的位置
      }
    },
    computed:{
      showGoods(){
        return this.goods[this.currentType].list
      }
    },
    // 在组件创建完成到时候就发送网络请求，一般是用于写逻辑
    created(){
      // 1.请求多个数据,轮播图
      this.getMulidata()
      // 2.请求goods商品数据
      this.getGoods('pop')
      this.getGoods('new')
      this.getGoods('sell')

      this.tabClick(0)
    },
    // 让Home的内容设置为原来的位置,进入时调用
    activated(){
      // 进入时拿到滚动的位置，x，y，时间
      this.$refs.scroll.scrollTo(0, this.savaY, 0)

      this.$refs.scroll.refresh()
    },
    // 离开时调用
    deactivated(){
     this.savaY = this.$refs.scroll.getScrollY()

    },


// 本身可以在created中写，但是由于代码过多看起来繁琐，在methods中写，通过this来调用函数名，其实也是一样的，在methods才是具体做到事情
    methods: {

      /* 事件监听的方法,在TabControl子组件中自定义事件传入index这里负责接收，在这里点击来切换对应的数据 */
      tabClick(index){
        switch (index) {
          case 0:
            this.currentType = 'pop'
            break;
          case 1:
            this.currentType = 'new'
            break;
          case 2:
            this.currentType = 'sell'
            break;
        }

        if(this.$refs.topControl !== undefined){
          // 让两个TabControl的currentIndex保持一致
          this.$refs.topControl.currentIndex = index
          this.$refs.tabControl.currentIndex = index
        }
      },

      // 小箭头
      backClick(){
        // 拿到Scroll组件对象的scroll属性,点击小箭头回到顶部
        // this.$refs.scroll.scroll.scrollTo(0,0,500) //----第一种方法
        this.$refs.scroll.scrollTo(0, 0) //第二种方法
      },
      // 2.接收Scroll组件传过来自定义事件，positon
      contentScroll(position){
        // console.log(position)
        // 1.判断BackTop是否显示
         this.isShowTop = (-position.y) > 1000

        //  2.决定tabControl是否吸顶(position:fixed)
        this.tabFixed = (-position.y) > this.tabOffsetTop
      },

      //a-4 上拉加载更多,针对类型来加载更多
      loadMore(){
        // 1.
        this.getGoods(this.currentType)
        // 2.

      },

      // tabControl达到吸顶的效果
      swiperImageLoad(){
        /* 通过ref拿到tabControl组件对象的offsetTop,所有的组件都有一个属性$el,用于获取组件中的元素 */
        this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop

      },


      /* 网络请求的方法 */
      getMulidata(){
          getHomeMulidata().then(res =>{
          // 1.发送请求拿到数据先把数据保存下来
          this.barner = res.data.data.banner.list
          this.recommends = res.data.data.recommend.list
        })
      },

      // 请求goods数据
      getGoods(type){
        // page也是动态的page
          const page = this.goods[type].page + 1
          getHomeGoods(type,page).then(res =>{
            // console.log(res)
          // 拿到数据并且保存下来添加到另一个空数组
          this.goods[type].list.push(...res.data.data.list)
          // 重置page
          this.goods[type].page +=1

          // a-5 调用这个方法才能完成下一次数据，当上拉加载数据加载完毕后，需要调用此方法告诉 better-scroll 数据已加载。
          this.$refs.scroll.finishPullUp()
        })
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #home
  //  padding-top 44px
   position relative
   height 100vh
  .home-color
   background-color var(--color-tint)
   color #ffff
   font-weight 700
  .fixed
    position relative
    z-index 9
  .content
    overflow hidden
    position absolute
    top 44px
    bottom 49px
    left 0
    right 0
</style>
