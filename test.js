

document.getElementById("pictureButton").addEventListener("click", function(event) {
    console.log("in script");
    event.preventDefault();


    //Today's weather
    // const url = "https://api.openweathermap.org/data/2.5/weather?q=" + value + ",US&units=imperial" + "&APPID=61e624ee08da03cff27ece7209e66a49";
    const url = "https://random.dog/woof.json"
    fetch(url)
        .then(function(response) {
            return response.json();
        }).then(function(json) {
            console.log(json)
        
        let results = "";
        results += '<img src =' + json.url + ">";
        
        //results += '<video width="320" height="240" controls>';
        //results += '<source src =' + json.url + ">";
        //results += '</video>';
        
        
        
            document.getElementById("pictureResults").innerHTML = results;
        });

});
