import React from "react";
import wood_stain2 from '../../../../resources/images/wood_stain2.jpg'

export const PowerWashWoodStain: React.FC = () => {
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
        Power wash & wood stain
      </h1>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '20px'
        }}
      >
        <p style={{ fontSize: "1rem", lineHeight: "1.6", marginBottom: "30px" }}>
          Creating an amazing landscape is not just about design and installation – it’s also about maintenance. An unfinished deck can take away from the aesthetics of your home, and dirty, aged wood without the proper cleaning and treatment can draw the eye away from the attractive landscape you spent so much time to build. That is why we at Greenbloom Landscaping offer maintenance services that are designed to bring life back into your woodwork. Just a few of our services include:
        </p>

        <img
          src={wood_stain2}
          alt="Power washing and wood staining"
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

      <h2 style={{ fontSize: "1.5rem", color: "#02703d", marginBottom: "10px" }}>Power Washing</h2>
      <p style={{ fontSize: "1rem", lineHeight: "1.6", marginBottom: "30px" }}>
        Power washing is designed to give your wood deck and home a deep clean. Using state-of-the-art power washing systems, Greenbloom Landscaping will get deep into the wood grains, removing the smallest dirt fibers to give the wood a clean look once again.
      </p>

      <h2 style={{ fontSize: "1.5rem", color: "#02703d", marginBottom: "10px" }}>Wood Staining</h2>
      <p style={{ fontSize: "1rem", lineHeight: "1.6", marginBottom: "30px" }}>
        After the power washing, we will apply our in-house wood stains – perfect for creating the bright wood finish that brings out the color of all of the landscape around it, and creates an inviting look to your deck.
      </p>

      <h2 style={{ fontSize: "1.5rem", color: "#02703d", marginBottom: "10px" }}>
        Landscaping Maintenance with Greenbloom
      </h2>
      <p style={{ fontSize: "1rem", lineHeight: "1.6", marginBottom: "40px" }}>
        Our power wash and wood stain plans are affordable, and can return the bright luster back to your woodwork. Call Greenbloom Landscaping today, and let us discuss your landscaping and maintenance needs.
      </p>
    </div>
  );
};

export default PowerWashWoodStain;
