class NavbarComponent extends HTMLElement {
  #BASE_URL = '/js/components/navbar';
  #data = null;

  constructor() {
    super()

    this.htmlCollection = `
    <nav>
      <div class="navbar-top">
        <div class="container">
          <div class="navbar-top-content">
            <div class="navbar-top-left-content">
              <img src="../images/navbar/map-pin.png" />
              <a href="https://goo.gl/maps/Fghr2nFjSauw3jXo9" target="_blank">Store Location: Lincoln- 344, Illinois,
                Chicago, USA</a>
            </div>

            <div class="navbar-top-right-content">
              <select class="select-lang">
                <option value="en">ENG</option>
                <option value="uz">UZB</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div class="navbar-bottom">
        <div class="container">
          <div class="navbar-bottom-content">
            <div class="navbar-bottom-left-content">
              <!-- Menu qismi -->
              <div class="navbar-bottom-left-dropdown">
                <a class="navbar-bottom-left-dropdown-first-a navbar-menu-active lang-nav-home-text" href="#0">
                  Home
                  <i class="fa fa-chevron-down" aria-hidden="true"></i>
                </a>

                <div class="navbar-bottom-left-dropdown-content" style="margin-left: 18px">
                  <a href="#featuredProduct" class="lang-featuredProduct">Featured Products</a>
                  <a href="#bestSellerProducts" class="lang-bestSellerProducts">Best Seller Products</a>
                  <a href="#ourCustomers" class="lang-ourCustomers">Our Customer</a>
                </div>
              </div>
              <div class="navbar-bottom-left-dropdown">
                <a href="#0" class="lang-shopes">
                  Shopes
                  <i class="fa fa-chevron-down" aria-hidden="true"></i>
                </a>
                <div class="navbar-bottom-left-dropdown-content">
                  <a href="pages/products.html" class="lang-products">Products</a>
                </div>
              </div>
              <div class="navbar-bottom-left-dropdown">
                <a href="#0" class="lang-pages">
                  Pages
                  <i class="fa fa-chevron-down" aria-hidden="true"></i>
                </a>
                <div class="navbar-bottom-left-dropdown-content">
                  <a href="pages/about.html" class="lang-shoppery">Shopery</a>
                </div>
              </div>
              <div class="navbar-bottom-left-dropdown">
                <a href="./pages/about.html" class="lang-about"> About Us </a>
              </div>
              <a href="/pages/contact.html" class="contact">Contact</a>
            </div>

            <div class="navbar-bottom-middle-content">
              <!-- Logo qismi -->
              <a href="/pages/home.html">
                <img src="../images/navbar/logo.png" class="lang-shopery" />
                Shopery
              </a>
            </div>

            <div class="navbar-bottom-right-content">
              <!-- Profile qismi -->
              <a href="tel: (219) 555-0114">
                <img src="../images/navbar/phone-call.png" />
                (219) 555-0114
              </a>
              <a> </a>
              <a id="search-button">
                <img src="../images/navbar/search-icon.png" />
              </a>
              <a id="wishlist-button">
                <img src="../images/navbar/heart-icon.png" />
                <span>2</span>
              </a>
              <a id="product-button">
                <img src="../images/navbar/shop-icon.png" />
                <span>2</span>
              </a>
              <a class="user-profile-icon">
                <img src="../images/navbar/user-icon.png" />
              </a>
              <div class="user-profile-dropdown">
                <div class="user-profile-dropdown-content">
                  <a href="/pages/dashboard.html" class="dashboard-link remember-display lang-dashboard">Dashboard</a>
                  <a class="logout-link remember-display lang-logout">Log out</a>
                  <a href="/pages/signup.html" class="signup-link lang-signup">Sign up</a>
                  <a href="/pages/login.html" class="login-link lang-login">Log in</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
    `
  }

  connectedCallback() {
    this.getData()
  }

  async getData() {
    try {
      if (this.#data === null) {
        const response = await fetch(`${this.#BASE_URL}/data.json`);

        if (!response.ok) {
          throw new Error(`Status: ${response.status}`);
        }

        this.#data = await response.json();
        this.render();
      }
    } catch (error) {
      console.error(error);
      this.render();
    }
  }

  render() {
    this.innerHTML = this.htmlCollection
  }
}

customElements.define('navbar-component', NavbarComponent);