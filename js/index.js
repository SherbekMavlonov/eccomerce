import Swiper from "../node_modules/swiper/swiper-bundle.mjs";
import { TESTOMONIAL } from "./__mock__data.js";

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
