//index.js
//获取应用实例
var app = getApp()
var arr_name = ["计算器", "二维码", "地图", "涂鸦", "查拼音", "时钟", "万年历", "机器人",
  "天气", "解码", "趣图", "未开发", "其他", "其他", "其他",
  "其他", "其他", "其他", "其他", "其他", "其他"]
var arr_link = [1, 10, 15, 52, 62, 68, 75, 82, 98, 112, 147, 161, 218, 166, 182,
  188, 192, 197, 202, 205, 212, 227, 132]
var file = "../../pages/list/list"
Page({
  data: {
    items: [{
      id: "1",
      src: "../../images/clr.png",
      text: arr_name[0],
      url:"../scal/scal"
    }, {
      id: "10",
        src: "../../images/erwei.png",
      text: arr_name[1],
        url: "../erwei/erwei"
    }, {
      id: "15",
      src: "../../images/map.png",
      text: arr_name[2],
      url: "../map/map"
    }, {
      id: "52",
        src: "../../images/huilv.png",
      text: arr_name[3],
        url: "../draw/draw"
    }, {
      id: "62",
        src: "../../images/fanyi.png",
      text: arr_name[4],
        url: "../checkpy/checkpy"
    }, {
      id: "68",
        src: "../../images/shizhong.png",
      text: arr_name[5],
        url: "../time/time"
    }, {
      id: "75",
        src: "../../images/wannianli.png",
      text: arr_name[6],
        url: "../calendar/calendar"
    }, {
      id: "82",
        src: "../../images/11.png",
      text: arr_name[7],
        url: "../chatrob/chatrob"
    }, {
      id: "98",
        src: "../../images/weather.png",
      text: arr_name[8],
        url: "../weather/future/future"
      },{
        id: "112",
        src: "../../images/jiema.png",
        text: arr_name[9],
        url: "../password/password"
      }, {
        id: "147",
        src: "../../images/yule.png",
        text: arr_name[10],
        url: "../pics/videos/videos"
      }, {
        id: "161",
        src: "../../images/qita.png",
        text: arr_name[11],
        url: "../logs/logs"
      }],
    url: file,
    
  },
  onLoad:function(){
    
  },
  onShow: function () {
    
  }
})
