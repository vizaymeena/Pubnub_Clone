import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../../assets/styles/component_css/page_css/services/sdksupport.css";

// assets icons
import unreal from "../../assets/photos/unreal.svg";
import cpp from "../../assets/photos/cpp.png";
import unity from "../../assets/photos/unity.png";
import swift from "../../assets/photos/swift.jpg";
import python from "../../assets/photos/python.webp";
import kotlin from "../../assets/photos/kotlin.png";
import js from "../../assets/photos/js.png";
import java from "../../assets/photos/java.png";

let sdkList = [
  { name: "Unreal Engine", icon: unreal },
  { name: "C++", icon: cpp },
  { name: "Unity", icon: unity },
  { name: "Swift", icon: swift },
  { name: "Python", icon: python },
  { name: "Kotlin", icon: kotlin },
  { name: "JavaScript", icon: js },
  { name: "Java", icon: java },
]

export default function SdkSupportStrip() {
  let [activeSdk, setActiveSdk] = useState("Unreal Engine");

  return (
    <>
      {/* Left */}
      <div className="sdkSupportText">
        <span className="supportLabel">Support for</span>

        <AnimatePresence mode="wait">
          <motion.h2
            key={activeSdk}
            className="supportValue"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            {activeSdk}
          </motion.h2>
        </AnimatePresence>

        <span className="seeAllLink">
          See all →
        </span>
      </div>

      {/* Right */}
      <div className="sdkIconRow">
        {sdkList.map((sdk) => (
          <motion.div
            key={sdk.name}
            className="sdkIconBox"
            onMouseEnter={() => setActiveSdk(sdk.name)}
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <img src={sdk.icon} alt={sdk.name} />
          </motion.div>
        ))}
      </div>
    </>
  );
}
