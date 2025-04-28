import React from "react";
import fertilizer from '../../../../resources/images/fertilizer2.jpg'

export const Fertilizer: React.FC = () => {
    return (
        <div style={{ maxWidth: "1100px", margin: "0 auto", color: "#000" }}>
            <h1 style={{ fontSize: "2.5rem", marginBottom: "20px", color: "#02703d", borderBottom: "2px solid #02703d", paddingBottom: "10px" }}>Fertilizer</h1>

            <p style={{ fontSize: "1rem", lineHeight: "1.6", marginBottom: "16px" }}>
                Fertilizer is a critical component to the overall health and beauty of a lawn; a critical component that is many times overlooked. People will generally be aware of the importance of fertilizer for garden plants and even their household plants; however, for some reason people just seem to let their lawns go.
            </p>

            <p style={{ fontSize: "1rem", lineHeight: "1.6", marginBottom: "16px" }}>
                This might be due to the fact that people think of their lawn as a carpet like body rather than as a collection of small grass plants that require light, water, air and nutrients just like any other plant. Without fertilizer, your lawn faces a daily struggle to maintain a healthy dark green color and growth. Fertilizer increases the growth, color, vigor and thickness of your lawn and is the mainstay of a rich, healthy dark lawn.
            </p>

            <p style={{ fontSize: "1rem", lineHeight: "1.6", marginBottom: "30px" }}>Plant fertilizer is a mixture of three primary elements: Nitrogen, Phosphate and Potash. Each of the elements serves a particular purpose in the healthy growth of your grass and your grass requires all three in the correct amount in order guarantee a beautiful lawn.</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "30px", alignItems: "center", margin: "30px 0" }}>
                <div style={{ flex: 1 }}>
                    <img loading="lazy"
                        src={fertilizer}
                        alt="Fertilizer benefits"
                        style={{ width: "100%", maxWidth: "500px", borderRadius: "12px", objectFit: "cover", boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)" }}
                    />
                </div>
                <div style={{ flex: 1 }}>
                    <h2 style={{ fontSize: "1.5rem", color: "#02703d", marginBottom: "10px" }}>Key Benefits</h2>
                    <ul style={{ fontSize: "1rem", lineHeight: "1.8", marginBottom: "0", paddingLeft: "20px", listStyle: "none" }}>
                        <li style={{ position: "relative", paddingLeft: "20px" }}>&#10003; Provides rich, dark green turf color</li>
                        <li style={{ position: "relative", paddingLeft: "20px" }}>&#10003; Keeps grass healthy</li>
                        <li style={{ position: "relative", paddingLeft: "20px" }}>&#10003; Keeps grass thick</li>
                        <li style={{ position: "relative", paddingLeft: "20px" }}>&#10003; Helps to fight against growth of weeds</li>
                    </ul>
                </div>
            </div>



            <h2 style={{ fontSize: "1.5rem", color: "#02703d", marginBottom: "20px" }}>Greenbloom Landscaping Fertilizer Treatment Programs</h2>

            <p style={{ fontSize: "1rem", lineHeight: "1.6", marginBottom: "20px" }}>
                Greenbloom Landscaping offers clients a choice of three different fertilizer treatment programs:
            </p>

            <div style={{ marginBottom: "30px" }}>
                <h3 style={{ fontSize: "1.25rem", color: "#02703d" }}>Organic Fertilizer – Single 1 Treatment Program</h3>
                <ul style={{ fontSize: "1rem", lineHeight: "1.8", paddingLeft: "20px", listStyle: "none" }}>
                    <li>&#10003; One treatment of organic fertilizer</li>
                    <li>&#10003; Recommended application in spring or fall</li>
                </ul>
            </div>

            <div style={{ marginBottom: "30px" }}>
                <h3 style={{ fontSize: "1.25rem", color: "#02703d" }}>Organic Fertilizer – Basic 3 Treatment Program</h3>
                <ul style={{ fontSize: "1rem", lineHeight: "1.8", paddingLeft: "20px", listStyle: "none" }}>
                    <li>&#10003; Spring treatment (corn gluten)</li>
                    <li>&#10003; Summer treatment (alfalfa)</li>
                    <li>&#10003; Fall treatment (alfalfa)</li>
                </ul>
                <p style={{ marginTop: "10px", fontSize: "0.95rem", lineHeight: "1.6" }}>
                    Research indicates that fertilization in the late fall, especially with nitrogen rich fertilizers, will result in lawns that are visibly greener in color throughout the summer of the following year without the excessive shoot growth typical of lawns fertilized in the spring.
                </p>
            </div>

            <div style={{ marginBottom: "40px" }}>
                <h3 style={{ fontSize: "1.25rem", color: "#02703d" }}>Organic Fertilizer – Deluxe 5 Treatment Program</h3>
                <ul style={{ fontSize: "1rem", lineHeight: "1.8", paddingLeft: "20px", listStyle: "none" }}>
                    <li>&#10003; Spring treatment (corn gluten)</li>
                    <li>&#10003; Early summer treatment</li>
                    <li>&#10003; Summer treatment (alfalfa)</li>
                    <li>&#10003; Late summer treatment</li>
                    <li>&#10003; Fall treatment (alfalfa)</li>
                </ul>
                <p style={{ marginTop: "10px", fontSize: "1rem", color: "#02703d", fontWeight: "bold" }}>
                    Contact us for a quick no obligation quote.
                </p>
            </div>
        </div>
    );
};

export default Fertilizer;