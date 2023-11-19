import React from "react";

const Container = ({ children }) => (
  <>
    <div
      style={{
        padding: "7rem 0rem 0rem 0rem",
      }}
    />
    <div className="paper container">{children}</div>
    <div
      style={{
        padding: "0rem 0rem 7rem 0rem",
      }}
    />
  </>
);

export default Container;
