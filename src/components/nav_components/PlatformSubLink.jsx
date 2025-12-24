import '../../assets/styles/component_css/nav_sublinks_css/platform.css'

import { Info, Layers, Globe, Brain, Cpu, Sparkles } from "lucide-react";

export function PlatformSubLink() {
  return (
    <div className="megaMenuWrapper">
      <div className="platformMenu">

        {/* Left Card */}
        <div className="platformOverviewCard">
          <div className="overviewContent">
            <Info size={20} />
            <h3>Platform Overview</h3>
            <p>Your platform for interactive experiences</p>
          </div>
          <span className="exploreLink">Explore our platform →</span>
        </div>

        {/* Right Grid */}
        <div className="platformLinksGrid">

          <div className="platformLinkItem activeItem">
            <Layers />
            <div>
              <h4>Core Services</h4>
              <p>Real-time communication with low-latency</p>
            </div>
          </div>

          <div className="platformLinkItem">
            <Cpu />
            <div>
              <h4>Integrations</h4>
              <p>Integrate best-in-class third-party services</p>
            </div>
          </div>

          <div className="platformLinkItem">
            <Globe />
            <div>
              <h4>Global Network</h4>
              <p>Secure, scalable infrastructure</p>
            </div>
          </div>

          <div className="platformLinkItem">
            <Sparkles />
            <div>
              <h4>Generative AI</h4>
              <p>Build AI-native, real-time apps</p>
            </div>
          </div>

          <div className="platformLinkItem">
            <Brain />
            <div>
              <h4>Decision Intelligence</h4>
              <p>Power decisions with real-time intelligence</p>
            </div>
          </div>

          <div className="platformLinkItem">
            <Cpu />
            <div>
              <h4>MCP Server</h4>
              <p>Unlock real-time code with your AI</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
