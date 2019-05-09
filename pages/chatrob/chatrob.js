var util = require('../../utils/util.js')
//获取应用实例
var app = getApp()
Page({
  data: {
    toview:'',
    count:0,
    height: '',
    scrollTop:0,
    motto: 'Hello World',
    message: '机器人',
    token: '',
    tmpleData: [{
      id: '',
      msg: '',
      dateTime: '',
      msgid:0
    }],
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../chat/chat.wxml'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo

      })
    })

  },
  sendBt: function () {
    var height = wx.getSystemInfoSync().windowHeight;
    console.log(this.data.inputValue);
    var _this = this;
    var _tmpleData = _this.data.tmpleData;
    _tmpleData.push({
      id: '1',
      msg: this.data.inputValue,
      dateTime: util.formatTime(new Date)
    });
    console.log((_tmpleData.length - 1) * 100);
    _this.setData({
      tmpleData: _tmpleData,
      scrollTop: (_tmpleData.length-1)*100
    });
    console.log(this.data.toview);
    app.getTulingMsg(this.data.inputValue, function (res) {
      _tmpleData.push({
        id: '2',
        msg: res.text,
        msgid: ++_tmpleData.msgid,
        dateTime: util.formatTime(new Date)
      });
      _this.setData({
        tmpleData: _tmpleData,
        scrollTop: (_tmpleData.length - 1)*100
      })
      var baidu_token = wx.getStorageSync('baidu_token');
      console.log(baidu_token);
    });
  },

  bindKeyInput: function (e) {
    this.setData({
      inputValue: e.detail.value,
    })
    
  },
})