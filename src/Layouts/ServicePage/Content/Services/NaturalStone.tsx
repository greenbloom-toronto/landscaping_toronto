import React from "react";

import flagstone_patio2 from '../../../../resources/images/flagstone_patio2.jpg'

const NaturalStone: React.FC = () => {
  return (
    <div style={{ maxWidth: "1100px", margin: "0 auto", color: "#000" }}>
      <h1 style={{ fontSize: "2.5rem", marginBottom: "20px", color: "#02703d", borderBottom: "2px solid #02703d", paddingBottom: "10px" }}>Natural stone Landscaping</h1>

      <h2 style={{ fontSize: "1.75rem", color: "#02703d", marginBottom: "10px" }}>
        Bring out the Natural Beauty of your property with Natural Stone Landscaping
      </h2>

      <h3 style={{ fontSize: "1.5rem", color: "#02703d", marginBottom: "10px" }}>Why Choose Us?</h3>
      <ul style={{ fontSize: "1rem", marginBottom: "30px", paddingLeft: "20px", listStyle: "none" }}>
        <li style={{ paddingBottom: "6px" }}>✓ We follow a meticulous process of installation to make sure it’s done right.
        </li>
        <li style={{ paddingBottom: "6px" }}>✓ Experienced team of installers with a Great Reputation – check us out on Homestars
        </li>
        <li style={{ paddingBottom: "6px" }}>✓ We make sure your lawn and garden are undamaged.
        </li>
        <li style={{ paddingBottom: "6px" }}>✓ We stand by our estimate – you installation will be done on time and on budget.
        </li>
        <li>✓ You can come to us for all your landscaping needs – great discounts on bundled services.
        </li>
      </ul>

      <div style={{ display: "flex", alignItems: "flex-start", gap: "30px", flexWrap: "wrap", marginBottom: "30px" }}>
        <img
          src={flagstone_patio2}
          alt="Natural stone path and plants"
          style={{ width: "100%", maxWidth: "500px", borderRadius: "12px", objectFit: "cover", boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)" }}
        />
        <div style={{ flex: 1, minWidth: "300px" }}>
          <p style={{ fontSize: "1rem", lineHeight: "1.6", marginBottom: "10px" }}>
            Landscaping as an art form is about bringing out the natural beauty of your property. For many, that means finding ways to turn the outside of your home into a setting that feels like nature – a setting that allows you to walk out of your home and marvel in the view of the outdoors. The beauty of a natural setting is why natural stone landscaping is such a popular option with our Greenbloom Landscaping customers.
          </p>

          <h3 style={{ fontSize: "1.5rem", color: "#02703d", margin: "20px 0 10px" }}>Installing Natural Stone</h3>
          <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
            The goal behind natural stone landscaping is to give your property a more rustic look. Natural stones – each one with its own unique appearance – help give your property a more organic beauty, using the interesting appearance of each of these stones to draw the eye.
          </p>
        </div>
      </div>

      <p style={{ fontSize: "1rem", lineHeight: "1.6", marginBottom: "30px" }}>
        Natural stone landscaping is also functional, as these stones can be used to create walls, lay paths, build fountains, and add color to the landscape. Natural stones are also much easier to maintain, cost less than other options, and can be used to design nearly any hard surface that is to be placed in your landscape design.
      </p>

      <h3 style={{ fontSize: "1.5rem", color: "#02703d", marginBottom: "10px" }}>Call Greenbloom Landscaping</h3>
      <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
        Greenbloom Landscaping has a variety of landscaping options to match the décor of your home and improve the look of your property. Natural stone landscaping is one of the ways that our service experts can create the perfect design for your home. Call Greenbloom today to get started, and let us show you how our natural stone options can completely enhance the look of your property.
      </p>
    </div>
  );
};

export default NaturalStone;