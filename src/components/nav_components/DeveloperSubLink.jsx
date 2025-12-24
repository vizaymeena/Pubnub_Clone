import '../../assets/styles/component_css/nav_sublinks_css/platform.css'
import {
  Home,
  FileText,
  PlayCircle,
  Map,
  Code2
} from "lucide-react";

export function DeveloperSubLink() {
  return (
    <div className="megaMenuWrapper">
      <div className="developerMenu">

        {/* Left Navigation */}
        <div className="developerNav">
          <div className="developerNavItem"><Home /> Developer Home</div>
          <div className="developerNavItem"><FileText /> Documentation</div>
          <div className="developerNavItem"><PlayCircle /> Tutorials</div>
          <div className="developerNavItem"><Map /> Tour</div>
          <div className="developerNavItem"><Code2 /> Network</div>
        </div>

        {/* SDK Grid */}
        <div className="sdkGrid">
          <h4>SDKs</h4>
          <div className="sdkIcons">
            <span>JS</span>
            <span>Java</span>
            <span>Swift</span>
            <span>Kotlin</span>
            <span>Unity</span>
            <span>Python</span>
            <span>PHP</span>
            <span>Go</span>
            <span>Rust</span>
            <span>Apple</span>
            <span>Android</span>
            <span>Web</span>
          </div>
        </div>

      </div>
    </div>
  );
}
