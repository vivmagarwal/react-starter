import { useContext } from "react";
import SidebarVisibilityContext from "../../store/sidebarVisibilityContext";


function Backdrop() {
  const [sidebarVisibility,, toggleSidebarVisibility] = useContext(SidebarVisibilityContext);

  return (
    <div
      className={`overlay sidebar-overlay ${sidebarVisibility ? 'overlay--show' : ''}`}
      id="sidebar-overlay"
      onClick={toggleSidebarVisibility}
    />
  )
}

export default Backdrop;