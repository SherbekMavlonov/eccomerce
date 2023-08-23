const openCity = (evt, cityName) => {
  let i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
};
document.getElementById("defaultOpen").click();

/* === breadcrumbs start */
/* === breadcrumbs end === */

/* === Dashboard styles === */

/* === navigation start === */
/* === navigation end === */

/* === main start === */

/* === dashboard content start === */
/* === dashboard content end === */

/* === Order History content start === */
/* === Order History content end === */

/* === Wishlist content start === */
/* === Wishlist content end === */

/* === Shopping Cart content start === */
/* === Shopping Cart content end === */

/* === Settings content start === */
const input = document.querySelector("#uploadImgInput");
const showImage = document.querySelector("#showImage");
const accountSettingsBtn = document.querySelector("#accountSettingsBtn");
const fNameInput = document.querySelector("#fNameInput");
const lNameInput = document.querySelector("#lNameInput");
const emailInput = document.querySelector("#emailInput");
const phoneNumberInput = document.querySelector("#phoneNumberInput");
const form = document.querySelector("form");

//=====>> save images in localStorage <<===========//
input.addEventListener("change", (e) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    console.log(reader.result);
    localStorage.setItem("settingsImg", reader.result);
  });
  reader.readAsDataURL(e.target.files[0]);
});

//========>> account settings section <<================//
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const fname = localStorage.setItem('fname',fNameInput.value);
  const lname = localStorage.setItem('lname',lNameInput.value);
  const email = JSON.stringify(localStorage.setItem('email',emailInput.value));
  const number = localStorage.setItem('number',phoneNumberInput.value);
  console.log(fname);
  console.log(lname);
  console.log(email);
  console.log(number);

  // const formData = new FormData(form);
  // const object = Object.fromEntries(formData);
  // console.log(object);
  // const json = JSON.stringify(object);
  // localStorage.setItem("accountSettings", json);
  // const api = fetch(`https://httpbin.org/post`, {
  //   method: "POST",
  //   body: json,
  //   headers: {
  //     "Content-type": "application/json",
  //   },
  // })
  //   .then((res) => res.json())
  //   .then((data) => console.log(data));
});

//=====>> take account settings section from localStorage <<===========//
document.addEventListener("DOMContentLoaded", () => {
  const settingsImg = localStorage.getItem("settingsImg");
  if (settingsImg) {
    showImage.setAttribute("src", settingsImg);
  }
});

// const accountJson = localStorage.getItem("accountSettings");
// const jsonParsed = JSON.parse(accountJson);
fNameInput.value = localStorage.getItem('fname');
lNameInput.value = localStorage.getItem('lname');
emailInput.value = localStorage.getItem('email')
phoneNumberInput.value = localStorage.getItem('number');

//=====>> take images from file <<===============//
input.addEventListener("change", (e) => {
  const file = e.target.files[0];
  let inputImage = document.querySelector("input[type=file]");
  inputImage.files[0];
  showImage.src = URL.createObjectURL(file);
});
/* === Settings content end === */

/* === Log out content start === */
/* === Log out content end === */

/* === main end === */
