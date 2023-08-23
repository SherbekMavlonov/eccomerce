axios
  .get("https://jsonplaceholder.typicode.com/todos/1")
  .then((data) => console.log(data.data));

// Azimsher

new Swiper(".topCatigoriesSwiper", {
  slidesPerView: 6,
  spaceBetween: 24,
  loop: true,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },
});

// Azimsher
