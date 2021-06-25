//from Lee's live lecture, notes, slack msgs and https://webdesign.tutsplus.com/tutorials/build-a-simple-weather-app-with-vanilla-javascript--cms-33893 (part of this tutorial is the following codepen: https://codepen.io/tutsplus/details/gObLaEP)

var form = document.querySelector(".container form")
var input = document.querySelector(".container input")
var msg = document.querySelector(".container .message")
var apiKey = "c54b26351ced73049073d309a5b59b67"

form.addEventListener("submit", e => {
    e.preventDefault()
    var inputVal = input.value //see Lee's slack msg
    var locationsEl = document.getElementById("locations") //lecture notes, changed the id from users to location
    var btn = document.querySelector("button") //lecture notes
    var url = "https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=imperial"

    // btn.onclick = function () {
        fetch(url) // make the request
            .then(function (res) {
                return res.json() // when the response is received, convert to json
            })
            .then(function (res) {
                // console.log(res.results)
                renderLocations(res.results) // when the json is converted, log it
                //do stuff
                //"results" was added in lecture
            })
        console.log('Here!') // note this will log BEFORE fetch is finished
    // }

    //from Lee slack message: use a text input and a button (regarding the input.value issue)

    function renderLocations(locations) {
        locationsEl.innerHTML = ""
        locations.forEach(location => {
            var locationContainer = document.createElement("div")
            locationContainer.classList.add("location-container")

            var name = document.createElement('h2')
            name.textContent = name + " , USA "
            locationContainer.appendChild(name)

        })
    }
})

// check codepen if we want to go back and solve for possible issues with locations "mockups have this as location not found"

//codepen does not use btn function; lee says to use textinput and button; target the input element in addition to targeting the form

// var locationsEl = document.getElementById("locations") //lecture notes, changed the id from users to location
// var btn = document.querySelector("button") //lecture notes
// var url = "https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=imperial"
// 
// btn.onclick = function() {
    // fetch(url) // make the request
        // .then(function(res) {
            // return res.json() // when the response is received, convert to json
        // })
        // .then(function(res) {
            // console.log(res.results)
            // renderLocations(res.results) // when the json is converted, log it
            // do stuff
            // "results" was added in lecture
        // })
    // console.log('Here!') // note this will log BEFORE fetch is finished
// }
// 
// from Lee slack message: use a text input and a button (regarding the input.value issue)
// 
// function renderLocations(locations) {
    // locationsEl.innerHTML = ""
    // locations.forEach(location => {
        // var locationContainer = document.createElement("div")
        // locationContainer.classList.add("location-container")
    // 
        // var name = document.createElement('h2')
        // name.textContent = name + " , USA " 
        // locationContainer.appendChild(name)
    // 
    // })
// }

// 1. name (city)
// 2. weather.description
// 3. weather.icon
// 4. main.temp
// 5. main.feels_like
// 6. dt (last update)
// 
//https://www.w3schools.com/jsref/tryit.aspfilename=tryjsref_prompt









//figure out a way to submit the location, button for the search function, this needs to be a query string
// ? starts the location name, key value pairs
// put api in query string (attach to url)





// function myFunction() {
    // var location = prompt("Enter the location", "Orlando");
    // if (location !=null) {
        // // document.getElementById("location").innerHTML = "Weather for " + " coming right up!";
    // }
// }

//get (read), put (replace) 

//check network tab

//XHR for weather project















//Orlando
//https://api.openweathermap.org/data/2.5/weather?q=Orlando&appid=c54b26351ced73049073d309a5b59b67



// var toppings = prompt("Please enter additional toppings (comma separated)")
// HINT: prompt() will return an empty string "" if the user presses 'OK' without entering a value
// if the user enters toppings, use .split(",") to separate toppings into an array
// if no toppings are given, make sure pizza.toppings is set to []
// if the user has added toppings, add toppingsFee multiplied by
// the number of toppings added to pizza.cost
// YOUR CODE HERE
// pizza.toppings = [toppings]
// toppingsArray = toppings.split(",")
// pizza.toppings = toppingsArray
// if (toppings == "") {
    // alert("Confirming you want a plain cheese pizza (no toppings)")
    // pizza.toppings = []
// } else {
    // pizza.cost += toppingsArray.length * toppingsFee
// }

//https://stackoverflow.com/questions/44177417/how-to-display-openweathermap-weather-icon



//eja - copy over code from js, same holds true for index.html, getelement, etc...

//error, location not found

//reset