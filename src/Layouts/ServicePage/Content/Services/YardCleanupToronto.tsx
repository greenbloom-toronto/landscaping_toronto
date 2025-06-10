import React from "react";
import landscaping2 from '../../../../resources/images/landscaping2.jpg'

export const YardCleanupToronto: React.FC = () => {
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
        Yard Cleanup Toronto
      </h1>

      <p style={{ fontSize: "1rem", lineHeight: "1.6", marginBottom: "30px" }}>
        You’re here because you want your property to look its very best and you know that only experienced professionals can provide that level of service. You’ve come to the right place, because our professionals are the ideal candidates for your yard cleanup needs. We provide these services year round, as we know the importance of a healthy yard and how it promotes a healthy growth of grass, plants, flowers, and trees. Landscaping Toronto can service all yards on your property, including the front and back.
      </p>

      <img
        src={landscaping2}
        alt="Yard cleanup in Toronto"
        style={{
          width: "100%",
          maxWidth: "500px",
          borderRadius: "12px",
          marginBottom: "30px",
          objectFit: "cover",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        }}
      />

      <p style={{ fontSize: "1rem", lineHeight: "1.6", marginBottom: "20px" }}>
        One of our professional yard cleanup crews can come to your property upon request. From there, you can discuss any last minute changes or requests, as the plan will have already been discussed at that point. They’ll work hard from start to finish; effectively hauling away any requested debris, old lawn furniture, rocks, and everything in between. This includes back yard cleanup, as well as front yard cleanup. This will continue until the job is done, and your yard will look cleaner than ever before. Remember, a clean yard is a happy yard, and a happy yard promotes stronger growth and healthy soil.
      </p>

      <p style={{ fontSize: "1rem", lineHeight: "1.6", marginBottom: "20px" }}>
        Our professional crews can also provide effective driveway cleanup upon request. Having a nice and clean yard won’t mean much if your driveway is a mess, after all. Toronto Landscaping can provide debris removal including rocks and gravel, as well as any other cleanup service required, such as oil spills or other general debris. A healthy looking driveway as well as a healthy looking yard both go a long way towards both the physical attractiveness of your property; as well as help to increase its value.
      </p>

      <p style={{ fontSize: "1rem", lineHeight: "1.6", marginBottom: "40px" }}>
        Having a clean yard, driveway, and exterior of your property doesn’t have to be hard at all. We can do all the hard work so that you can reap the benefits. Just get in touch with us today for Yard Cleanup in Toronto that really makes a difference.
      </p>
    </div>
  );
};

export default YardCleanupToronto;
