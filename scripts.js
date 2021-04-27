// This function changes the cookie div's display to none when the accept button is click 
function accept() {
    var x = document.getElementById("cookies");
    x.style.display = "none";
}

// Arrays containing our hard-coded highs and lows temperatures in Farenheight and Celsius
var farHigh = ["75°", "80°", "69°", "78°"];
var farLow = ["65°", "66°", "61°", "70°"];
var celsHigh = ["23.9°", "26.7°", "20.6°", "25.6°"];
var celsLow = ["18.3°", "18.9°", "16.1°", "21.1°"]

// Query selector to set variables for our highs and lows text elements
var high = document.querySelectorAll(".highs");
var lows = document.querySelectorAll(".lows");

// This function will change the inner text on our highs and lows from our arrays depending
// on the value our select element has. (Farenheit for F, Celsius for C)
function swap(element) {
    if (element.value == "F") {
        for(var i = 0; i < high.length; i++) {
            high[i].innerText = farHigh[i];
        }
        for(var j = 0; j < lows.length; j++) {
            lows[j].innerText = farLow[j];
        }
    }
    if (element.value == "C") {
        for(var i = 0; i < high.length; i++) {
            high[i].innerText = celsHigh[i];
        }
        for(var j = 0; j < lows.length; j++) {
            lows[j].innerText = celsLow[j];
        }
    }
}

