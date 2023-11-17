import React from "react";

const SectionHeader = ({ title, desc }) => (
  <>
    <h2>{title}</h2>
    <p style={{ color: "var(--primary)" }}>{desc}</p>
  </>
);

export default SectionHeader;
