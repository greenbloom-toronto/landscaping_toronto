import React from "react";
import gardening2 from '../../../../resources/images/gardening2.jpg'

export const GardeningServices: React.FC = () => {
    return (
      <div style={{ maxWidth: "1100px", margin: "0 auto", color: "#000", fontFamily: "Arial, sans-serif" }}>
        <h1
          style={{
            fontSize: "2.5rem",
            marginBottom: "20px",
            color: "#02703d",
            borderBottom: "2px solid #02703d",
            paddingBottom: "10px"
          }}
        >
          Gardening Services
        </h1>
  
        <div style={{ display: "flex", gap: "30px", marginBottom: "40px", flexWrap: "wrap", alignItems: "center" }}>
          <div style={{ flex: 1 }}>
            <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
              Our garden services in Toronto cover all commercial and home needs, meet the demands of our clients and exceed everyone’s expectations. They are provided by professionals with great experience in landscaping maintenance. We have extraordinary expertise but are also particularly meticulous. We pay attention to the special conditions of each garden and can be helpful to our customers every single season. Gardens need extra good care during the winter, perfect cleanup in the spring and maintenance in the summer and autumn. Our team at Landscaping Toronto is well-equipped and has the specialized knowledge to offer full and exceptional services.
            </p>
          </div>
          <img
            loading="lazy"
            src={gardening2}
            alt="Gardening expert working in lush garden"
            style={{ width: "100%", maxWidth: "450px", borderRadius: "12px", objectFit: "cover", boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)" }}
          />
        </div>
  
        <div style={{ backgroundColor: "#F4FBF3", padding: "30px", borderRadius: "12px", marginBottom: "40px" }}>
          <h2 style={{ fontSize: "1.5rem", color: "#02703d", marginBottom: "15px" }}>Our team provides vegetable garden maintenance</h2>
          <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
            When you trust our Landscaping in Toronto for your garden needs, you can be sure of the honesty and hard work of our team. We work with the best experts in Ontario in order to ensure efficiency and cover every garden need with perfection. From tree trimming and snow removal to proper irrigation, lawn aeration and flower planting, we can assure you that we are proficient in our work. Our excellence is surely the result of our expertise but also commitment. We do know which the best time for fertilization is and we also offer organic gardening services. When clients choose to take advantage of their land and plant fruit and vegetables, we can help them out. We can maintain and take great care of their vegetable garden so that it will truly be fruitful.
          </p>
        </div>
  
        <div style={{ display: "flex", gap: "30px", flexWrap: "wrap", alignItems: "center" }}>
          <div style={{ flex: 1 }}>
            <h2 style={{ fontSize: "1.5rem", color: "#02703d", marginBottom: "15px" }}>We are an experience garden maintenance company</h2>
            <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
              We offer garden maintenance and our services will be necessary every season. With the right gardening, lawn and plants grow to be healthy. Beautiful green gardens have strong roots and are treated in such a way so that they can receive the right amount of water, sun and nutrients. We plant trees and trim the existing ones, take care of beds, treat properly the lawn and help clients with snow problems during the winter. We offer full Gardening Services in Toronto and there is no real limit to what we can do. The important thing is that we are devoted specialists and our services are professional.
            </p>
          </div>
        </div>
      </div>
    );
  };

export default GardeningServices;
