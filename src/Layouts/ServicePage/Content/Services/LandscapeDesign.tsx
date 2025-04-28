import React from "react";
import landscape_design2 from '../../../../resources/images/landscape_design1.png'
import landscape_design3 from '../../../../resources/images/landscape_design3.jpg'

export const LandscapeDesign: React.FC = () => {
  return (
    <div style={{ maxWidth: "1100px", margin: "0 auto", color: "#000", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ fontSize: "2.5rem", marginBottom: "20px", color: "#02703d", borderBottom: "2px solid #02703d", paddingBottom: "10px" }}>
        Landscape Design
      </h1>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "30px", alignItems: "center", marginBottom: "40px" }}>
        <div style={{ flex: 1 }}>
          <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
            What pops to mind when you dream of your private paradise? Do you dream of flower combinations at the two sides of your flagstone path leading to the entrance of your home? Do you see tall green trees, hear waters running in a fountain and your family enjoying breakfast in a gazebo? It can all come true with the assistance of our experts at Greenbloom Landscaping Toronto. We have the Midas touch! We can transform your neglected garden into a heaven on earth! Just tell us what you want and we can design it for you!
          </p>
        </div>
        <img
          src={landscape_design2}
          alt="Beautiful landscape design with trees and paths"
          style={{ width: "100%", maxWidth: "500px", borderRadius: "12px", objectFit: "cover", boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)" }}
        />
      </div>

      <h2 style={{ fontSize: "1.5rem", color: "#02703d", marginBottom: "15px" }}>
        Expert teams for landscaping design
      </h2>
      <p style={{ fontSize: "1rem", lineHeight: "1.6", marginBottom: "30px" }}>
        Designing how your garden will look like is our specialty! We do have excellent landscaping contractors specializing in the design of gardens! We take into consideration your needs, work with you and come up with amazing ideas, which will not only transform your garden but also make your life at home convenient and easy. We consider the weather conditions in Toronto, the preferences of the client, the size of the property and proceed with the creation of the perfect outdoor environment that will bear the signature of your own style.
      </p>

      <div style={{ display: "flex", flexWrap: "wrap-reverse", gap: "30px", alignItems: "center", marginBottom: "40px" }}>
        <img
          src={landscape_design3}
          alt="Landscape design planning on paper"
          style={{ width: "100%", maxWidth: "500px", borderRadius: "12px", objectFit: "cover", boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)" }}
        />
        <div style={{ flex: 1 }}>
          <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
            Our team of professionals uses advanced tools and collaborative planning methods to make your landscaping dream a reality. From 3D modeling to detailed sketches, you can see your garden come to life before the first flower is planted.
          </p>
        </div>
      </div>

      <h2 style={{ fontSize: "1.5rem", color: "#02703d", marginBottom: "15px" }}>
        The 3 basic steps of the design process
      </h2>

      <div style={{ marginBottom: "20px" }}>
        <h3 style={{ fontSize: "1.1rem", color: "#02703d" }}>&#10095; Visiting your home</h3>
        <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
          Taking into account the peculiarities of the property in Ontario is very important. Its size, current condition, natural flora and personal desires of the owner are extremely important. So, we visit your home to take measurements, check the present state of the garden, the position of the house and the views all around. It’s vital to know what we are dealing with in order to make the perfect design especially for you!
        </p>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <h3 style={{ fontSize: "1.1rem", color: "#02703d" }}>&#10095; Let’s design your garden</h3>
        <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
          Once we have the basic characteristics of your property, it’s time to discuss with you what you really want. We give you several options ourselves based on the size and specific features of your garden and we’ll certainly suggest solutions and ideas. Though, it’s significant to hear your own views and how you dream your garden!
        </p>
      </div>

      <div style={{ marginBottom: "40px" }}>
        <h3 style={{ fontSize: "1.1rem", color: "#02703d" }}>&#10095; We get to Work</h3>
        <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
          Having in hand all the information we need, we go ahead with the design of your garden. With excellent technological infrastructures our designers at Greenbloom Landscaping Toronto will make the best of your garden!
        </p>
      </div>
    </div>
  );
};

export default LandscapeDesign;
