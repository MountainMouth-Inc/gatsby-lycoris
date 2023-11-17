import React from "react";
import bg from "@images/chisato-red.jpg";

const Background = ({ children }) => (
  <>
    <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        //backgroundPosition: "center center",
        position: "absolute",
        top: 0,
        zIndex: -1,
        height: "110vh",
        width: "110vw",
        opacity: 0.5,
      }}
    />
    <div>{children}</div>
  </>
);

export default Background;
