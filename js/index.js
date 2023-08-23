// axios
//     .get("https://jsonplaceholder.typicode.com/todos/1")
//     .then((data) => console.log(data.data));

// ---> samandar

function bannerTimer() {
    const bannerBoxes = document.querySelectorAll("#Banner .banner-box");
    const startingAtPrice = document.querySelector(".startingAtPrice");
    const bannerDay = document.querySelector("#Banner .day");
    const bannerHour = document.querySelector("#Banner .hour");
    const bannerMinute = document.querySelector("#Banner .minute");
    const bannerSecond = document.querySelector("#Banner .second");

    let box1Img = "vegetables-img.jpg";
    let box2Img = "vegetables-sale-img.jpg";
    bannerBoxes[0].style.background = `linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.35)),
    url('../images/${box1Img}')`;

    bannerBoxes[1].style.background = `linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.35)),
    url('../images/${box2Img}')`;
    bannerBoxes.forEach((box) => (box.style.backgroundSize = "cover"));
 

    let d = 2;
    let h = 16;
    let m = 42;
    let s = 25;

    let allTime = d * 24 * 3600 + h * 3600 + m * 60 + s;
    let stopped = null;

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
});
// main section swiper end <<====================================//

// =========>> testimonial section <<=========================//
// import Swiper from "../node_modules/swiper/swiper-bundle.mjs";
// import { TESTOMONIAL } from "./__mock__data.js";
function createTestomonial() {
  const swiperWrapper = document.querySelector(".swiper-wrapper");

  const swiper = new Swiper(".swiper-container", {
    loop: true,
    loopedSlides: 3,
    slidesPerView: 3,
    navigation: {
      nextEl: ".testamonialScrollRight",
      prevEl: ".testamonialScrollLeft",
    },
    autopay: {
      enabled: true,
      delay: 5000,
    },
  });
  

  TESTOMONIAL.forEach((customer) => {
    const testomonial = document.createElement("div");
    const tilda = document.createElement("div");
    const imgTilda = document.createElement("img");
    const content = document.createElement("div");
    const clientDiv = document.createElement("div");
    const reviewer = document.createElement("div");
    const rating = document.createElement("div");
    const reviewerImageDiv = document.createElement("div");
    const info = document.createElement("div");
    const reviewerImage = document.createElement("img");
    const customersName = document.createElement("div");
    const customerRole = document.createElement("div");
    const ratingImg = document.createElement("img");

    imgTilda.setAttribute("src", "../images/icons/tilda-icon.svg");
    imgTilda.setAttribute("alt", "icon");
    imgTilda.setAttribute("loading", "lazy");
    reviewerImage.setAttribute("src", customer.customerImage);
    reviewerImage.setAttribute("alt", "icon");
    reviewerImage.setAttribute("loading", "lazy");
    ratingImg.setAttribute("src", "../images/icons/star-full.svg");
    ratingImg.setAttribute("alt", "icon");
    ratingImg.setAttribute("loading", "lazy");

    testomonial.classList.add("swiper-slide", "testomonial");
    tilda.classList.add("tilda");
    content.classList.add("content");
    clientDiv.classList.add("client");
    reviewer.classList.add("reviewer");
    rating.classList.add("rating");
    reviewerImageDiv.classList.add("reviewerImage");
    info.classList.add("info");
    customersName.classList.add("customerName");
    customerRole.classList.add("customer");
    customersName.textContent = customer.customerName;
    customerRole.textContent = "Customer";

    testomonial.appendChild(tilda);
    testomonial.appendChild(content);
    testomonial.appendChild(clientDiv);
    tilda.appendChild(imgTilda);
    content.textContent = customer.content;
    clientDiv.appendChild(reviewer);
    clientDiv.appendChild(rating);
    let ratingVal = Array.from({ length: 5 }).fill("✩").join("");
    for (let i = 0; i <= customer.rating; i++) {
      ratingVal = ratingVal.replace("✩", "⭐️");
    }
    rating.textContent = ratingVal;
    reviewerImageDiv.appendChild(reviewerImage);
    reviewer.appendChild(reviewerImageDiv);

    reviewer.appendChild(info);
    info.appendChild(customersName);
    info.appendChild(customerRole);

    swiperWrapper.appendChild(testomonial);
  });
}
createTestomonial();
// ===================>> testimonial end <<=========================//
