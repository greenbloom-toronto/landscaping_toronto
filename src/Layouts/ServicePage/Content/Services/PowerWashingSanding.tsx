import React from "react";
import power_washing_sanding2 from '../../../../resources/images/power_washing_sanding2.jpg'

const PowerWashingSanding: React.FC = () => {
    return (
        <div style={{ maxWidth: "1100px", margin: "0 auto", fontFamily: "Arial, sans-serif", color: "#000" }}>
            <h1 style={{ fontSize: "2.5rem", marginBottom: "20px", color: "#02703d", borderBottom: "2px solid #02703d", paddingBottom: "10px" }}>Power Washing & Sanding</h1>

            <p style={{ fontSize: "1rem", lineHeight: "1.6", marginBottom: "20px" }}>
                At Greenbloom Landscaping, we understand the importance of maintenance. You’ve already created a landscape design you love, and when it becomes victim to the elements, it becomes important to give it a thoroughly cleaning that can help restore it to the wonderful look you grew to love. At Greenbloom, we offer numerous maintenance options, and some of the most popular include power washing and polymeric sanding.
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", alignItems: "center", marginBottom: "30px" }}>
                <div style={{ flex: 1 }}>
                    <h2 style={{ fontSize: "1.5rem", color: "#02703d", marginBottom: "10px" }}>Power Washing</h2>
                    <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
                        Power washing is one of the best ways to get dirt and grime out of your hard surfaces. As dirt starts to build up, they can stain your hard surfaces and cause them to lose their natural color. Power washing is the safest and best way to clear up those hard surfaces and restore them to their natural beauty. With high powered pressure washing, the color comes right back and your landscape looks as it did when it was first designed – sometimes even better.
                    </p>
                </div>
                <img
                    loading="lazy"
                    src={power_washing_sanding2}
                    alt="Power washing service"
                    style={{ width: "100%", maxWidth: "450px", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
                />
            </div>

            <h2 style={{ fontSize: "1.5rem", color: "#02703d", marginBottom: "10px" }}>Polymeric Sanding</h2>
            <p style={{ fontSize: "1rem", lineHeight: "1.6", marginBottom: "10px" }}>
                Polymeric sand is a type of mixture that can be placed in your landscape and help improve the long term look and feel of your property. Some of its benefits include:
            </p>
            <ul style={{ paddingLeft: "20px", lineHeight: "1.8", fontSize: "1rem", marginBottom: "20px" }}>
                <li>✓ Reducing weed growth in and around your landscape</li>
                <li>✓ Preventing the infestation of bugs</li>
                <li>✓ Stopping the degeneration of sand</li>
            </ul>

            <p style={{ fontSize: "1rem", lineHeight: "1.6", marginBottom: "30px" }}>
                Polymeric sanding is best completed by experts, and depending on your landscape architecture, it is a great way to allow your landscape design to shine for a long period of time.
            </p>

            <h2 style={{ fontSize: "1.5rem", color: "#02703d", marginBottom: "10px" }}>Call Greenbloom for Your Maintenance Needs</h2>
            <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
                Greenbloom Landscaping has been an expert in landscape maintenance for years. Our power washing and polymeric sanding services are second to none, and we would be happy to take your call and schedule an appointment today.
            </p>
        </div>
    );
};

export default PowerWashingSanding;