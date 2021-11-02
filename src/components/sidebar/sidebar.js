import { useContext } from "react";
import SidebarVisibilityContext from "../../store/sidebarVisibilityContext";
import { Link } from "react-router-dom";

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

        <nav>
          <ul>
            <li>
              <Link to="/" exact>Home</Link>
            </li>
            <li>
              <Link to="/list">List</Link>
            </li>
            <li>
              <Link to="/book">Book</Link>
            </li>
            <li>
              <Link to="/create">Create</Link>
            </li>
          </ul>
        </nav>

      </div>
    </>
  )
}

export default Sidebar;