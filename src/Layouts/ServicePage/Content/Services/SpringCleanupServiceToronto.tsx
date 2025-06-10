import React from "react";
import spring_clean2 from '../../../../resources/images/spring_clean2.jpg'

export const SpringCleanupServiceToronto: React.FC = () => {
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
        Spring Cleanup Service Toronto
      </h1>

      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '32px'
      }}>
        <p style={{ fontSize: "1rem", lineHeight: "1.6", marginBottom: "30px" }}>
          Spring cleaning is a trend all over the western hemisphere. It happens every year as people get ready for the summer season. Perhaps your yards have become filled with debris from the previous fall and winter seasons. Your busy schedule makes proper cleanup nearly impossible. For these situations, and many more, our professional Spring Cleanup crew in Toronto will provide powerful cleaning solutions for your property.
        </p>

        <img
          src={spring_clean2}
          alt="Spring yard cleanup in Toronto"
          style={{
            width: "100%",
            maxWidth: "350px",
            borderRadius: "12px",
            marginBottom: "30px",
            objectFit: "cover",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          }}
        />
      </div>

      <p style={{ fontSize: "1rem", lineHeight: "1.6", marginBottom: "20px" }}>
        Did you know that in the event of you trying to sell your home or property, a clean, well arranged property increases the value by quite a bit? Well it’s true, and our spring cleanup crews can take care of everything, leaving you free to continue on with your life without any hassles or hard work.
      </p>

      <p style={{ fontSize: "1rem", lineHeight: "1.6", marginBottom: "20px" }}>
        When it comes to cleanup service our professionals will definitely make sure you get your money’s worth. Toronto Landscaping does not take shortcuts to get the job done faster; we just work harder at a faster pace. We can remove unwanted debris from your property, including old lawn furniture, wood, rocks, and everything in between to give your property a much more illustrious appeal.
      </p>

      <p style={{ fontSize: "1rem", lineHeight: "1.6", marginBottom: "20px" }}>
        Your neighbors will relish the sight of your new yard, and may feel compelled to have their property serviced as well. There’s nothing wrong with that. In fact, a healthy looking neighborhood can skyrocket the value of all homes in it, so don’t take it the wrong way if your neighbors decide to have their yards cleaned in the spring too.
      </p>

      <p style={{ fontSize: "1rem", lineHeight: "1.6", marginBottom: "40px" }}>
        When you choose Greenbloom Landscaping Toronto for all of your <span style={{ color: "#02703d", fontWeight: 500 }}>cleanup service</span> needs, you can take assurance in knowing that your property will be in the hands of experienced professionals whose only desire is to get your yard looking good so that you don’t have to. We’re friendly and professional, and you’ll get the best services around because you deserve only the very best; so why not treat yourself to it?
      </p>
    </div>
  );
};

export default SpringCleanupServiceToronto;
