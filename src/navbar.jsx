//This navbar was created with the help of this article: https://www.codevertiser.com/reactjs-responsive-navbar/

import { useState, useEffect } from "react";
import Dropdown from "react-bootstrap/Dropdown";
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
          <ul className="justify-content-end">
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
            <li>
              <li className="nav-item align-self-center">
                <Dropdown autoClose="outside" id="settings">
                  <Dropdown.Toggle id="dropdown-settings">
                    <FontAwesomeIcon icon={faGear} />
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <div className="settings-item">
                      <FontAwesomeIcon icon={faUniversalAccess} />
                      <p className="m-0 mx-3">Accessibility</p>
                      <label className="switch">
                        <input type="checkbox" id="accessibility" />
                        <span className="slider"></span>
                      </label>
                    </div>
                    <div className="settings-item">
                      <FontAwesomeIcon icon={faMoon} />
                      <p className="m-0 mx-3">Dark Mode</p>
                      <label className="switch">
                        <input type="checkbox" id="darkMode" />
                        <span className="slider"></span>
                      </label>
                    </div>
                    <div className="settings-item">
                      <FontAwesomeIcon icon={faEllipsis} />
                      <p className="m-0 mx-3">Horizontal Nav</p>
                      <label className="switch">
                        <input type="checkbox" id="horizNav" />
                        <span className="slider"></span>
                      </label>
                    </div>
                    <div className="settings-item">
                      <FontAwesomeIcon icon={faEllipsisVertical} />
                      <p className="m-0 mx-3">Vertical Nav</p>
                      <label className="switch">
                        <input type="checkbox" id="vertNav" />
                        <span className="slider"></span>
                      </label>
                    </div>
                  </Dropdown.Menu>
                </Dropdown>
              </li>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
