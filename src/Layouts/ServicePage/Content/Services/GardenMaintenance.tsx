import React from "react";
import garden_maintenance from '../../../../resources/images/garden_maintenance2.jpg'

export const GardenMaintenance: React.FC = () => {
  return (
    <div style={{ maxWidth: "1100px", margin: "0 auto", color: "#000" }}>
      <h1 style={{ fontSize: "2.5rem", marginBottom: "20px", color: "#02703d", borderBottom: "2px solid #02703d", paddingBottom: "10px" }}>
        Garden Maintenance
      </h1>

      <div style={{ display: "flex", gap: "30px", flexWrap: "wrap", alignItems: "center", marginBottom: "30px" }}>
        <div style={{ flex: 1 }}>
          <p style={{ fontSize: "1rem", lineHeight: "1.6", marginBottom: "16px" }}>
            Needless to say that maintenance is a necessary procedure for keeping things longer and improving their condition. It usually has a preventive character and involves actions, which can correct and take care of things so that they will work better. So, why shouldn’t you invest in garden maintenance! Nature certainly needs a helping hand so that weeds and the wrath of the winter won’t interfere with your efforts to keep a beautiful and blooming backyard. Let us assist you! Landscaping Toronto offers great maintenance services. With our long experience in landscaping, we can assure you that we know what each garden needs and are ready to provide it.
          </p>
        </div>

        <img loading="lazy"
          src={garden_maintenance}
          alt="Garden maintenance service"
          style={{ width: "100%", maxWidth: "450px", borderRadius: "12px", objectFit: "cover", boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)" }}
        />
      </div>

      <h2 style={{ fontSize: "1.5rem", color: "#02703d", marginBottom: "10px" }}>We provide excellent garden services in Toronto</h2>
      <p style={{ fontSize: "1rem", lineHeight: "1.6", marginBottom: "30px" }}>
        We have a committed team at our company and can take care of any garden in Toronto. Our gardening services can be performed several times over the year and clients can also enjoy our great seasonal maintenance packages. Every season leaves behind a mess and each season trees, flowers and lawn need special treatment. There is the perfect timing for lawn fertilization, seeding and aeration. We take care of the plants during the summer, remove tree sticks and debris when the harsh Ontario winter is finally over and provide full garden clean up.
      </p>

      <h2 style={{ fontSize: "1.5rem", color: "#02703d", marginBottom: "10px" }}>Call us for garden care every season</h2>
      <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
        Our Garden Maintenance in Toronto is extremely helpful and also necessary during the winter. When the freezing weather threatens to damage your garden plants or snow keeps you from crossing the pathway, our company is at your service. Our winter garden services are extraordinary and fast and we also have the best team for snow removal. It’s important to trust our company for your Toronto Garden Maintenance needs every season. We don’t only have the knowledge to take care of the green of your house or commercial property but we can also protect it from natural elements. We are all trained and experienced professionals and know how to offer excellent garden care maintenance.
      </p>
    </div>
  );
};

export default GardenMaintenance;
