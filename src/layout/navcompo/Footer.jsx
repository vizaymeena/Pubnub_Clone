

import '../../assets/styles/layout_css/footer.css'
import {  FaFacebookF,  FaLinkedinIn,  FaYoutube,} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiVimeo } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="siteFooter">
      <div className="footerContainer">

        {/* Top section */}
        <div className="footerColumns">

          <div className="footerColumn">
            <h4 className="footerTitle">PUBNUB PLATFORM</h4>
            <ul className="footerList">
              <li>Overview</li>
              <li>Core Services</li>
              <li>Decision Intelligence</li>
              <li>Global Network</li>
              <li>Integrations</li>
              <li>Generative AI</li>
              <li>AI MCP Server</li>
              <li>Security & Compliance</li>
              <li>Pricing</li>
            </ul>
          </div>

          <div className="footerColumn">
            <h4 className="footerTitle">USE CASE</h4>
            <ul className="footerList">
              <li>Chat</li>
              <li>Live Audience Engagement</li>
              <li>Multi-User Collaboration</li>
              <li>IoT Device Control</li>
              <li>Real-Time Workflows</li>
              <li>Geolocation & Dispatch</li>
              <li>Edge Messaging</li>
              <li>Event Driven Architecture</li>
              <li>LiveOps</li>
              <li>Gamification</li>
              <li>Auto-Moderation</li>
            </ul>
          </div>

          <div className="footerColumn">
            <h4 className="footerTitle">INDUSTRY</h4>
            <ul className="footerList">
              <li>Sports, Media & Entertainment</li>
              <li>Digital Healthcare</li>
              <li>iGaming, Betting & Casino</li>
              <li>Games</li>
              <li>Enterprise SaaS</li>
              <li>Transport, Delivery & Logistics</li>
              <li>eCommerce</li>
              <li>Push Notifications</li>
              <li>Call Centers & Customer Care</li>
              <li>Social & Lifestyle</li>
              <li>FinTech</li>
            </ul>
          </div>

          <div className="footerColumn">
            <h4 className="footerTitle">RESOURCES</h4>
            <ul className="footerList">
              <li>Blog</li>
              <li>Customers</li>
              <li>Demos</li>
              <li>Tutorials</li>
              <li>eBook</li>
              <li>Glossary</li>
            </ul>
          </div>

          <div className="footerColumn">
            <h4 className="footerTitle">ABOUT</h4>
            <ul className="footerList">
              <li>Our Company</li>
              <li>Careers</li>
              <li>Support</li>
              <li>Partners</li>
              <li>Privacy Policy</li>
              <li>Terms and Conditions</li>
              <li>Bug Bounty Policy</li>
              <li>Contact Us</li>
              <li>Trust Center</li>
              <li>Cookies Policy</li>
              <li>Cookies Settings</li>
            </ul>
          </div>

        </div>

        {/* Bottom section */}
        <div className="footerBottom">
          <p className="footerCopyright">
            c 2010 - 2025 PubNub Inc. All Rights Reserved. PUBNUB and the PUBNUB logo are
            trademarks or registered trademarks of PubNub Inc. in the U.S. and other countries.
          </p>

          <div className="footerSocials">
            <span><FaFacebookF /></span>
            <span><FaXTwitter /></span>
            <span><FaLinkedinIn /></span>
            <span><FaYoutube /></span>
            <span><SiVimeo /></span>
          </div>
        </div>

      </div>
    </footer>
  )
}
