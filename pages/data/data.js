// pages/data/data.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
   "des":"数据绑定例子",
   "array":[1,2,3,"aa","bb"],
   arrayStr:["a","b","c"],
   "index":2,
   chm:{name:"曹慧明",age:18},
   wt: { name: "王涛", age: 28 },
  },
  changeValue:function(){
    var des=this.data.des;
    des=des+'a';
    this.setData({
      des:des
    });
  }

  
})