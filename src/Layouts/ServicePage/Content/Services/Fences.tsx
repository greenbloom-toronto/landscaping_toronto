import React from "react";

import fences2 from '../../../../resources/images/fences1.jpg'
import fences3 from '../../../../resources/images/fences3.jpg'
import fences4 from '../../../../resources/images/fences2.jpeg'

export const Fences: React.FC = () => {
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
        Fences
      </h1>

      <p style={{ fontSize: "1rem", lineHeight: "1.6", marginBottom: "20px" }}>
        Aside from a good looking lawn, well crafted landscaping can create a safe and private haven for you and your family to appreciate. At Greenbloom Landscaping, we offer complete <span style={{ color: "#02703d" }}>fence</span> building services, designed to both add to the ambiance of your yard and act as a deterrent for prying eyes and criminals.
      </p>

      <p style={{ fontSize: "1rem", lineHeight: "1.6", marginBottom: "30px" }}>
        We can show you some of our many standard private and semi-private fence models, or we can create custom fences according to your specifications, in a way that complements your home design and landscape architecture.
      </p>

      <div style={{ marginBottom: "40px" }}>
        <iframe
          width="100%"
          height="400"
          src="https://www.youtube.com/embed/VYpKs5M_Gmc" // Replace with correct video ID
          title="Fence project by Greenbloom Landscaping"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ borderRadius: "12px", boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)" }}
        ></iframe>
      </div>

      <h2 style={{ fontSize: "1.5rem", color: "#02703d", marginBottom: "20px" }}>
        Call Greenbloom Landscaping Today
      </h2>

      <p style={{ fontSize: "1rem", lineHeight: "1.6", marginBottom: "30px" }}>
        Our fences are designed to withstand the elements, using quality wood and professional craftsmanship. Our staff is trained to do the job right the first time, with a customer-first mindset that ensures the final product will meet your needs. Call us today to learn more about our fencing options and to find out how we at Greenbloom Landscaping can create the perfect landscape design for you.
      </p>

      {/* Fence Cards */}
      <div style={{ display: "flex", gap: "20px" }}>
        {/* Card 1 */}
        <img
          src={fences2}
          alt="Fence example 1"
          style={{ width: "calc(100%/3 - 13px)", borderRadius: "8px", objectFit: "cover" }}
        />

        {/* Card 2 */}
        <img
          src={fences3}
          alt="Fence example 2"
          style={{ width: "calc(100%/3 - 13px)", borderRadius: "8px", objectFit: "cover" }}
        />

        {/* Card 3 */}
        <img
          src={fences4}
          alt="Fence example 4"
          style={{ width: "calc(100%/3 - 13px)", borderRadius: "8px", objectFit: "cover" }}
        />
      </div>
    </div>
  );
};

export default Fences;
