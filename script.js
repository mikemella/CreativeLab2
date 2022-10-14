console.log("in script");

document.getElementById("pictureSubmit").addEventListener("click", function(event) {
    event.preventDefault();
    const value = document.getElementById("weatherInput").value;
    if (value === "")
        return;
    console.log(value);
    //Today's weather
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + value + ",US&units=imperial" + "&APPID=61e624ee08da03cff27ece7209e66a49";
    fetch(url)
        .then(function(response) {
            return response.json();
        }).then(function(json) {
            console.log(json)
            let results = "";
            results += '<h2>Weather in ' + json.name + " Today </h2>";
            for (let i = 0; i < json.weather.length; i++) {
                results += '<img src="https://openweathermap.org/img/w/' + json.weather[i].icon + '.png"/>';
            }
            results += '<h2>' + json.main.temp + " &deg;F</h2>"
            results += "<p>"
            for (let i = 0; i < json.weather.length; i++) {
                results += json.weather[i].description
                if (i !== json.weather.length - 1)
                    results += ", "
            }
            
            results += '<p> Max Temp: <b>' + json.main.temp_max + "</b>&deg;F</p>";
            results += '<p> Min Temp: <b>' + json.main.temp_min + "</b>&deg;F</p>";
            results += '<p> Wind speed: <b>' + json.wind.speed + "</b> mph</p>";
            // results += "</p>";
            document.getElementById("weatherResults").innerHTML = results;
        });

});
