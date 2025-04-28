import React from "react";

import flagstone_patio2 from '../../../../resources/images/flagstone_patio2.jpg'
import flagstone_patio3 from '../../../../resources/images/flagstone_patio3.jpg'
import flagstone_patio4 from '../../../../resources/images/flagstone_patio4.jpg'
import flagstone_patio5 from '../../../../resources/images/flagstone_patio5.jpg'

export const FlagstonePatio: React.FC = () => {
  return (
    <div style={{ maxWidth: "1100px", margin: "0 auto", color: "#000" }}>
      <h1 style={{ fontSize: "2.5rem", marginBottom: "20px", color: "#02703d", borderBottom: "2px solid #02703d", paddingBottom: "10px" }}>
        Flagstone Patio and Paths
      </h1>

      <h2 style={{ fontSize: "1.5rem", color: "#02703d", marginBottom: "10px" }}>
        Come to us for Expert Installation of your Flagstone Patio, Driveway or Path
      </h2>

      <p style={{ fontSize: "1rem", lineHeight: "1.6", marginBottom: "20px" }}>
        Flagstone is the material of choice for those looking to spruce up their garden or yard. This flat sandstone is robust,
        picturesque and diverse, and can be used to produce any number of designs and features in your garden.
      </p>

      <h3 style={{ fontSize: "1.25rem", color: "#02703d", marginTop: "30px" }}>Why Choose Us?</h3>
      <ul style={{ fontSize: "1rem", lineHeight: "1.8", paddingLeft: "20px" }}>
        <li>✓ We follow a meticulous process of installation to make sure it’s done right.</li>
        <li>✓ Experienced team of installers with a Great Reputation – check us out on Homestars</li>
        <li>✓ We make sure your lawn and garden are undamaged.</li>
        <li>✓ We stand by our estimate – your installation will be done on time and on budget.</li>
        <li>✓ You can come to us for all your landscaping needs – great discounts on bundled services.</li>
      </ul>

      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", margin: "30px 0" }}>
        <img src={flagstone_patio2} alt="Flagstone example 1" style={{ width: "32%", borderRadius: "8px" }} />
        <img src={flagstone_patio3} alt="Flagstone example 2" style={{ width: "32%", borderRadius: "8px" }} />
        <img src={flagstone_patio4} alt="Flagstone example 3" style={{ width: "32%", borderRadius: "8px" }} />
      </div>

      <h3 style={{ fontSize: "1.25rem", color: "#02703d", marginBottom: "10px" }}>Benefits Of Flagstone Patios</h3>
      <ul style={{ fontSize: "1rem", lineHeight: "1.8", paddingLeft: "20px" }}>
        <li>✓ Ideal for constructing patios.</li>
        <li>✓ Can be cut into a variety of different shapes and sizes, and can be colored to suit your design.</li>
        <li>✓ Easy to install but will stand up to whatever the Toronto weather can throw at it.</li>
        <li>✓ Makes a fine accompaniment to flower gardens, garden statues, and that sunny spot at the end of your garden.</li>
      </ul>

      <div style={{ display: "flex", gap: "20px", alignItems: "center", margin: "40px 0" }}>
        <img src={flagstone_patio5} alt="Flagstone path" style={{ width: "40%", borderRadius: "10px" }} />
        <div>
          <h3 style={{ fontSize: "1.25rem", color: "#02703d", marginBottom: "10px" }}>Benefits of Flagstone Paths and Drives</h3>
          <ul style={{ fontSize: "1rem", lineHeight: "1.8", paddingLeft: "20px" }}>
            <li>✓ Comes in a variety of different shapes and sizes, and can be fashioned to the perfect size for your needs.</li>
            <li>✓ A beautiful accent for your front yard.</li>
            <li>✓ High-end look and feel</li>
            <li>✓ Hard-wearing – even when you drive your heavy vehicle on it, the drive will not be impacted at all.</li>
          </ul>
        </div>
      </div>

      <div style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>
        <div>
          <h3 style={{ fontSize: "1.25rem", color: "#02703d", marginBottom: "10px" }}>Flagstone Edging</h3>
          <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
            Patios, pathways and drives may seem like large projects to take on, but flagstone can also be used for smaller jobs.
            Some people choose to construct edging around their lawn and turf using flagstone, while other use it to ‘finish’ everything
            from a garden shed to a fish pond. Some free-thinking landscapers have even used flagstone by itself to create an ornamental effect.
          </p>
        </div>
      </div>

      <p style={{ fontSize: "1rem", lineHeight: "1.6", marginTop: "30px" }}>
        Whatever you’re planning on using flagstone for, get in touch with us at Greenbloom Landscaping. We’ve been helping a growing number of residents in Toronto
        realize their landscaping dreams, and we can aid you with both design and physical landscaping. We will happily help you landscape your garden just the way you want it.
      </p>
    </div>
  );
};

export default FlagstonePatio;
