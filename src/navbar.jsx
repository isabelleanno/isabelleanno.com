//This navbar was created with the help of this article: https://www.codevertiser.com/reactjs-responsive-navbar/

import { useState, useEffect, useRef } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faXmark,
  faGear,
  faMoon,
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
  var mobileNavIsOpen = false;

  //change to an X when bar is open
  const changeMenuIcon = () => {
    if (showNavbar === false) {
      setMenuIcon(faXmark);
      mobileNavIsOpen = true;
    } else {
      setMenuIcon(faBars);
      mobileNavIsOpen = false;
    }
  };

  //Show either the desktop or mobile nav bar
  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
    changeMenuIcon();
  };

  //Close mobile menu when user clicks outside
  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (
          ref.current &&
          !ref.current.contains(event.target) &&
          mobileNavIsOpen === true
        ) {
          setShowNavbar(false);
          setMenuIcon(faBars);
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }
  useOutsideAlerter(wrapperRef);
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
        if ($(this).is(":checked")) {
          document.querySelector("body").setAttribute("data-theme", "dark");
          //changeDropdown();
        } else {
          document.querySelector("body").setAttribute("data-theme", "light");
          //changeDropdown();
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
                <input type="checkbox" className="accessibility" />
                <span className="slider"></span>
              </label>
            </li>
            <li className="mobileSettings">
              <FontAwesomeIcon
                icon={faMoon}
                size="xl"
                title="Dark Mode"
                className="me-1"
              />
              <label className="switch">
                <input type="checkbox" className="darkMode" />
                <span className="slider"></span>
              </label>
            </li>

            <div className="btn-group">
              <button
                className="dropdown-toggle"
                id="desktop-settings"
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
                    <input type="checkbox" className="accessibility" />
                    <span className="slider"></span>
                  </label>
                </li>
                <li className="dropdown-options">
                  <FontAwesomeIcon icon={faMoon} />
                  <p className="m-0 mx-3">Dark Mode</p>
                  <label className="switch">
                    <input type="checkbox" className="darkMode" />
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
