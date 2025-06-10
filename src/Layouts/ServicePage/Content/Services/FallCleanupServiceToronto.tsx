import React from "react";
import fall_cleanup2 from '../../../../resources/images/fall_cleanup2.jpg'
export const FallCleanupServiceToronto: React.FC = () => {
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
        Fall Cleanup Service Toronto
      </h1>

      <div style={{ display: "flex", gap: "20px", marginBottom: "30px", flexWrap: "wrap", alignItems: "flex-start" }}>
        <img
          src={fall_cleanup2}
          alt="Fall cleanup service in Toronto"
          style={{
            width: "100%",
            maxWidth: "300px",
            borderRadius: "12px",
            objectFit: "cover",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          }}
        />
        <p style={{ fontSize: "1rem", lineHeight: "1.6", flex: 1 }}>
          We provide the best Fall Cleanup service in Toronto for our customers. New customers are always welcomed here.
          We provide professional cleanup services for those who want only the best. We aren’t just your average landscaping company either. We work hard for our customers and give them the best services that money can buy because we know you want only the best for your property.
        </p>
      </div>

      <h2 style={{ fontSize: "1.5rem", color: "#02703d", marginBottom: "10px" }}>
        We offer high end service for the high end home
      </h2>

      <p style={{ fontSize: "1rem", lineHeight: "1.6", marginBottom: "20px" }}>
        The season of fall is likely, yet arguably, the most beautiful season of the year. Tree leaves, plants, and other fauna begin to change colors ranging from bright yellow, red, orange, and brown. It’s a dazzling display of color, but falling leaves can collect on your lawn, resulting in a very unkempt look. Of course, you want your lawn to look its best, so call on us to provide professional leaf pickup.
      </p>

      <p style={{ fontSize: "1rem", lineHeight: "1.6", marginBottom: "20px" }}>
        Leaf cleaning is the best way to get your lawn under control in the fall season. When our professionals provide you with leaf cleanup services, they’ll make sure to get every single leaf, leaving nothing behind but a clean yard for you and yours to enjoy. Upon request, we can leave your leave in a single pile anywhere on your property, in case the children want to play. Just be advised that wind can easily blow those leaves everywhere; it’s just a matter of time.
      </p>

      <p style={{ fontSize: "1rem", lineHeight: "1.6", marginBottom: "20px" }}>
        Landscaping Toronto can help you maintain the cleanliness of your property in any season of the year. Having a clean, healthy looking lawn can not only make you feel better about it, it can also heighten the value of your home and property. For this reason, it’s always a good idea to call upon our services when you are trying to sell your home.
      </p>

      <p style={{ fontSize: "1rem", lineHeight: "1.6", marginBottom: "40px" }}>
        Contact us here at Greenbloom Landscaping whenever you need the very best in landscaping and cleanup services in the autumn season. Choose the best and receive the best service.
      </p>
    </div>
  );
};

export default FallCleanupServiceToronto;
