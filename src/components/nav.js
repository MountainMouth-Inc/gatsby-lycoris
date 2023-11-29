import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const Nav = ({}) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          social {
            twitter
          }
        }
      }
      allSitePage(
        filter: {
          path: {
            nin: [
              "/"
              "/dev-404-page/"
              "/404/"
              "/404.html"
              "/dev/"
              "/privacy/"
            ]
          }
        }
      ) {
        edges {
          node {
            path
          }
        }
      }
    }
  `);
  const numPages = data.allSitePage.edges.length;

  return (
    <nav class="border fixed split-nav">
      <div class="nav-brand">
        <h3>
          <a href="/">{data.site.siteMetadata.title}</a>
        </h3>
      </div>
      <div class="collapsible">
        <input id="collapsible1" type="checkbox" name="collapsible1" />

        <label for="collapsible1">
          {data.allSitePage.edges.map(({ node }, index) => (
            <div class={`bar${index}`}></div>
          ))}
          <div class={`bar${numPages + 1}`}></div>
        </label>
        <div class="collapsible-body">
          <ul class="inline">
            {data.allSitePage.edges.map(({ node }, index) => (
              <li>
                <a href={node.path}>{node.path.slice(1, -1)}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
