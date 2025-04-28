import React from "react";
import { Link } from "react-router-dom";
import fall from '../../../../resources/images/fall_cleanup2.jpg'
import spring from '../../../../resources/images/spring_cleanup1.jpg'

export const CleanUpServices: React.FC = () => {
  return (
    <div style={{ maxWidth: "1100px", margin: "0 auto", color: "#000" }}>
      <h1 style={{ fontSize: "2.5rem", marginBottom: "20px", color: "#02703d", borderBottom: "2px solid #02703d", paddingBottom: "10px" }}>Clean up Services</h1>

      <p style={{ fontSize: "1rem", lineHeight: "1.6", marginBottom: "20px" }}>
        Toronto is a beautiful city to live in, being a part of so many different wonderful communities. Our Landscaping Toronto teams have years of experience providing professional cleanup services. We offer a simple solution for those who don’t have enough time to maintain their yards, and we can help you do your part to cleanup Toronto.
      </p>

      <p style={{ fontSize: "1rem", lineHeight: "1.6", marginBottom: "20px" }}>
        Many yards make use of a garden, or several individual gardens as a way to show off beauty from plants, flowers, and even certain fruits and vegetables. Of course, maintaining any garden can be tough work and demand lots of time; time that you may not have. Our team of landscapers can help with professional garden cleanup services that will have your garden looking clean and well tended. We can pull weeds and other disruptive plants, as well as tend to the good plants that are intended to grow.
      </p>

      <h2 style={{ fontSize: "1.75rem", color: "#02703d", margin: "40px 0 10px" }}>Yard Clean up and Landscaping Pros</h2>

      <p style={{ fontSize: "1rem", lineHeight: "1.6", marginBottom: "20px" }}>
        Yard cleanup can be a time consuming hassle for most working people, although the desire to have a neat and clean looking yard never truly dies. Our Landscaping crew work very hard to provide you with professional yard cleanup including mowing, weeding, and many other services that are dependant on the season. For example, spring cleanup services will differ from other cleanups in different seasons. We offer the best Cleanup Services in Toronto.
      </p>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "30px", marginBottom: "40px" }}>
        <img loading="lazy"
          src={fall}
          alt="Fall cleanup"
          style={{ width: "calc(50% - 15px)", borderRadius: "16px", objectFit: "cover", boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)" }}
        />
        <img loading="lazy"
          src={spring}
          alt="Spring cleanup"
          style={{ width: "calc(50% - 15px)", borderRadius: "12px", objectFit: "cover" }}
        />
      </div>

      <h3 style={{ fontSize: "1.5rem", color: "#02703d", marginBottom: "10px" }}>Fall cleanup</h3>
      <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
        Our landscaping services are excellent and our contractors will focus on cleaning the dirty sites, the leaves falling from the trees, debris and dirt. We offer lawn maintenance service, trim the trees and wrap them to protect them from the wrath of winter, take care of the flowers and plants at the beds and definitely clean them well. We promise leaf blowing from stairways, pathways and the patio. We sweep all hard surfaces, prepare the entire garden for the winter cold and leave the yard and sidewalks perfectly clean!
        <br />
        <Link to="/services/clean-up-services/fall-clean-up" style={{ color: "#02703d", fontWeight: "bold", display: "inline-block", marginTop: "10px" }}>Read More</Link>
      </p>

      <h3 style={{ fontSize: "1.5rem", color: "#02703d", marginTop: "40px", marginBottom: "10px" }}>Spring cleanup</h3>
      <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
        We clean the mess left from the melting snow and prepare your garden for spring and summer time. This is the time when you want to enjoy your beautiful flowers the most and Greenbloom Landscaping makes sure you do in a nice and clean environment. We clean the leaves, dirt and sticks that have landed to your yard and have fallen from the trees during the fierce winds of winter. We cultivate flowers in beds, take care of the trees with trimming and fertilizing, collect debris that would prevent the growth of grass, mow the lawn, blow off the dirt gathered in pathways and stairways and make sure your whole garden looks and smells like spring time.
        <br />
        <Link to="/services/clean-up-services/spring-clean-up" style={{ color: "#02703d", fontWeight: "bold", display: "inline-block", marginTop: "10px" }}>Read More</Link>
      </p>

      <div style={{ marginTop: "40px", fontSize: "1.25rem", fontWeight: "bold", color: "#02703d" }}>
        Keep your Garden Healthy and Beautiful All Year Long with our Preventative Spring and Fall Clean Up
      </div>

      <div style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#02703d", marginTop: "10px" }}>
  <a href="tel:6475005263" style={{ color: "#02703d", textDecoration: "none" }}>
    Call 647-500-5263 to get a free quote on your lawn maintenance needs.
  </a>
</div>
    </div>
  );
};

export default CleanUpServices;
