import React from "react";
import patio_design2 from '../../../../resources/images/patio_design2.jpg'

export const PatioDesign: React.FC = () => {
  return (
    <div style={{ maxWidth: "1100px", margin: "0 auto", color: "#000" }}>
      <h1
        style={{
          fontSize: "2.5rem",
          marginBottom: "20px",
          color: "#02703d",
          borderBottom: "2px solid #02703d",
          paddingBottom: "10px"
        }}
      >
        Patio Design
      </h1>

      <p style={{ fontSize: "1rem", lineHeight: "1.6", marginBottom: "20px" }}>
        A well-designed patio can add both character and value to your property. For those
        well-settled, a patio makes for a comfortable and enjoyable place to enjoy the summer
        sun. For those looking at moving on, a picturesque patio can be the feature that turns a
        potential buyer into an actual buyer.
      </p>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "20px",
          alignItems: "center",
          marginBottom: "30px",
          flexWrap: "wrap"
        }}
      >
        <img
          src={patio_design2}
          alt="Patio setup process"
          style={{ width: "100%", maxWidth: "400px", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)" }}
        />
        <div style={{ flex: 1 }}>
          <h2 style={{ fontSize: "1.5rem", color: "#02703d", marginBottom: "10px" }}>
            Designing the Right Patio
          </h2>
          <p style={{ fontSize: "1rem", lineHeight: "1.6", marginBottom: "16px" }}>
            It might sound simple but designing a patio that suits your garden or yard can be a
            tough task. From the very start of the design process there’s plenty to take into
            consideration, including how big the patio should be, what materials should be used,
            and what shape would best suit your garden.
          </p>
          <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
            If you have a relatively small garden there is little point constructing a large patio.
            Conversely, if you have a large garden, a small patio may look swamped. It’s vital to
            get the right size then. Likewise, choosing materials. Flagstone is a popular choice
            for patios but some people prefer the simplicity of colored concrete. Others prefer to
            use a variety of different stones to add uniqueness to the design. And shape is where
            it gets really difficult.
          </p>
        </div>
      </div>

      <h2 style={{ fontSize: "1.5rem", color: "#02703d", marginBottom: "10px" }}>
        Incorporating Other Features
      </h2>
      <p style={{ fontSize: "1rem", lineHeight: "1.6", marginBottom: "20px" }}>
        Many would-be patio designers try to be a little too ambitious with their plans. Some try
        to incorporate a host of different features into their patio, including built-in steps,
        decking, water features, and pergolas. While any of these will potentially work with your
        patio, it’s worth considering that less is sometimes more. You want the patio itself to
        stand out after all.
      </p>
      <p style={{ fontSize: "1rem", lineHeight: "1.6", marginBottom: "40px" }}>
        If you’re considering constructing a patio in your backyard or garden, contact Greenbloom
        Landscaping. Our experts will help guide you through the various intricacies involved with
        the initial design process as well as provide a professional and affordable service should
        you wish for us to build the patio itself.
      </p>
    </div>
  );
};

export default PatioDesign;