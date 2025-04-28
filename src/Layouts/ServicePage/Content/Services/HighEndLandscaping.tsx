import React from "react";
import high_end2 from '../../../../resources/images/highEnd2.jpeg'

export const HighEndLandscaping: React.FC = () => {
  return (
    <div style={{ maxWidth: "1100px", margin: "0 auto", color: "#000" }}>
      <h1 style={{ fontSize: "2.5rem", marginBottom: "20px", color: "#02703d", borderBottom: "2px solid #02703d", paddingBottom: "10px" }}>
        High End Landscaping
      </h1>

      <div style={{ display: "flex", gap: "30px", marginBottom: "30px", flexWrap: "wrap", alignItems: "flex-start" }}>
        <img loading="lazy"
          src={high_end2}
          alt="High end landscape"
          style={{ width: "100%", maxWidth: "450px", borderRadius: "12px", objectFit: "cover", boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)" }}
        />
        <p style={{ fontSize: "1rem", lineHeight: "1.6", flex: 1 }}>
          Landscaping excellence identifies our work! As specialists in high end landscaping, the professionals of Greenbloom Landscaping Toronto only promise exquisite services! We can turn your world around. We can make the exterior of your house equally beautiful and inviting. Inspired by the gardens of Versailles, the spectacular lands in Ontario and the huge property of our customers, we give birth to new ideas in order to astonish you with new designs. We promise excellent aesthetic results but also convenience. We promise hard work by all members of our personnel and delivery in the pre-arranged date. We offer the perfect high end landscaping solutions and excel in their implementation and property maintenance.
        </p>
      </div>

      <h2 style={{ fontSize: "1.5rem", color: "#02703d", marginBottom: "10px" }}>Wonderful ideas on high end residential landscaping</h2>
      <p style={{ fontSize: "1rem", lineHeight: "1.6", marginBottom: "30px" }}>
        Our High End Landscaping Services will fascinate you! We have the best designers and a great number of specialized landscaping contractors for the right fertilization, tree trimming, wood and stonework, and proper landscaping of your land. Our Greenbloom Landscaping in Toronto can handle all size properties and can easily meet the expectations of clients. We are a long time in the business of high end residential landscaping and can assure you that our fabulous ideas and services will make your private world the most legendary place in Toronto. We promise attention to detail, excellent and thorough high end garden care with the right products and the right treatments.
      </p>

      <h2 style={{ fontSize: "1.5rem", color: "#02703d", marginBottom: "10px" }}>We excel in high end garden care</h2>
      <p style={{ fontSize: "1rem", lineHeight: "1.6", marginBottom: "30px" }}>
        We give special gravity to the needs of your private property and your personal demands. With our seasonal maintenance services, our commitment, shrub and tree care, and plant inspections and treatments for the prevention of diseases, we guarantee healthy gardens. We are equally excellent and meticulous in high end commercial landscaping. Our company has the perfect team for all your needs. It doesn’t matter how big your estate is. It doesn’t make a difference to us whether you want ornamental trees planting or high end lawn maintenance. We excel in all High End Landscaping Services and guarantee proficiency!
      </p>
    </div>
  );
};

export default HighEndLandscaping;