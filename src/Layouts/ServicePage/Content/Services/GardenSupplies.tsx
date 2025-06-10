import React from "react";
import garden_supplies2 from '../../../../resources/images/garden_supplies2.jpeg'
export const GardenSupplies: React.FC = () => {
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
        Garden Supplies
      </h1>

      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '32px'
      }}>
        <p style={{ fontSize: "1rem", lineHeight: "1.6", marginBottom: "30px" }}>
          The right choice of garden supplies makes a difference to the outcome of landscaping. Although landscaping maintenance depends greatly on services, the quality of the materials used is also of the utmost importance. The stones at the pathway will last longer and the good choice of fertilizing soils will play a major role to the growth of plants and the health of your trees. These are just a few reasons why Greenbloom Landscaping Toronto uses only the best garden supplies. From tools to soils and aggregates we make sure the job is done with the right supplies.
        </p>

        <img
          alt="Top garden supplies"
          src={garden_supplies2}
          style={{
            width: "100%",
            maxWidth: "500px",
            borderRadius: "12px",
            marginBottom: "30px",
            objectFit: "cover",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          }}
        />
      </div>


      <h2 style={{ fontSize: "1.5rem", color: "#02703d", marginBottom: "10px" }}>
        The best supplies for your garden
      </h2>
      <p style={{ fontSize: "1rem", lineHeight: "1.6", marginBottom: "30px" }}>
        Our expert landscaping Toronto work is surely supported by the right means. We need the right equipment in order to do the job right. Every single landscaping service requires specific tools but the most important thing is that the job is completed properly and lasts longer when the right materials are used. Rest assured that our landscaping contractors come equipped with the right garden supplies. We give attention to the quality of the soil for different applications and depending on the quality of the soil at your property. We use the best quality natural stones and pavers are of the highest quality stones and bricks.
      </p>

      <h2 style={{ fontSize: "1.5rem", color: "#02703d", marginBottom: "10px" }}>
        Expert landscaping with top supplies
      </h2>
      <p style={{ fontSize: "1rem", lineHeight: "1.6", marginBottom: "40px" }}>
        Since our landscaping services include woodwork, stonework and landscaping, we make sure that each work is done with the use of proper materials. This is very important when it comes to landscaping since the right soil will give life to your garden. Some flowers will bloom in different corners of Ontario and the right selection of mulch will ensure the soil has the proper portion of moisture and is free from weed problems. Plants and trees will grow and flourish when the soil has the right nutrition, air, moisture and sun in Toronto.
        <br />
        <br />
        We use the right garden supplies but we also know how to use them. All contractors at our Greenbloom Landscaping in Toronto know that the garden beds might need different soil from a distant, dark corner where a tree is growing. We take all things into consideration and by using the best supplies we guarantee flourishing gardens.
      </p>
    </div>
  );
};

export default GardenSupplies;
