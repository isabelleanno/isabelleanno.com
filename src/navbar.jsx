//This navbar was created with the help of this article: https://www.codevertiser.com/reactjs-responsive-navbar/

import { useState } from "react";
import initialsImg from "./Images/Initials.svg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
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
          <img src={initialsImg} alt="" />
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <FontAwesomeIcon icon={menuIcon} />
        </div>
        <div className={`nav-elements  ${showNavbar && "active"}`}>
          <ul className="justify-content-end">
            <li>
              <Link to="#s2">About</Link>
            </li>
            <li>
              <Link to="#s3">Resumé</Link>
            </li>
            <li>
              <Link to="#s5">Projects</Link>
            </li>
            <li>
              <Link to="#s6">Reviews</Link>
            </li>
            <li>
              <Link to="#s8">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
