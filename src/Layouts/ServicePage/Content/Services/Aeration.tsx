import React from "react";
import img from  '../../../../resources/images/aeration2.png'

export const Aeration: React.FC = () => {
  return (
    <div style={{ maxWidth: "1100px", margin: "0 auto", color: "#000" }}>
      <h1 style={{ fontSize: "2.5rem", marginBottom: "20px", color: "#02703d", borderBottom: "2px solid #02703d", paddingBottom: "10px" }}>Aeration</h1>

      <h2 style={{ fontSize: "1.75rem", color: "#02703d", marginBottom: "10px" }}>Why do lawns require aeration?</h2>
      <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
        There are a number of reasons why lawns require aeration. It comes as a surprise to most that plant and grass roots require not just water and nutrients but air as well. The snows and frost of winter compact soil which prevents grass roots from getting all of the air and nutrients that they require. In addition, the density of the soil makes it difficult for the roots to grow properly.
      </p>

      <div style={{ display: "flex", gap: "30px", margin: "30px 0", flexWrap: "wrap", alignItems: "center" }}>
        <img loading="lazy"
          src={img}
          alt="Lawn aeration diagram"
          style={{ maxWidth: "400px", width: "100%", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)", objectFit: "cover" }}
        />
        <p style={{ fontSize: "1rem", lineHeight: "1.6", flex: 1 }}>
          The process of lawn aeration, also known as core aeration, entails the removal of multiple plugs of soil from the yard which loosens the soil and allows air, water and nutrients to be accessed by the grass roots more easily. In addition, the loosened soil will help the grass roots to grow more easily making for stronger deeper roots. All of this will makes for a greener and more luxurious lawn.
        </p>
      </div>

      <h2 style={{ fontSize: "1.75rem", color: "#02703d", marginTop: "40px", marginBottom: "10px" }}>How often should lawns be aerated?</h2>
      <p style={{ fontSize: "1rem", lineHeight: "1.6", marginBottom: "16px" }}>
        Lawns should be aerated twice a year, once in the spring and once in the fall, in order to ensure that the lawn reaches its maximum potential. While it is possible for one to aerate their lawn themselves, a landscaping specialist will do a far more thorough job at a very reasonable price.
      </p>
      <p style={{ fontSize: "1rem", lineHeight: "1.6", marginBottom: "16px" }}>
        It is our goal at Greenbloom Landscaping to provide our clients with work of the highest quality with the greatest efficiency. Our lawn aeration professionals have a great deal of experience and will thoroughly aerate your lawn ensuring for a healthy, green lawn making for a more beautiful yard.
      </p>
      <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
        You deserve better than a dull and dreary lawn. Give Greenbloom Landscaping a call and let us help you develop that beautiful, lush lawn that you always dreamed of.
      </p>
    </div>
  );
};

export default Aeration;