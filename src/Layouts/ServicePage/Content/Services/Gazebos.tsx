import React from "react";
import gazebos2 from '../../../../resources/images/gazebos2.jpg';

export const Gazebos: React.FC = () => {
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
        Gazebos
      </h1>

      <p style={{ fontSize: "1rem", lineHeight: "1.6", marginBottom: "20px" }}>
        Gazebos are a welcome addition to any large yard, and are certainly one of the most elegant ways to enjoy the scenery of the outdoors while staying protected from the harsh sun and potential rain. They provide your yard with a 360 degree view of the landscaping – the perfect outdoor spot to enjoy time with friends and family.
      </p>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '20px'
        }}
      >
        <p style={{ fontSize: "1rem", lineHeight: "1.6", marginBottom: "30px" }}>
          Greenbloom Landscaping has been Toronto’s leading provider of custom gazebos for homes all over the area. Our premier gazebos are designed with durable material that will withstand the elements, while providing you with a comfortable space to enjoy your yard.
        </p>

        <img
          alt="Custom gazebo example"
          src={gazebos2}
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
        Custom Designed Gazebos
      </h2>

      <h3 style={{ fontSize: "1rem", fontWeight: "bold", marginBottom: "5px" }}>Design</h3>
      <p style={{ fontSize: "1rem", lineHeight: "1.6", marginBottom: "20px" }}>
        We have several gazebo designs available that we can install into your home, or we can work with your specifications to create a custom gazebo style that best fits the design of your home and yard. No matter the size, we will create a gazebo that meets your vision.
      </p>

      <h3 style={{ fontSize: "1rem", fontWeight: "bold", marginBottom: "5px" }}>Construction</h3>
      <p style={{ fontSize: "1rem", lineHeight: "1.6", marginBottom: "30px" }}>
        Our professionals are trained in the latest construction techniques. They are efficient, friendly, and are happy to answer any questions you may have. We use only the finest material and construct our gazebos to last for decades.
      </p>

      <h2 style={{ fontSize: "1.5rem", color: "#02703d", marginBottom: "10px" }}>
        Call Greenbloom Landscaping Today
      </h2>
      <p style={{ fontSize: "1rem", lineHeight: "1.6", marginBottom: "40px" }}>
        Our gazebos are well crafted, designed to fit in perfectly with the design of your yard and home. Call us today to learn more about the gazebos we offer, as well as our other landscaping services.
      </p>
    </div>
  );
};

export default Gazebos;
