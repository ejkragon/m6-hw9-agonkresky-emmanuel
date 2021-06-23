//https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_prompt

function myFunction() {
    var location = prompt("Enter the location", "Orlando");
    if (location !=null) {
        document.getElementById("location").innerHTML = "Weather for " + " coming right up!";
    }
}


fetch('https://randomuser.me/api/') // make the request
    .then(function (res) {
        return res.json() // when the response is received, convert to json
    })
    .then(function (res) {
        console.log(res) // when the json is converted, log it
    })

console.log('Here!') // note this will log BEFORE fetch is finished

var toppings = prompt("Please enter additional toppings (comma separated)")
// HINT: prompt() will return an empty string "" if the user presses 'OK' without entering a value
// if the user enters toppings, use .split(",") to separate toppings into an array
// if no toppings are given, make sure pizza.toppings is set to []
// if the user has added toppings, add toppingsFee multiplied by
// the number of toppings added to pizza.cost
// YOUR CODE HERE
pizza.toppings = [toppings]
toppingsArray = toppings.split(",")
pizza.toppings = toppingsArray
if (toppings == "") {
    // alert("Confirming you want a plain cheese pizza (no toppings)")
    pizza.toppings = []
} else {
    pizza.cost += toppingsArray.length * toppingsFee
}

//https://stackoverflow.com/questions/44177417/how-to-display-openweathermap-weather-icon



//eja - copy over code from js, same holds true for index.html, getelement, etc...