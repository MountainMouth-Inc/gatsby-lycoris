import * as React from "react";

export const business = [
  {
    label: "Web Development",
    title: "Full stack Support",
    desc: "We can provide full stack solutions for web development, from front-end to back-end and infrastructure.",
    body: (
      <content
        style={{
          display: "grid",
          alignItems: "stretch",
          justifyContent: "space-evenly",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 340px))",
        }}
      >
        <div>
          <p>I usually use</p>
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Skills</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Frontend</td>
                <td>
                  <span class="badge danger">Next</span>
                  <span class="badge secondary">Gatsby</span>
                  <span class="badge warning">Astro</span>
                  <span class="badge warning">Svelte</span>
                </td>
              </tr>
              <tr>
                <td>Backend</td>
                <td>
                  <span class="badge danger">FastAPI</span>
                  <span class="badge">Django</span>
                  <span class="badge">Nestjs</span>
                </td>
              </tr>
              <tr>
                <td>Language</td>
                <td>
                  <span class="badge danger">Python</span>
                  <span class="badge secondary">JS/TS</span>
                  <span class="badge">C/C++</span>
                  <span class="badge">Rust</span>
                  <span class="badge">Go</span>
                </td>
              </tr>
              <tr>
                <td>Other</td>
                <td>
                  <span class="badge danger">AWS</span>
                  <span class="badge secondary">Bigquery</span>
                  <span class="badge secondary">Docker</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <img
            src="https://i.gyazo.com/48259abc13210869d504c2fd762c5075.jpg"
            alt="img"
          />
        </div>
      </content>
    ),
  },
  {
    label: "Data Science",
    title: "Data Science All in One",
    desc: "Analyze/utilize existing data, collect data through scraping, build data analysis infrastructure.",
    body: (
      <content
        style={{
          display: "grid",
          alignItems: "stretch",
          justifyContent: "space-evenly",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 340px))",
        }}
      >
        <div>
          <h3>Experience</h3>
          <ul align="left">
            <li>matching app growth hack</li>
            <br />
            <li>
              system to deterine abandoned farmland using satellite imagery
            </li>
            <br />
            <li>Horse racing AI</li>
          </ul>
        </div>
        <div>
          <img
            src="https://i.gyazo.com/95af560edfa1d9146236fba3392d778d.jpg"
            alt="img"
          />
        </div>
      </content>
    ),
  },
  {
    label: "DX Consulting",
    desc: "Let python do the boring stuff",
    title: "Automation is justice",
    body: (
      <content
        style={{
          display: "grid",
          alignItems: "stretch",
          justifyContent: "space-evenly",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 340px))",
        }}
      >
        <div>
          <h3>Support</h3>
          <ul align="left">
            <li>Accounting firms</li>
            <br />
            <li>Real estate company</li>
            <br />
            <li>EC Apparel company</li>
            <br />
            <li>D2C cosmetics company</li>
          </ul>
        </div>
        <div>
          <img
            src="https://i.gyazo.com/a42fc1b84e01ac37cb1864815a19bab1.jpg"
            alt="img"
          />
        </div>
      </content>
    ),
  },
  {
    label: "Marketing",
    title: "Strategy & Execution >>> Tactics",
    desc: "Why does strategy make a difference? I was Head of marketing for Job search site, $1M Monthly budget",
    body: (
      <content
        style={{
          display: "grid",
          alignItems: "stretch",
          justifyContent: "space-evenly",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 340px))",
        }}
      >
        <div>
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>solution</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Stragegy</td>
                <td>
                  <span class="badge danger">
                    Data Driven Marketing Strategy
                  </span>
                </td>
              </tr>
              <tr>
                <td>Offline</td>
                <td>
                  <span class="badge">TV CM</span>
                  <span class="badge">Offline Event</span>
                </td>
              </tr>
              <tr>
                <td>Digital</td>
                <td>
                  <span class="badge secondary">Google Ads</span>
                  <span class="badge secondary">Twitter Ads</span>
                  <span class="badge">Facebook Ads</span>
                  <span class="badge">Instagram Ads</span>
                </td>
              </tr>
              <tr>
                <td>Other</td>
                <td>
                  <span class="badge secondary">Salesforce & Pardot</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <img
            src="https://i.gyazo.com/47efa69e32a3a2f37f8757a2748c1ee8.jpg"
            alt="img"
          />
        </div>
      </content>
    ),
  },
];