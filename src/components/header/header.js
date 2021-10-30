import { useContext } from "react";
import SidebarVisibilityContext from "../../store/sidebarVisibilityContext";
import Button from "../button/button";

function Header() {
  const [, , toggleSidebarVisibility] = useContext(SidebarVisibilityContext);
  return (
    <>
      <header className="site-header" id="site-header">
        <div className="container">
          
          <Button onClick={toggleSidebarVisibility} className="btn--clear hamburger hamburger--light site-header__toggle-sidebar">
            <span></span>
            <span></span>
            <span></span>
          </Button>

          <a href="https://google.com" className="site-header__logo">
            <img className="site-header__logo-image" alt="Open library logo" src="https://i.ibb.co/7g0zZ94/open-library-logo.png" />
          </a>
          <button className="btn btn--hollow site-header__signin">Sign In</button>
        </div>
      </header>
    </>
  )
}

export default Header;