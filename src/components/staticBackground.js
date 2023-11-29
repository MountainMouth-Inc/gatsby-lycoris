import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

const StaticBackground = ({ children }) => {
  return (
    <>
      <div>
        {
          <StaticImage
            src="../images/00231-896423984.jpeg"
            alt="background image"
            style={{
              opacity: 0.5,
              backgroundSize: "cover",
              backgroundRepeat: "repeat-y",
              backgroundPosition: "center",
              position: "fixed",
              top: 0,
              zIndex: -1,
              height: "100vh",
              width: "100vw",
            }}
          />
        }
      </div>
      <div>{children}</div>
    </>
  );
};

export default StaticBackground;
