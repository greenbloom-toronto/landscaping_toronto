import React from "react";
import plant_consultation2 from '../../../../resources/images/plant_consultation2.jpg'
import plant_consultation3 from '../../../../resources/images/plant_consultation3.jpg'
import plant_consultation4 from '../../../../resources/images/plant_consultation4.jpg'

export const PlantConsultation: React.FC = () => {
    return (
        <div style={{ maxWidth: "1100px", margin: "0 auto", color: "#000", fontFamily: "Arial, sans-serif" }}>
            <h1 style={{ fontSize: "2.5rem", marginBottom: "20px", color: "#02703d", borderBottom: "2px solid #02703d", paddingBottom: "10px" }}>
                Plant consultation
            </h1>

            <h2 style={{ fontSize: "1.75rem", color: "#02703d", marginBottom: "10px" }}>
                A Beautiful Garden Takes an Expert Touch
            </h2>
            <p style={{ fontWeight: "bold", fontSize: "1.05rem", marginBottom: "10px" }}>
                Call us today for a FREE Consultation: <a href="tel:6475005263" style={{ color: "#02703d", textDecoration: "none" }}>(647) 500-5263</a>
            </p>
            <p style={{ fontSize: "1rem", lineHeight: "1.6", marginBottom: "30px" }}>
                At Greenbloom Landscaping, our goal is to take your vision of the perfect yard and transform that vision into a reality. This process begins with one-on-one consultation with our resident designer, Gabriel Verkade. Gabriel is an extremely talented and fully certified Landscape Designer with an innate talent for delivering modern and inspired gardens.
            </p>

            <h2 style={{ fontSize: "1.5rem", color: "#02703d", marginBottom: "15px" }}>Why Choose Us?</h2>
            <ul style={{ fontSize: "1rem", lineHeight: "1.8", marginBottom: "30px", paddingLeft: "20px", listStyle: "none" }}>
                <li>&#10095; Certified Landscape Designer delivering modern and inspiring gardens.</li>
                <li>&#10095; Full design and build capability in house.</li>
                <li>&#10095; Personal project manager assigned to your project.</li>
                <li>&#10095; We stand by our estimates – your project will be done on time and on budget.</li>
            </ul>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "30px", alignItems: "center", marginBottom: "40px" }}>
                <img
                    src={plant_consultation2}
                    alt="Green backyard design"
                    style={{ width: "100%", maxWidth: "500px", borderRadius: "12px", objectFit: "cover", boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)" }}
                />
                <div style={{ flex: 1 }}>
                    <h2 style={{ fontSize: "1.5rem", color: "#02703d", marginBottom: "15px" }}>Our Process</h2>
                    <h3 style={{ fontSize: "1.1rem", color: "#02703d" }}>&#10095; Analysis Of The Site</h3>
                    <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
                        The first step in designing your perfect yard is an analysis of the yard itself. An inventory is taken of all existing features that will have an impact on the design of the yard including, the client’s home, adjacent properties, existing flora and measurements of the site itself.
                    </p>
                    <h3 style={{ fontSize: "1.1rem", color: "#02703d" }}>&#10095; Concept Development</h3>
                    <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
                        Gabriel will sit with you and together develop a concept that incorporates your vision, the site’s unique features, and your budget. Concept sketches help bring the project to life.
                    </p>
                    <h3 style={{ fontSize: "1.1rem", color: "#02703d" }}>&#10095; Yard Plan</h3>
                    <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
                        The final step is a detailed, scaled yard plan rendered in color that includes your vision and Gabriel’s personal touches.
                    </p>
                </div>
            </div>

            <div style={{ display: "flex", flexWrap: "wrap-reverse", gap: "30px", alignItems: "center", marginBottom: "40px" }}>
                <div style={{ flex: 1 }}>
                    <h2 style={{ fontSize: "1.5rem", color: "#02703d", marginBottom: "15px" }}>Our designer</h2>
                    <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
                        Gabriel Verkade is a certified Landscape Designer delivering modern and inspiring gardens with three unifying areas of focus:
                        <br />– your signature style,
                        <br />– outdoor living, and
                        <br />– sustainability through eco-conscious design.
                        <br />Gabriel enhances the lifestyle of his clients by creating spaces that are a unique reflection of the owner while helping facilitate reconnection with friends, family and, most of all, with nature.
                    </p>
                    <a href="#" style={{ color: "#02703d", fontWeight: "bold", marginTop: "10px", display: "inline-block" }}>
                        Check out some recent designs!
                    </a>
                </div>
                <img
                    src={plant_consultation3}
                    alt="Gabriel Verkade - Landscape Designer"
                    style={{ width: "100%", maxWidth: "300px", borderRadius: "12px", objectFit: "cover", boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)" }}
                />
            </div>

            <div style={{ padding: '20px', background: '#fff', borderRadius: '20px'}}>
                <img
                    src={plant_consultation4}
                    alt="Verkade Landscape Design Logo"
                    style={{ display: "block", margin: "0 auto", maxWidth: "200px" }}
                />
            </div>
        </div>
    );
};

export default PlantConsultation;