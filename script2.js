$(document).ready(function(){
    $("search-button").on("click", function(){
        var searchValue =("#search-value").val();

        $("#search-value").val("");

        searchWeather(searchValue);
    
    });

    $(".history").on("click", "li", function(){
        searchWeather($(this).text());
    });

    // Make a row under search bar
function makeRow(text) {
    var li =$("<li>").addClass("list-group-item list-group-item-action").text(text);
    $(".history").append(li);
}

function searchWeather(searchValue){
    $.ajax({
        type: "GET",
        url: "http://api.openweathermap.org/data/2.5/weather?q=" + searchValue + "&appid=609f8a0cd5875e50496bbad3b9bdc69e&units=imperial",
        dataType: "json",
        
        success:function(data) {
        if (history.indexOf(searchValue) === -1) {
            history.pushState(searchValue);
            window.localStorage.setItem("history", JSON.stringify(history));

            makerow(searchValue)
        }

        $("#today").empty();

        var title = $("<h3>").addClass("card-title").text(data.name +"(" + new Date().toLocaleDateString() + ")");
        var card = $("<div>").addClass("card");
        var wind = $("<p>").addClass("card-text").text("Wind Speed: " + data.wind.spee + "MPH");
        var humid = $("<p>"). addClass("card-text").text("Humidity : " + Data.main.humidity + "%");
        var temp = $("<p>").addClass("card-text").text("Temperature: "+ data.main.temp + " *F");
        var cardBody = $("<p>").addClass("card-body");
        var img = $("<img>").attr("src","http://openweathermap.org/img/w/" + data.weather[0].icon + ".png");
    
        title.append(img);
        cardBody.append(title, temp, humid, wind);
        card.append(cardBody);
        $("#today").append(card);

        // call fu for forcast and UV HERE

    }
});
}
    //ajax

    // clear content

    //add elements to html
    //current weather conditions
    //temp, wind speed, humidity, uv index (diff function)

});