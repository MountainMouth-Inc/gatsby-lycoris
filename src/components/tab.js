import React from "react";
import Content from "@components/content.js";

const Tab = ({ contents }) => (
  <div class="row flex-spaces tabs">
    {contents.map((content, index) => (
      <>
        <input id={index} type="radio" name="tabs" />
        <label for={index}>{index}</label>
      </>
    ))}

    {contents.map((content, index) => (
      <div class="content" id={index}>
        <Content
          title={content.title}
          desc={content.desc}
          img={content.img}
          h3={content.h3}
          p={content.p}
        />
      </div>
    ))}
  </div>
);

export default Tab;
