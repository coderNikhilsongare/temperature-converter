const celsiusField = document.querySelector("#celsius");
const degree = document.querySelector("#degree");
const convertBtn = document.querySelector("#convert-btn");
const tempType = document.querySelector("#temp-type");

window.addEventListener("load", () => {
  degree.value = "";
  celsiusField.textContent = "";
  convertBtn.setAttribute("disabled", "");
  setTimeout(() => {
    convertBtn.removeAttribute("disabled");
  }, 4000);
});

convertBtn.addEventListener("click", (e) => {
  e.preventDefault();
  convertToCelsius();
  convertBtn.innerHTML = "<span class='icon'><i class='fa fa-spinner fa-spin'></i> Converting...</span>";
  setTimeout(() => {
    convertBtn.innerHTML = "<span>Convert</span>";
  }, 1000);
});

function convertToCelsius() {
  let inputValue = parseFloat(degree.value);

  setTimeout(() => {
    if (isNaN(inputValue)) {
      celsiusField.textContent = "Please enter a valid number";
    } else {
      if (tempType.value === "fahrenheit") {
        const FahrenheitToCelsius = (inputValue - 32) * 5/9;
        celsiusField.textContent = `${FahrenheitToCelsius.toFixed(3)} °C`;
      } else if (tempType.value === "kelvin") {
        const KelvinToCelsius = inputValue - 273.15;
        celsiusField.textContent = `${KelvinToCelsius.toFixed(3)} °C`;
      }
    }
  }, 1200);
}
