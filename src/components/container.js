import React from "react";

const Container = ({ children }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      /*padding up right down left*/
      padding: "4rem 0rem 0rem 0rem",
    }}
  >
    <div className="paper container">{children}</div>
  </div>
);

export default Container;
