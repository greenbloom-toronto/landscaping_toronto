import React from "react";
import landscaping2 from '../../../../resources/images/landscaping2.jpg'

export const Landscaping: React.FC = () => {
  return (
    <div style={{ maxWidth: "1100px", margin: "0 auto", color: "#000" }}>
      <h1 style={{ fontSize: "2.5rem", marginBottom: "20px", color: "#02703d", borderBottom: "2px solid #02703d", paddingBottom: "10px" }}>
        Landscaping
      </h1>

      <div style={{ display: "flex", gap: "30px", marginBottom: "30px", flexWrap: "wrap", alignItems: "center" }}>
        <img loading="lazy"
          src={landscaping2}
          alt="Clean landscaped yard"
          style={{ width: "100%", maxWidth: "450px", borderRadius: "12px", objectFit: "cover", boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)" }}
        />
        <p style={{ fontSize: "1rem", lineHeight: "1.6", flex: 1 }}>
          Who doesn’t want a nice looking garden free of rotten tree leaves, filthy corners and damaged flagstone paths? Greenbloom Landscaping Toronto can make it happen! We’re years in this business and take pride of the experience and fascinating ideas of our landscaping contractors! We have the technological means, expertise and profound knowledge to turn an eyesore garden into a small, spectacular looking paradise. With emphasis on your needs, space, preferences and demands we can transform the once abandoned yard into the most beautiful rose garden.
        </p>
      </div>

      <h2 style={{ fontSize: "1.5rem", color: "#02703d", marginBottom: "10px" }}>Full landscaping services</h2>
      <p style={{ fontSize: "1rem", lineHeight: "1.6", marginBottom: "16px" }}>
        We’re experienced Landscaping Toronto specialists and can actually offer you a choice among various services. We do provide lawn services and make sure it is mowed, maintained well and fertilized at the proper time and with the most appropriate soils. We clean up and take care of your trees and flowers, plant new ones and have the knowhow to create green labyrinths, do woodwork and design the architecture of your garden from scratch.
      </p>

      <p style={{ fontSize: "1rem", lineHeight: "1.6", marginBottom: "30px" }}>
        We build up interlocking pavers and flagstone paths, fences and natural stone patios just to create the ideal conditions for your family. Your garden will be perfectly clean and beautiful with blooming fragrant flowers and a healthy green environment, where you can enjoy some personal moments. We’re the best designers for every garden in Toronto and we can definitely provide you with the best garden supplies in Ontario.
      </p>

      <h2 style={{ fontSize: "1.5rem", color: "#02703d", marginBottom: "10px" }}>Experienced landscaping contractors</h2>
      <p style={{ fontSize: "1rem", lineHeight: "1.6", marginBottom: "16px" }}>
        All contractors at Greenbloom Landscaping Toronto are trained to offer exceptional services whether the customer is interested in woodwork, stonework, lawn services or overall property maintenance. We work all seasons, are fast when you need our assistance for snow removal and very punctual. We surely clean up well after the work is completed and building up on your own initial ideas we will deliver the most incredible garden you could ever imagine.
      </p>

      <p style={{ fontSize: "1rem", lineHeight: "1.6", marginBottom: "30px" }}>
        When we’ll finish with tree trimming, treating the garden beds, cutting the lawn and planting new green zones and flowers, you’ll be amazed by the difference. This will be a completely different garden and it will be yours. Our designers have fabulous ideas and our company is perfectly equipped with the newest technological means in order to serve you well and fast.
      </p>
    </div>
  );
};

export default Landscaping;