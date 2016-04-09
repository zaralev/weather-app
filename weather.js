// $('#toggleButton').click(function() {
//     $('#Celsius').toggle();
//     $('#Fahrenheit').toggle();
//     console.log($("#Celsius").text);
//     console.log("monkey");
// });


var lats;
var longs;

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
        $('#button').toggle();
        $('#loading').toggle();

    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

function showPosition(position) {
    lats = position.coords.latitude;
    longs = position.coords.longitude;
    apiCall(lats, longs);
}

function display() {
    alert(lat + "\n" + long);
}

function apiCall(lat, long) {
    var apiKey = '20e7a55c4ce94ba8310e8ec530e6f2ed';
    var request = new XMLHttpRequest();
    request.open("GET", "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + long + "&appid=" + apiKey, false);
    request.send();

    request = JSON.parse(request.responseText);

    console.log(request);
    console.log(request.weather[0].description);

    console.log(request.main.temp);
    var z = parseInt(request.main.temp) - 273;
    console.log(z);
    $('#loading').toggle();
    $('#center').toggle();
    $("#Celsius").html("<b><i style=\"font-size: 1.3em; font-family:'Times', serif;\">Weather:</i></b> " +
        request.weather[0].description + "<br>" +
        "<b><i style=\"font-size: 1.3em; font-family:'Times', serif;\">Temperature:</i></b> " + z + "ºC");
    $("#Fahrenheit").html("<b><i style=\"font-size: 1.3em; font-family:'Times', serif;\">Weather:</i></b> " +
        request.weather[0].description + "<br>" +
        "<b><i style=\"font-size: 1.3em; font-family:'Times', serif;\">Temperature:</i></b> " + ((parseInt(z) * 1.8) + 32) + "ºF");

    switch (request.weather[0].id) {
        case 200:
        case 201:
        case 202:
        case 210:
        case 211:
        case 212:
        case 221:
        case 230:
        case 231:
        case 232:
        case 901:
        case 902:
        case 960:
        case 961:
        case 962:
            $("#picture").html("<img src='img/thunder.png' alt='thunderstorm' />");
            break;
        case 300:
        case 301:
        case 302:
        case 310:
        case 311:
        case 312:
        case 313:
        case 314:
        case 321:
        case 500:
        case 501:
        case 502:
        case 503:
        case 504:
        case 511:
        case 520:
        case 521:
        case 522:
        case 531:
            $("#picture").html("<img src='img/rain.png' alt='rain' />");
            break;
        case 600:
        case 601:
        case 602:
        case 611:
        case 612:
        case 615:
        case 616:
        case 620:
        case 621:
        case 622:
            $("#picture").html("<img src='img/snow.png' alt='snow' />");
            break;
        case 701:
        case 711:
        case 721:
        case 731:
        case 741:
        case 751:
        case 761:
            $("#picture").html("<img src='img/mist.png' alt='mist' />");
            break;
        case 762:
            $("#picture").html("<img src='img/ash.png' alt='ash' />");
            break;
        case 771:
        case 905:
        case 952:
        case 953:
        case 954:
        case 955:
        case 956:
        case 957:
        case 958:
        case 959:
            $("#picture").html("<img src='img/wind.png' alt='squalls/wind' />");
            break;
        case 781:
        case 900:
            $("#picture").html("<img src='img/tornado.png' alt='tornado' />");
            break;
        case 800:
        case 952:
            $("#picture").html("<img src='img/sunny.png' alt='clear sky' />");
            break;
        case 801:
        case 802:
        case 803:
        case 804:
            $("#picture").html("<img src='img/cloudy.png' alt='clouds' />");
            break;
        case 903:
            $("#picture").html("<img src='img/cold.png' alt='cold' />");
            break;
        case 904:
            $("#picture").html("<img src='img/hot.png' alt='hot' />");
            break;
        case 906:
            $("#picture").html("<img src='img/hail.png' alt='hail' />");
            break;
        default:
            $("#picture").html("Your forecast:");
    }

}
