import React from "react";
import lawn_maintenance from '../../../../resources/images/lawn_maintenance2.jpeg'

export const LawnMaintenance: React.FC = () => {
  return (
    <div style={{ maxWidth: "1100px", margin: "0 auto", color: "#000" }}>
      <h1 style={{ fontSize: "2.5rem", marginBottom: "20px", color: "#02703d" }}>Lawn Maintenance</h1>

      <h2 style={{ fontSize: "1.75rem", color: "#02703d", marginBottom: "10px" }}>
        Choose a Lawn Maintenance Program that’s Right for You
      </h2>
      <p style={{ fontSize: "1rem", lineHeight: "1.6", marginBottom: "20px" }}>
        Your garden will look beautiful every single day with our lawn maintenance services. Why get your fingers dirty? Why wonder which soil to get and what time you will mow the lawn? Greenbloom Landscaping is the expert contractor you need for all these services. You can call us occasionally for lawn mowing and enjoy a great looking and clean garden at all times. Our services are of the highest quality, based on your needs and take place at your convenience. Our contractors are at your service for lawn trimming, cutting and fertilization and our methods are great and modern.
      </p>

      <div style={{ display: "flex", gap: "30px", alignItems: "flex-start", margin: "40px 0", flexWrap: "wrap" }}>
        <div style={{ flex: 1 }}>
          <h2 style={{ fontSize: "1.5rem", color: "#02703d", marginBottom: "10px" }}>
            Landscaping maintenance at the convenience of the client
          </h2>
          <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
            Why should you invest in a lawn mow machine and not invest in Greenbloom Landscaping? We provide so much more and you won’t have to lift a finger. Our people are experts in lawn fertilization and know how to take care of your lawn, keep it green and fascinatingly beautiful. We surely can make a difference in your garden because we make a difference with our lawn services! Surely, each garden is unique! Our contractors always take into consideration the special needs of our clients and very seriously their requests! In any case, we promise excellent lawn care services and gardens that will take your breath away!
          </p>
        </div>

        <img loading="lazy"
          src={lawn_maintenance}
          alt="Lawn maintenance service"
          style={{ width: "100%", maxWidth: "400px", borderRadius: "12px", objectFit: "cover" }}
        />
      </div>

      <div style={{ marginTop: "20px" }}>
        <h2 style={{ fontSize: "1.5rem", color: "#02703d", marginBottom: "10px" }}>
          Great lawn service by caring professionals
        </h2>
        <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
          We offer great lawn maintenance service and have the equipment and knowledge to support our work and meet your demands efficaciously. We are experts in lawn cutting but we will also make sure your lawn is growing well, the pathways are clean, the plants are trimmed and the flowers are catered for. We make sure tree debris and leaves are removed and your lawn is not only freshly cut but also clean. You can be sure that our people do a clean job and will never leave your garden and walkaways dirty! We promise excellent lawn services.
        </p>
      </div>
    </div>
  );
};

export default LawnMaintenance;
