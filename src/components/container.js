import React from "react";
import "@styles/paper.css";

const Container = ({ children }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      /*padding up right down left*/
      padding: "7rem 0.1rem 7rem 0.1rem",
    }}
  >
    <div className="paper container">{children}</div>
  </div>
);

export default Container;
