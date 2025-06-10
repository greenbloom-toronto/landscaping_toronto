import React from "react";
import aggregates2 from '../../../../resources/images/aggregates2.jpg'
import aggregates3 from '../../../../resources/images/aggregates3.jpg'
import aggregates4 from '../../../../resources/images/aggregates4.jpg'
import aggregates5 from '../../../../resources/images/aggregates5.jpg'
import aggregates6 from '../../../../resources/images/aggregates6.jpg'
import aggregates7 from '../../../../resources/images/aggregates7.jpg'
import aggregates8 from '../../../../resources/images/aggregates8.jpg'

export const Aggregates: React.FC = () => {
  const aggregates = [
    {
      name: "River rocks",
      sizes: "Sizes: 3/4\" - 1 1/2\" - 3\" - 6\"",
      applications: [
        "Border around homes",
        "Decorative around and in flower beds",
        "Stone walkways side Border",
        "Ideal for shade areas",
        "Great for water features",
        "Ideal for rock gardens",
      ],
      image: aggregates2
    },
    {
      name: "Gravel clear",
      applications: ["Drainage areas", "Window wells"],
      image: aggregates3
    },
    {
      name: "Red gravel",
      applications: ["Decorative walkways", "Baseball dugouts", "Running tracks"],
      image: aggregates4
    },
    {
      name: "Lava stone",
      applications: ["Decorative walkways", "Baseball dugouts", "Running tracks"],
      image: aggregates5
    },
    {
      name: "Pea gravel",
      applications: [
        "Border around homes",
        "Decorative around and in flower beds",
        "Stone walkways side Border",
        "Ideal for shade areas",
        "Great for water features",
        "Ideal for rock gardens",
        "Used in play structures",
      ],
      image: aggregates6
    },
    {
      name: "Sand",
      applications: ["Sandboxes", "Volley ball courts", "Play structures"],
      image: aggregates7
    },
    {
      name: "White marble chip",
      applications: [
        "Border around homes",
        "Decorative around and in flower beds",
        "Stone walkways side Border",
        "Ideal for shade areas",
        "Great for water features",
        "Ideal for rock gardens",
        "Used in play structures",
      ],
      image: aggregates8
    },
  ];

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
        Aggregates
      </h1>

      {aggregates.map((item, idx) => (
        <div
          key={idx}
          style={{
            display: "flex",
            gap: "20px",
            alignItems: "flex-start",
            marginBottom: "40px",
            flexWrap: "wrap",
          }}
        >
          <img
            alt={item.name}
            style={{
              width: "100%",
              maxWidth: "260px",
              borderRadius: "8px",
              objectFit: "cover",
              boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
            }}
            src={item.image}
          />
          <div style={{ flex: 1 }}>
            <h3 style={{ fontSize: "1rem", fontWeight: "bold", color: "#02703d", marginBottom: "5px" }}>
              Type of Aggregates
            </h3>
            <p style={{ fontSize: "1rem", fontWeight: "bold", marginBottom: "5px" }}>{item.name}</p>
            {item.sizes && (
              <p style={{ fontSize: "1rem", marginBottom: "10px" }}>{item.sizes}</p>
            )}
            <h4 style={{ fontSize: "1rem", fontWeight: "bold", marginBottom: "5px" }}>Applications</h4>
            <ul style={{ paddingLeft: "20px", margin: 0 }}>
              {item.applications.map((app, i) => (
                <li key={i} style={{ fontSize: "1rem", lineHeight: "1.6", color: "#02703d", marginBottom: "4px" }}>
                  {app}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Aggregates;
