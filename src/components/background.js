import React, { useState, useEffect } from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export const pageQuery = graphql`
  query {
    allFile(filter: { sourceInstanceName: { eq: "images" } }) {
      edges {
        node {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`;

const Background = ({ children }) => {
  const data = useStaticQuery(pageQuery);
  const [imageData, setImageData] = useState(null);
  useEffect(() => {
    const images = data.allFile.edges;
    const randomImage = images[Math.floor(Math.random() * images.length)].node;
    setImageData(getImage(randomImage.childImageSharp));
  }, [data.allFile.edges]);

  return (
    <>
      <div>
        {imageData && (
          <GatsbyImage
            image={imageData}
            alt="random background image"
            style={{
              opacity: 0.5,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              position: "absolute",
              top: 0,
              zIndex: -1,
              height: "100vh",
              width: "100vw",
            }}
          />
        )}
      </div>
      <div>{children}</div>
    </>
  );
};

export default Background;
