import React from 'react';
import "./Footer.scss";
import logo1 from "../../assets/images/Yozoi logo.png";
import logo2 from "../../assets/images/app Store.png";
import logo3 from "../../assets/images/google play.png";


const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_container">
        <div className="footer_section">
          <div className="footer_left">
            <h3>Learn more</h3>
            <div className="footer_leftlinks">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Terms of service</a></li>
              <li><a href="#">Privacy policy</a></li>
            </div>
          </div>
          <div className="footer_center">
            <h3>Stay Connected</h3>
            <div className="footer_centerlinks">
              <ul>
                <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                <li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                <li><a href="#"><i class="fa fa-youtube" aria-hidden="true"></i></a></li>
              </ul>
               
            </div>
          </div>
          <div className="footer_right">
            <h3>Contact us</h3>
            <div className="footer_content">
              <a href="#"><i class="fa fa-location-arrow" aria-hidden="true"></i></a>
              <p>info@yozoi.com</p>
              </div>
              <div className="footer_content1">
                <a href="#"><i class="fa fa-envelope-o" aria-hidden="true"></i></a>
                <p>yozoi Limited <br />
                    124City road <br /> london EC4V2NX <br />
                    United Kingdom
                </p>
            </div>
          </div>
        </div>
        <div className="footer_bottom">
          <div className="footer_bottom_logo"><img src={logo1} alt="" />
            <h3>Get it on</h3></div>
            <div className="footer_bottom_icons">
          <img src={logo2} alt="" />
          <img src={logo3} alt="" />
        </div>
        <p>© 2023 Yozoi Limited</p>
        </div>
      </div>
     
        
      
    </div>
  )
}

export default Footer;