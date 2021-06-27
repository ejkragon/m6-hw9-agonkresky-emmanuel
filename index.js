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

    var url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&units=imperial&appid=${apiKey}` 
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
                    <img class="city-icon" src="./images/${weather[0]["icon"]}.png" alt={weather[0]["description"]}">
                    <figcaption><span>${weather[0]["description"]}</span></figcaption>
                </figure>            
                <div class="city-temp"><span>currently: ${Math.round(main.temp)}<sup>°</sup></span>F</div>
                <div class="feels-like"><span>feels like: ${Math.round(main.feels_like)}<sup>°</sup>F</span></div>
            `;
            li.innerHTML = markup;
            list.appendChild(li);
        })

                // < img class="city-icon" src = "openweathermap-api-icons/icons/${icon}.png" alt = "${weather[0]["description"]}" >
                //  https://stackoverflow.com/questions/44177417/how-to-display-openweathermap-weather-icon
                // <div class="last-update">${dt}</div> // time would need to be converted, skipping for now 

                                     
        .catch(() => {
            msg.textContent = "Location not found";
        });

    msg.textContent = ""
    form.reset()
    input.focus()
    });
