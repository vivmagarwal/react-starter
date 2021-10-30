import { useContext } from "react";
import SidebarVisibilityContext from "../../store/sidebarVisibilityContext";

function Header() {
  const [,, toggleSidebarVisibility] = useContext(SidebarVisibilityContext);
  return (
    <>
      <header className="site-header" id="site-header">
        <div className="container">
          <a onClick={toggleSidebarVisibility} className="hamburger hamburger--light site-header__toggle-sidebar">
            <span></span>
            <span></span>
            <span></span>
          </a>
          
          <a href="#" className="site-header__logo">
            <img className="site-header__logo-image" role="img" alt="Open library logo" src="https://i.ibb.co/7g0zZ94/open-library-logo.png" />
          </a>
          <a href="http://google.com" className="btn btn--hollow site-header__signin">Sign In</a>
        </div>
      </header>
    </>
  )
}

export default Header;