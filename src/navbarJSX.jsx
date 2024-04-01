//Isabelle Anno, 2/7/2024
//Return the JSX of the nav bar
//The mobile part of this navbar was created with the help of this article: https://www.codevertiser.com/reactjs-responsive-navbar/

import { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faXmark,
  faGear,
  faMoon,
  faEye,
  faUniversalAccess,
  faWheelchair,
  faEarthAmericas,
  faEarthEurope,
} from "@fortawesome/free-solid-svg-icons";
import $ from "jquery";
export default function NavbarJSX() {
  const [showNavbar, setShowNavbar] = useState(false);
  const [menuIcon, setMenuIcon] = useState(faBars);
  const [currentLang, setCurrentLang] = useState("EN");
  const wrapperRef = useRef(null);

  //change to an X when mobile navbar is open
  const changeMenuIcon = () => {
    if (showNavbar === false) {
      setMenuIcon(faXmark);
    } else {
      setMenuIcon(faBars);
    }
  };

  //Show either the desktop or mobile nav bar
  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
    changeMenuIcon();
  };

  //Change currentLang variable & Globe Icon (for both mobile and desktop)

  $(".language").each(function () {
    $(this).on("click", function () {
      if ($(this).is(":checked")) {
        setCurrentLang("NL");
      } else {
        setCurrentLang("EN");
      }
    });

    if (currentLang === "EN") {
      $("#america").css("display", "block");
      $("#europe").css("display", "none");
    } else {
      $("#america").css("display", "none");
      $("#europe").css("display", "block");
    }
  });
  return (
    <nav className="top-nav">
      <div className="container navContainer">
        <div className="logo">
          <a href="#s1">
            <img src="/Images/Initials.svg" className="dim" alt="" />
          </a>
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <FontAwesomeIcon icon={menuIcon} />
        </div>
        <div
          className={`nav-elements  ${showNavbar && "showing"} `}
          ref={wrapperRef}
        >
          <ul className="nav-elements-ul justify-content-end align-items-center m-0">
            <li>
              <a href="#s2">
                <span className="english">About</span>
                <span className="dutch d-none">Over Mij</span>
              </a>
            </li>
            <li>
              <a href="#s3">Resumé</a>
            </li>
            <li>
              <a href="#s5">
                <span className="english">Projects</span>
                <span className="dutch d-none">Projecten</span>
              </a>
            </li>
            <li>
              <a href="#s8">Contact</a>
            </li>
            <li className="mobileSettings">
              <hr className="mobileHR" />
            </li>
            <li className="mobileSettings">
              <FontAwesomeIcon
                icon={faWheelchair}
                size="xl"
                title="Accessibility Settings"
              />
              <label className="switch">
                <input
                  type="checkbox"
                  className="accessibility"
                  aria-label="Accessibility Checkbox Option. Toggle on to open UserWay menu. For more information, visit Userway.org."
                />
                <span className="slider"></span>
              </label>
            </li>
            <li className="mobileSettings">
              <FontAwesomeIcon icon={faEye} size="xl" title="High Contrast" />
              <label className="switch">
                <input
                  type="checkbox"
                  className="highContrast"
                  id="highContrastMobile"
                  aria-label="High Contrast Checkbox Option."
                />
                <span className="slider"></span>
              </label>
            </li>
            {/* Dark mode on mobile is really glitchy now so I'm going to take it out for the time being until I find a solution
            
            <li className="mobileSettings">
              <FontAwesomeIcon
                icon={faMoon}
                size="xl"
                title="Dark Mode"
                className="me-1"
              />
              <label className="switch">
                <input type="checkbox" className="darkMode"  aria-label="Dark Mode Checkbox"/>
                <span className="slider"></span>
              </label>
            </li> */}
            <div className="btn-group">
              <button
                className="dropdown-toggle"
                id="desktop-settings"
                type="button"
                aria-label="Website Settings"
                title="Website Settings"
                alt="a dropdown menu for accessibility options, dark mode, high contrast and more."
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
                aria-expanded="false"
              >
                <FontAwesomeIcon icon={faGear} />
              </button>
              <ul className="dropdown-menu dropdown-menu-lg-end">
                <li className="dropdown-options">
                  <FontAwesomeIcon icon={faEarthAmericas} id="america" />
                  <FontAwesomeIcon icon={faEarthEurope} id="europe" />
                  <p className="m-0 mx-3">
                    <span className="english">language</span>{" "}
                    <span className="dutch d-none">taal </span>({currentLang})
                  </p>
                  <label className="switch">
                    <input
                      type="checkbox"
                      className="language"
                      aria-label="Language checkbox- toggle on English or Dutch."
                    />
                    <span className="slider lang-slider"></span>
                  </label>
                </li>
                <li className="dropdown-options">
                  <FontAwesomeIcon icon={faUniversalAccess} />
                  <p className="m-0 mx-3">Accessibility</p>
                  <label className="switch">
                    <input
                      type="checkbox"
                      className="accessibility"
                      id="accessibilityDesktop"
                      aria-label="Accessibility Checkbox Option. Toggle on to open UserWay menu. For more information, visit Userway.org."
                    />
                    <span className="slider"></span>
                  </label>
                </li>
                <li className="dropdown-options">
                  <FontAwesomeIcon icon={faEye} />
                  <p className="m-0 mx-3">
                    {" "}
                    <span className="english">High Contrast</span>{" "}
                    <span className="dutch d-none">Hoog Contrast</span>
                  </p>
                  <label className="switch">
                    <input
                      type="checkbox"
                      className="highContrast"
                      id="highContrastDesktop"
                      aria-label="High Contrast Checkbox"
                    />
                    <span className="slider"></span>
                  </label>
                </li>
                <li className="dropdown-options">
                  <FontAwesomeIcon icon={faMoon} />
                  <p className="m-0 mx-3">Dark Mode</p>
                  <label className="switch">
                    <input
                      type="checkbox"
                      className="darkMode"
                      id="darkModeDesktop"
                      aria-label="Dark Mode Checkbox"
                    />
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
}
