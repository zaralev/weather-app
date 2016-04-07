var lats;
var longs;
function getLocation() {
    if (navigator.geolocation) {
     navigator.geolocation.getCurrentPosition(showPosition);

    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

function showPosition(position){
  lats = position.coords.latitude;
  longs = position.coords.longitude;
  apiCall(lats,longs);
}

function display(){
  alert(lat + "\n" + long);
}

function apiCall(lat, long){
    var apiKey = '20e7a55c4ce94ba8310e8ec530e6f2ed';
    var request = new XMLHttpRequest();
    request.open("GET", "http://api.openweathermap.org/data/2.5/weather?lat="+ lat+"&lon="+ long + "&appid="+apiKey, false);
    request.send();

    request = JSON.parse(request.responseText);

    console.log(request);
    console.log(request.weather[0].description);

    console.log(request.main.temp);
    var z = parseInt(request.main.temp) -273;
    console.log(z);
    $("#demo").append("Weather: "+
           request.weather[0].description + "<br>" +
           "Temperature: " + z + "ºC");

    if (request.weather[0].id > 200){
      $("#picture").append("<img src='http://i.imgur.com/ePlNypi.png' alt='cloudy' />");
    }

 }
