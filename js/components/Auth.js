import { useStorage } from '../utils.js';

class Auth {
  constructor() {
    this.users = JSON.parse(useStorage.getItem('users')) || {};
  }

  createAccount(email, password, repeatPassword) {
    useStorage.setItem('users', JSON.stringify({ email, password }))
  }

  login(email, password) {
    console.log(users)
  }
}

export default Auth;