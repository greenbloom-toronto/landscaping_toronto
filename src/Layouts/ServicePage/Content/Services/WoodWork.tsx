import React from "react";

import wood_work2 from '../../../../resources/images/wood_work2.jpg'

export const WoodWork: React.FC = () => {
  return (
    <div style={{ maxWidth: "1100px", margin: "0 auto", color: "#000" }}>
      <h1 style={{ fontSize: "2.5rem", marginBottom: "20px", color: "#02703d", borderBottom: "2px solid #02703d", paddingBottom: "10px" }}>
        Wood Work
      </h1>

      <p style={{ fontSize: "1rem", lineHeight: "1.6", marginBottom: "30px" }}>
        Trust the expertise of our landscaping contractors today! We won’t only design the green parts of your garden but blend them with excellent woodwork whether you need a fence, a deck or pergolas. We have special technicians for such tasks at Greenbloom Landscaping Toronto and that’s why we can give our customers in Ontario full options about the architecture of their garden. We are surely trained to do an excellent job, deliver on time and use quality wood appropriate for each application.
      </p>

      <h2 style={{ fontSize: "1.5rem", color: "#02703d", marginBottom: "10px" }}>
        Various constructions on request
      </h2>

      <div style={{ display: "flex", gap: "30px", marginBottom: "30px", flexWrap: "wrap", alignItems: "center" }}>
        <img loading="lazy"
          src={wood_work2}
          alt="Woodwork example"
          style={{ width: "100%", maxWidth: "350px", borderRadius: "12px", objectFit: "cover", boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)" }}
        />
        <p style={{ fontSize: "1rem", lineHeight: "1.6", flex: 1 }}>
          Wood is part of nature. We bring it back to your back and front yard! It makes a wonderful combination with the colorful flowers at the beds, the green trimmed trees and your catered lawn. It will surely make a difference to the garden’s appeal. Processed to last and withstand the fierce winters of Toronto wood will provide security, add to the great appearance of your property and make a great difference to its value! We can create beautiful corners with gazebos and pergolas by the finest wood. We can build decks, fences and gates and ensure your garden has convenient passages and full security.
        </p>
      </div>

      <p style={{ fontSize: "1rem", lineHeight: "1.6", marginBottom: "30px" }}>
        Greenbloom Landscaping Toronto employs top technicians for precise and excellent woodwork. Whatever you desire it can become reality! Our landscaping Toronto techniques extend to all kinds of designs for any construction you dream for your garden. We have excellent fence contractors and specialists, who can give you fresh ideas and suggestions for ways to improve the looks and security of your green private land. They are trained well, use exceptional materials and deliver exactly what they promised in due time.
      </p>

      <h2 style={{ fontSize: "1.5rem", color: "#02703d", marginBottom: "10px" }}>
        Maintenance of woodwork is vital
      </h2>

      <p style={{ fontSize: "1rem", lineHeight: "1.6", marginBottom: "40px" }}>
        Wood is beautiful and although we use properly elaborated materials, it still needs good treatment. We are experts in woodwork but we also promise to maintain all wood constructions over time. Our maintenance service will ensure that wood won’t rot over the years, stains will be removed, the construction will be checked for stability and the material will rejuvenate. We are the ideal contractors to do the perfect woodwork for your garden, install the construction and maintain it. That’s the perfect way to complete landscaping!
      </p>
    </div>
  );
};

export default WoodWork;
