import React from "react";
import rock_garden2 from '../../../../resources/images/rock_garden2.jpg'
import rock_garden3 from '../../../../resources/images/rock_garden3.jpg'

export const RockGarden: React.FC = () => {
  return (
    <div style={{ maxWidth: "1100px", margin: "0 auto", color: "#000" }}>
      <h1 style={{ fontSize: "2.5rem", marginBottom: "20px", color: "#02703d", borderBottom: "2px solid #02703d", paddingBottom: "10px" }}>
        Rock garden
      </h1>

      <p style={{ fontSize: "1rem", lineHeight: "1.6", marginBottom: "30px" }}>
        If you’re looking to add a picturesque and satisfying feature to your garden, why not consider a rock garden?
      </p>

      <div style={{ display: "flex", gap: "30px", marginBottom: "30px", flexWrap: "wrap", alignItems: "flex-start" }}>
        <img loading="lazy"
          src={rock_garden2}
          alt="Front yard rock garden"
          style={{ width: "100%", maxWidth: "450px", borderRadius: "12px", objectFit: "cover", boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)" }}
        />
        <div style={{ flex: 1 }}>
          <h2 style={{ fontSize: "1.5rem", color: "#02703d", marginBottom: "10px" }}>Why Choose a Rock Garden</h2>
          <p style={{ fontSize: "1rem", lineHeight: "1.6", marginBottom: "16px" }}>
            It goes without saying, but a rock garden can give your garden the ‘Wow Factor’. If you have a slope in your garden, you’ll probably find there’s not all that much you can do with it. A rock garden gives you the opportunity to spruce up that slope and give it a new lease of life.
          </p>
          <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
            The same is true for those murky corners where the sunlight can’t reach and the grass, flowers, and shrubbery struggle to grow. Alternatively, a rock garden provides an easy-to-maintain option for those that don’t want to spend their weekends mowing, planting, and generally gardening.
          </p>
        </div>
      </div>

      <p style={{ fontSize: "1rem", lineHeight: "1.6", marginBottom: "30px" }}>
        At the very least, a rock garden will give your garden a pleasing makeover, making for an enjoyable focal point.
      </p>

      <div style={{ display: "flex", gap: "30px", marginBottom: "40px", flexWrap: "wrap", alignItems: "flex-start" }}>
        <img loading="lazy"
          src={rock_garden3}
          alt="Backyard rock garden design"
          style={{ width: "100%", maxWidth: "450px", borderRadius: "12px", objectFit: "cover", boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)" }}
        />
        <div style={{ flex: 1 }}>
          <h2 style={{ fontSize: "1.5rem", color: "#02703d", marginBottom: "10px" }}>Rock Garden Design Features</h2>
          <p style={{ fontSize: "1rem", lineHeight: "1.6", marginBottom: "16px" }}>
            As well as utilizing any number of different rocks and stones to create an impressive effect, rock gardens can also make use of a number of different features. Some people choose to use plants and other greenery to complement the rocks themselves, while others add gentle water features. Garden ornaments and lights are other popular choices.
          </p>

          <h2 style={{ fontSize: "1.5rem", color: "#02703d", marginBottom: "10px" }}>Get the Expert Touch</h2>
          <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
            Greenbloom Landscape can help you design, install, and maintain your new rock garden.
          </p>
          <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
            Our experts will examine your garden and the conditions that impact it, and offer advice as to what works best and what to avoid. From there, all that’s left is to enjoy your perfect garden feature.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RockGarden;
