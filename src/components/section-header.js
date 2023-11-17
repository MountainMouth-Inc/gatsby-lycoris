import React from "react";

const SectionHeader = (children) => (
  <>
    <h2>{children.title}</h2>
    <p style={{ color: "var(--primary)" }}>{children.desc}</p>
  </>
);

export default SectionHeader;
