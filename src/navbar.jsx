//This navbar was created with the help of this article: https://www.codevertiser.com/reactjs-responsive-navbar/

import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faXmark,
  faGear,
  faMoon,
  faEye,
  faUniversalAccess,
  faEllipsis,
  faEllipsisVertical,
  faWheelchair,
} from "@fortawesome/free-solid-svg-icons";
import "./css/styles.css";
import $ from "jquery";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [menuIcon, setMenuIcon] = useState(faBars);
  const wrapperRef = useRef(null);

  //change to an X when bar is open
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

  //Add functionality to settings dropdown menu
  useEffect(() => {
    //Have horizontal and vertical nav be checked by default
    $("#vertNav").prop("checked", true);
    $("#horizNav").prop("checked", true);

    //Toggle accessibility on and off (for mobile and desktop)
    $(".accessibility").each(function () {
      $(this).on("click", function () {
        const accessibilityMenuBG = $(".uai");
        const accessibilityMenu = $(".uwy");
        const accessibilityToggle = $(this).is(":checked");
        if (accessibilityToggle === false) {
          accessibilityMenu.css("display", "none");
          accessibilityMenuBG.css("visibility", "hidden");
        } else {
          accessibilityMenu.css("display", "block");
          accessibilityMenuBG.css("visibility", "visible");
        }
      });
    });
    //Dark Mode (for both mobile and desktop)
    $(".darkMode").each(function () {
      $(this).on("click", function () {
        /*Procedure for when dark mode  switch is checked.
        ----
        There are 3 options the user has regarding dark mode and high contrast mode. The user can:
        1.) Click on high contrast FIRST, then dark mode SECOND.
        2.) Click on dark mode FIRST, then high contrast SECOND.
        3.) Toggle  dark mode on and off, without messing with high contrast at all.
        -----
        The following confusing if-else statement addresses these three options. I'll try to
        walk you through it as best as I can.

        */
        if ($(this).is(":checked")) {
          //Check if high contrast is also already checked. (Option 1.) If so, data-theme is highContrastDark. If not, it's just dark.
          if ($("#highContrastDesktop").is(":checked")) {
            document
              .querySelector("body")
              .setAttribute("data-theme", "highContrastDark");
          }
          //The user did not choose option 1, meaning high contrast is not on. Let's just do dark mode then.
          else {
            document.querySelector("body").setAttribute("data-theme", "dark");
          }
          //Procedure if dark mode is turned on first and then the user decides to check high Contrast. (Option 2.)
        } else {
          if ($("#highContrastDesktop").is(":checked")) {
            document
              .querySelector("body")
              .setAttribute("data-theme", "highContrast");
            //Procedure when dark mode is turned on and off, without messing with high contrast. (Option 3.)
          } else {
            document.querySelector("body").setAttribute("data-theme", "none");
          }
        }
        $("body").css("transition", "all 0.5s ease-in-out");
      });
    });

    //High Contrast Mode (for both mobile and desktop. Takes Dark and Light modes into consideration.)
    $(".highContrast").each(function () {
      $(this).on("click", function () {
        //Procedure if it's checked and light mode is on.
        if ($(this).is(":checked") && !$("#darkModeDesktop").is(":checked")) {
          document
            .querySelector("body")
            .setAttribute("data-theme", "highContrast");
        }
        //Procedure if it's checked and dark mode is also on (option 2 in the long comment above).
        else if (
          $(this).is(":checked") &&
          $("#darkModeDesktop").is(":checked")
        ) {
          document
            .querySelector("body")
            .setAttribute("data-theme", "highContrastDark");
        }
        //Procedure when unchecked (Goes back to the light or dark mode setting the user has already selected.)
        else {
          if ($("#darkModeDesktop").is(":checked")) {
            document.querySelector("body").setAttribute("data-theme", "dark");
          } else {
            document.querySelector("body").setAttribute("data-theme", "light");
          }
        }
        $("body").css("transition", "all 0.5s ease-in-out");
      });
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
  //Nav bar JSX vvv
  return (
    <nav className="top-nav">
      <div className="container navContainer">
        <div className="logo">
          <img src="/Images/Initials.svg" alt="" />
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <FontAwesomeIcon icon={menuIcon} />
        </div>
        <div
          className={`nav-elements  ${showNavbar && "showing"} `}
          ref={wrapperRef}
        >
          <ul className="nav-elements-ul justify-content-end align-items-start">
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
                  <FontAwesomeIcon icon={faUniversalAccess} />
                  <p className="m-0 mx-3">Accessibility</p>
                  <label className="switch">
                    <input
                      type="checkbox"
                      className="accessibility"
                      aria-label="Accessibility Checkbox Option. Toggle on to open UserWay menu. For more information, visit Userway.org."
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
                <li className="dropdown-options">
                  <FontAwesomeIcon icon={faEye} />
                  <p className="m-0 mx-3">High Contrast</p>
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
                  <FontAwesomeIcon icon={faEllipsisVertical} />
                  <p className="m-0 mx-3">Vertical Nav</p>
                  <label className="switch">
                    <input
                      type="checkbox"
                      id="vertNav"
                      aria-label="Toggle vertical nav dots on or off"
                    />
                    <span className="slider"></span>
                  </label>
                </li>
                <li className="dropdown-options">
                  <FontAwesomeIcon icon={faEllipsis} />
                  <p className="m-0 mx-3">Horizontal Nav</p>
                  <label className="switch">
                    <input
                      type="checkbox"
                      id="horizNav"
                      aria-label="Toggle horizontal nav dots on or off"
                    />
                    <span className="slider sliderCheckedDefault"></span>
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
