import React from "react";
import interlocking_pavers2 from '../../../../resources/images/interlocking_pavers2.jpg'
import interlocking_pavers3 from '../../../../resources/images/interlocking_pavers3.jpg'

const InterlockingPavers: React.FC = () => {
  return (
    <div style={{ maxWidth: "1100px", margin: "0 auto", color: "#000" }}>
      <h1 style={{ fontSize: "2.5rem", marginBottom: "20px", color: "#02703d", borderBottom: "2px solid #02703d", paddingBottom: "10px" }}>
        Interlocking pavers
      </h1>

      <h2 style={{ fontSize: "2rem", color: "#4b9147", marginBottom: "10px" }}>
        A great choice of landscaping for driveways, walkways, and other surfaces.
      </h2>

      <div style={{ display: "flex", gap: "20px", marginBottom: "40px" }}>
        <img
          src={interlocking_pavers2}
          alt="Interlocking paver patio"
          style={{ width: "40%", borderRadius: "12px", objectFit: "cover", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
        />
        <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
          Take a step on the new paver of your garden! Walk into the house without stepping on your flowers and create a protected zone to put a table and enjoy the sunny days of Toronto. The expert landscape design specialists of our company can give you excellent ideas of how to lay down pavers at your home. We can share some of our secrets and experience and help you decide on the length, style and kind of pavers.
        </p>
      </div>

      <h2 style={{ fontSize: "1.75rem", color: "#4b9147", marginBottom: "16px" }}>
        Make the best of your garden with fabulous walkways
      </h2>
      <p style={{ fontSize: "1rem", lineHeight: "1.6", marginBottom: "30px" }}>
        It’s all about comfort but aesthetics will also play a great role! After all, we install pavers to last for a lifetime! Our installers are experienced and promise great work! We work fast, yet our job is professional and of the highest quality. We can create driveways, patios and walkways. We use pavers of the best quality and thanks to their strength, you can be sure of their longevity and durability. They also come in a variety of colors and so you don’t have to worry about the cosmetic part of paver installation.
      </p>

      <div style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>
        <img
          src={interlocking_pavers3}
          alt="Paver installation"
          style={{ width: "40%", borderRadius: "12px", objectFit: "cover", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
        />
        <div>
          <h3 style={{ fontSize: "1.25rem", color: "#02703d", marginBottom: "10px" }}>Trust our landscaping services today</h3>
          <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
            The benefits of paver installation are plenty. Pavers are highly resistant to all weather conditions, they are installed in such a way that the stones won’t move with the soil. They are certainly easy to install and easy to repair should they be damaged. Greenbloom landscaping promises excellent materials and surely exceptional services. The benefits of trusting our landscaping services are related with our professionalism, our dedication and expertise, and our experience. We promise to complete the job properly within the pre-arranged time frame and although we offer repair services, you will hardly have any problems because we can install pavers to last!
          </p>
        </div>
      </div>
    </div>
  );
};

export default InterlockingPavers;
