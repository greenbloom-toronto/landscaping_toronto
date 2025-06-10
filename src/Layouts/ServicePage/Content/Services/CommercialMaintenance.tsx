import React from "react";
import commercial2 from '../../../../resources/images/commercial2.jpg'
export const CommercialMaintenance: React.FC = () => {
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
        Commercial Maintenance
      </h1>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '32px'
        }}
      >
        <p style={{ fontSize: "1rem", lineHeight: "1.6", marginBottom: "30px" }}>
          Properly maintained and treated commercial grounds keep people out in the open. With its experience, perfect team and tremendous capabilities, our Greenbloom Landscaping in Toronto is the company for your commercial needs. We have the tools, the training, the ideas and the expertise to manage the landscaping of huge commercial properties. Our company is organized and has the right staff for each one of your needs.
          <br />
          <br />
          We make excellent and detailed plans ahead in order to be sure the client’s needs will be covered to his satisfaction. We are excellent in designs, Commercial Landscaping Maintenance and all landscaping services. We invite the land to follow its natural trend and blossom along with your facility.
        </p>

        <img
          src={commercial2}
          alt="Commercial landscaping maintenance"
          style={{
            width: "100%",
            maxWidth: "400px",
            borderRadius: "12px",
            marginBottom: "30px",
            objectFit: "cover",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          }}
        />
      </div>

      <h2 style={{ fontSize: "1.5rem", color: "#02703d", marginBottom: "10px" }}>
        Our landscaping Toronto company at your service
      </h2>
      <p style={{ fontSize: "1rem", lineHeight: "1.6", marginBottom: "30px" }}>
        We are experienced contractors at our Toronto Landscaping company and have the right personnel to cover the needs of huge commercial properties. We listen to the needs of the customer and carry on our good communication throughout the whole process. We like to do everything perfect and that’s why we make analytic inspection of the landscape in order to see the weaknesses, the strengths and the potentials. After having studied well the landscape, we can make our own suggestions and create wonders. The good thing with Greenbloom Landscaping Toronto is that it offers great maintenance service. It’s important for you to have our team by your side when you are planning the new looks of your commercial property but it’s also crucial to have our support for its maintenance.
      </p>

      <h2 style={{ fontSize: "1.5rem", color: "#02703d", marginBottom: "10px" }}>
        We are commercial lawn maintenance experts
      </h2>
      <p style={{ fontSize: "1rem", lineHeight: "1.6", marginBottom: "40px" }}>
        We offer the best Commercial Landscaping Maintenance in Toronto. With the best team and equipment in Ontario, we only promise to maintain the marvelous appearance of all commercial landscapes. We take care of winter issues, prepare the property for the spring and make sure beds, pathways, lawn and flowers are all taken care of in order for them to keep their initial fresh looks. We excel in commercial lawn maintenance, have the capacity to maintain huge lands and guarantee work done in due time. We have taste, ideas and the capacity to offer the best commercial property maintenance.
      </p>
    </div>
  );
};

export default CommercialMaintenance;
