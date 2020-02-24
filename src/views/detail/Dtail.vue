<template>
  <div id="detail">
    <!-- ref是想滚动内容显示对应的标题，因此让当前的currentIndex = DetailNavBar的currentIndex ,主要拿到DetailNavBar的currentIndex-->
    <detail-nav-bar class="detail_nav" @titleClick="titleClick" ref="nav"/>
    <!-- scroll必须有高度 ,:probe-type="3"实时监听-->
    <scroll class="content" ref="scroll" @scroll="contentScroll" :probe-type="3">
      <!-- 都是向子组件传递数据 -->

      <detail-swiper :top-images="topImages"/><!-- 轮播图 -->
      <detail-base-info :goods="goods"/><!-- 商品信息 -->
      <detail-shop-info :shop="shop"/><!-- 店铺信息 -->
      <detail-goods-info :detail-info="detailInfo" @imageLoad="itemImageLoad"/><!-- 商品详情 -->
      <detail-param-info :param-info="paramInfo" ref="param"/><!-- 参数详情 -->
      <detail-comment-info :comment-info="commentInfo" ref="comment"/><!-- 用户评论信息 -->
      <goods-list :goods="recommend" ref="recommend"/><!-- 热门推荐 -->
    </scroll>
    <detail-bottom-bar @addToCart="addToCart" />
    <back-top v-show="isShowTop" @click.native="backClick"/>

  </div>
</template>

<script type="text/ecmascript-6">
import DetailNavBar from './childrenComps/DetailNavBar'
import DetailSwiper from './childrenComps/DetailSwiper'
import DetailBaseInfo from './childrenComps/DetailBaseInfo'
import DetailShopInfo from './childrenComps/DetailShopInfo'
import DetailGoodsInfo from './childrenComps/DetailGoodsInfo'
import DetailParamInfo from './childrenComps/DetailParamInfo'
import DetailCommentInfo from './childrenComps/DetailCommentInfo'
import DetailBottomBar from './childrenComps/DetailBottomBar'

import Scroll from 'components/common/scroll/Scroll'
import BackTop from 'components/content/backTop/BackTop'
import GoodsList from 'components/content/goods/GoodsList'
import {getDetail, Goods, Shop, GoodsParam, getRecommend} from 'network/detail'
import {debounce} from '@/current/debounce'
import { mapActions } from 'vuex'

  export default {
    name:"Detail",
    components:{
      Scroll,
      DetailNavBar,//顶部导航
      DetailSwiper,//轮播图
      DetailBaseInfo,//基本信息
      DetailShopInfo,//商家展示
      DetailGoodsInfo,//店铺展示
      DetailParamInfo,//参数详情
      DetailCommentInfo,//用户评论信息
      GoodsList,//热门推荐
      DetailBottomBar,//底部工具栏
      BackTop,//小箭头
    },
    data () {
      return {
        iid:null,
        // 发请求拿到数据用变量保存数据，这些是要向子组件传递过去的数据
        topImages:[],//轮播图数据
        goods:{},//商品信息
        shop:{},//店铺信息
        detailInfo:{},//商品详情
        paramInfo:{},//参数详情
        commentInfo:{},//用户评论信息
        recommend:[],//热门推荐信息

        titleTopYs:[],//DetailNavBar组件点击滚动相应的内容
        getTitleTopYs:null,
        currentIndex:0,// 记录滚动内容显示对应标题的index
        isShowTop:false,//小箭头的显示与隐藏，默认是false
        // message:'', //Toast传递参数
        // show:false,//Toast的显示与隐藏
      }
    },
    // 等组件创建完毕获取iid
    created () {
        // 1.获取路由传过来的参数
        this.iid = this.$route.params.iid
        // 2.请求详情的数据
        getDetail(this.iid).then(res =>{

           //用变量保存发送请求
          const data = res.data.result
           // 1.获取顶部的图片轮播图数据，先把数据保存下来
          this.topImages = data.itemInfo.topImages


          // 2. 获取商品详细信息
          this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services);

          // 3.获取店铺信息
          this.shop = new Shop(data.shopInfo)
          //4. 保存商品的详情数据-----这些有请求拿到的数据向子组件传递过去
          this.detailInfo = data.detailInfo

          // 2.6.保存参数信息
          this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule);


          // 获取用户评论的信息,!==0说明才有评论信息
          if(data.rate.cRate !== 0){
            this.commentInfo = data.rate.list[0]//取出list一条信息
          }

        /*
        在created中拿到每个数据的offsetTop，如果没有$nextTick的话所有拿到数据的offsetTop都是undefined
        因此用上$nextTick就是---等待paramInfo参数的数据渲染之后就可拿到数据-----但是还不是最终做法
        */
            // this.$nextTick(()=>{
            //   // 清空titleTopYs
            //   this.titleTopYs = []
            //   this.titleTopYs.push(0)
            //   this.titleTopYs.push(this.$refs.param.$el.offsetTop)//参数
            //   this.titleTopYs.push(this.$refs.comment.$el.offsetTop)//评论
            //   this.titleTopYs.push(this.$refs.recommend.$el.offsetTop)//推荐
            //   console.log(this.titleTopYs)
            // })


        })

        // 请求热门推荐数据
        getRecommend().then(res =>{

          const data = res.data.data
          this.recommend = data.list

        })
        //给getTitleTopYs这个函数赋值,获取子组件的offsettop的高度 /防抖,将拿到的offsetTop添加到titleTopYs数组中
        this.getTitleTopYs = debounce(()=>{
            this.titleTopYs = []
            this.titleTopYs.push(0)
            this.titleTopYs.push(this.$refs.param.$el.offsetTop-44)//参数
            this.titleTopYs.push(this.$refs.comment.$el.offsetTop-44)//评论
            this.titleTopYs.push(this.$refs.recommend.$el.offsetTop-44)//推荐
            this.titleTopYs.push(Number.MAX_VALUE)//直接给个最大值
            // console.log(this.titleTopYs)
        })



    },
    mounted () {

    },
    methods: {
      ...mapActions(['addCart']),
      // 1.监听图片的加载
      itemImageLoad(){
        // 刷新
          this.$refs.scroll.refresh()
          this.getTitleTopYs()
      },
      // 2.点击滚动到相应的内容
      titleClick(index){
        // console.log(index),titleTopYs[商品，参数，评价，推荐]，，，用index代表他们，点击滚动的位置
        this.$refs.scroll.scrollTo(0,-this.titleTopYs[index],200)
      },
      // 3.滚动内容显示对应的标题
      contentScroll(position){
        // 1.获取Y值
        const positionY = -position.y

        // [0,7983,9120,9452]
        // positionY在0-7983这个范围是index=0
        // positionY在7983-9120这个范围是index=1
        // positionY在9120-9452这个范围是index=2
        // positionY大于等于9452这个范围是index=3

        //  //
        // let length = this.titleTopYs.length
        // for(let i = 0; i<length;i++){
        //   // 判断当前的currentIndex ！==i时就不需要执行 && 后面的语句，相等就执行
        //   if(this.currentIndex !==i && ((i<length-1 && positionY >= this.titleTopYs[i] && positionY < this.titleTopYs[i+1]) || (i === length-1 && positionY >= this.titleTopYs[i]))){
        //     // 把当前的i赋值于currentIndex
        //     this.currentIndex = i
        //     // 拿到DetailNavBar中的currentIndex与当前的currentIndex相等
        //     this.$refs.nav.currentIndex = this.currentIndex
        //   }
        // }---------方案一

        // 方案二
        // 2.positionY和主题中的值进行比较,先通过遍历拿到所有的titleTopYs['商品','参数','评价','推荐']=====[0,1,2,3]
        let length = this.titleTopYs.length
        for(let i= 0; i<length-1;i++){
          // 如果当前的index ！= i（每一个titleTopYs）或者y大于等于titleTopYs[i]的y 或者 y 小于titleTopYs[i+1](第二个索引)
          if(this.currentIndex !==i && (positionY >= this.titleTopYs[i] && positionY < this.titleTopYs[i+1])){
            // 把i赋值于当前的currentIndex
            this.currentIndex = i
            // 并且让DetailNavBar中的currentIndex与（每一个页面）当前的currentIndex相等
            this.$refs.nav.currentIndex = this.currentIndex
          }
        }

        //3.是否显示小箭头回到顶部,y轴 > 1000就显示小箭头
        this.isShowTop = -position.y > 1000
      },

      // 4.点击小箭头回到顶部，初始位置
      backClick(){
        this.$refs.scroll.scrollTo(0, 0)
      },

      // 5.点击加入购物车
      addToCart(){
        // 1.先获取购物车需要展示的信息
        const product = {}
        // 图片
        product.image = this.topImages[0]
        // 标题
        product.title = this.goods.title
        // 描述
        product.desc = this.goods.desc
        // 价格
        product.price = this.goods.realPrice
        // 一定要把商品的iid(信息)传递过去
        product.iid = this.iid

        // 2.将商品添加到购物车里,将product传过去，提交到mutations中，dispatch返回一个Promise
        // 注：如果在Vuex中做了某件事情，想要外面知道完成了某些操作，用到Promise，在actions使用Promise，在分发的时候调用.then
        // this.$store.dispatch('addCart',product).then(res =>{
        //   console.log(res)
        // })
        this.addCart(product).then(res =>{
          // 因为$toast已经挂载到原型上边，可以直接拿到组件中的show方法
         this.$toast.show(res)
        })
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #detail
   position relative
   height 100vh
   z-index 99
   background-color #ffffff
   /* 设置scroll的高必须是依赖父元素，因此给父元素一个固定的高度 */
   .content
      height calc(100% - 44px)
   .detail_nav
      position relative
      z-index 99
      background-color #ffffff
</style>

