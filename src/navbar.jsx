//This navbar was created with the help of this article: https://www.codevertiser.com/reactjs-responsive-navbar/

import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faXmark,
  faGear,
  faMoon,
  faUniversalAccess,
  faEllipsis,
  faEllipsisVertical,
} from "@fortawesome/free-solid-svg-icons";
import "./css/styles.css";
import $ from "jquery";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [menuIcon, setMenuIcon] = useState(faBars);

  const changeMenuIcon = () => {
    if (showNavbar === false) {
      setMenuIcon(faXmark);
    } else {
      setMenuIcon(faBars);
    }
  };

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
    changeMenuIcon();
  };

  //Add functionality to settings dropdown menu
  useEffect(() => {
    //Toggle accessibility on and off
    $("#accessibility").on("click", function (event) {
      const accessibilityMenuBG = $(".uai");
      const accessibilityMenu = $(".uwy");
      const accessibilityToggle = $("#accessibility").is(":checked");
      if (accessibilityToggle === false) {
        accessibilityMenu.css("display", "none");
        accessibilityMenuBG.css("visibility", "hidden");
      } else {
        accessibilityMenu.css("display", "block");
        accessibilityMenuBG.css("visibility", "visible");
      }
    });
    //Dark Mode
    $("#darkMode").on("click", function (event) {
      if ($("#darkMode").is(":checked")) {
        document.querySelector("body").setAttribute("data-theme", "dark");
        changeDropdown();
      } else {
        document.querySelector("body").setAttribute("data-theme", "light");
        changeDropdown();
      }
      $("body").css("transition", "all 0.5s ease-in-out");
    });
    //Toggle vertical nav on and off
    $("#vertNav").on("click", function (event) {
      const vertNavDots = $("#fp-nav");
      const vertNavToggle = $("#vertNav").is(":checked");
      if (vertNavToggle === false) {
        vertNavDots.css("visibility", "hidden");
      } else {
        vertNavDots.css("visibility", "visible");
      }
    });
    //Toggle horizontal nav on and off
    $("#horizNav").on("click", function (event) {
      const horizNavDots = $(".fp-slidesNav");
      const horizNavToggle = $("#horizNav").is(":checked");
      if (horizNavToggle === false) {
        horizNavDots.css("visibility", "hidden");
      } else {
        horizNavDots.css("visibility", "visible");
      }
    });
  });
  return (
    <nav className="top-nav">
      <div className="container navContainer">
        <div className="logo">
          <img src="/Images/Initials.svg" alt="" />
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <FontAwesomeIcon icon={menuIcon} />
        </div>
        <div className={`nav-elements  ${showNavbar && "showing"}`}>
          <ul className="nav-elements-ul justify-content-end">
            <li>
              <a href="#s2">About</a>
            </li>
            <li>
              <a href="#s3">Resumé</a>
            </li>
            <li>
              <a href="#s5">Projects</a>
            </li>
            <li>
              <a href="#s6">Reviews</a>
            </li>
            <li>
              <a href="#s8">Contact</a>
            </li>
            <div className="btn-group">
              <button
                className="dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
                aria-expanded="false"
              >
                <FontAwesomeIcon icon={faGear} />
              </button>
              <ul className="dropdown-menu dropdown-menu-lg-end">
                <li className="dropdown-options">
                  <FontAwesomeIcon icon={faUniversalAccess} />
                  <p className="m-0 mx-3">Accessibility</p>
                  <label className="switch">
                    <input type="checkbox" id="accessibility" />
                    <span className="slider"></span>
                  </label>
                </li>
                <li className="dropdown-options">
                  <FontAwesomeIcon icon={faMoon} />
                  <p className="m-0 mx-3">Dark Mode</p>
                  <label className="switch">
                    <input type="checkbox" id="darkMode" />
                    <span className="slider"></span>
                  </label>
                </li>
                <li className="dropdown-options">
                  <FontAwesomeIcon icon={faEllipsisVertical} />
                  <p className="m-0 mx-3">Vertical Nav</p>
                  <label className="switch">
                    <input type="checkbox" id="vertNav" />
                    <span className="slider"></span>
                  </label>
                </li>
                <li className="dropdown-options">
                  <FontAwesomeIcon icon={faEllipsis} />
                  <p className="m-0 mx-3">Horizontal Nav</p>
                  <label className="switch">
                    <input type="checkbox" id="horizNav" />
                    <span className="slider"></span>
                  </label>
                </li>
              </ul>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
