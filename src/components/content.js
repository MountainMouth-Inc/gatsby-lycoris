import React from "react";

import SectionHeader from "@components/section-header.js";

const Content = (children) => (
  <div style={{ padding: "4rem 1rem", textAlign: "center" }}>
    <SectionHeader title={children.title} desc={children.desc} />
    <content
      style={{
        display: "grid",
        alignItems: "center",
        justifyContent: "center",
        gridTemplateColumns: "repeat(auto-fit, minmax(240px, 340px))",
      }}
    >
      <div>
        <h3>{children.h3}</h3>
        <p style={{ color: "var(--primary)" }}>{children.p}</p>
      </div>
      <div>
        <img src={children.img} alt="img" />
      </div>
    </content>
  </div>
);

export default Content;
