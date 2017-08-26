/**
 * Created by T on 2017/8/26.
 */

let goodsTools = {};

//初始化存储商品的对象
let prods = JSON.parse(window.localStorage.getItem('prods')) || {};

goodsTools.addOrUpdate = function(goods){
  if(prods[goods.id]){
    prods[goods.id] += goods.num;
  }else{
    prods[goods.id] = goods.num;
  }
  this.save(prods);
}

goodsTools.deleteProd = function(prodId){
  delete prods[prodId];
  this.save(prods);
}

//获取数据
goodsTools.getProds = function(){}

goodsTools.save = function(prods){
  window.localStorage.setItem('prods',JSON.stringify(prods));
}
