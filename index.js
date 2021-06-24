//from Lee's live lecture and notes

//https://webdesign.tutsplus.com/tutorials/build-a-simple-weather-app-with-vanilla-javascript--cms-33893

var form = document.querySelector(".location form")

form.addEventListener("submit", e => {
    e.preventDefault()
    var inputVal = input.value //why is this undeclared?
})

var apiKey = "c54b26351ced73049073d309a5b59b67"
var inputVal = input.value
var btn = document.querySelector("button")
var url = 'https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&units=imperial&appid=${apiKey}'

btn.onclick = function() {
    // fetch('https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&units=imperial&appid=${apiKey}') // make the request
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Orlando&units=imperial&appid=c54b26351ced73049073d309a5b59b67') // make the request
    .then(function(res) {
        return res.json() // when the response is received, convert to json
    })
    .then(function(res) {
        console.log(res.results) // when the json is converted, log it
        //do stuff
        //"results" was added in lecture
    })

console.log('Here!') // note this will log BEFORE fetch is finished
}




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