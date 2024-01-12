import React, { Component } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGear,
  faMoon,
  faUniversalAccess,
  faEllipsis,
  faEllipsisVertical,
} from "@fortawesome/free-solid-svg-icons";

class Settings extends React.Component {
  render() {
    return (
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
        <ul className="dropdown-menu">
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
            <FontAwesomeIcon icon={faEllipsis} />
            <p className="m-0 mx-3">Horizontal Nav</p>
            <label className="switch">
              <input type="checkbox" id="horizNav" />
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
        </ul>
      </div>
    );
  }
}

export default Settings;
