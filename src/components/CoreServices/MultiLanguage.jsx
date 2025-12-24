
import "../../assets/styles/component_css/page_css/services/multi_language.css";

import aiPreview from "../../assets/photos/aiPreview.webp";
import templatesPreview from "../../assets/photos/templatePreview.webp";
import SdkSupportStrip from "./SDKSupport";

function MultiLanguage() {

    let data = [
        {title:"Built-in AI Coding Assistance",description:" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis quidem quisquam eaque quam fugiat nesciunt repudiandae, provident aliquam enim velit nisi possimus illo impedit itaque tempore eveniet, labore neque placeat!",image:aiPreview,actionBtn:"Learn More"},
        {title:"Solution Kits & Templates",description:" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis quidem quisquam eaque quam fugiat nesciunt repudiandae, provident aliquam enim velit nisi possimus illo impedit itaque tempore eveniet, labore neque placeat!",image:templatesPreview,actionBtn:"Learn More"}

    ]

  return (
    <section className="multiLanguageSection">

      {/* ---------- Header ---------- */}
      <div className="multiLanguageHeader">
        <h1>Multi-Language, Multi-Platform</h1>
        <p>
          Accelerate development with tools and SDKs built for speed, scale,
          and AI-powered productivity.
        </p>
      </div>

      {/* ---------- SDK Strip ---------- */}
      <div className="sdkSupportCard">
       <SdkSupportStrip/>
      </div>

      {/* ---------- AI Section ---------- */}
      <div className="featureSplit">
        <div className="featureImage darkImage">
          <img src={data[0].image}  alt="Ask AI" />
        </div>

        <div className="featureContent">
          <h2>{data[0].title}</h2>
          <p>
           {data[0].description}
          </p>
          <span>{data[0].actionBtn}</span>
        </div>
      </div>

      {/* ---------- Templates Section ---------- */}
      <div className="featureSplit reverse">
        <div className="featureContent">
          <h2>{data[1].title}</h2>
          <p>
           {data[1].description}
          </p>
          <span>{data[1].actionBtn}</span>
        </div>

        <div className="featureImage darkImage">
          <img src={data[1].image} alt="Templates" />
        </div>
      </div>

    </section>
  );
}

export default MultiLanguage;
