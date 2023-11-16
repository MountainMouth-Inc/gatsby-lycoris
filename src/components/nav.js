import React from "react";

const Nav = ({ children }) => (
  <nav class="border fixed split-nav">
    <div class="nav-brand" style={{ paddingLeft: "3em", paddingRight: "3em" }}>
      <h3>
        <a href="/">Lycoris</a>
      </h3>
    </div>
    <div class="collapsible">
      <label for="collapsible1">
        <input id="collapsible1" type="checkbox" name="collapsible1" />
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
        </ul>
      </div>
    </div>
  </nav>
);

export default Nav;
