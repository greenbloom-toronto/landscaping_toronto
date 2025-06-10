import React from "react";
import soil2 from '../../../../resources/images/soil2.jpg'
import soil3 from '../../../../resources/images/soil3.jpg'
import soil4 from '../../../../resources/images/soil4.jpg'
import soil5 from '../../../../resources/images/soil5.jpg'

export const Soil: React.FC = () => {
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
        Soil
      </h1>

      <p style={{ fontSize: "1rem", lineHeight: "1.6", marginBottom: "20px" }}>
        Have you ever thought of the importance of soil in gardening? Flowers need good conditions to grow and often the quality of soil is the major problem for most homeowners, who see their plants slowly die. Leave your garden to the landscaping Toronto experts! We know everything there is to know about soils and which one is proper for our specific landscape design.
      </p>

      <p style={{ fontSize: "1rem", lineHeight: "1.6", marginBottom: "30px" }}>
        The point is to use the best organic soil, which will allow sun and moisture penetration and thus flower thriving. Soils are identified by their particles and usually contain a large percentage of clay and sand. Depending on the percentage of these particles, the quality of soils will differ. Our company uses the best ones with minerals that will allow drainage and nutrients to support the life of the plants.
      </p>

      {/* Soil Types List */}
      <div style={{ display: "flex", flexDirection: "column", gap: "30px", marginBottom: "40px" }}>
        {/* Gro-max */}
        <div style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>
          <img
            alt="Gro-max soil"
            src={soil2}
            style={{ width: "100%", maxWidth: "160px", borderRadius: "8px", objectFit: "cover" }}
          />
          <div>
            <h3 style={{ fontSize: "1rem", fontWeight: "bold", color: "#02703d", marginBottom: "5px" }}>Gro-max</h3>
            <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
              Formulated for optimum root growth with a mix of compost, old bark, peat, sand and top soil. Balanced for pH. Water stocking capacity and air plow.
            </p>
          </div>
        </div>

        {/* Triple mix */}
        <div style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>
          <img
            src={soil3}
            alt="Triple mix soil"
            style={{ width: "100%", maxWidth: "160px", borderRadius: "8px", objectFit: "cover" }}
          />
          <div>
            <h3 style={{ fontSize: "1rem", fontWeight: "bold", color: "#02703d", marginBottom: "5px" }}>Triple mix</h3>
            <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
              Excellent blend of sandy loam, mushroom compost, peat and composted pine mulch. Medium density soil great for garden beds planting and topping. Rich dark beautiful mix.
            </p>
          </div>
        </div>

        {/* Top dressing */}
        <div style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>
          <img
            src={soil4}
            alt="Top dressing soil"
            style={{ width: "100%", maxWidth: "160px", borderRadius: "8px", objectFit: "cover" }}
          />
          <div>
            <h3 style={{ fontSize: "1rem", fontWeight: "bold", color: "#02703d", marginBottom: "5px" }}>Top dressing</h3>
            <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
              Fine rich blend of sandy loam, compost and old bark fines. Great for topdressing a lawn whenever seeding.
            </p>
          </div>
        </div>

        {/* Compost */}
        <div style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>
          <img
            src={soil5}
            alt="Compost soil"
            style={{ width: "100%", maxWidth: "160px", borderRadius: "8px", objectFit: "cover" }}
          />
          <div>
            <h3 style={{ fontSize: "1rem", fontWeight: "bold", color: "#02703d", marginBottom: "5px" }}>Compost</h3>
            <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
              Compost is derived from leaf, horse manure, sand and top soil. Great for soil amendments and top-up of garden beds.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Soil;
