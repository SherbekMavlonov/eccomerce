const openCity = (evt, cityName) => {
    let i, tabcontent, tablinks
    tabcontent = document.getElementsByClassName("tabcontent")
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none"
    }
    tablinks = document.getElementsByClassName("tablinks")
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "")
    }
    document.getElementById(cityName).style.display = "block"
    evt.currentTarget.className += " active"
}
document.getElementById("defaultOpen").click()

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
//=======>> Account settings <<=====================================//
const inputImg = document.querySelector("#uploadImgInput")
const showImage = document.querySelector("#showImage")
const accountSettingsBtn = document.querySelector("#accountSettingsBtn")
const fNameInput = document.querySelector("#fNameInput")
const lNameInput = document.querySelector("#lNameInput")
const emailInput = document.querySelector("#emailInput")
const phoneNumberInput = document.querySelector("#phoneNumberInput")
const formAcc = document.querySelector(".settingsSectionIn")
let imageUrl;
//=====>> billing settings <<=====================================//
const formBilling = document.querySelector(".billingSectionIn")
const bfname = document.querySelector("#bfname")
const blname = document.querySelector("#blname")
const compName = document.querySelector("#compName")
const streetAdress = document.querySelector("#streetAdress")
const countrySlc = document.querySelector("#countrySlc")
const statesSlc = document.querySelector("#statesSlc")
const zipCode = document.querySelector("#zipCode")
const bemail = document.querySelector("#bemail")
const bnumbers = document.querySelector("#bnumbers")
const billingSettBtn = document.querySelector("#billingSettBtn")
//==========>> change password <<======================================//
const formPassword = document.querySelector(".changePasswordIn")
const currentPass = document.querySelector("#currentPass")
const newPass = document.querySelector("#newPass")
const confirmPass = document.querySelector("#confirmPass")
const ChangePassBtn = document.querySelector("#ChangePassBtn")

//=============>>>> Account settings started <<<<===================================================//
//=====>> save images in localStorage <<===========//
inputImg.addEventListener("change", (e) => {
    const reader = new FileReader()
    reader.addEventListener("load", () => {
        console.log(reader.result)
        imageUrl = reader.result
    })
    reader.readAsDataURL(e.target.files[0])
})

//========>> account settings section <<================//
formAcc.addEventListener("submit", (e) => {
    e.preventDefault()
    localStorage.setItem(
        "accountSettings",
        JSON.stringify({
            fname: fNameInput.value,
            lname: lNameInput.value,
            email: emailInput.value,
            number: phoneNumberInput.value,
            userImg: imageUrl,
        })
    )
})

accountSettingsBtn.addEventListener('click',() => {
  localStorage.setItem(
    "accountSettings",
    JSON.stringify({
        fname: fNameInput.value,
        lname: lNameInput.value,
        email: emailInput.value,
        number: phoneNumberInput.value,
        userImg: imageUrl,
    })
)
})


//=====>> take account settings section from localStorage <<===========//
const { fname, lname, email, number, userImg } = JSON.parse(localStorage.getItem("accountSettings"))
fNameInput.value = fname
lNameInput.value = lname
emailInput.value = email
phoneNumberInput.value = number
const settingsImg = userImg
if (settingsImg) {
    showImage.setAttribute("src", settingsImg)
}

//=====>> take images from file <<===============//
inputImg.addEventListener("change", (e) => {
    const file = e.target.files[0]
    let inputImage = document.querySelector("input[type=file]")
    inputImage.files[0]
    showImage.src = URL.createObjectURL(file)
})
//=================>>>> Account settings finished <<<<==================================//

//=================>>>> Billings settings started <<<<==================================//
formBilling.addEventListener("submit", (e) => {
    e.preventDefault()
    localStorage.setItem(
        "billingSettings",
        JSON.stringify({
            bFname: bfname.value,
            bLname: blname.value,
            companyName: compName.value,
            streetAddress: streetAdress.value,
            ZipCode: zipCode.value,
            bEmail: bemail.value,
            bNumbers: bnumbers.value,
        })
    )
})

const { bFname, bLname, companyName, streetAddress, ZipCode, bEmail, bNumbers } = JSON.parse(
    localStorage.getItem("billingSettings")
)
bfname.value = bFname
blname.value = bLname
compName.value = companyName
streetAdress.value = streetAddress
zipCode.value = ZipCode
bemail.value = bEmail
bnumbers.value = bNumbers
//=================>>>> Billings settings finished <<<<==================================//

//=============>> change Password started <<=====================================//
// const password = document.querySelectorAl(".password");
const currentPassEye = document.querySelector("#currentPassEye")
const newPassEye = document.querySelector("#newPassEye")
const confirmPassEye = document.querySelector("#confirmPassEye")
const incorrect = document.querySelectorAll(".incorrect")
const currIncorrect = document.querySelector("#incorrect")
let CurrentPassword = "12345678"

currentPassEye.addEventListener("click", () => {
    const currType = currentPass.getAttribute("type") === "password" ? "text" : "password"
    currentPass.setAttribute("type", currType)
    currentPassEye.classList.toggle("fa-eye")
})
newPassEye.addEventListener("click", () => {
    const newType = newPass.getAttribute("type") === "password" ? "text" : "password"
    newPass.setAttribute("type", newType)
    newPassEye.classList.toggle("fa-eye")
})
confirmPassEye.addEventListener("click", () => {
    const confirmType = confirmPass.getAttribute("type") === "password" ? "text" : "password"
    confirmPass.setAttribute("type", confirmType)
    confirmPassEye.classList.toggle("fa-eye")
})

formPassword.addEventListener("submit", (e) => {
    e.preventDefault()
    if (currentPass.value !== CurrentPassword) {
        currentPass.style.border = "1px solid red"
        currIncorrect.style.display = "block"
        formPassword.setAttribute("disabled", "")
    } else {
        currentPass.style.border = "1px solid #00B207"
        setTimeout(() => {
            currentPass.style.border = "1px solid #E6E6E6"
        }, 1000)

        if (newPass.value !== confirmPass.value) {
                incorrect.forEach((e) => {
                e.style.display = "block"
            })
            newPass.style.border = "1px solid red"
            confirmPass.style.border = "1px solid red"
        } else {
            incorrect.forEach((e) => {
                e.style.display = "none"
            })
            newPass.style.border = "1px solid #E6E6E6"
            confirmPass.style.border = "1px solid #E6E6E6"
            formPassword.removeAttribute("disabled")

            localStorage.setItem(
                "changePassword",
                JSON.stringify({
                    currPassword: currentPass.value,
                    newPassword: newPass.value,
                    confirmPassword: confirmPass.value,
                })
            )
        }
    }
})

const { currPassword, newPassword, confirmPassword } = JSON.parse(localStorage.getItem("changePassword"))
currentPass.value = confirmPassword
// newPass.value = newPassword
// confirmPass.value = confirmPassword
//=============>> change Password finished <<=====================================//
/* === Settings content end === */

/* === Log out content start === */
/* === Log out content end === */

/* === main end === */
