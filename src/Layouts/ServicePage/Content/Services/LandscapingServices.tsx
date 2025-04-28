import React from "react";
import landscaping_services2 from '../../../../resources/images/landscaping_services2.jpg'
import landscaping_services3 from '../../../../resources/images/landscaping_services3.jpg'

export const LandscapingServices: React.FC = () => {
  return (
    <div style={{ maxWidth: "1100px", margin: "0 auto", color: "#000" }}>
      <h1 style={{ fontSize: "2.5rem", marginBottom: "20px", color: "#02703d", borderBottom: "2px solid #02703d", paddingBottom: "10px" }}>
        Toronto Landscaping services
      </h1>

      <h2 style={{ fontSize: "1.5rem", color: "#02703d", marginBottom: "10px" }}>Toronto Landscaping services</h2>
      <p style={{ fontSize: "1rem", lineHeight: "1.6", marginBottom: "30px" }}>
        Investing in your yard is certainly a good way to increase the value of your house and create a fabulous environment right outside your window but it’s also the best way to tidy up your property and ensure a healthy place. We are experts in landscape design and based on your aesthetics and preferences, we can create a small paradise in your back and front yard. Greenbloom Landscaping has a reputation of taking extra good care of its customers. We work with really experienced professionals, who have brilliant ideas and modern means at their disposal to design a new world for you full of flowers, color and green zones.
      </p>

      <h2 style={{ fontSize: "1.5rem", color: "#02703d", marginBottom: "10px" }}>Don’t Trust Your Garden to Just Anybody</h2>
      <div style={{ display: "flex", gap: "30px", marginBottom: "30px", flexWrap: "wrap", alignItems: "center" }}>
        <img loading="lazy"
          src={landscaping_services2}
          alt="Trusted garden service"
          style={{ width: "100%", maxWidth: "400px", borderRadius: "12px", objectFit: "cover", boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)" }}
        />
        <ul style={{ fontSize: "1rem", lineHeight: "1.8", listStyle: "none", flex: 1, paddingLeft: "0" }}>
          <li>&#10003; We have an excellent reputation – Check us out on Homestars</li>
          <li>&#10003; We’re known for our attention to detail – See our before and after shots</li>
          <li>&#10003; Consistent and dedicated staff – our employees have been with us for years.</li>
          <li>&#10003; Punctual and accurate – we stand by our estimates and deliver on time and on budget.</li>
          <li>&#10003; We have everything you need to make your yard beautiful – we do design, stonework, decks, lawns, gardens and more.</li>
          <li>&#10003; We take an environmentally friendly approach to your garden – call us to find out how.</li>
        </ul>
      </div>

      <h2 style={{ fontSize: "1.5rem", color: "#02703d", marginBottom: "10px" }}>Green landscaping by great expert</h2>
      <div style={{ display: "flex", gap: "30px", marginBottom: "30px", flexWrap: "wrap", alignItems: "center" }}>
        <img loading="lazy"
          src={landscaping_services3}
          alt="Green landscaping consultants"
          style={{ width: "100%", maxWidth: "400px", borderRadius: "12px", objectFit: "cover", boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)" }}
        />
        <p style={{ fontSize: "1rem", lineHeight: "1.6", flex: 1 }}>
          Our landscaping Toronto experts are the best consultants and thanks to their great education and years of working in the field, they can help you decide how to dress your garden whether large or small. We specialize in stonework, woodwork, lawns and decks. We promise to make extraordinary 3D designs of how your new garden will look like, create a new green world for you and maintain it.
        </p>
      </div>

      <h2 style={{ fontSize: "1.5rem", color: "#02703d", marginBottom: "10px" }}>Commercial Landscaping</h2>
      <p style={{ fontSize: "1rem", lineHeight: "1.6", marginBottom: "30px" }}>
        Our landscape maintenance specialists will surprise you with their thorough services. It’s good to keep the best experts in landscaping close to you since we are all season specialists. Our Greenbloom Landscaping contractors will plant a colorful world in the spring, maintain it all through the summer and then again will help you with snow removal in the winter. We have excellent ideas, are technologically advanced and offer excellent landscaping services at the full convenience of the client. Let’s work together to make your home a greener place!
      </p>
    </div>
  );
};

export default LandscapingServices;
