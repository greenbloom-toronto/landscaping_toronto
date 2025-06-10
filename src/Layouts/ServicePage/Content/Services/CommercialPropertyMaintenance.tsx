import React from "react";
import commercial_property2 from '../../../../resources/images/irrigation1.jpg'

export const CommercialPropertyMaintenance: React.FC = () => {
  return (
    <div style={{ maxWidth: "1100px", margin: "0 auto", color: "#000" }}>
      <h1
        style={{
          fontSize: "2.5rem",
          marginBottom: "20px",
          color: "#02703d",
          borderBottom: "2px solid #02703d",
          paddingBottom: "10px",
        }}
      >
        Commercial Property Maintenance
      </h1>

      <p style={{ fontSize: "1rem", lineHeight: "1.6", marginBottom: "30px" }}>
        The capable contractors of Greenbloom Landscaping Toronto have all commercial needs covered. We make a difference with our work because we have the experience and the conscientiousness required in this job to make the best of land. We promise smiling lands with the best Commercial Property Maintenance in Toronto. Our company has a great number of very experienced contractors for all landscaping services needed in commercial properties of all sizes. Whether you want special designs, pathway repairs, winter issue solutions and spring lawn preparation, we are your men.
      </p>

      <img
        alt="Commercial property maintenance"
        src={commercial_property2}
        style={{
          width: "100%",
          maxWidth: "500px",
          borderRadius: "12px",
          marginBottom: "30px",
          objectFit: "cover",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        }}
      />

      <h2 style={{ fontSize: "1.5rem", color: "#02703d", marginBottom: "10px" }}>
        Experienced commercial property maintenance specialists
      </h2>
      <p style={{ fontSize: "1rem", lineHeight: "1.6", marginBottom: "30px" }}>
        Our Greenbloom Landscaping in Toronto is not accidentally the number one contractor in Ontario. We have invested in this job and know the requirements of commercial properties. We also know the expectations for high end landscaping, the needs of different soils, lands and seasons. We travel along with all these expectations and apart from offering the best design and landscaping ideas, solutions and services to our commercial clients, we also make sure the beauty of commercial properties remains throughout the whole year with repeated visits. We excel in Commercial Property Maintenance and make sure your land stays pretty at all times.
      </p>

      <h2 style={{ fontSize: "1.5rem", color: "#02703d", marginBottom: "10px" }}>
        We are high end commercial landscaping maintenance experts
      </h2>
      <p style={{ fontSize: "1rem", lineHeight: "1.6", marginBottom: "40px" }}>
        Among all high end commercial maintenance companies in Toronto, we manage to make the difference with our posh ideas and hard work. We employ the greatest designers and technicians and not only do we make sure your property is well taken care of but also maintained as often as you wish. We maintain the natural beauty but also the woodwork and stonework done in your commercial property with excellent maintenance. Our contractors are thorough, experts in soils and ready to provide perfect management practices in order to treat the land right and enhance its beauty. Regardless of the size of the commercial property, you can be sure that our company will meet and surely exceed your expectations for excellence, time frames and results.
      </p>
    </div>
  );
};

export default CommercialPropertyMaintenance;
