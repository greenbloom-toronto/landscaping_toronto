import React from "react";

import garden_urns2 from '../../../../resources/images/garden_urns2.jpeg'

export const SeasonalGardenUrnsAndPlanters: React.FC = () => {
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
        Seasonal Garden Urns and Planters
      </h1>

      <p style={{ fontSize: "1rem", lineHeight: "1.6", marginBottom: "30px" }}>
        Garden urns look good all year around! During Christmas, they look even better! With our help, you can witness the fast transformation of your garden without bother with remodeling or spending much. There are urns to fit all tastes and our professionals at Greenbloom Landscaping Toronto can offer their assistance. Whether you need urns for isolation purposes or to enhance the Christmas spirit during the holidays, our team can offer the best solutions in Ontario and make the best creations inspired by your needs and depending on your budget.
      </p>

      <img
        src={garden_urns2}
        alt="Seasonal garden urns"
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
        Seasonal urn displays to match your aesthetics
      </h2>

      <p style={{ fontSize: "1rem", lineHeight: "1.6", marginBottom: "20px" }}>
        If you always dreamed of unique seasonal urns but don’t know which ones will fit best in your property, let us assist you. We can help you make the right choice among urns and find the plants to pot up. Our professionals try to offer solutions, which will match your current landscape, the architectural style of your property and personal taste. From choosing the plants that will last for the whole season, add color to your home and reveal your personal aesthetics to offering ideas among urns in terms of colors, size and design, our team comes up with the perfect solutions for each property. The seasonal urn displays offered by our company will bring out the best of your home.
      </p>

      <h2 style={{ fontSize: "1.5rem", color: "#02703d", marginBottom: "10px" }}>
        Let us create seasonal urns for you
      </h2>

      <p style={{ fontSize: "1rem", lineHeight: "1.6", marginBottom: "40px" }}>
        With the right outdoor urn designs, your house will be instantly refreshed. You can place them along the pathways, in front of the garage, at the front door, right outside your windows or along the fence. They can give you some privacy, isolate some street noise, transform your garden, make your house colorful and make an original Christmas decoration. With the right planters for the front door and some Christmas lights, you’ll make your home more inviting. Whether you want urns to act as barriers with the next door house, give a nice touch of glamour to your home or complement your holiday decorations, our company can help you make your dream come true. We offer the best seasonal urns and solutions for each property in Toronto.
      </p>
    </div>
  );
};

export default SeasonalGardenUrnsAndPlanters;
