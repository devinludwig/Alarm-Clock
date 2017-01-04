var apiKey = require('./../.env').apiKey;


function Weather(){
};

Weather.prototype.f = function(k) {
  var f = (1.8 * (k-273)) + 32
  return Math.floor(f);
};

Weather.prototype.getWeather = function(city) {
    var _this = this;
    $.get("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey).then(function(response) {
      $('.showWeather').text("The weather in " + response.name + " is " + response.weather[0].description);
      $('.temperature').text("The temperature in " + response.name + " is " + _this.f(response.main.temp) + " Degrees");
      $('.humidity').text("The Humidity in " + response.name + " is " + response.main.humidity + "%");
    }).fail(function(error) {
      $('.showWeather').text(error.responseJSON.message);
    });
};


exports.weatherModule = Weather;
