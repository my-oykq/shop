# my-project

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).



mutations:{
    // 传过来参数，这里就负责接收参数，payload就是就收传过来的参数，用到state就要传state
    addCart(state,payload){
      // payload新添加商品
      // let oldProduct = null
      // // 遍历拿到所有的cartList
      // for(let item of state.cartList){
      //   // 判断每个cartList的iid与新添加进来的payload.iid相等就把item赋值给oldProduct
      //   if(item.iid === payload.iid){
      //     oldProduct = item
      //   }
      // }-----第一种方案
      // 第二种方案


      // 判断oldProduct，如果oldProduct有值的话
      if(oldProduct){
        // 增加count += 1
        oldProduct.count += 1
      }else{
        // 如果oldProduct没有值的话，给payload增加count = 1
        payload.count = 1
        state.cartList.push(payload)
      }
    }
  }
