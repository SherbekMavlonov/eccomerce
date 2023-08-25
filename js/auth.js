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
})

loginEmailInput.addEventListener("keypress", () => {
    loginEmailInput.classList.add("typing")

    lValidatorEmail.classList.remove("dHide")
    if (loginEmailInput.value.match(pattern)) {
        lValidatorEmail.classList.remove("typing")
        lValidatorEmail.classList.add("warning")
        lValidatorEmail.textContent = "Validation Warning"
    } else {
        console.log("error")
    }
})
function checkEmail() {
    if (loginEmailInput.value.match(pattern)) {
    }
}
checkEmail()

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
