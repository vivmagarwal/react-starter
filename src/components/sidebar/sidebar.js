function Sidebar() {
  return (
    <>
      <div class="overlay sidebar-overlay" id="sidebar-overlay"></div>
      <div id="sidebar" class="sidebar">
        <a href="javascript:void(0)" class="hamburger hamburger--light hamburger--cross sidebar__toggle-sidebar">
          <span></span>
          <span></span>
          <span></span>
        </a>

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