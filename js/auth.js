const loginForm = document.querySelector(".loginForm"),
    loginEmailInput = document.querySelector(".loginEmail"),
    loginPasswordInput = document.querySelector(".loginPassword"),
    lWarning = document.querySelector("#login .warning"),
    lerror = document.querySelector("#login .error"),
    lsuccess = document.querySelector("#login .success"),
    lValidatorPassword = document.querySelector("#login .validatorPassword"),
    lValidatorEmail = document.querySelector("#login .validatorEmail"),
    lPassHide = document.querySelector("#login .hide"),
    lPassShow = document.querySelector("#login .show")

let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/

loginForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const userEmail = loginEmailInput.value
    const userPassword = loginPasswordInput.value

    const userData = { email: userEmail, password: userPassword }

    localStorage.setItem("userData", JSON.stringify(userData))

    const validationMessage = validatePassword(userPassword)

    if (validationMessage === "Parol tekshirilgan va qabul qilindi.") {
    } else {
        console.log(validationMessage)
    }
})

window.addEventListener("load", () => {
    const storedUserData = localStorage.getItem("userData")
    if (storedUserData) {
        const userData = JSON.parse(storedUserData)
        loginEmailInput.value = userData.email
    }
})

loginEmailInput.addEventListener("input", () => {
    lValidatorEmail.classList.remove("dHide")
    if (loginEmailInput.value.match(pattern)) {
        lValidatorEmail.textContent = "Valid Email"
        lValidatorEmail.classList.remove("warning")
        lValidatorEmail.classList.add("success-color")
    } else {
        lValidatorEmail.textContent = "Invalid Email"
        lValidatorEmail.classList.remove("success-color")
        lValidatorEmail.classList.add("warning")
    }
})

loginPasswordInput.addEventListener("input", () => {
    const userPassword = loginPasswordInput.value
    const validationMessage = validatePassword(userPassword)
    lValidatorPassword.style.color = "red"

    if (validationMessage === "Parol tekshirilgan va qabul qilindi.") {
        lValidatorPassword.textContent = ""
    } else {
        lValidatorPassword.textContent = validationMessage
    }
})

function validatePassword(password) {
    const minLength = 8
    const maxLength = 16
    const hasUpperCase = /[A-Z]/.test(password)
    const hasLowerCase = /[a-z]/.test(password)
    const hasDigit = /\d/.test(password)
    const hasSpecialChar = /[!@#$%^&*()_+{}\[\]:;<>,.?~\-]/.test(password)

    if (password.length < minLength || password.length > maxLength) {
        return "Parol uzunligi 8 dan 16 belgiga to'g'ri kelishi kerak."
    }

    if (!hasUpperCase || !hasLowerCase || !hasDigit || !hasSpecialChar) {
        return "Parol katta harf, kichik harf, raqam va maxsus belgini o'z ichiga olishi kerak."
    }

    return "Parol tekshirilgan va qabul qilindi."
}

lPassHide.addEventListener("click", () => {
    loginPasswordInput.setAttribute("type", "password")
    lPassHide.classList.add("dHide")
    lPassShow.classList.remove("dHide")
})
lPassShow.addEventListener("click", () => {
    loginPasswordInput.setAttribute("type", "text")
    lPassShow.classList.add("dHide")
    lPassHide.classList.remove("dHide")
})

/* =====>>  Create Accaunt  <<===== */

const createEmailInput = document.querySelector("#createAccaunt .createEmail")
const createEmailError = document.querySelector("#createAccaunt .validatorEmail")

createEmailInput.addEventListener("input", function () {
    const email = createEmailInput.value.trim()
    const isGmail = email.endsWith("@gmail.com")

    if (!isGmail) {
        createEmailError.textContent = "Please enter a valid Gmail address."
        createEmailError.classList.remove("dHide")
        createEmailError.classList.remove("success-color")
    } else {
        createEmailError.textContent = "Valid Email"
        createEmailError.classList.add("success-color")
    }
})

const createPasswordInput = document.querySelector(".createPassword")
const createPasswordError = createPasswordInput.nextElementSibling

createPasswordInput.addEventListener("input", function () {
    const password = createPasswordInput.value

    const isLengthValid = password.length >= 8 && password.length <= 16
    const hasUppercase = /[A-Z]/.test(password)
    const hasLowercase = /[a-z]/.test(password)
    const hasNumber = /[0-9]/.test(password)

    if (!isLengthValid || !hasUppercase || !hasLowercase || !hasNumber) {
        createPasswordError.textContent =
            "Password must be 8 to 16 characters long and include uppercase, lowercase, and numeric characters."
        createPasswordError.classList.remove("dHide")
        createPasswordError.classList.add("error")
        createPasswordError.classList.remove("success-color")
    } else {
        createPasswordError.textContent = "Valid Password"
        createPasswordError.classList.remove("error")
        createPasswordError.classList.add("success-color")
    }
})
