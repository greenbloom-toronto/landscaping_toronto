import React from "react";
import decks_design2 from '../../../../resources/images/decks_design2.jpg'

export const DecksDesignConstruction: React.FC = () => {
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
        Decks – Design, Construction
      </h1>

      <p style={{ fontSize: "1rem", lineHeight: "1.6", marginBottom: "30px" }}>
        Your yard is meant to be more than a means to improve the look of your home. It is also designed to be functional – a place you can go and enjoy the outdoors and still be within the comfort of your own home. In addition to basic landscaping, we at Greenbloom Landscaping are pleased to offer deck construction.
      </p>

      <img
        alt="Custom deck design and construction"
        src={decks_design2}
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
        Custom Deck Construction
      </h2>

      <p style={{ fontSize: "1rem", lineHeight: "1.6", marginBottom: "20px" }}>
        Your deck needs to be a sturdy, reliable location that doesn’t detract from your home or yard décor while offering you a functional spot to enjoy some time outdoors. We offer custom deck construction that is perfectly suited for your home. Made of only the finest wood and put into place by our skilled landscapers, we can supply you with the perfect functional landscape architecture.
      </p>

      <h2 style={{ fontSize: "1.5rem", color: "#02703d", marginBottom: "10px" }}>
        Friendly Service, Affordable Prices
      </h2>

      <p style={{ fontSize: "1rem", lineHeight: "1.6", marginBottom: "40px" }}>
        Our goal at Greenbloom Landscape is to supply you with the complete landscaping package, supported by friendly professionals skilled in the latest landscaping techniques. We are happy to develop a custom deck for your yard, installing the perfect functional addition to your landscape in a way that doesn’t take away from the rest of your yard. Contact us today to learn more about how we can help you with your complete deck and landscaping needs.
      </p>
    </div>
  );
};

export default DecksDesignConstruction;
