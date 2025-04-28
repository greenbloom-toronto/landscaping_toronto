import React from "react";

import sod2 from '../../../../resources/images/sod2.jpg'
import sod3 from '../../../../resources/images/sod3.jpg'

export const Sod: React.FC = () => {
  return (
    <div style={{ maxWidth: "1100px", margin: "0 auto", color: "#000" }}>
      <h1 style={{ fontSize: "2.5rem", marginBottom: "20px", color: "#02703d", borderBottom: "2px solid #02703d", paddingBottom: "10px" }}>Sod</h1>

      <div style={{ display: "flex", gap: "30px", marginBottom: "30px", flexWrap: "wrap", alignItems: "center" }}>
        <img
          src={sod2}
          alt="Sod installed in front yard"
          style={{ width: "100%", maxWidth: "300px", borderRadius: "12px", objectFit: "cover", boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)" }}
        />
        <p style={{ fontSize: "1rem", lineHeight: "1.6", flex: 1 }}>
          Laying sod appears a rather simple prospect; however, the truth is that it requires a significant amount of labor and soil preparation. If the proper steps are not taken when laying sod in your yard, the new sod can easily wither and die. If you are considering laying sod in your yard then call the professionals at Greenbloom Landscaping. Our experienced landscaping professionals have the knowledge and skill to ensure that your sod is properly laid for a healthy lawn with beauty and longevity.
        </p>
      </div>

      <h2 style={{ fontSize: "1.5rem", color: "#02703d", marginBottom: "10px" }}>Laying Sod</h2>
      <p style={{ fontSize: "1rem", lineHeight: "1.6", marginBottom: "16px" }}>
        Greenbloom Landscaping will begin the process of laying sod in your yard by removing any old grass, smoothing and grading the soil of your yard and finally fertilize and water the soil to help ensure that the sod catches and flourishes.
      </p>
      <p style={{ fontSize: "1rem", lineHeight: "1.6", marginBottom: "30px" }}>
        Not all yard conditions are the same and different types of sod are designed that are better adapted to different conditions. We will assess the soil of your yard, the level of drainage of your yard and the level of light that your yard enjoys in order to help recommend the best type of sod to lay in your yard. All of the sod used by Greenbloom Landscaping is sourced from only the best sod farms making for the healthiest and hardiest lawn possible.
      </p>

      <img
        src={sod3}
        alt="Maintaining green sod garden"
        style={{ width: "100%", maxWidth: "300px", borderRadius: "12px", objectFit: "cover", boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)", marginBottom: "30px" }}
      />

      <h2 style={{ fontSize: "1.5rem", color: "#02703d", marginBottom: "10px" }}>Sod Maintenance</h2>
      <p style={{ fontSize: "1rem", lineHeight: "1.6", marginBottom: "30px" }}>
        Now that you have gone through all of the trouble and expense of having sod laid in your yard, it is important to maintain it so that it catches properly. Whether you are just looking for maintenance until the sod catches or a long term maintenance solution, Greenbloom Landscaping has a maintenance solution perfectly suited to fit your needs.
      </p>

      <h2 style={{ fontSize: "1.5rem", color: "#02703d", marginBottom: "10px" }}>Seed vs. Sod</h2>
      <p style={{ fontSize: "1rem", lineHeight: "1.6", marginBottom: "16px" }}>
        If you take a handful of seed and place it next to a block of sod then the main difference between seed and sod becomes readily apparent. Sod is actually grass and seed is...well, seed. If you lay sod on a patch of dirt, the sod laid patch will look like lawn. You won’t be able to walk on it for a while but it will have the aesthetic look of lawn. If you sow seed on a patch of dirt, the seed sowed dirt will still look like dirt until the seeds have germinated and filled out a bit.
      </p>
      <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
        There are two basic advantages of seed over sod. The first is cost. In order to sow seeds, all that is required is that the soil be prepared and then you are set to sow. The costs incurred are simply those of the seed itself, which is negligible, and the cost of labor. Sod costs significantly more per square meter then the requisite amount of seed to cover the same area and also requires more soil preparation. The other advantage to seed over sod is that the grass seeds can be selected that best suit the conditions of your yard. With sod, you are limited to the types of sod available on the market.
      </p>
    </div>
  );
};

export default Sod;