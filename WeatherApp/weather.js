var units = "metric";
var temperature;
var tempUnit;

$(document).ready(function() {

  getLocation();

  function getLocation() {
    $.get("http://ipinfo.io", function(response) {        
        $('#location').append(response.city + ", ").append(response.region + ", ").append(response.country);
        getWeather(response.loc, units);
    }, "jsonp")
  }

  $("#convert-units").click(function() {
    if(units === "metric"){
      units = "imperial";
      tempUnit = "F";            
      temperature = parseFloat(((temperature * (9.0/5.0) + 32.0)).toFixed(1));
    } else if (units = "imperial"){
      units = "metric";
      tempUnit = "C";
      temperature = parseFloat(((temperature - 32.0) * (5.0/9.0)).toFixed(1));
    }
    $('#temp').text(temperature + " " + tempUnit);
  });  

  function getWeather(loc, units) {
    lat = loc.split(",")[0];
    lon = loc.split(",")[1];

    var weatherApiUrl = 'http://api.openweathermap.org/data/2.5/weather?lat=' + lat + 
                        '&lon=' + lon + "&units=" + units + '&appid=e2db5b0453a25a492e87ad8b03046a7c';
    //console.log(weatherApiUrl);
    $.get(weatherApiUrl, function(weather) {
      temperature = weather.main.temp;
      //label based in imperial vs metric units
      tempUnit = units === "metric" ? "C" : "F";
      temperature = parseFloat((temperature).toFixed(1));

      $('#icon').append("<img src='http://openweathermap.org/img/w/" + weather.weather[0].icon + ".png'>");      
      $('#temp').text(temperature + " " + tempUnit);      
      $('#conditions').text(weather.weather[0].description);    

    }, "jsonp");

  };

});