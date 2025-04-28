import React from "react";
import landscaping_contractor2 from '../../../../resources/images/landscaping_contractor2.jpg'
import landscaping_contractor3 from '../../../../resources/images/landscaping_contractor3.jpg'
import landscaping_contractor4 from '../../../../resources/images/landscaping_contractor4.jpg'

export const LandscapingContractor: React.FC = () => {
  return (
    <div style={{ maxWidth: "1100px", margin: "0 auto", color: "#000", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ fontSize: "2.5rem", marginBottom: "20px", color: "#02703d", borderBottom: "2px solid #02703d", paddingBottom: "10px" }}>Landscaping Contractor Toronto</h1>

      <p style={{ fontSize: "1rem", lineHeight: "1.6", marginBottom: "30px" }}>
        Homes and businesses in Toronto are constantly on the lookout for Toronto landscape contractors they can trust to provide more than a few planted flowers and bushes. Landscape designs should be well thought out and display something special for the customer. At Greenbloom Landscaping Toronto we provide a unique approach to every project we accept. Our team has come up with some standard designs that appeal too many people, but we are prepared to mix it up and come up with something that exceeds individual expectations.
      </p>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "30px", marginBottom: "30px", alignItems: 'center' }}>
        <div style={{ flex: 1 }}>
          <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
            Landscape contractors Toronto is some of the best to be found in the industry and our landscape company stands above the rest. Our company has risen to the top because we show our customers we really care about their landscaping desires. Our specialists take their trade very seriously and we want to do our very best to provide results that really touch our customers. If our customers give us a free reign to come up with something unique we are not afraid to go for it. Our skills have been developed over many, many projects and we know how to use them.
          </p>
        </div>
        <img
          src={landscaping_contractor2}
          alt="Garden design in progress"
          style={{ width: "100%", maxWidth: "450px", borderRadius: "12px", objectFit: "cover", boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)" }}
        />
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "30px", marginBottom: "30px", alignItems: "center" }}>
        <img
          src={landscaping_contractor4}
          alt="Contractors preparing garden layout"
          style={{ width: "100%", maxWidth: "450px", borderRadius: "12px", objectFit: "cover", boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)" }}
        />
        <div style={{ flex: 1 }}>
          <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
            Every landscaping contractor Toronto has their own way of approaching a project. We start by inspecting the project location and then putting together some ideas for our customers to see. Additionally, we ask our customers exactly what they are looking for and we combine that with some unique features that turn the landscaping dream into a reality. By creating innovative uses with a wide range of landscape material we really enhance the possibilities.
          </p>
        </div>
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "30px", alignItems: "center" }}>
        <div style={{ flex: 1 }}>
          <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
            Our Greenbloom Landscaping Toronto team is totally committed to using all the options at our disposal to come up with a design that will boost the curb appeal of any home or business. We can provide low maintenance landscape that will allow our customers more time to simply set back and enjoy the serenity of the area. Get in touch with our experts for memorable landscaping service that makes a difference.
          </p>
        </div>
        <img
          src={landscaping_contractor3}
          alt="Finished and trimmed backyard"
          style={{ width: "100%", maxWidth: "450px", borderRadius: "12px", objectFit: "cover", boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)" }}
        />
      </div>
    </div>
  );
};

export default LandscapingContractor;