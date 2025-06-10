import React from "react";

import mulch2 from '../../../../resources/images/mulch2.gif'
import mulch3 from '../../../../resources/images/mulch3.gif'
import mulch4 from '../../../../resources/images/mulch4.gif'
import mulch5 from '../../../../resources/images/mulch5.gif'
import mulch6 from '../../../../resources/images/mulch6.gif'


export const Mulch: React.FC = () => {
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
        Mulch
      </h1>

      <p style={{ fontSize: "1rem", lineHeight: "1.6", marginBottom: "20px" }}>
        Have you ever noticed how the tree leaves fall on the ground and create a thick layer over the soil? This is actually what we call natural mulch! It is the best way to protect the roots from the tree from new trees growing close by while still allow water and sunlight help them grow and thrive. Mulch also protects trees from weeds and makes the area more presentable.
      </p>

      <p style={{ fontSize: "1rem", lineHeight: "1.6", marginBottom: "30px" }}>
        Having expertise with landscaping services for years, we use the best organic mulch to protect your garden trees. This way, the roots of your trees will also be protected from temperatures and as the natural mulch will decompose, it will become a nutritious food for the soil. Greenbloom landscaping can really protect your trees with expert methods and the best quality mulches.
      </p>

      {/* Mulch Types */}
      <div style={{ display: "flex", flexDirection: "column", gap: "30px", marginBottom: "40px" }}>
        {/* Cedar mulch */}
        <div style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>
          <img
            src={mulch2}
            alt="Cedar mulch"
            style={{ width: "100%", maxWidth: "160px", borderRadius: "8px", objectFit: "cover" }}
          />
          <div>
            <h3 style={{ fontSize: "1rem", fontWeight: "bold", color: "#02703d", marginBottom: "5px" }}>Cedar mulch :</h3>
            <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
              Fresh ground white cedar bark with pieces of wood chip and strong nice cedar aroma. Golden brown color, helps keep the moisture on ground and provide relief with weed control.
              <br />
              <strong>165 $</strong> per cubic yard supply and install
            </p>
          </div>
        </div>

        {/* Red bark mulch */}
        <div style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>
          <img
            src={mulch3}
            alt="Red bark mulch"
            style={{ width: "100%", maxWidth: "160px", borderRadius: "8px", objectFit: "cover" }}
          />
          <div>
            <h3 style={{ fontSize: "1rem", fontWeight: "bold", color: "#02703d", marginBottom: "5px" }}>Red bark mulch:</h3>
            <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
              Finely ground hardwood bark, that had been color enhanced to provide the bright red color. Helps keep the moisture on ground and provide a relief with the weed control.
              <br />
              <strong>165 $</strong> per cubic yard supply and install
            </p>
          </div>
        </div>

        {/* Black bark mulch */}
        <div style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>
          <img
            src={mulch4}
            alt="Black bark mulch"
            style={{ width: "100%", maxWidth: "160px", borderRadius: "8px", objectFit: "cover" }}
          />
          <div>
            <h3 style={{ fontSize: "1rem", fontWeight: "bold", color: "#02703d", marginBottom: "5px" }}>Black bark mulch:</h3>
            <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
              Finely ground hardwood bark, that had been color enhanced to provide the dark black color. Helps keep the moisture on ground and provide a relief with the weed control.
              <br />
              <strong>165 $</strong> per cubic yard supply and install
            </p>
          </div>
        </div>

        {/* Shredded hemlock mulch */}
        <div style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>
          <img
            src={mulch5}
            alt="Shredded hemlock mulch"
            style={{ width: "100%", maxWidth: "160px", borderRadius: "8px", objectFit: "cover" }}
          />
          <div>
            <h3 style={{ fontSize: "1rem", fontWeight: "bold", color: "#02703d", marginBottom: "5px" }}>Shredded hemlock mulch:</h3>
            <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
              Fresh ground hemlock bark with pieces of wood chips. Composted for 1–2 years to give a rich, dark mahogany color. Takes longer to decompose. Helps keep moisture and reduce weeds.
              <br />
              <strong>165 $</strong> per cubic yard supply and install
            </p>
          </div>
        </div>

        {/* 2" Pine woodchip mulch */}
        <div style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>
          <img
            src={mulch6}
            alt="Pine woodchip mulch"
            style={{ width: "100%", maxWidth: "160px", borderRadius: "8px", objectFit: "cover" }}
          />
          <div>
            <h3 style={{ fontSize: "1rem", fontWeight: "bold", color: "#02703d", marginBottom: "5px" }}>2” pine woodchip mulch:</h3>
            <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
              Recycled from ground pallets and industrial packaging. Processed to uniform size. Ideal for garden beds and paths. Great for commercial use.
              <br />
              <strong>180 $</strong> per cubic yard supply and install
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mulch;
