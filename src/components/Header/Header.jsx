import React from "react";
import "./Header.scss"
import logo from "../../assets/images/Yozoi logo.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="header_container">
        <div className="header_section">
          <div className="header_left">
            <img src={logo} alt="Yozoi Logo" />
            <div class="dropdown">
              <button class="dropbtn">Company</button>
              <div class="dropdown-content">

                <NavLink to="/">
                  About Us</NavLink>

                <NavLink to="/OurTechnology">Our Technology</NavLink>
                <NavLink to="/">How we work</NavLink>
                <NavLink to="/">Why work at yozoi</NavLink>
              </div>
            </div>
            <NavLink to="/">Safety</NavLink>
          </div>
          <div className="header_right">
            <div class="dropdown">
              <button class="dropbtn">Services</button>
              <div class="dropdown-content">
                <a href="#">About Us</a>
                <a href="#">Our Technology</a>
                <a href="#">How we work</a>
                <a href="#">Why work at yozoi</a>
              </div>
            </div>
            <a href="#">Login</a>
            <button class= "singbtn">Sing Up</button>
          </div>
        </div>
      </div>
    </div>
    
    
  );
};

export default Header;
