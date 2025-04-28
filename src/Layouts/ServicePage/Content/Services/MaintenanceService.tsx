import { Add, Close } from "@mui/icons-material";
import React, { useState } from "react";
import banner from '../../../../resources/images/maintenance1.jpg';

interface AccordionItemProps {
  title: string;
  content: React.ReactNode;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      style={{
        marginBottom: "16px",
        border: "2px solid #02703d",
        borderRadius: "8px",
        backgroundColor: "#F4FBF3",
        transition: "all 0.3s ease"
      }}
    >
      <div
        onClick={() => setIsOpen(!isOpen)}
        style={{
          padding: "16px",
          cursor: "pointer",
          fontWeight: "bold",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <span>{title}</span>
        <span>{isOpen ? <Close /> : <Add />}</span>
      </div>
      {isOpen && (
        <div style={{ padding: "0 16px 16px", fontSize: "0.95rem", color: "#444" }}>
          {content}
        </div>
      )}
    </div>
  );
};

export const MaintenanceService: React.FC = () => {
  const seasons3 = (
    <div style={{ padding: "12px 8px", lineHeight: "1.6" }}>
      <p style={{ fontWeight: "bold", color: "#000" }}>8 Monthly Payments</p>
      <p style={{ fontWeight: "bold", marginTop: "10px" }}>Service includes:</p>
      <p style={{ fontWeight: "bold", color: "#02703d" }}>Spring clean-up: <span style={{ fontWeight: "normal" }}>Once between April 1 – 31</span></p>
      <ul style={{ paddingLeft: "20px" }}>
        <li>Removal of dead branches, sticks and leaves left in the wake of winter.</li>
        <li>Removal of winter coverings from plants and shrubbery.</li>
        <li>Raking and cultivation of garden beds.</li>
        <li>Minor pruning of evergreens, hedges and shrubbery.</li>
        <li>Debris and leaf cleaning and disposal (biodegradable bags).</li>
        <li>Digging and edging of garden beds and tree rings.</li>
        <li>Leaf and dust blowing of walkways, driveways, steps and patios.</li>
        <li>Blowing and sweeping of all hard surfaces.</li>
      </ul>
      <p style={{ fontWeight: "bold", color: "#02703d" }}>Maintenance visits: <span style={{ fontWeight: "normal" }}>Weekly or Bi-weekly between May 1 – October 31</span></p>
      <ul style={{ paddingLeft: "20px" }}>
        <li>Lawn cutting & de-weeding (optional)</li>
        <li>Manual trimming, pruning, edging</li>
        <li>Flower bed maintenance</li>
        <li>Leaf, weed & debris removal from all paved areas</li>
        <li>Disease and insect monitoring</li>
        <li>Area cleanup</li>
      </ul>
      <p style={{ fontWeight: "bold", color: "#02703d" }}>Fall clean-up: <span style={{ fontWeight: "normal" }}>2 visits between November 1 – 30</span></p>
      <ul style={{ paddingLeft: "20px" }}>
        <li>Leaf picking, trimming perennials</li>
        <li>Removal of annual flowers</li>
        <li>Wrapping trees (optional)</li>
        <li>Final lawn cut</li>
      </ul>
    </div>
  );

  const seasons4 = (
    <div style={{ padding: "12px 8px", lineHeight: "1.6" }}>
      <p style={{ fontWeight: "bold", color: "#000" }}>12 Monthly Payments</p>
      <p>Includes everything in 3 Seasons Package, plus winter services.</p>
      <p style={{ fontWeight: "bold", color: "#02703d" }}>Snow Season (Dec 1 – Mar 31):</p>
      <ul style={{ paddingLeft: "20px" }}>
        <li>Custom packages for each property</li>
        <li>No cap on snowfall limit</li>
        <li>Plowing triggered after 1”+ snowfall</li>
        <li>Service includes: Driveway, Steps, Walkways, Sidewalks, Other</li>
      </ul>
    </div>
  );

  const snowPackage = (
    <div style={{ padding: "12px 8px", lineHeight: "1.6" }}>
      <p style={{ fontWeight: "bold", color: "#000" }}>Snow Removal Package: <span style={{ fontWeight: "normal" }}>Between December 1 – March 31</span></p>
      <ul style={{ paddingLeft: "20px" }}>
        <li>Custom packages for each property</li>
        <li>MAXIMUM: No snowfall cap</li>
        <li>MINIMUM: Plowing triggered if snow exceeds 1”</li>
        <li>Service areas: Driveway, Steps, Walkways, Sidewalk, Other</li>
      </ul>
      <p style={{ fontWeight: "bold", color: "#000" }}>Salting Package: <span style={{ fontWeight: "normal" }}>Between December 1 – March 31</span></p>
      <ul style={{ paddingLeft: "20px" }}>
        <li>Each plowing visit includes salting</li>
        <li>Also available: pay-as-you-go salting</li>
      </ul>
    </div>
  );

  return (
    <div style={{ maxWidth: "1100px", margin: "0 auto", color: "#000" }}>
      <h1 style={{ fontSize: "2.5rem", marginBottom: "20px", color: "#02703d" }}>Maintenance</h1>

      <p style={{ fontSize: "1rem", lineHeight: "1.6", marginBottom: "20px" }}>
        Blooming flowers, nice green boxwoods all around, waters gurgling from the fountains,
        neat beds, mowed lawn! The recently installed stone paths welcome you home and you can’t
        help wondering how long this beauty will last! It can last for a lifetime with the right
        treatment and yearly property maintenance. Greenbloom Landscaping Toronto has numerous and
        very experienced teams for the maintenance of your green corners and trimmed trees. Landscaping
        maintenance is as important as landscaping itself. Trust our experience!
      </p>

      <h2 style={{ fontSize: "1.75rem", color: "#02703d", marginTop: "40px" }}>A variety of services for full maintenance</h2>

      <p style={{ fontSize: "1rem", lineHeight: "1.6", marginBottom: "20px" }}>
        Nature changes throughout the year in Ontario! There is always the perfect time for lawn
        fertilization, planting of new trees and flowers. There is need to remove the snow, remove sticks
        and debris after the windy winter days in Toronto, prepare the garden for the summer, plant in the
        spring and take care of possible damages in between. Keeping the garden green, beautiful and clean
        and all trees and plants healthy is definitely a hard work and needs constant treatments. That’s our
        job! Our landscaping contractors know how to deal with problems, remove or treat sick trees and seed
        your lawn properly.
      </p>

      <h3 style={{ fontSize: "1.5rem", marginTop: "30px", marginBottom: "10px" }}>Choose a Maintenance package that works for you</h3>

      <AccordionItem title="3 Seasons Maintenance Package" content={seasons3} />
      <AccordionItem title="4 Seasons Maintenance Package" content={seasons4} />
      <AccordionItem title="Snow removal & Salting Package" content={snowPackage} />

      <img loading="lazy"
        src={banner}
        alt="Freshly maintained garden"
        style={{ width: "100%", height: "300px", borderRadius: "12px", objectFit: "cover", margin: "40px 0" }}
      />

      <h2 style={{ fontSize: "1.75rem", color: "#02703d", marginBottom: "20px" }}>Landscaping maintenance is important</h2>

      <p style={{ fontSize: "1rem", lineHeight: "1.6", marginBottom: "20px" }}>
        Our landscaping Toronto maintenance service will keep your garden healthy all year around.
        We’ll take care of broken stones, do the necessary woodwork to ensure your fence is stable,
        take care of the lawn, clean the trees and trim them, plant new flowers in various combinations
        and give a fresh look to your garden depending on the season.
      </p>

      <p style={{ fontSize: "1rem", lineHeight: "1.6", marginBottom: "20px" }}>
        Our job is to make sure your property is kept in outstanding condition. After all,
        when you invest in your garden, you invest in your better health. Why leave it decay?
        Our personnel are technologically knowledgeable and fully equipped.
        We’re here to maintain the whole garden in order for you to enjoy it all year around.
        Rely on us! Invest in your investment today!
      </p>
    </div>
  );
};

export default MaintenanceService;
