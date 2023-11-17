import React from "react";

const Card = (children) => (
  <div className="sm-3 col align-middle">
    <div
      class="card"
      style={{ width: 20 + "rem", backgroundColor: "var(--white)" }}
    >
      {children.img_top && <img src={children.img_top} />}
      <div class="card-body">
        <h4 class="card-title">{children.title}</h4>
        {children.subtitle && <h5 class="card-subtitle"></h5>}
        <p class="card-text">{children.desc}</p>
      </div>
      {children.img_bottom && <img src={children.img_bottom} />}
    </div>
  </div>
);

export default Card;
