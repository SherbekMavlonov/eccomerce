class FooterComponent extends HTMLElement {
  connectedCallback() {
    console.log(this)
  }
}


customElements.define('footer-component', FooterComponent);