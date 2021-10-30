function Header() {
  return (<header class="site-header" id="site-header">
    <div class="container">
      <a href="javascript:void(0)" class="hamburger hamburger--light site-header__toggle-sidebar">
        <span></span>
        <span></span>
        <span></span>
      </a>

      <a href="#" class="site-header__logo">
        <img class="site-header__logo-image" role="img" alt="Open library logo" src="https://i.ibb.co/7g0zZ94/open-library-logo.png" />
      </a>
      <a href="http://google.com" class="btn btn--hollow site-header__signin">Sign In</a>
    </div>
  </header>)
}

export default Header;