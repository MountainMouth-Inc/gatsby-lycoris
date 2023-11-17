import * as React from "react";
import Layout from "@components/layout.js";
import Background from "@components/background.js";
import Card from "@components/card.js";

import me from "@images/chisato-red.jpg";
import neovim from "@images/chisato-white.jpg";
import deepl from "@images/chisato-black.jpg";
import chatgpt from "@images/takina.jpg";

const members = [
  {
    title: "syamaguc",
    desc: "Miracle Cute Programmer, Genius Data scientist, Famous Spaghetti coder and Bitcoin maximalist",
    img_top: me,
  },
  {
    title: "Neovim",
    desc: "Editing staff, Free",
    img_bottom: neovim,
  },
  {
    title: "DeepL",
    desc: "Translation staff, 750yen/month",
    img_top: deepl,
  },
  {
    title: "ChatGPT",
    desc: "Bull shit jobs staff, $20/month",
    img_bottom: chatgpt,
  },
];

const Member = () => {
  return (
    <Layout>
      <Background>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            /*padding up right down left*/
            padding: "7rem 1rem 7rem 1rem",
          }}
        >
          <div className="row flex-space child-shadows-hover">
            {members.map((card, index) => (
              <Card
                key={index}
                title={card.title}
                desc={card.desc}
                img_top={card.img_top}
                img_bottom={card.img_bottom}
              />
            ))}
          </div>
        </div>
      </Background>
    </Layout>
  );
};

export default Member;
