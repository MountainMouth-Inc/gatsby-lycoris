import React from "react";

import SectionHeader from "@components/section-header.js";
import Modal from "@components/modal.js";

const CallToAction = () => (
  <div style={{ padding: "4rem 1rem", textAlign: "center" }}>
    <SectionHeader title="Lycoris Recoil" desc="You Must Watch It" />
    <Modal
      btn_text="Chapter"
      title="Easy does it"
      text="ゆっくりやって、落ち着いて、気をつけて"
    />
  </div>
);

export default CallToAction;
