import React from "react";

import landscape_maintenance2 from '../../../../resources/images/landscape_maintenance2.jpg'
import landscape_maintenance3 from '../../../../resources/images/landscape_maintenance3.jpg'

export const LandscapeMaintenance: React.FC = () => {
  return (
    <div style={{ maxWidth: "1100px", margin: "0 auto", color: "#000" }}>
      <h1 style={{ fontSize: "2.5rem", marginBottom: "20px", color: "#02703d", borderBottom: "2px solid #02703d", paddingBottom: "10px" }}>Landscape Maintenance</h1>

      <div style={{ display: "flex", gap: "30px", marginBottom: "30px", flexWrap: "wrap", alignItems: "center" }}>
        <img loading="lazy"
          src={landscape_maintenance2}
          alt="Beautiful maintained yard"
          style={{ width: "100%", maxWidth: "400px", borderRadius: "12px", objectFit: "cover", boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)" }}
        />
        <p style={{ fontSize: "1rem", lineHeight: "1.6", flex: 1 }}>
          Let us keep your garden beautiful and neat for a lifetime! With Greenbloom Landscaping Toronto by your side, your property will be pleasing to the eye, healthy and clean. Our sophisticated means, the expertise of our professional teams and our dedication to your own needs do make the difference! Our maintenance service protects your environment and improves its image. We surely have the resources as well as expert personnel specializing in lawn maintenance, tree trimming, seeds, fertilizers, garden design and architecture, and wood and stone work. Your back yard will be an oasis in Toronto!
        </p>
      </div>

      <h2 style={{ fontSize: "1.5rem", color: "#02703d", marginBottom: "10px" }}>Landscape care with a number of services</h2>
      <p style={{ fontSize: "1rem", lineHeight: "1.6", marginBottom: "30px" }}>
        Our Landscape Maintenance in Toronto embraces the needs of all gardens, small yards, big estates and private settings. With years of experience and working with the proper equipment and products we can protect the soil, trees, lawn and every single flower or construction in your garden from fierce winters and warm summers. We will be there for cleanups picking up the dirt and fixing the damage after the strong winter winds and will be there for aeration, refreshing the soil, trimming the trees and taking care of the lawn.
      </p>

      <div style={{ display: "flex", gap: "30px", marginBottom: "40px", flexWrap: "wrap", alignItems: "center" }}>
        <img loading="lazy"
          src={landscape_maintenance3}
          alt="Toronto garden maintenance"
          style={{ width: "100%", maxWidth: "400px", borderRadius: "12px", objectFit: "cover", boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)" }}
        />
        <p style={{ fontSize: "1rem", lineHeight: "1.6", flex: 1 }}>
          We are specialists in garden maintenance and have the staff to support our work and cover all needs of our customers with care and knowledge. We know when it’s the perfect time to plant, weed and trim, how to remove the snow and clean well the paths, and the right procedures for lawn care. This way, your garden will stand out throughout the whole year! It will be healthy and a clear invitation to your family to spend time in its neat embrace. We offer top services because we are serious professionals with excellent imagination, the best resources in Ontario and terrific skills. Let our Toronto Landscape Maintenance open the doors for you to your residential heaven.
        </p>
      </div>
    </div>
  );
};

export default LandscapeMaintenance;