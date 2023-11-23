import logo from "../assets/images/logo.png";
import Button from "../components/general/Button";

import { useState } from "react";
// eslint-disable-next-line react/prop-types
function Header({
  onLoginClick,
  onAboutClick,
  isSticky,
  onPricingClick,
  onContactClick,
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  return (
    <header className={`mulish-700 ${isSticky ? "sticky-header" : ""}`}>
      <div className="hamburger-menu" onClick={toggleSidebar}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div
        className={`sidebar ${sidebarOpen ? "show-sidebar" : ""} ${
          sidebarOpen ? "sidebar-open" : ""
        }`}>
        {/* Close button */}
        <button className="close-btn" onClick={() => setSidebarOpen(false)}>
          X
        </button>
        <a href="#" onClick={() => setSidebarOpen(false)}>
          HOME
        </a>
        <a href="#about-us" onClick={() => setSidebarOpen(false)}>
          ABOUT
        </a>
        <a href="#" onClick={() => setSidebarOpen(false)}>
          PRICING
        </a>
        <a href="#" onClick={() => setSidebarOpen(false)}>
          CONTACT
        </a>
        <Button
          name={"Login"}
          style={"secondary"}
          onClick={() => {
            onLoginClick();
            setSidebarOpen(false);
          }}
        />
      </div>
      <a href="#">
        <div className="logo">
          <img src={logo} alt="Effilogix logo" height={"100%"} />
          <a className="home" href="#">
            HOME
          </a>
        </div>
      </a>
      <nav className="navbar">
        <ul className="navbar-list">
          <li>
            <a href="#about-us" onClick={onAboutClick}>
              ABOUT
            </a>
          </li>
          <li>
            <a href="#pricing" onClick={onPricingClick}>
              PRICING
            </a>
          </li>
          <li>
            <a href="#" onClick={onContactClick}>
              CONTACT
            </a>
          </li>
          <li>
            <Button name={"Login"} style={"secondary"} onClick={onLoginClick} />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
