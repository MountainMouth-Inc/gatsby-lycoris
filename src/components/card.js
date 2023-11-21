import React from "react";

const Card = ({ title, subtitle, desc, img }) => (
  <div
    class="card"
    style={{
      width: 16 + "rem",
      backgroundColor: "var(--white)",
      margin: "0.5rem 0.5rem 0.5rem 0.5rem",
    }}
  >
    <img src={img} alt="member image" />
    <div class="card-body">
      <h4 class="card-title">{title}</h4>
      <h5 class="card-subtitle">{subtitle}</h5>
      <p class="card-text">{desc}</p>
    </div>
  </div>
);

export default Card;
