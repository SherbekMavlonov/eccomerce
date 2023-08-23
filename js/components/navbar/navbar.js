class NavbarComponent extends HTMLElement {
  connectedCallback() {
    console.log(this)
  }
}


customElements.define('navbar-component', NavbarComponent);