// axios
//     .get("https://jsonplaceholder.typicode.com/todos/1")
//     .then((data) => console.log(data.data));

// ---> samandar

function bannerTimer() {
    const bannerBoxes = document.querySelectorAll("#Banner .banner-box")
    const startingAtPrice = document.querySelector(".startingAtPrice")
    const bannerDay = document.querySelector("#Banner .day")
    const bannerHour = document.querySelector("#Banner .hour")
    const bannerMinute = document.querySelector("#Banner .minute")
    const bannerSecond = document.querySelector("#Banner .second")

    let box1Img = "vegetables-img.jpg"
    let box2Img = "vegetables-sale-img.jpg"
    bannerBoxes[0].style.background = `linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.35)),
    url('../images/${box1Img}')`

    bannerBoxes[1].style.background = `linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.35)),
    url('../images/${box2Img}')`
    bannerBoxes.forEach((box) => (box.style.backgroundSize = "cover"))

    let d = 2
    let h = 16
    let m = 42
    let s = 25

    let allTime = d * 24 * 3600 + h * 3600 + m * 60 + s
    let stopped = null

    bannerDay.textContent = `${d < 10 ? "0" + d : d}`
    bannerHour.textContent = `${h < 10 ? "0" + h : h}`
    bannerMinute.textContent = `${m < 10 ? "0" + m : m}`
    bannerSecond.textContent = `${s < 10 ? "0" + s : s}`

    stopped = setInterval(() => {
        if (s < 0 && m == 0 && h == 0 && d == 0) {
            return clearInterval(stopped)
        }
        if (s == 0 && m == 0 && h == 0 && d - 1 >= 0) {
            d = d - 1
            h = 23
            m = 59
            s = 59
            bannerDay.textContent = `${d < 10 ? "0" + d : d}`
            bannerHour.textContent = `${h < 10 ? "0" + h : h}`
            bannerMinute.textContent = `${m < 10 ? "0" + m : m}`
            bannerSecond.textContent = `${s < 10 ? "0" + s : s}`
        }
        if (s == 0 && m == 0 && h - 1 >= 0) {
            h = h - 1
            m = 59
            s = 59
            bannerHour.textContent = `${h < 10 ? "0" + h : h}`
            bannerMinute.textContent = `${m < 10 ? "0" + m : m}`
            bannerSecond.textContent = `${s < 10 ? "0" + s : s}`
        }
        if (s == 0 && m - 1 >= 0) {
            m = m - 1
            s = 59
            bannerMinute.textContent = `${m < 10 ? "0" + m : m}`
        }
        bannerSecond.textContent = `${s < 10 ? "0" + s : s}`
        s--
    }, 1000)
}
bannerTimer()
// samandar <----

//=========>> Main section Swiper <<================//
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    speed: 1600,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
})

// Kamroncik
const likeIcon = document.querySelector(".product_offerLike")

likeIcon.addEventListener("click", () => {
    likeIcon.innerHTML = `
    <style>
        .product_offerLike img{
            color:red;
        }
    </style>
    `
})
// Kamroncik
// Savbatov Asadbek

let valueDisplays = document.querySelectorAll(".num")
let interval = 4000

valueDisplays.forEach((valueDisplay) => {
    let startValue = 0
    let endValue = parseInt(valueDisplay.getAttribute("data-val"))
    let duration = Math.floor(interval / endValue)
    let counter = setInterval(function () {
        // startValue += 1;
        // valueDisplay.textContent = startValue;

        if (startValue < 1000) {
            startValue += 5
            valueDisplay.textContent = startValue
        }

        if (startValue >= 1000) {
            startValue += 100
            valueDisplay.textContent = (startValue / 1000).toFixed(1) + "K+"
        }

        if (startValue >= 10000) {
            startValue += 5000
        }

        if (startValue >= 1000000) {
            startValue += 500000
            valueDisplay.textContent = (startValue / 1000000).toFixed(1) + "M+"
        }

        if (startValue >= endValue) {
            if (startValue < 1000) {
                valueDisplay.textContent = endValue
            }

            if (startValue >= 1000) {
                valueDisplay.textContent =
                    endValue % 1000 === 0 ? endValue / 1000 + "K+" : (endValue / 1000).toFixed(1) + "K+"
            }

            if (startValue >= 1000000) {
                valueDisplay.textContent =
                    endValue % 1000000 === 0 ? endValue / 1000000 + "M+" : (endValue / 1000000).toFixed(1) + "M+"
            }
            clearInterval(counter)
        }
    }, duration)
})

// Savbatov Asadbek
