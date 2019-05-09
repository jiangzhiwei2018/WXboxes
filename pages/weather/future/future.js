Page({
    data:{
      AK:'29qh0GfS9GB7pP5D4Ii4OMnkYaDTE1m2',
        city: '',
        future: ''
    },
    onLoad: function() {
        var that = this;
        wx.getLocation({
            "type": "gcj02",
            "success": function(res) {
                var latitude = res.latitude;
                var longitude = res.longitude;
                var AK = that.data.AK;
                that.loadCity(latitude, longitude, AK,that.loadWeather)
            }
        })
    },
    loadCity: function (latitude, longitude, AK, callback) {
        var that = this;
      var url = 'https://wxapi.hotapp.cn/proxy/?appkey=hotapp11377340&url=https://api.map.baidu.com/geocoder/v2/?location=' + latitude + ',' + longitude + '&output=json&ak=' + AK;
        wx.request({
            url: url,
            header: {
                'content-type': 'application/json'
            },
            success: function(res) {
                var city = res.data.result.addressComponent.city;
                that.setData({city :city});
                callback && callback(city, AK);
            }
        })
    },
    loadWeather: function (city, AK) {
        var that  = this;
      var url = 'https://wxapi.hotapp.cn/proxy/?appkey=hotapp11377340&url=https://api.map.baidu.com/telematics/v3/weather?location=' + city + '&output=json&ak=' + AK;
        console.log(url);
        wx.request({
            url: url,
            header: {
                'content-type': 'application/json'
            },
            success: function(res) {
                that.setData({
                    future: res.data.results[0].weather_data
                });
                console.log(res.data.results[0].weather_data);
            }
        })
    },
})