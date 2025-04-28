import React from "react";
import garden_beds3 from '../../../../resources/images/garden_beds3.jpg'
import garden_beds4 from '../../../../resources/images/garden_beds4.jpg'

export const GardenBeds: React.FC = () => {
    return (
        <div style={{ maxWidth: "1100px", margin: "0 auto", color: "#000" }}>
            <h1
                style={{
                    fontSize: "2.5rem",
                    marginBottom: "20px",
                    color: "#02703d",
                    borderBottom: "2px solid #02703d",
                    paddingBottom: "10px"
                }}
            >
                Garden beds
            </h1>

            <p style={{ fontSize: "1rem", lineHeight: "1.6", flex: 1, marginBottom: '24px' }}>
                One of the most important parts of landscaping is the installation of garden beds into your property. Garden beds are a place for you to add color and give yourself an activity that you can do to bring life from your yard. There are two main types of garden beds available. These include:
            </p>

            <div style={{ display: "flex", gap: "30px", marginBottom: "30px", flexWrap: "wrap", alignItems: "flex-start" }}>
                <img loading="lazy"
                    src={garden_beds3}
                    alt="In-ground garden beds"
                    style={{ width: "100%", maxWidth: "400px", borderRadius: "12px", objectFit: "cover" }}
                />
                <div style={{ flex: 1, fontSize: "1rem", lineHeight: "1.6" }}>
                    <p><strong>&#10095; In-Ground Garden Beds –</strong> These garden beds are placed within the ground, using the existing soil around your property to provide it with nutrients. They are inexpensive to build and are great for homeowners that prefer less upkeep.</p>
                    <p><strong>&#10095; Raised Garden Beds –</strong> These garden beds are great for those that want to add soil and improve the appearance of their lawn. Built slightly above ground, these types of garden beds are aesthetically pleasing and provide a small wall of protection for the plants within. Both in-ground garden beds and raised garden beds can complement your décor, and depending on your needs, Greenbloom Landscaping can customize these beds to meet the needs of your property.</p>
                </div>
            </div>

            <div style={{ display: "flex", gap: "30px", marginBottom: "30px", flexWrap: "wrap", alignItems: "flex-start" }}>
                <img loading="lazy"
                    src={garden_beds4}
                    alt="Garden beds installation"
                    style={{ width: "100%", maxWidth: "400px", borderRadius: "12px", objectFit: "cover" }}
                />
                <div style={{ flex: 1 }}>
                    <h2 style={{ fontSize: "1.25rem", marginBottom: "10px", color: "#02703d" }}>Garden Beds Installation</h2>
                    <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
                        For many, the landscaping is not complete until you have had an opportunity to turn the lawn into something for you to cherish for a long period of time. Garden bed installation is a large part of that, as it allows you to be actively engaged in the upkeep of your landscape after its completion.
                    </p>
                </div>
            </div>

            <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
                If you are interested in the idea of adding a garden bed to your property, or you are considering a complete overhaul of your landscape and want to make garden beds a part of that, call Greenbloom Landscaping today.
            </p>
        </div>
    );
};

export default GardenBeds;
