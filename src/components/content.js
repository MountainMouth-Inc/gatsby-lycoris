import React from "react";

import SectionHeader from "@components/section-header.js";

const Content = ({ content }) => (
  <div style={{ padding: "0.1rem 0.1rem", textAlign: "center" }}>
    <SectionHeader title={content.title} desc={content.desc} />
    <content
      style={{
        display: "grid",
        alignItems: "stretch",
        justifyContent: "space-evenly",
        gridTemplateColumns: "repeat(auto-fit, minmax(240px, 340px))",
      }}
    >
      <div>
        <h3>{content.h3}</h3>
        <p style={{ color: "var(--primary)" }}>{content.p}</p>
      </div>
      <div>
        <img src={content.img} alt="img" />
      </div>
    </content>
  </div>
);

export default Content;
