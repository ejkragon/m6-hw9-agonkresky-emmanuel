//from Lee's live lecture, notes, slack msgs and https://webdesign.tutsplus.com/tutorials/build-a-simple-weather-app-with-vanilla-javascript--cms-33893 (part of this tutorial is the following codepen: https://codepen.io/tutsplus/details/gObLaEP)

var form = document.querySelector(".container form")
var input = document.querySelector(".container input")
var msg = document.querySelector(".container .msg")
var list = document.querySelector(".ajax .cities")
var apiKey = "c54b26351ced73049073d309a5b59b67"
var usersEl = document.getElementById("users") //lecture notes, changed the id from users to location (may not need)
var btn = document.querySelector("button") //lecture notes (may not need)

form.addEventListener("submit", e => {
    e.preventDefault()
    var inputVal = input.value //see Lee's slack msg
    
    // section from codepen even though original allows for multiple cities, go back to edit 
    var listItems = list.querySelectorAll(".ajax .city") // codepen has this as singular even though HTML has this as plural
    var listItemsArray = Array.from(listItems)

    if(listItemsArray.length > 0) {
        var filteredArray = listItemsArray.filter(el => {
            var content = ""
            if (inputVal.includes(",")) {
                if (inputVal.split(",")[1].length > 2) {
                    inputVal = inputVal.split(",")[0]
                    content = el
                        .querySelector(".city-name span")
                        .textContent.toLowerCase();
                } else {
                    content = el.querySelector(".city-name").dataset.name.toLowerCase()
                }
            } else {
                content = el.querySelector(".city-name span").textContent.toLowerCase()
            }
            return content == inputVal.toLowerCase()
        })

        if (filteredArray.length > 0) {
            msg.textContent = `You already know the weather for ${filteredArray[0].querySelector(".city-name span").textContent
                } ...otherwise be more specific by providing the country code as well 😉`;
            form.reset()
            input.focus()
            return 
        }
    }

    var url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&units=imperial&appid=${apiKey}` // copy and pasted from Lee's word doc, removed spaces and typed in ${variables}
    // var locationIcon = document.querySelector(".weather-icon") //https://stackoverflow.com/questions/44177417/how-to-display-openweathermap-weather-icon?newreg=7544d0125bb4487892a1a077c3b8d075


    fetch(url) // make the request 
        .then(response => response.json()) //codepen
    // .then(function(res) {
        // return res.json() //lecture notes
    // })
        .then(data => {
            var { main, name, sys, weather, dt } = data; //codepen
            // renderUsers(res.results) //lecture notes; this is causing an error. Examples has it as "users"
            console.log(inputVal); // note this will log BEFORE fetch is finished
            console.log(data);
            // .then(function(res) {
            // renderUsers(res.results)
        
            var li = document.createElement("li");
            li.classList.add("city");
            // var {icon} = value.weather
            var markup = `
                <h2 class="city-name" data-name="${name},${sys.country}">
                    <span>${name}, ${sys.country}</span>
                </h2>               
                <figure>
                    <img class="city-icon" src="openweathermap-api-icons/icons/${weather[0]["icon"]}.png" alt={weather[0]["description"]}">
                    <figcaption><span>${weather[0]["description"]}</span></figcaption>
                </figure>            
                <div class="city-temp"><span>currently: ${Math.round(main.temp)}<sup>°</sup></span>F</div>
                <div class="feels-like"><span>feel like: ${Math.round(main.feels_like)}<sup>°</sup>F</span></div>
            `;
            li.innerHTML = markup;
            list.appendChild(li);
        })


                // < img class="city-icon" src = "openweathermap-api-icons/icons/${icon}.png" alt = "${weather[0]["description"]}" >
                //  https://stackoverflow.com/questions/44177417/how-to-display-openweathermap-weather-icon
                // <div class="last-update">${dt}</div> // time would need to be converted, skipping for now 
                 // <figure>
                    // <img class="city-icon" src="${icon}" alt="${weather[0]["description"]}">
                    // <figcation>${weather[0]["description"]}</figcaption>
                // </figure>
                                     
        .catch(() => {
            msg.textContent = "Location not found";
        });

    msg.textContent = ""
    form.reset()
    input.focus()
    });

// function renderUsers(users) {
    // usersEl.innerHTML = ""
    // users.forEach(user => {
        // var userContainer = document.createElement("div")
        // userContainer.classList.add("user-container")
        // console.log
// 
        // var name = document.createElement('h2')
        // name.textContent = name + ", " + sys.country
        // userContainer.appendChild(name)
        // console.log
// 
// 
    // })

         
        

    

        
        
            
            
            
            // when the json is converted, log it
            // do stuff
            // "results" was added in lecture
    

// 1. name (city)
// 2. weather.description
// 3. weather.icon
// 4. main.temp
// 5. main.feels_like
// 6. dt (last update)

//add catch????
            
    // renderLocations(res.results)
            
            
    

    

    // }


// from Lee slack message: use a text input and a button (regarding the input.value issue)

// ); function renderUsers(users) {
    // usersEl.innerHTML = ""
    // users.forEach(user => {
        // var userContainer = document.createElement("div")
        // userContainer.classList.add("user-container")
        // console.log
// 
        // var name = document.createElement('h2')
        // name.textContent = name + ", " + sys.country
        // userContainer.appendChild(name)
        // console.log
//   
    // });
// }

// 
    // fetch(url)
        // .then(response => response.json())
        // .then(data => {
            // const { main, name, sys, weather } = data;
            // const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0]["icon"]
                // }.svg`;
// 
            // const li = document.createElement("li");
            // li.classList.add("city");
            // const markup = `
        // <h2 class="city-name" data-name="${name},${sys.country}">
        //   <span>${name}</span>
        //   <sup>${sys.country}</sup>
        // </h2>
        // <div class="city-temp">${Math.round(main.temp)}<sup>°C</sup></div>
        // <figure>
        //   <img class="city-icon" src="${icon}" alt="${weather[0]["description"]
                // }">
        //   <figcaption>${weather[0]["description"]}</figcaption>
        // </figure>
    //   `;
            // li.innerHTML = markup;
            // list.appendChild(li);
        // })
        // .catch(() => {
            // msg.textContent = "Please search for a valid city 😩";
        // });
// 
    // msg.textContent = "";
    // form.reset();
    // input.focus();
// });
// 
// 
































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




//eja - copy over code from js, same holds true for index.html, getelement, etc...

//error, location not found

//reset
// }