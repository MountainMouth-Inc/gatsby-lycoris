import React, { useState } from "react";
import Content from "@components/content.js";

const Tab = ({ children }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <h2 align="center">Our Solutions</h2>
      <div className="row flex-spaces tabs">
        {children.map((child, idx) => (
          <React.Fragment key={idx}>
            <input
              id={idx}
              type="radio"
              name="tabs"
              checked={idx === activeTab}
              onChange={() => setActiveTab(idx)}
            />
            <label htmlFor={idx}>{child.label}</label>
          </React.Fragment>
        ))}

        {children.map((child, idx) => (
          <div
            key={idx}
            className="content"
            style={{ display: idx === activeTab ? "block" : "none" }}
          >
            <Content content={child} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tab;
