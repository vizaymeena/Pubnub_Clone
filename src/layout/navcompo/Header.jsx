import { useState } from "react";
import "../../assets/styles/layout_css/header.css";
import { Search } from "lucide-react";

import webAppLogo from "../../assets/photos/pubnub_logo.png"

import {  PlatformSubLink } from "../../components/nav_components/PlatformSubLink"
import { DeveloperSubLink } from "../../components/nav_components/DeveloperSubLink"
import { SolutionSubLink } from "../../components/nav_components/SolutionSubLink"

import { useNavigate } from "react-router-dom";

function Header() {
  let [activeMenu, setActiveMenu] = useState(null)
  let navigate = useNavigate()
  let closeMenu = () => setActiveMenu(null)

  return (
    <header className="siteHeader">
      <div className="headerContainer">

        {/* Left side */}
        <div
          className="headerLeft"
          onMouseLeave={closeMenu}
        >
          <img src={webAppLogo} alt="Logo" className="brandLogo" />

          <nav className="mainNavigation">
            <span 
                className={`navItem ${activeMenu === "platform" ? "navItemActive" : ""}`}  
                onMouseEnter={() => setActiveMenu("platform")}>
                Platform
            </span>

            <span
                onClick={()=>navigate('solution')}
              className={`navItem ${activeMenu === "solutions" ? "navItemActive" : ""}`}
              onMouseEnter={() => setActiveMenu("solutions")}>
                
              Solutions
            </span>

            <span className="navItem">Pricing</span>

            <span
              className={`navItem ${activeMenu === "developer" ? "navItemActive" : ""}`}
              onMouseEnter={() => setActiveMenu("developer")}>
              Developer
            </span>

            <span className="navItem">Resources</span>
          </nav>

          {/* Mega menu container */}
          <div className="megaMenuContainer">
            {activeMenu === "platform" && <PlatformSubLink />}
            {activeMenu === "solutions" && <SolutionSubLink />}
            {activeMenu === "developer" && <DeveloperSubLink />}
          </div>
        </div>

        {/* Right side */}
        <div className="headerRight">
          <button className="searchButton">
            <Search size={20} />
          </button>

          <button className="salesButton">Contact Sales</button>
          <button className="primaryButton">Try for free</button>
        </div>

      </div>
    </header>
  )
}

export default Header
