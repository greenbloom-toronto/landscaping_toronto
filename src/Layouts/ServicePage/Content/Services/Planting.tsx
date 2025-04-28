import React from "react";
import planting2 from '../../../../resources/images/planting2.jpg'

export const Planting: React.FC = () => {
    return (
        <div style={{ maxWidth: "1100px", margin: "0 auto", color: "#000" }}>
            <h1 style={{ fontSize: "2.5rem", marginBottom: "20px", color: "#02703d", borderBottom: "2px solid #02703d", paddingBottom: "10px" }}>Planting</h1>

            <div style={{ display: "flex", gap: "30px", flexWrap: "wrap", alignItems: "flex-start", marginBottom: "30px" }}>
                <img loading="lazy"
                    src={planting2}
                    alt="Pathway with planted greenery"
                    style={{ width: "100%", maxWidth: "400px", borderRadius: "12px", objectFit: "cover", boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)" }}
                />
                <p style={{ fontSize: "1rem", lineHeight: "1.6", flex: 1 }}>
                    In some cases, landscaping is a job that is completed all at once. Greenbloom Landscaping comes in, creates the perfect design for your property according to your specifications, and you receive the landscape you have always wanted.
                    <br /><br />
                    But landscaping can also be about growth. Some property owners enjoy the idea of creating a landscape that will flourish and change over time – one that will become more interesting with each passing day, and allow them to have even more to look forward to as time passes. When that’s your dream, you can reach it with our planting services.
                </p>
            </div>

            <h2 style={{ fontSize: "1.5rem", color: "#02703d", marginBottom: "10px" }}>Planting Trees and Flowers Around Your Yard</h2>
            <p style={{ fontSize: "1rem", lineHeight: "1.6", marginBottom: "16px" }}>
                Our experts are more than happy to decorate your property with plants that are going to continue to grow over time. From new trees to flowers to vines to bushes, we can plant anything in and around your home or office that will grow over time, providing you with both a wonderful landscape now and an even more pleasing landscape later.
            </p>
            <p style={{ fontSize: "1rem", lineHeight: "1.6", marginBottom: "30px" }}>
                Landscaping is all about crafting the perfect outdoors for your home. For some, that means placing in flowers and trees that are fully formed to help create color and life. For others, it involves placing young plants around your home and watching as they grow into fully formed flora.
            </p>

            <h2 style={{ fontSize: "1.5rem", color: "#02703d", marginBottom: "10px" }}>Achieving Your Dream Landscape With Greenbloom</h2>
            <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
                Let Greenwood Landscaping be your partner for all your landscape and planting needs. We can supply you with one time planting services or add planting to any of our complete landscaping projects. Whatever you need, Greenbloom has the tools and experience to get the job done right. Call us today to find out more.
            </p>
        </div>
    );
};

export default Planting;
