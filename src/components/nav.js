import React from "react";

const Nav = ({}) => (
  <div styles={{ position: "fixed" }}>
    <nav class="border fixed split-nav">
      <div class="nav-brand">
        <h3>
          <a href="/">Mountain Mouth</a>
        </h3>
      </div>
      <div class="collapsible">
        <label for="collapsible">
          <div class="bar1"></div>
          <div class="bar2"></div>
          <div class="bar3"></div>
        </label>
        <div class="collapsible-body">
          <ul class="inline">
            <li>
              <a href="/about/">About</a>
            </li>
            <li>
              <a href="/member/">Member</a>
            </li>
            <li>
              <a
                href="https://github.com/MountainMouth-Inc/gatsby-lycoris"
                target="_blank"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
);

export default Nav;
