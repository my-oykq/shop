import {request} from './request'

/* 接口请求数据 */

// 详情请求
export function getDetail(iid){
  return request({
    url:'detail',
    params:{
      iid
    }
  })
}

// 热门推荐 请求
export function getRecommend(){
  return request({
    url: '/recommend'
  })
}
// detail的goods，多个属性面向一个组件（对象）
export class Goods {
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title;//标题
    this.desc = itemInfo.desc;//描述
    this.newPrice = itemInfo.price;
    this.oldPrice = itemInfo.oldPrice;
    this.discount = itemInfo.discountDesc;
    this.columns = columns;
    this.services = services;
    this.nowPrice = itemInfo.highNowPrice;//最高价格
    this.realPrice = itemInfo.lowNowPrice;//真实价格
  }
}


// 商家展示
export class Shop {
  constructor(shopInfo) {
    this.logo = shopInfo.shopLogo;//商家logo
    this.name = shopInfo.name;//商家名字
    this.fans = shopInfo.cFans;//
    this.sells = shopInfo.cSells;//全部宝贝
    this.score = shopInfo.score;//商家展示
    this.goodsCount = shopInfo.cGoods//商家总销量
  }
}

// 商品参数信息展示
export class GoodsParam {
  constructor(info, rule) {
    // 注: images可能没有值(某些商品有值, 某些没有值)
    this.image = info.images ? info.images[0] : '';
    this.infos = info.set;
    this.sizes = rule.tables;
  }
}

