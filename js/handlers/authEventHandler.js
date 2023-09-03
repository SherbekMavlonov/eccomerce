import Auth from '../components/Auth.js';
import { authSelectors as HTML } from '../domSelectors.js';

const auth = new Auth()

// Create Account
HTML.createAccountBtnEl.addEventListener('click', (e) => {
  e.preventDefault()
  auth.createAccount(
    HTML.createEmailEl.value,
    HTML.createPasswordEl.value,
    HTML.createPasswordRepeatEl.value)
})


// Login
HTML.loginBtnEl.addEventListener('click', (e) => {
  e.preventDefault()
  auth.login(
    HTML.loginEmailEl.value,
    HTML.loginPasswordEl.value)
})


// Navigate to "Log In"
HTML.loginLinkEl.addEventListener('click', () => {
  HTML.createAccountContainerEl.classList.add('hide')
  HTML.loginContainerEl.classList.remove('hide')
})


// Navigate to "Create Account"
HTML.createAccountLinkEl.addEventListener('click', () => {
  HTML.createAccountContainerEl.classList.remove('hide')
  HTML.loginContainerEl.classList.add('hide')
})


// Hide or Show Password
HTML.eyeIconsEl.forEach((icon, index) => {
  icon.addEventListener('click', () => {
    const isHidden = icon.classList.contains('bx-hide')
    const oldClass = isHidden ? 'bx-hide' : 'bx-show'
    const newClass = isHidden ? 'bx-show' : 'bx-hide'

    icon.classList.replace(oldClass, newClass)
    HTML.eyeInputEl[index].type = isHidden ? 'text' : 'password'
  })
})
