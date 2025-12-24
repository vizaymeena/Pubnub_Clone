import '../../assets/styles/component_css/nav_sublinks_css/platform.css'

import {
  MessageSquare,
  Users,
  Wifi,
  MapPin,
  Rocket,
  Shield,
  Activity,
  Gamepad2
} from "lucide-react";

export function SolutionSubLink() {
  return (
    <div className="megaMenuWrapper">
      <div className="solutionMenu">

        {/* Use Case */}
        <div className="solutionColumn">
          <h4 className="menuHeading">BY USE CASE</h4>

          <div className="solutionItem">
            <MessageSquare />
            <div>
              <h5>Chat</h5>
              <p>Provide chat experiences your users need</p>
            </div>
          </div>

          <div className="solutionItem">
            <Users />
            <div>
              <h5>Multi-User Collaboration</h5>
              <p>Bring the team together</p>
            </div>
          </div>

          <div className="solutionItem">
            <Wifi />
            <div>
              <h5>IoT Device Control</h5>
              <p>Build & manage IoT devices</p>
            </div>
          </div>

          <div className="solutionItem">
            <MapPin />
            <div>
              <h5>Geolocation & Dispatch</h5>
              <p>Track fleets in real time</p>
            </div>
          </div>
        </div>

        {/* More Use Cases */}
        <div className="solutionColumn">
          <div className="solutionItem">
            <Rocket />
            <div>
              <h5>Live Audience Engagement</h5>
              <p>From live events to social workouts</p>
            </div>
          </div>

          <div className="solutionItem">
            <Activity />
            <div>
              <h5>LiveOps</h5>
              <p>Real-time decisions, zero lag</p>
            </div>
          </div>

          <div className="solutionItem">
            <Gamepad2 />
            <div>
              <h5>Gamification</h5>
              <p>Drive engagement in real time</p>
            </div>
          </div>

          <div className="solutionItem">
            <Shield />
            <div>
              <h5>Auto-Moderation</h5>
              <p>AI-powered message filtering</p>
            </div>
          </div>
        </div>

        {/* Industry */}
        <div className="solutionColumn industryColumn">
          <h4 className="menuHeading">BY INDUSTRY</h4>

          <ul className="industryList">
            <li>Sports, Media & Entertainment</li>
            <li>Digital Healthcare</li>
            <li>iGaming, Betting & Casino</li>
            <li>Games</li>
            <li>eCommerce</li>
            <li>FinTech</li>
            <li>Transport & Logistics</li>
            <li>Call Centers & Customer Care</li>
            <li>Social & Lifestyle</li>
          </ul>
        </div>

      </div>
    </div>
  );
}
