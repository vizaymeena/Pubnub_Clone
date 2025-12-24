import React from "react";
import '../../assets/styles/component_css/page_css/services/application_services.css'

import appContext from "../../assets/photos/app_context.webp";
import appFileSharing from "../../assets/photos/app_filesharing.webp";
import appFunctions from "../../assets/photos/app_functions.webp";
import appPubnubChat from "../../assets/photos/app_pubnub_chat.webp";
import appWorkspace from "../../assets/photos/app_workspace.webp";
import appPresence from "../../assets/photos/app_presence.webp";

import ServiceCard from "../appServiceCards/ServiceCard";

function ApplicationServices() {
  const serviceData = [
    { title:"Presence", descriptionStart:"Track user and device activity in real time with instant awareness of who's online, offline, or active", descriptionMiddle:"Build richer experiences like live participant counters and activity indicators", descriptionEnd:"with just a few lines of code.",image: appPresence,
    },
    {title:"App Context", descriptionStart:"Store and access user or app metadata in a flexible, always-available data layer", descriptionMiddle:"Enrich message processing and personalize interactions", descriptionEnd:"across your entire application", image: appContext,
    },
    {title:"BizOps Workspace", descriptionStart:"Monitor, configure, and moderate users, channels, and interactions in real time.", descriptionMiddle:"Tune live services like presence and content controls", descriptionEnd:"without redeploying backend code.", image: appWorkspace,
    },
    {title:"Functions", descriptionStart:"Execute serverless functions in real time for filtering, routing, or enriching events.", descriptionMiddle:"Reduce backend complexity", descriptionEnd:"and move faster with event-driven logic.", image: appFunctions,
    },
    {title:"PubNub Chat", descriptionStart:"Build production-ready chat experiences with typing indicators and read receipts.", descriptionMiddle:"Designed for scalability and reliability",descriptionEnd:"across devices and platforms.", image: appPubnubChat,
    },
    {title:"File Sharing", descriptionStart:"Securely share files in real time across conversations and channels.", descriptionMiddle:"Optimized for performance", descriptionEnd:"and seamless user experience.", image: appFileSharing,
    },
  ];

  return (
    <section className="applicationServicesSection">
      <div className="applicationServicesHeader">
        <h1>Application Services</h1>
        <p>
          Build powerful real-time applications with modular services designed
          for scale, reliability, and performance.
        </p>
      </div>

      <div className="applicationServicesGrid">
        {serviceData.map((item, index) => (
          <ServiceCard key={index} data={item} />
        ))}
      </div>
    </section>
  );
}

export default ApplicationServices;
