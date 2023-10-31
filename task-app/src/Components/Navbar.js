import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faShoppingCart,
  faBars,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../images/logo.PNG";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="banner-container">
      <nav className="navbar">
        <div className="navbar-brand">
          <img src={logo} alt="Image" />
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Search" />
        </div>

        <ul className={isOpen ? "navbar-nav open" : "navbar-nav"}>
          <li>
            <a href="#shop">Shop</a>
          </li>
          <li>
            <a href="#stories">Stories</a>
          </li>
          <li>
            <a href="#room">
              Room <FontAwesomeIcon icon={faAngleDown} />
            </a>
          </li>
          <li>
            <a href="#promotions">
              Promotions <FontAwesomeIcon icon={faAngleDown} />
            </a>
          </li>
        </ul>

        <div className="icons">
          <a href="#login">
            <FontAwesomeIcon icon={faUser} />
          </a>
          <a href="#cart">
            <FontAwesomeIcon icon={faShoppingCart} />
          </a>
        </div>
        <div className="hamburger" onClick={toggleNavbar}>
          <FontAwesomeIcon icon={faBars} />
        </div>
      </nav>

      {isOpen && (
        <div className="mobile-dropdown">
          <ul className="mobile-nav">
            <li>
              <a href="#shop">Shop</a>
            </li>
            <li>
              <a href="#stories">Stories</a>
            </li>
            <li>
              <a href="#room">Room</a>
            </li>
            <li>
              <a href="#promotions">Promotions</a>
            </li>
            <div className="close-btn" onClick={toggleNavbar}>
              Close
            </div>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
