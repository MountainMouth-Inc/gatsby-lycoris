import React from "react";

import SectionHeader from "@components/section-header.js";

const Content = ({ content }) => (
  <div style={{ padding: "0.1rem 0.1rem 0.1rem 0.1rem", textAlign: "center" }}>
    <SectionHeader title={content.title} desc={content.desc} />
    {content.body}
  </div>
);

export default Content;
