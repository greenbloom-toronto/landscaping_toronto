import React from "react";
import tree_removal from '../../../../resources/images/tree_removal2.jpg'

export const TreeRemoval: React.FC = () => {
  return (
    <div style={{ maxWidth: "1100px", margin: "0 auto", color: "#000" }}>
      <h1 style={{ fontSize: "2.5rem", marginBottom: "20px", color: "#02703d", borderBottom: "2px solid #02703d", paddingBottom: "10px" }}>Tree removal Toronto</h1>

      <div style={{ display: "flex", gap: "30px", alignItems: "flex-start", flexWrap: "wrap", marginBottom: "30px" }}>
        <div style={{ flex: 1 }}>
          <p style={{ fontSize: "1rem", lineHeight: "1.6", marginBottom: "16px" }}>
            Greenbloom Landscaping offers Tree Removal and Pruning services all year round. Tree removal and pruning should only be performed by an experienced expert for a number of reasons. The main reason, of course is safety. Tree removal and pruning can very well require that a tree be climbed and cut or felled from the ground.
          </p>

          <p style={{ fontSize: "1rem", lineHeight: "1.6", marginBottom: "16px" }}>
            As one might imagine, these actions are incredibly dangerous and should only be performed by an expert. Another reason is legal. Not every tree can be cut or trimmed. While a tree might be on your land, the tree still, in a sense, is somewhat owned by the community in the eyes of the law. Greenbloom Landscaping is intimately familiar with the laws and codes of Toronto and the GTA with respect to the removal and pruning of trees and shrubbery.
          </p>
        </div>
        <img loading="lazy"
          src={tree_removal}
          alt="Tree removal service"
          style={{ width: "100%", maxWidth: "450px", borderRadius: "12px", objectFit: "cover", boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)" }}
        />
      </div>

      <h2 style={{ fontSize: "1.5rem", color: "#02703d", marginBottom: "10px" }}>Tree Removal in Toronto</h2>
      <p style={{ fontSize: "1rem", lineHeight: "1.6", marginBottom: "16px" }}>
        Tree removal is the absolute last resort when it comes to dealing with a problem tree; however, there are certainly circumstances under which it is necessary. The arborists at Greenbloom Landscaping have both the experience and the equipment to efficiently remove unwanted and sick trees. Follows is a list of the most common reasons for tree removal:
      </p>

      <ul style={{ fontSize: "1rem", lineHeight: "1.8", marginBottom: "40px", paddingLeft: "20px", listStyle: "none" }}>
        <li>&#10003; The tree is dying or dead.</li>
        <li>&#10003; The tree is obstructing the owner’s access or view.</li>
        <li>&#10003; The tree is causing a hazard.</li>
        <li>&#10003; The tree is harming other trees due to overcrowding.</li>
        <li>&#10003; Construction.</li>
      </ul>

      <h2 style={{ fontSize: "1.5rem", color: "#02703d", marginBottom: "10px" }}>Stump Grinding</h2>
      <p style={{ fontSize: "1rem", lineHeight: "1.6", marginBottom: "16px" }}>
        If you have unsightly tree stumps then have Greenbloom Landscaping come and grind them. Our experienced landscapers will grind your unwanted tree stumps to a depth of between 6” and 1’, the perfect depth for loam and seed. Have the tree stumps in your yard ground to complete your yard’s look. Stump grinding affords the following benefits:
      </p>

      <ul style={{ fontSize: "1rem", lineHeight: "1.8", marginBottom: "40px", paddingLeft: "20px", listStyle: "none" }}>
        <li>&#10003; Cleaner appearance.</li>
        <li>&#10003; Opens area for planting.</li>
        <li>&#10003; Prevent the unwanted tree from growing back.</li>
        <li>&#10003; Disposal of potential hazard.</li>
        <li>&#10003; Reduces disturbance to neighboring root systems.</li>
      </ul>

      <h2 style={{ fontSize: "1.5rem", color: "#02703d", marginBottom: "10px" }}>Pruning</h2>
      <p style={{ fontSize: "1rem", lineHeight: "1.6", marginBottom: "16px" }}>
        Trees require pruning for health, aesthetics, structural integrity and to allow people to walk under them or see over/around them. Of the reasons that there are to prune a tree, the removal of deadwood is undoubtedly the most common. Deadwood can be dangerous to persons and property since it can fall without much provocation. It also serves as an entry point for bacterial pathogens, viruses, fungi, borers, termites and carpenter ants.
      </p>

      <p style={{ fontSize: "1rem", lineHeight: "1.6", marginBottom: "16px" }}>
        Pruning is also required when dealing with a hazardous limb. Many times, limbs will grow too long and not be able to support itself under the pressure of snow, ice and high winds. When these limbs hover over roofs or power lines, they can break and cause a great deal of damage.
      </p>

      <p style={{ fontSize: "1rem", lineHeight: "1.6", marginBottom: "16px" }}>
        It is important to keep in mind when pruning that every cut made in a tree is, for all intensive purposes, a wound. Each and every leaf that is lost reduces some of the photosynthetic potential of the tree. Improper pruning of a tree can cause it irreparable damage and it is for this reason that pruning should only be performed by an experienced expert with knowledge of the proper techniques and practices employed.
      </p>
    </div>
  );
};

export default TreeRemoval;