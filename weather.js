var x = document.getElementById("demo");

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude +
    "<br>Longitude: " + position.coords.longitude;
    apiCall(position);
}

    function apiCall(position){
    var apiKey = '20e7a55c4ce94ba8310e8ec530e6f2ed';
    var request = new XMLHttpRequest();
    request.open("GET", "http://api.openweathermap.org/data/2.5/weather?lat="
    + position.coords.latitude "&lon="+ position.coords.longitude + apiKey, false);
    request.send();

    request = JSON.parse(request.responseText);

    console.log(request);
    console.log(request.weather[0].description);
    console.log(request.weather[0].main.temp);
    }
