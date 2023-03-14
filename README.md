# Five Days Weather Dashboard (Trilogy Skills Bootcamp: Week 8)

## Table of Contents
Design Prompt:
* [Description](#Description)
* [Acceptance Criteria](#Acceptance-Criteria)
* [Mock-up](#Mock-up)

Deployment:
* [URL](#URL)
* [License](#license)

</br>

___
# Design Prompt
## Description
Server APIs allow developers to access their data and functionality by making requests with specific parameters to a URL. Developers are often tasked with retrieving data from another application's API and using it in the context of their own. My challenge this week was to build a weather dashboard that will run in the browser and feature dynamically updated HTML and CSS.

I used the [5 Day Weather Forecast](https://openweathermap.org/forecast5) to retrieve weather data for cities.

I used `localStorage` to store any persistent data. 

User Story:
```
AS A traveler
I WANT to see the weather outlook for multiple cities
SO THAT I can plan a trip accordingly
```
<a href="#references">*[1]*</a>

</br>

## Acceptance Criteria
Your project must fulfil the following requirements<a href="#references">*[1]*</a>:
* Create a weather dashboard with form inputs.
  * When a user searches for a city they are presented with current and future conditions for that city and that city is added to the search history
  * When a user views the current weather conditions for that city they are presented with:
    * The city name
    * The date
    * An icon representation of weather conditions
    * The temperature
    * The humidity
    * The wind speed
  * When a user view future weather conditions for that city they are presented with a 5-day forecast that displays:
    * The date
    * An icon representation of weather conditions
    * The temperature
    * The humidity
  * When a user click on a city in the search history they are again presented with current and future conditions for that city

</br>

## Mock-Up
The following image shows a mock-up of the generated HTML’s appearance and functionality:

![The weather app includes a search option, a list of cities, and a five-day forecast and current weather conditions for London.](./assets/img/10-server-side-apis-challenge-demo.png)

The styling in the image is just an example, so feel free to add your own.<a href="#references">*[1]*</a>

</br>

___
# Deployment
## URL
* The URL of the deployed application: https://daveheseltine.github.io/Five-Days-Weather-Dashboard/
* The URL of the GitHub Repository: https://github.com/daveheseltine/Five-Days-Weather-Dashboard

</br>

## License
MIT License

Copyright (c) 2023 daveheseltine

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

</br>

___
# References
1. Trilogy Skills Bootcamp (2023) *UK-VIRT-FE-PT-12-2022-U-LOLC/08-server-apis-module/04-weather-dashboard-lesson/challenge/README.md*
