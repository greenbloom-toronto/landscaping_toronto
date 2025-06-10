import React from "react";
import pergolas2 from '../../../../resources/images/pergolas2.jpg'

export const Pergolas: React.FC = () => {
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
        Pergolas
      </h1>

      <div style={{
        display: 'flex',
        flexDirection: 'row-reverse',
        gap: '20px',
        alignItems: 'center'
      }}>
        <p style={{ fontSize: "1rem", lineHeight: "1.6", marginBottom: "30px" }}>
          Landscape design is about more than simply maintaining a lawn and strategically placing plants. It’s about looking at your home and lawn from an artist’s eye, and finding the perfect way to transform it into a masterpiece. At Greenbloom Landscaping, our experts are prepared to develop and install any woodwork that works with your yard. One of the most underutilized structures in a great yard is the Pergola.
        </p>

        <img
          alt="Wooden pergola example"
          src={pergolas2}
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

      <h2 style={{ fontSize: "1.5rem", color: "#02703d", marginBottom: "10px" }}>What Are Pergolas?</h2>
      <p style={{ fontSize: "1rem", lineHeight: "1.6", marginBottom: "30px" }}>
        Pergolas are wood passages that are meant to create shade over an enclosed area. The spaces between the beams allow for light to shine through, while still providing just enough shade to make standing underneath one a pleasant experience. Pergolas may also be augmented with vines and other plants to add even more greenery to your landscape design.
      </p>

      <h2 style={{ fontSize: "1.5rem", color: "#02703d", marginBottom: "10px" }}>Greenbloom Landscaping Pergolas</h2>
      <p style={{ fontSize: "1rem", lineHeight: "1.6", marginBottom: "40px" }}>
        At Greenwood Landscaping, we can supply you with custom or pre-designed pergolas that are perfect for creating the right ambiance in your yard. Our experts can develop either attached or unattached pergolas in a way that works perfectly with your overall landscape design, and provides you with just the right amount of light and shade to turn it into either a comfortable passageway, or a welcome location to sit and enjoy a nice summer day.
        <br />
        <br />
        Call Greenwood Landscaping today to decide if adding a pergola is right for you, as well as receive an estimate for all of your landscaping needs.
      </p>
    </div>
  );
};

export default Pergolas;
