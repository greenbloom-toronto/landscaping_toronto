import React from "react";
import stone_work2 from '../../../../resources/images/stone_work2.jpg'
import stone_work3 from '../../../../resources/images/stone_work3.jpg'
import stone_work4 from '../../../../resources/images/stone_work4.jpg'

export const StoneWork: React.FC = () => {
  return (
    <div style={{ maxWidth: "1100px", margin: "0 auto", color: "#000", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ fontSize: "2.5rem", marginBottom: "20px", color: "#02703d", borderBottom: "2px solid #02703d", paddingBottom: "10px" }}>Stone Work</h1>

      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", alignItems: "center", marginBottom: "30px" }}>
        <div style={{ flex: 1 }}>
          <h2 style={{ fontSize: "1.75rem", color: "#02703d", marginBottom: "10px" }}>Stone Work Toronto</h2>
          <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
            We promise the best stonework Toronto services because we have the skills, the right personnel and the most durable but also beautiful supplies in Ontario. Our job starts with the architectural design of your garden and completes with the actual installation of the paths, steps and all garden constructions. The transformation of your garden will be immediate and in total compliance with your needs and personal taste. Let our specialized professionals at Greenbloom Landscaping Toronto discuss your requests today and let’s begin stone work in your garden at your convenience!
          </p>
        </div>
        <img
          src={stone_work2}
          alt="Stonework in progress"
          style={{ flex: "0 0 300px", width: "50%", borderRadius: "12px", objectFit: "cover" }}
        />
      </div>

      <h2 style={{ fontSize: "1.5rem", color: "#02703d", marginBottom: "16px" }}>Excellent stonework by committed staff</h2>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", alignItems: "center", marginBottom: "30px" }}>
        <img
          src={stone_work3}
          alt="Stonework team at work"
          style={{ flex: "0 0 300px", width: "50%", borderRadius: "12px", objectFit: "cover" }}
        />
        <p style={{ flex: 1, fontSize: "1rem", lineHeight: "1.6" }}>
          Being in this business for long and having the right specialists for Stonework we promise you that we know our stones. We do pick them for their high quality and our professionals can combine ideas, different stones and shades to create a beautiful garden with paths made by interlocking paving or the stone of your choice. We can certainly inform you about the properties of stones as well as the services we provide. Installation is done with extreme caution and after taking into consideration the climate of your location in Toronto in order to ensure that Stonework will be done properly.
        </p>
      </div>

      <h2 style={{ fontSize: "1.5rem", color: "#02703d", marginBottom: "16px" }}>Beautiful stonework walkways</h2>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", alignItems: "center", marginBottom: "40px" }}>
        <img
          src={stone_work4}
          alt="Stonework walkway"
          style={{ flex: "0 0 300px", width: "50%", borderRadius: "12px", objectFit: "cover" }}
        />
        <p style={{ flex: 1, fontSize: "1rem", lineHeight: "1.6" }}>
          We will create the most beautiful <strong style={{ color: "#02703d" }}>flagstone path</strong>, which will lead you to the other corner of your garden. You won’t have to step on your lawn and the fabulous stone will make your property looking more elegant and neat. The excellence of the materials and the perfection of our work will both be evident and ensure your paths and stonework walkways will last for long. We trust the best stone manufacturers and have the pleasure to employ the most intelligent and competent professionals for the capture of the architectural idea and its implementation. Let our stonework contractors in Toronto create a small kingdom in your back and front yard with smart constructions, which will not only facilitate your everyday life but also improve the looks of your property.
        </p>
      </div>
    </div>
  );
};

export default StoneWork;