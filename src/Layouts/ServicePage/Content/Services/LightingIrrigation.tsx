import React from "react";
import lighting1 from '../../../../resources/images/lighting1.jpg'

export const LightingIrrigation: React.FC = () => {
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
        Lighting & Irrigation
      </h1>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '20px'
        }}
      >
        <p style={{ fontSize: "1rem", lineHeight: "1.6", marginBottom: "30px" }}>
          Often some of the key components to a great yard are the accessories used to maintain its look. At Greenbloom Landscaping, our services stretch beyond basic landscaping all the way to lighting and irrigation. Our experts have been trained in the latest installation techniques to bring both of these valuable services to add to the design of your lawn.
        </p>

        <img
          src={lighting1}
          alt="Landscape lighting"
          style={{
            width: "100%",
            maxWidth: "500px",
            borderRadius: "12px",
            marginBottom: "30px",
            objectFit: "cover",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          }}
        />
      </div>

      <h2 style={{ fontSize: "1.5rem", color: "#02703d", marginBottom: "10px" }}>
        Irrigation Services
      </h2>
      <p style={{ fontSize: "1rem", lineHeight: "1.6", marginBottom: "20px" }}>
        Our irrigation service allows us to install high quality irrigation beneath your lawn. Easy to operate, these irrigation components will help keep your lawn fresh, able to properly water your lawn as needed and keep it successfully lush and healthy.
      </p>

      <h3 style={{ fontSize: "1rem", fontWeight: "bold", marginBottom: "5px" }}>Lighting Services</h3>
      <p style={{ fontSize: "1rem", lineHeight: "1.6", marginBottom: "30px" }}>
        Often the perfect complement to great landscaping is the installation of excellent lighting. The right lighting can help your lawn and garden shine, giving it the perfect ambiance for your home both day and night. We choose only the best lighting, and ensure that it matches your décor perfectly.
      </p>

      <h2 style={{ fontSize: "1.5rem", color: "#02703d", marginBottom: "10px" }}>
        Lighting and Irrigation Installation
      </h2>
      <p style={{ fontSize: "1rem", lineHeight: "1.6", marginBottom: "40px" }}>
        At Greenbloom Landscaping, we offer professional, affordable lighting and irrigation installation for homes all over Toronto, both as part of a larger service package and individually. Contact us today to learn more about how Greenbloom Landscaping can help you complete your irrigation and lighting needs.
      </p>
    </div>
  );
};

export default LightingIrrigation;
