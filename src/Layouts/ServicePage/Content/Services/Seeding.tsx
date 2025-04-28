import React from "react";
import seeding from '../../../../resources/images/seeding2.jpeg'

export const Seeding: React.FC = () => {
  return (
    <div style={{ maxWidth: "1100px", margin: "0 auto", color: "#000" }}>
      <h1 style={{ fontSize: "2.5rem", marginBottom: "20px", color: "#02703d", borderBottom: "2px solid #02703d", paddingBottom: "10px" }}>
        Seeding
      </h1>

      <div style={{ display: "flex", gap: "30px", alignItems: "center", marginBottom: "30px", flexWrap: "wrap" }}>
        <div style={{ flex: 1 }}>
          <p style={{ fontSize: "1rem", lineHeight: "1.6", marginBottom: "16px" }}>
            The development of a beautiful and healthy lawn starts with seeding or laying sod. While seeding your lawn is a significantly cheaper option and requires much less labor, it is important to remember that it will take far longer to have a useable lawn when seeding as opposed to laying sod.
          </p>

          <p style={{ fontSize: "1rem", lineHeight: "1.6", marginBottom: "16px" }}>
            Another advantage to laying sod is that it can be laid throughout the entire growing season as opposed to seeding which should be done towards the beginning of the growing season so that your lawn will be properly established before the arrival of the cold months and the grass plants go dormant.
          </p>
        </div>

        <img loading="lazy"
          src={seeding}
          alt="Seeding lawn preparation"
          style={{ width: "100%", maxWidth: "450px", borderRadius: "12px", objectFit: "cover", boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)" }}
        />
      </div>

      <p style={{ fontSize: "1rem", lineHeight: "1.6", marginBottom: "16px" }}>
        As mentioned above, you can seed your yard at far less cost than laying sod. Seeding one’s lawn is fairly simple. First, the soil must be properly worked and prepared prior to seeding. Once the soil is prepared, then all that is left is to select the type of seed to sow. Different grasses should be selected according to how much sun the grass will be exposed to and the amount of traffic the lawn will experience.
      </p>

      <p style={{ fontSize: "1rem", lineHeight: "1.6", marginBottom: "16px" }}>
        The fact that you can customize the grasses of your lawn in order to meet the light and traffic that the lawn will see when seeding is a giant advantage over sod. With seeding, you can design a lawn which is perfectly suited to the light and traffic that the area will experience.
      </p>

      <p style={{ fontSize: "1rem", lineHeight: "1.6", marginBottom: "16px" }}>
        Once the seeds have been sowed, it is important to rope off the yard so as to prevent anyone from trampling on the newly planted yard. It is also important to make sure that the yard is well watered so as to help the grass seeds germinate and take a firm hold on the ground. If a particular patch seems a little light then it can always be reseeded.
      </p>

      <p style={{ fontSize: "1rem", lineHeight: "1.6", marginBottom: "16px" }}>
        If you are interested in having your yard seeded then call the experts at Greenbloom Landscaping. We will properly prepare your yard prior to seeding and help you design a seed mixture perfectly suited to the amount of light and traffic that your yard will be exposed to. We will also provide you with a maintenance program for your yard that will help maximize the thickness and healthiness of your lawn.
      </p>
    </div>
  );
};

export default Seeding;