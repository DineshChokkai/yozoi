import React from "react";
import "./OurTechnology.scss";
import image1 from "../../assets/images/company/our technology.png";
import icon1 from "../../assets/images/company/technology icon.svg";
import image2 from "../../assets/images/company/ai.png";
import icon2 from "../../assets/images/company/ai icon.svg";
import image3 from "../../assets/images/company/safety-1.png";
import icon3 from "../../assets/images/company/safety icon.svg";
import image4 from "../../assets/images/company/keyless entry.png";
import image5 from "../../assets/images/company/Service tracking.png";
import image6 from "../../assets/images/company/Personalised service plans.png";
import image7 from "../../assets/images/company/Customer health.png";
import image8 from "../../assets/images/company/Family access.png";
import image9 from "../../assets/images/company/Service provider ratings.png";
import image10 from "../../assets/images/company/Service provider training.png";
import image11 from "../../assets/images/company/Service provider training.png";
import image12 from "../../assets/images/company/Service provider training.png";

const OurTechnology = () => {
  return (
    <div className="ourtech">
      <div className="ourtech_container">
        <div className="ourtech_banner">
          <h2>Our technology</h2>
        </div>
      </div>
      <div className="ourtech_row1">
        <div className="ourtech_row1_section">
          <div className="ourtech_row1_left">
            <h5>
              Yozoi’s is developing a services model based on a mobile
              applications platform comprising a deep technology back-end
              working in tandem with a human front-end. We believe that such a
              hybrid model can fulfil the domiciliary support services needs of
              modern societies.
            </h5>
            <h5>
              We aim to continuously improving and developing our mobile
              applications platform in line with the latest developments in
              sensors, IoT, big data and artificial intelligence technology. The
              current target features of the Yozoi platform are described below.
            </h5>
          </div>
          <div className="ourtech_row1_right">
            <div className="ourtech_row1_right_section">
            <div className="ourtech_row1_right_tab"></div>
            <div className="ourtech_row1_right_image">
              <img src={image1} alt="" />
            </div>
            <div className="ourtech_row1_right_icon">
                <img src={icon1} alt="" />
                <h5>Our Technology</h5>
            </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ourtech_row2">
        <div className="ourtech_row2_section">
        <div className="ourtech_row2_left">
            <div className="ourtech_row2_right_section">
            <div className="ourtech_row2_right_tab"></div>
            <div className="ourtech_row2_right_image">
              <img src={image2} alt="" />
            </div>
            <div className="ourtech_row2_right_icon">
                <img src={icon2} alt="" />
                <h5>AI mobile app</h5>
            </div>
            </div>
          </div>
          <div className="ourtech_row2_right">
            <h5>
              Yozoi’s is developing a services model based on a mobile
              applications platform comprising a deep technology back-end
              working in tandem with a human front-end. We believe that such a
              hybrid model can fulfil the domiciliary support services needs of
              modern societies.
            </h5>
            <h5>
              We aim to continuously improving and developing our mobile
              applications platform in line with the latest developments in
              sensors, IoT, big data and artificial intelligence technology. The
              current target features of the Yozoi platform are described below.
            </h5>
          </div>
          
        </div>
      </div>
      <div className="ourtech_row3">
        <div className="ourtech_row3_section">
          <div className="ourtech_row3_left">
            <h5>
              Yozoi’s is developing a services model based on a mobile
              applications platform comprising a deep technology back-end
              working in tandem with a human front-end. We believe that such a
              hybrid model can fulfil the domiciliary support services needs of
              modern societies.
            </h5>
            <h5>
              We aim to continuously improving and developing our mobile
              applications platform in line with the latest developments in
              sensors, IoT, big data and artificial intelligence technology. The
              current target features of the Yozoi platform are described below.
            </h5>
          </div>
          <div className="ourtech_row3_right">
            <div className="ourtech_row3_right_section">
            <div className="ourtech_row3_right_tab"></div>
            <div className="ourtech_row3_right_image">
              <img src={image3} alt="" />
            </div>
            <div className="ourtech_row3_right_icon">
                <img src={icon3} alt="" />
                <h5>Safety & security</h5>
            </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ourtech_key">
        <div className="ourtech_key_section">
            <div className="ourtech_key_heading">
                <h2>Keyless entry</h2>
            </div>
            <div className="ourtech_key_heading_line"></div>
            <div className="ourtech_key_image">
                <img src={image4} alt="" />
            </div>
            <div className="ourtech_key_content">
                <p>A part of our Aware Home technology system is keyless entry equipment that once installed in the customers home, allows Yozoi app to:</p>
            </div>
            <div className="ourtech_key_cards">
                <div className="ourtech_key_cards_left">
                    <div className="ourtech_key_cards_left_tab1">
                        <h4>1</h4>
                        <h5>Conduct identity test in real-time on the service provider at the doorstep of the customer’s home</h5>
                    </div>
                </div>
                <div className="ourtech_key_cards_center">
                <div className="ourtech_key_cards_center_tab2">
                        <h4>2</h4>
                        <h5>Give keyless entry to the service provide once he/she has passed the test</h5>
                    </div>
                </div>
                <div className="ourtech_key_cards_right">
                <div className="ourtech_key_cards_right_tab3">
                        <h4>3</h4>
                        <h5>Let service provider enter your home if you are unable to open the door or if there is an emergency</h5>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <div className="ourtech_images">
        <div className="ourtech_images_section">
            <div className="ourtech_images_leftimg">
                <img src={image5} alt="" />
                <p>Yozoi app can track the presence and movements of the service providers in the customers’ homes.</p>
            </div>
            <div className="ourtech_images_rightimg">
                <img src={image6} alt="" />
                <p>Customer or family and friends can access the app upon the customer’s permission. The app can be used to develop personalised service plans and payment schedules.</p>
            </div>
            
        </div>
        <div className="ourtech_images_section">
            <div className="ourtech_images_leftimg">
                <img src={image7} alt="" />
                <p>Yozoi provides support in real-time for independent living, health insights & early actions to improve wellbeing of senior citizens.</p>
            </div>
            <div className="ourtech_images_rightimg">
                <img src={image8} alt="" />
                <p>Customer can give access to his/her account to a proxy who can be a family member or a friend.</p>
            </div>
            
        </div>
        <div className="ourtech_images_section">
            <div className="ourtech_images_leftimg">
                <img src={image9} alt="" />
                <p>Yozoi app can track the presence and movements of the service providers in the customers’ homes.</p>
            </div>
            <div className="ourtech_images_rightimg">
                <img src={image10} alt="" />
                <p>Customer or family and friends can access the app upon the customer’s permission. The app can be used to develop personalised service plans and payment schedules.</p>
            </div>
            
        </div>
        <div className="ourtech_images_section">
            <div className="ourtech_images_leftimg">
                <img src={image11} alt="" />
                <p>Yozoi app requires post-service reporting by service providers. The app enables service providers to complete service reports in a fast and simple manner.</p>
            </div>
            <div className="ourtech_images_rightimg">
                <img src={image12} alt="" />
                <p>A service duration is timed by the Yozoi app and the type of service is also recorded, the customer is billed accordingly and a payment transaction is automatically enacted.</p>
            </div>
            
        </div>
        
      </div>
    </div>
  );
};

export default OurTechnology;
