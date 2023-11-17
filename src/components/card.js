import React from "react";

const Card = ({ title, subtitle, desc, img }) => (
  <div className="sm-3 col align-middle">
    <div
      class="card"
      style={{ width: 20 + "rem", backgroundColor: "var(--white)" }}
    >
      <img src={img} />
      <div class="card-body">
        <h4 class="card-title">{title}</h4>
        <h5 class="card-subtitle">{subtitle}</h5>
        <p class="card-text">{desc}</p>
      </div>
    </div>
  </div>
);

export default Card;
