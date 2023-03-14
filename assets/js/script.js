// jQuery
$(document).ready(function () {


  // Keys:
  // ==================== API KEY ==================== //
  var APIKey = "5a7ab73591e40a8133cf925cb00dafed";
  // ================================================= //


  // Variables:
  var searchInput
  var city;
  var lat;
  var lon;
  var history;


  // Named Functions:
  function getWeather(input) {
    searchInput = input;
    $.ajax({
      url: "https://api.openweathermap.org/geo/1.0/direct?q=" + searchInput + "&appid=" + APIKey,
      method: "GET"
    }).then(function(response) {
      lat = response[0].lat;
      lon = response[0].lon;
      city = response[0].name;
      $.ajax({
        url: "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=" + APIKey,
        method: "GET"
      }).then(function(response) {
        var date = new Date((response.list[0].dt) * 1000);
        var currentWeather = $(`
          <div class="col-lg-4 col-12 pb-5">
            <h2>` + response.city.name + `</h2>
            <br>
            <p>` + moment(date).format("dddd Do MMMM YYYY") + `</p>
            <p>Temperature: ` + (response.list[0].main.temp - 273.15).toFixed(1) + ` °C</p>
            <p>Humidity: ` + response.list[0].main.humidity + ` %</p>
            <p>Wind Speed: ` + response.list[0].wind.speed + ` KPH</p>
          </div>

          <div class="col-lg-3 col-4 p-0">
            <img src="http://openweathermap.org/img/wn/` + response.list[0].weather[0].icon + `@2x.png" class="weather-icon"></img>
          </div>
          `);

        $("#today").empty();
        $("#today").append(currentWeather);

        // Forecast of 3pm time-slots:
        var afternoon;
        for (var i=0; i < 8; i++) {
          var date = new Date((response.list[i].dt) * 1000);
          if (moment(date).hour() === 15) {
            afternoon = i;
          }
        }

        $("#forecast").empty();


        for (var j=0; j < 5; j++) {
          var k =  8*[j] + afternoon;
          var date = new Date(response.list[k].dt * 1000);
          var forecastCard = $(`
            <div class="card col-xl-2 col-12 bg-color-gray my-1 p-0">
              <div class="card-body d-flex flex-wrap p-0">
                <div class="col-xl-12 col-6 d-flex justify-content-center">
                  <img src="http://openweathermap.org/img/wn/` + response.list[k].weather[0].icon + `@2x.png" class="weather-icon"></img>
                </div>

                <div class="forecast col-xl-12 col-6 py-3">
                  <h5 class="card-title">` + moment(date).format("ddd") + `</h5>
                  <p>` + moment(date).format("D/M") + `</h5>
                  <p> Temperature: ` + (response.list[k].main.temp - 273.15).toFixed(1) + ` °C</p>
                  <p> Humidity: ` + (response.list[k].main.humidity) + ` %</p>
                  <p> Wind Speed: ` + response.list[k].wind.speed + ` KPH</p>
                </div>
              </div>
            </div>
          `);

          $("#forecast").append(forecastCard);
        }

        // Update the history array, search bar and buttons:
        var i = $.inArray(city, history);
        if (i !== -1) {
          history.splice(i, 1);
        }
        history.unshift(city);
        history = history.slice(0, 6);
        $("#search-input").attr("placeholder", city);
        $("#search-input").val("");
        historyButtons();
        
        // Download the history array to local storage:
        var historyDownload = JSON.stringify(history);
        localStorage.setItem("history", historyDownload);
      })
    })
  }

  function historyButtons() {
    $("#history").empty();
    for (var i = 0; i < 6; i++) {
      var historyButton = $(`
        <button class="history-button btn btn-gray my-1">` +
          history[i] + 
        `</button>
      `);
      $("#history").append(historyButton);
    }
  }

  // Detect local history:
  function historyUpload() {
    if (localStorage.getItem("history") !== null) {
      history = JSON.parse(localStorage.getItem("history"));
    } else {
      history = ["London", "Berlin", "Paris", "Edinburgh", "Madrid", "Birmingham"]
    }
  }


  // Initialise webpage:
  historyUpload();
  historyButtons();
  getWeather(history[0]);


  // Buttons:
  $("#search-button").on("click", function(event) {
    event.preventDefault();
    getWeather($("#search-input").val().trim());
  });

  $(document).on("click", ".history-button", function(event) {
    event.preventDefault();
    getWeather($(this).text());
  });


});
