const degree = document.querySelector("#degree");
const btn = document.querySelector(".btn");
const displayBox = document.querySelector(".displayBox");
const select = document.querySelector("select");
let result;

const displayfahrenheit = () => {
    result = (degree.value - 32) * 5 / 9;
    displayBox.textContent = `${result.toFixed(2)}℃`;
};

const displaycelsius = () => {
    result = degree.value * (9 / 5) + 32;
    displayBox.textContent = `${result.toFixed(2)}℉ `;
};

btn.addEventListener("click", () => {
    if (select.value == "fahrenheit") {
        displayfahrenheit();
    } else {
        displaycelsius();
    }
});