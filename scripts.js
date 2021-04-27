function accept() {
    var x = document.getElementById("cookies");
    x.style.display = "none";
}


var farHigh = ["75°", "80°", "69°", "78°"];
var farLow = ["65°", "66°", "61°", "70°"];
var celsHigh = ["23.9°", "26.7°", "20.6°", "25.6°"];
var celsLow = ["18.3°", "18.9°", "16.1°", "21.1°"]

var high = document.querySelectorAll(".highs");
var lows = document.querySelectorAll(".lows");

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

