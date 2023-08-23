// axios
//     .get("https://jsonplaceholder.typicode.com/todos/1")
//     .then((data) => console.log(data.data));

// ---> samandar

const bannerBoxes = document.querySelectorAll("#Banner .banner-box");
const startingAtPrice = document.querySelector(".startingAtPrice");
const bannerDay = document.querySelector("#Banner .day");
const bannerHour = document.querySelector("#Banner .hour");
const bannerMinute = document.querySelector("#Banner .minute");
const bannerSecond = document.querySelector("#Banner .second");

function bannerTimer() {
    let d = 2;
    let h = 16;
    let m = 42;
    let s = 25;
    let allTime = d * 24 * 3600 + h * 3600 + m * 60 + s;
    const stopped = null;

    bannerDay.textContent = `${d < 10 ? "0" + d : d}`;
    bannerHour.textContent = `${h < 10 ? "0" + h : h}`;
    bannerMinute.textContent = `${m < 10 ? "0" + m : m}`;
    bannerSecond.textContent = `${s < 10 ? "0" + s : s}`;

    stopped = setInterval(() => {
        if (s < 0 && m == 0 && h == 0 && d == 0) {
            return clearInterval(stopped);
        }
        if (s == 0 && m == 0 && h == 0 && d - 1 >= 0) {
            d = d - 1;
            h = 23;
            m = 59;
            s = 59;
            bannerDay.textContent = `${d < 10 ? "0" + d : d}`;
            bannerHour.textContent = `${h < 10 ? "0" + h : h}`;
            bannerMinute.textContent = `${m < 10 ? "0" + m : m}`;
            bannerSecond.textContent = `${s < 10 ? "0" + s : s}`;
        }
        if (s == 0 && m == 0 && h - 1 >= 0) {
            h = h - 1;
            m = 59;
            s = 59;
            bannerHour.textContent = `${h < 10 ? "0" + h : h}`;
            bannerMinute.textContent = `${m < 10 ? "0" + m : m}`;
            bannerSecond.textContent = `${s < 10 ? "0" + s : s}`;
        }
        if (s == 0 && m - 1 >= 0) {
            m = m - 1;
            s = 59;
            bannerMinute.textContent = `${m < 10 ? "0" + m : m}`;
        }
        bannerSecond.textContent = `${s < 10 ? "0" + s : s}`;
        s--;
    }, 1000);
}
bannerTimer();
// samandar <----
