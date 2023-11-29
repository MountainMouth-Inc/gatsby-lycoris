import React, { useState } from "react";

const Tab = ({ children }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
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
            <div
              style={{
                padding: "0.1rem 0.1rem 0.1rem 0.1rem",
                textAlign: "center",
              }}
            >
              <h2>{child.title}</h2>
              <p style={{ color: "var(--primary)" }}>{child.desc}</p>
              <content
                style={{
                  display: "grid",
                  alignItems: "center",
                  justifyContent: "space-evenly",
                  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 340px))",
                }}
              >
                {child.body}
              </content>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tab;
