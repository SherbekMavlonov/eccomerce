export class useStorage {
  static setItem(key, item) {
    localStorage.setItem(key, item)
  }
  static removeItem(key) {
    localStorage.removeItem(key)
  }
  static getItem(key) {
    return localStorage.getItem(key)
  }
}
