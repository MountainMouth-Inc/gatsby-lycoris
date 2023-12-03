import * as React from "react";

const webdev = (
  <>
    <div>
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
              <span class="badge danger">Next.js</span>
              <span class="badge secondary">Gatsby</span>
              <span class="badge warning">Astro</span>
              <span class="badge warning">Svelte</span>
            </td>
          </tr>
          <tr>
            <td>Backend</td>
            <td>
              <span class="badge danger">FastAPI</span>
              <span class="badge">Nestjs</span>
              <span class="badge">Django</span>
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
        src="https://i.gyazo.com/25806b7224fc7eda2203866654e0118b.jpg"
        alt="img"
      />
    </div>
  </>
);

const ds = (
  <>
    <div>
      <h3>Experience</h3>
      <ul align="left">
        <li>matching app growth hack</li>
        <br />
        <li>system to deterine abandoned farmland using satellite imagery</li>
        <br />
        <li>Horse racing AI</li>
      </ul>
    </div>
    <div>
      <img
        src="https://i.gyazo.com/e403f5c70f8ce3116b91cc2fa7136827.jpg"
        alt="img"
      />
    </div>
  </>
);

const dx = (
  <>
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
        src="https://i.gyazo.com/e889208bec5f715ed222246bf3ce3cc1.jpg"
        alt="img"
      />
    </div>
  </>
);

const marketing = (
  <>
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
              <span class="badge danger">Data Driven Marketing Strategy</span>
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
        src="https://i.gyazo.com/91881ed9b20366a703202a4b5acaa497.jpg"
        alt="img"
      />
    </div>
  </>
);

const ai = (
  <>
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
            <td>Machine Learning</td>
            <td>
              <span class="badge danger">LightGBM</span>
              <span class="badge danger">Bigquery</span>
            </td>
          </tr>
          <tr>
            <td>Computer Vision</td>
            <td>
              <span class="badge secondary">Stable Diffusion XL</span>
            </td>
          </tr>
          <tr>
            <td>Other</td>
            <td>
              <span class="badge warning">LangChain</span>
              <span class="badge secondary">Chroma DB</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div>
      <img
        src="https://i.gyazo.com/143944057de36d38ad8794f60c7a7ccb.jpg"
        alt="img"
      />
    </div>
  </>
);

export const business = [
  {
    label: "Web Development",
    title: "Full stack Support",
    desc: "We can provide full stack solutions for web development, from front-end to back-end and infrastructures",
    body: webdev,
  },
  {
    label: "Data Science",
    title: "Data Science All in One",
    desc: "Analyze/utilize existing data, collect data through scraping, build data analysis infrastructure.",
    body: ds,
  },
  {
    label: "AI Solutions",
    title: "We are summoning the demon",
    desc: "Artifical intelligence can be our friend",
    body: ai,
  },
  {
    label: "DX Consulting",
    desc: "Let python do the boring stuff",
    title: "Automation is justice",
    body: dx,
  },
  {
    label: "Marketing",
    title: "Strategy & Execution >>> Tactics",
    desc: "Why does strategy make a difference? I was Head of marketing for Job search site, $1M Monthly budget",
    body: marketing,
  },
];
