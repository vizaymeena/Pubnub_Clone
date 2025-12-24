import React from "react";
import '../../assets/styles/component_css/page_css/services/aboutus.css'
import customerServiceImg from "../../assets/photos/aboutUs.avif";

function AboutUs() {
  return (
    <section className="aboutSection">
      <div className="aboutWrapper">

        {/* Left Content */}
        <div className="aboutContent">
          <h1 className="aboutTitle">Contact Us</h1>

          <p className="aboutDescription">
            Want to see what real-time decision intelligence can do for your app
            and bottom line? Contact sales or sign up free to start building with
            PubNub today.
          </p>

          <div className="aboutActions">
            <button className="primaryActionButton">
              Contact Sales
            </button>
            <button className="secondaryActionButton">
              Get Started
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="aboutImageContainer">
          <img src={customerServiceImg} alt="Customer Support" />
        </div>

      </div>
    </section>
  );
}

export default AboutUs;
