import React from "react";
import garden_maintenance2 from '../../../../resources/images/garden_maintenance2.jpg'

export const GardenCleanupService: React.FC = () => {
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
        Garden Cleanup Service
      </h1>

      <p style={{ fontSize: "1rem", lineHeight: "1.6", marginBottom: "30px" }}>
        Our Garden Cleanup team in Toronto is your number one choice for a beautifully maintained and tended garden. We know how hard it is to find the time for such things, and that although you don’t have the time, you still want a beautiful garden. Who could blame you? Certainly not us, we understand completely. Just give us a call today and we’ll work out a schedule to maintain your garden. We can provide garden cleaning skills such as thorough weeding, laying down mulch, creating patterns that are easy on the eyes, and so much more.
      </p>

      <img
        src={garden_maintenance2}
        alt="Garden cleanup service in Toronto"
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
        Our professional Landscaping Toronto experts have years of experience in the landscaping industry. This has given them a keen eye for tending to gardens, as well as different arrangements to make them more appealing to everyone, especially you. You want your garden to stay fresh and beautiful, and we want to help you achieve that. No garden is too much work for our landscaping experts. You deserve a day off too, so why not kick back with a nice drink while we clean and tend to your garden?
      </p>

      <p style={{ fontSize: "1rem", lineHeight: "1.6", marginBottom: "20px" }}>
        There’s nothing like a gardener's touch along with some flare for design to really make any garden come alive in a way that may not have been thought possible. In addition to providing garden cleanup, we can lay down high grade mulch to maintain healthy plants as well as give your garden that “professional” look. What could be better than that?
      </p>

      <p style={{ fontSize: "1rem", lineHeight: "1.6", marginBottom: "40px" }}>
        Don’t put stress on your back from tedious gardening chores, just get in touch with us today and speak with one of our professional and friendly customer service representatives; they’ll get you setup with everything you need to know and we can begin turning your garden into a garden of sheer beauty and elegance. Toronto Landscaping cares about your needs, and we’ll work hard to give you a 5 star experience every time.
      </p>
    </div>
  );
};

export default GardenCleanupService;
