import React from "react";
import gates2 from '../../../../resources/images/gates2.jpg'
import gates3 from '../../../../resources/images/gates3.jpg'

export const Gates: React.FC = () => {
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
        Gates
      </h1>

      <p style={{ fontSize: "1rem", lineHeight: "1.6", marginBottom: "30px" }}>
        With landscaping, the idea is to create an aesthetically pleasing lawn and yard that supplements your home’s construction and gives you a property that you can be proud of both inside and out. Yet landscaping is also about function – installing fixtures that serve a purpose for your home. Still, the truest form of landscaping is when both function and design come together – bringing you a perfectly constructed lawn that also meets your everyday needs.
      </p>

      <div style={{ display: "flex", gap: "30px", marginBottom: "30px", flexWrap: "wrap", alignItems: "flex-start" }}>
        <img
          loading="lazy"
          alt="Traditional wood gate"
          src={gates2}
          style={{
            width: "100%",
            maxWidth: "350px",
            borderRadius: "12px",
            objectFit: "cover",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          }}
        />
        <div style={{ flex: 1 }}>
          <h2 style={{ fontSize: "1.5rem", color: "#02703d", marginBottom: "10px" }}>Traditional and Custom Gates</h2>
          <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
            We at Greenbloom Landscaping are pleased to offer custom gates that can easily be installed in your yard in a way that matches your home’s design while still providing you with that extra bit of security. Our gates are finely crafted, designed to withstand the elements and are sure to turn your home into a greater place of comfort.
          </p>
        </div>
      </div>

      <p style={{ fontSize: "1rem", lineHeight: "1.6", marginBottom: "30px" }}>
        We offer a variety of wood gate styles, and would be happy to discuss customization options for you to ensure they meet your landscaping vision. We also employ only the most skilled and friendly personnel so that the entire experience is enjoyable, as you watch your lawn transform into an aesthetic masterpiece.
      </p>

      <div style={{ display: "flex", gap: "30px", marginBottom: "40px", flexWrap: "wrap", alignItems: "flex-start" }}>
        <img
          src={gates3}
          loading="lazy"
          alt="Wood gate detail"
          style={{
            width: "100%",
            maxWidth: "350px",
            borderRadius: "12px",
            objectFit: "cover",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          }}
        />
        <div style={{ flex: 1 }}>
          <h2 style={{ fontSize: "1.5rem", color: "#02703d", marginBottom: "10px" }}>Call Greenbloom Landscaping</h2>
          <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
            We pride ourselves on our custom gates and woodworking, and would be happy to supply you with all of your landscaping needs. Call us today to learn more and discuss what affordable options we have available.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Gates;
