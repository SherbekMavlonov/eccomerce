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
/* === Settings content end === */

/* === Log out content start === */
/* === Log out content end === */

/* === main end === */
