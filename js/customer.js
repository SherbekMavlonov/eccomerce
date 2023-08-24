// Savbatov Asadbek

let valueDisplays = document.querySelectorAll(".num");
let interval = 4000;

valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    // startValue += 1;
    // valueDisplay.textContent = startValue;

    if (startValue < 1000) {
      startValue += 5;
      valueDisplay.textContent = startValue;
    }

    if (startValue >= 1000) {
      startValue += 100;
      valueDisplay.textContent = (startValue / 1000).toFixed(1) + "K+";
    }

    if (startValue >= 10000) {
      startValue += 5000;
    }

    if (startValue >= 1000000) {
      startValue += 500000;
      valueDisplay.textContent = (startValue / 1000000).toFixed(1) + "M+";
    }

    if (startValue >= endValue) {
      if (startValue < 1000) {
        valueDisplay.textContent = endValue;
      }

      if (startValue >= 1000) {
        valueDisplay.textContent =
          endValue % 1000 === 0
            ? endValue / 1000 + "K+"
            : (endValue / 1000).toFixed(1) + "K+";
      }

      if (startValue >= 1000000) {
        valueDisplay.textContent =
          endValue % 1000000 === 0
            ? endValue / 1000000 + "M+"
            : (endValue / 1000000).toFixed(1) + "M+";
      }
      clearInterval(counter);
    }
  }, duration);
});

// Savbatov Asadbek
