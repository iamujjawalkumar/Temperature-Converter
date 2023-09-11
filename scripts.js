const CelciusEl = document.getElementById("Celcius");
const FahrenheitFl = document.getElementById("Fahrenheit");
const KelvinKl = document.getElementById("Kelvin");
const bodyElement = document.body;

function computeTemp() {
    //ADD + to Avoid String Problem //
    // const currentValue = +event.target.value;
    const currentValue = +CelciusEl.value;

    switch(event.target.name) {
        case "Celcius":
            KelvinKl.value = currentValue + 273.15;
            FahrenheitFl.value = (currentValue * 9/5) + 32;
            updateBackgroundColor(currentValue);
            break;
        case "Fahrenheit":
            CelciusEl.value = (currentValue - 32) * 5/9;
            KelvinKl.value = (currentValue - 32) * 5/9 + 273.15;
            updateBackgroundColor((currentValue - 32) / 1.8);
            break;
        case "Kelvin":
            CelciusEl.value = currentValue - 273.15;
            FahrenheitFl.value = (currentValue - 273.15) * 9/5 + 32;
            updateBackgroundColor(currentValue - 273.15);
            break;
        default:
            break;
    }
}
function clearValues() {
    CelciusEl.value = "";
    FahrenheitFl.value = "";
    KelvinKl.value = "";
    updateBackgroundColor("default");
}

// Function to update background color based on temperature
function updateBackgroundColor(celsiusValue) {
    if (celsiusValue >= 35) {
        bodyElement.classList.remove("cool-bg");
        bodyElement.classList.remove("cool-mod-bg");
        bodyElement.classList.add("hot-bg");
    } else if (celsiusValue <= 15) {
        bodyElement.classList.remove("hot-bg");
        bodyElement.classList.remove("cool-mod-bg");
        bodyElement.classList.add("cool-bg");
    } else if (celsiusValue > 25 && celsiusValue < 35) {
        bodyElement.classList.remove("hot-bg");
        bodyElement.classList.remove("cool-bg");
        bodyElement.classList.remove("cool-mod-bg");
        bodyElement.classList.add("hot-mod-bg");
    } else if (celsiusValue > 15 && celsiusValue < 25 ) {
        bodyElement.classList.remove("hot-bg");
        bodyElement.classList.remove("cool-bg");
        bodyElement.classList.add("cool-mod-bg");
    } else {
        bodyElement.classList.remove("hot-bg");
        bodyElement.classList.remove("cool-bg");
        bodyElement.classList.remove("cool-mod-bg");
        bodyElement.classList.remove("hot-mod-bg");
    }

}

// Initial background color based on the default Celsius value
updateBackgroundColor("default");