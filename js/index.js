axios
  .get("https://jsonplaceholder.typicode.com/todos/1")
  .then((data) => console.log(data.data));

// Savbatov Asadbek

let valueDisplays = document.querySelectorAll(".num");
let interval = 100;

valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue += 1;
    valueDisplay.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});

// Savbatov Asadbek
