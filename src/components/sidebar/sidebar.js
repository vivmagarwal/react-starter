import { useContext } from "react";
import SidebarVisibilityContext from "../../store/sidebarVisibilityContext";

function Sidebar() {
  const [sidebarVisibility,, toggleSidebarVisibility] = useContext(SidebarVisibilityContext);

  return (
    <>
      <div id="sidebar" className={`sidebar ${sidebarVisibility ? 'active' : ''}`}>
        <button onClick={toggleSidebarVisibility} className="btn--clear hamburger hamburger--light hamburger--cross sidebar__toggle-sidebar">
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul>
          <li>home</li>
          <li>work</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </>
  )
}

export default Sidebar;