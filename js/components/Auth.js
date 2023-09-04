import { useStorage } from '../utils.js';

class Auth {
  constructor() {
    this.users = JSON.parse(useStorage.getItem('users')) || {};
  }

  createAccount(email, password, repeatPassword) {
    const [isValid, errorMessage] = this.formValidator(email, password, repeatPassword)

    if (isValid) {
      useStorage.setItem('users', JSON.stringify(
        { email, password, loggedIn: true }
      ))
      this.navigate('/pages/dashboard.html')
    } else {
      document.querySelector('.create-account--error').textContent = errorMessage
    }
  }

  login(email, password) {
    if (email === this.users.email && password === this.users.password) {
      useStorage.setItem('users', JSON.stringify({ ...this.users, loggedIn: true }))
      this.navigate('/pages/dashboard.html')
    } else {
      document.querySelector('.login--error').textContent = 'Email or password is incorrect'
    }
  }

  formValidator(email, password, repeatPassword) {
    let status = true;
    let error = '';

    if (email.length < 5 || !email.includes('@')) {
      status = false
      error = 'invalid email'
    }

    if (password.length < 4) {
      status = false
      error = 'Password: Must be at least 4 characters'
    }

    if (password !== repeatPassword) {
      status = false;
      error = 'The second password was not correct';
    }

    return [status, error]
  }

  navigate(url) {
    window.location.href = `${url}`;
  }
}

export default Auth;