// pages/password/password.js
const util = require('../../utils/util.js')
var mqtt = require('../../utils/mqtt.min.js')
const crypto = require('../../utils/hex_hmac_sha1.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    password:"",
    deviceConfig: {
      productKey: "a1ioaELpsed",
      deviceName: "test",
      deviceSecret: "ejPlHPPXPyTMdpHa3nYjxq9zdkKfa21b",
      regionId: "cn-shanghai",
      timestamp:0
    },
    changan:""

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  
  initMqttOptions(deviceConfig) {
    const params = {
      productKey: deviceConfig.productKey,
      deviceName: deviceConfig.deviceName,
      timestamp: deviceConfig.timestamp,
      clientId: deviceConfig.clientId,
    }
    //CONNECT参数
    const options = {
      keepalive: 60, //60s
      clean: true, //cleanSession不保持持久会话
      protocolVersion: 4 //MQTT v3.1.1
    }
    //1.生成clientId，username，password
    options.password = this.signHmacSha1(params, deviceConfig.deviceSecret);
    this.setData({
      password: options.password,
      changan:"解码成功！长按可复制↑↑↑↑↑↑"
    });
    options.clientId = `${params.clientId}|securemode=2,signmethod=hmacsha1,timestamp=${params.timestamp}|`;
    options.username = `${params.deviceName}&${params.productKey}`;
    console.log(options.password);
    return options;
  },
  /*
    生成基于HmacSha1的password
    参考文档：https://help.aliyun.com/document_detail/73742.html?#h2-url-1
  */
  signHmacSha1(params, deviceSecret) {
    let keys = Object.keys(params).sort();
    // 按字典序排序
    keys = keys.sort();
    const list = [];
    keys.map((key) => {
      list.push(`${key}${params[key]}`);
    });
    const contentStr = list.join('');
    return crypto.hex_hmac_sha1(deviceSecret, contentStr);
  },
  formSubmit(e){
    var _this = this;
    var deviceConfig={
      productKey: e.detail.value.productKey,
      deviceName: e.detail.value.deviceName,
      deviceSecret: e.detail.value.deviceSecret,
      regionId: "cn-shanghai",
      timestamp: e.detail.value.timestamp,
      clientId: e.detail.value.clientId
    }
    this.initMqttOptions(deviceConfig);
   // 
  }
})