import React from "react";
import "../../assets/styles/component_css/page_css/services/core_services.css";

// images
import pubnubPng from "../../assets/photos/pcore.webp";
import messagingService from "../../assets/photos/s1.webp";
import notificationService from "../../assets/photos/s2.webp";
import eventHub from "../../assets/photos/s3.webp";

function CoreServices() {
  return (
    <section className="coreServicesSection">

      {/* ---------- Top Section ---------- */}
      <div className="coreServicesHero">
        <div className="heroText">
          <h1 className="heroTitle">PubNub Core Services</h1>
          <p className="heroDescription">
            Enable real-time communication and power low-latency, event-driven
            logic across your entire application architecture.
          </p>
        </div>

        <div className="heroImage">
          <img src={pubnubPng} alt="pubnubImg" />
        </div>
      </div>

      {/* ---------- Messaging Services ---------- */}
      <div className="messagingServicesSection">
        <div className="sectionHeader">
          <h2 className="sectionTitle">Messaging Services</h2>
          <p className="sectionSubtitle">
            Power real-time, event-driven experiences with messaging tools built
            for scale, speed, and seamless integration.
          </p>
        </div>

        <div className="serviceCards">

          <div className="serviceCard">
            <div className="serviceContent">
              <h3>In-App Messaging</h3>
              <p>
                Deliver real-time updates across devices and servers in under
                100ms using a pub/sub model built for scale. Perfect for
                mission-critical messaging.
              </p>
            </div>
            <img src={messagingService} alt="In App Messaging" />
          </div>

          <div className="serviceCard">
            <div className="serviceContent">
              <h3>Mobile Push Notifications</h3>
              <p>
                Ensure critical communications always reach users—even when
                they're offline—with native push fallbacks.
              </p>
            </div>
            <img src={notificationService} alt="Push Notifications" />
          </div>

          <div className="serviceCard">
            <div className="serviceContent">
              <h3>Event Hub</h3>
              <p>
                Streamline integrations with an Event Hub that filters,
                processes, and triggers actions in real time.
              </p>
            </div>
            <img src={eventHub} alt="Event Hub" />
          </div>

        </div>
      </div>

    </section>
  )
}

export default CoreServices;
