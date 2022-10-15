let results = "";
document.getElementById("pictureButton").addEventListener("click", function(event) {

    event.preventDefault();

    for (let i = 0; i < 20; i++) {
        const link = "https://random.dog/woof.json";
        fetch(link)
            .then(function(response) {
                return response.json();
            }).then(function(json) {
                
                if(json.url[json.url.length-1] != '4'){
                    let int = json.url[json.url.length-1]
                    console.log(json.url[json.url.length-1]);
                    console.log(json.url);
                    results += '<img src =' + json.url + ">";
                }
                
                document.getElementById("pictureResults").innerHTML = results;
            });
    }
});
