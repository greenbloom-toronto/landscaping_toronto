import React from "react";
import armour_stone2 from '../../../../resources/images/armour_stone2.jpg'
import armour_stone3 from '../../../../resources/images/armour_stone3.jpg'

export const ArmourStone: React.FC = () => {
    return (
        <div style={{ maxWidth: "1100px", margin: "0 auto", color: "#000", fontFamily: "Arial, sans-serif" }}>
            <h1 style={{ fontSize: "2.5rem", color: "#02703d", borderBottom: "2px solid #02703d", paddingBottom: "10px", marginBottom: "20px" }}>
                Armour Stone Landscaping
            </h1>

            <p style={{ fontSize: "1rem", lineHeight: "1.6", marginBottom: "20px" }}>
                Armour stones are large, solid decorative materials that can be installed into the landscape of your property.
                These stones are cut into solid, jagged shapes with their own natural beauty that complements the surrounding greenery.
                Armour stone landscaping installs these stones as walls, walkways, and more, to give your property its own unique appearance that is sure to draw the attention of others.
            </p>

            <div style={{ display: "flex", gap: "20px", marginBottom: "30px" }}>
                <img
                    src={armour_stone3}
                    alt="Armour stone wall"
                    style={{ width: "40%", borderRadius: "12px", objectFit: "cover", boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)" }}
                />

                <div style={{ width: '60%'}}>
                    <h2 style={{ fontSize: "1.5rem", color: "#02703d", marginBottom: "10px" }}>Benefits of Armour Stone Landscaping</h2>
                    <ul style={{ listStyle: "none", paddingLeft: 0, fontSize: "1rem", lineHeight: "1.8" }}>
                        <li>
                            <strong>&#10003; Low Maintenance –</strong> Both the strength of armour stones and the ability to withstand the elements,
                            armour stones require very little maintenance. The wear and tear of weather may actually improve their appearance.
                        </li>
                        <li>
                            <strong>&#10003; Solid Construction –</strong> These stones fit together easily to help build walls, walkways, or fountains
                            and create a light appearance that can handle a great deal of force.
                        </li>
                        <li>
                            <strong>&#10003; Unique Look –</strong> Each stone has its own shape and tone, adding interest and visual appeal.
                            No two stones are alike, providing the perfect natural complement to your landscape.
                        </li>
                    </ul>
                </div>
            </div>

            <p style={{ fontSize: "1rem", lineHeight: "1.6", marginBottom: "30px" }}>
                Greenbloom Landscaping can also install these armour stones in a manner that makes them functional as well,
                turning them into makeshift benches or seating areas depending on your needs.
                These stones have a variety of functions and can be placed anywhere on your property to improve its natural appearance.
            </p>

            <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                <img
                    src={armour_stone2}
                    alt="Armour stone design"
                    style={{ width: "40%", borderRadius: "12px", objectFit: "cover", boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)" }}
                />

                <div>
                    <h2 style={{ fontSize: "1.5rem", color: "#02703d", marginBottom: "10px" }}>
                        Armour Stone Landscaping with Greenbloom
                    </h2>
                    <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
                        Greenbloom has been one of the leading experts in armour stone landscaping for many years.
                        Call us today to learn more about armour stone landscaping, and find out how we can use these stones to give you
                        the landscape design you've always wanted.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ArmourStone;