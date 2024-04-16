import React from 'react'
import "./Home.scss";
import banner1 from "./../../assets/images/banner.jpg"
import store1 from "./../../assets/images/google playb.png"
import store2 from "./../../assets/images/app Storeb.png"
import mobileimg from "./../../assets/images/Mobile Application.png"
import technology from "./../../assets/images/Technology.png"
import safety from "./../../assets/images/Safety.png"
import flex from "./../../assets/images/Flexible Working.png"
import pay from "./../../assets/images/Pay and Conditions.png"
import support from "./../../assets/images/Training and Support.png"


function Home() {
  return (
    <div className="home">
        <div className="home_banner">
          <div className="home_container">
          <div className="home_section">
            <div className="home_leftcard">
              <h2>Become a <br />Service provider</h2>
              <p>Help your local community, work when you like and get paid</p>
              <button>Sign up</button>
              <h6><span>Learn about being a yozoi service provider</span></h6>
              <h5>Download service provider app</h5>
              <div className="home_leftcard_store">
                  <img src={store1} alt="" />
                  <img src={store2} alt="" />
              </div>
            </div>
            <div className="home_rightcard">
              <h2>Book a <br />Service</h2>
              <p>Use our on-demand services mobile app to get 24/7 support</p>
              <button>Sign up</button>
              <h6><span>Learn about yozoi services</span></h6>
              <h5>Download customer app</h5>
              <div className="home_rightcard_store">
                  <img src={store1} alt="" />
                  <img src={store2} alt="" />
              </div>
            </div>
          </div>
          </div>
          
        </div>
        <div className="home_howwork">
          <div className="home_howwork_container">
            <div className="home_howwork_heading">
              <h1>How we work</h1>
            </div>
            <div className="home_howwork_heading_line"></div>

          </div>
        </div>
        <div className="home_howwork_container2">
          <div className="home_howwork_section">
          <div className="home_howwork_card">
            <img src={mobileimg} alt="" />
            <h1>Mobile Application</h1>
            <p>Dedicated customer and service provider apps enabling customers to 
              book services and service providers to provide services. Real-time service tracking, billing, 2-way feedback and ratings.</p>
          </div>
          <div className="home_howwork_card">
            <img src={technology} alt="" />
            <h1>Technology</h1>
            <p>Latest technologies in sensors, big data analytics and artificial intelligence for delivering customised services, monitoring client’s wellbeing and using 
              predictive AI for detection of wellbeing issues and avoidance of emergencies.</p>
          </div>
          <div className="home_howwork_card">
            <img src={safety} alt="" />
            <h1>Safety</h1>
            <p>The technologies integrated in Yozoi app and our operating procedures provide customers
               and service providers with the best possible standards in safety and security.</p>
          </div>
          </div>
        </div>
        <div className="home_howwork">
          <div className="home_howwork_container">
            <div className="home_howwork_heading">
              <h1>Why work as yozoi service provider</h1>
            </div>
            <div className="home_howwork_heading_line"></div>

          </div>
        </div>
        <div className="home_howwork_container2">
          <div className="home_howwork_section">
          <div className="home_howwork_card">
            <img src={flex} alt="" />
            <h1>flexible working</h1>
            <p>Working with Yozoi means that you are in control, you decide when and where you want to work and how you want to fit-in work schedule with your other life commitments.</p>
          </div>
          <div className="home_howwork_card">
            <img src={pay} alt="" />
            <h1>Pay & conditions</h1>
            <div className="home_howwork_card_content">
              <p>We aspire to always stay in front of the pack in terms of pay and other incentives for people working with us to help their local communities. This includes guarantee.</p>
            </div>
            
          </div>
          <div className="home_howwork_card">
            <img src={support} alt="" />
            <h1>Training & support</h1>
            <p>The Yozoi app continuously watches the services you do and how you perform them, this enables us to give you support in real-time and assess training requirements.</p>
          </div>
          </div>
        </div>
        
        
        
  </div>
    
  )
}

export default Home