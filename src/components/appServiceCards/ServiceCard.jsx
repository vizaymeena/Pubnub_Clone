import React from "react";

function ServiceCard({ data }) {
  return (
    <div className="applicationServiceCard">
      <div className="cardText">
        <h3 className="cardTitle">{data.title}</h3>
        <p className="cardDescription">
          {data.descriptionStart}{" "}
          <span>{data.descriptionMiddle}</span>{" "}
          {data.descriptionEnd}
        </p>
      </div>

      <div className="cardImage">
        <img src={data.image} alt={data.title} />
      </div>
    </div>
  );
}

export default ServiceCard;
