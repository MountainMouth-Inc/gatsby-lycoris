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
    subtitle: "CEO, Programmer, Data scientist",
    desc: "Miracle Cute Programmer, Genius Data scientist, Famous Spaghetti coder and Bitcoin maximalist",
    img: me,
  },
  {
    title: "Neo vim",
    subtitle: "Editor",
    desc: "My friends.",
    img: neovim,
  },
  {
    title: "Deep L",
    subtitle: "Translator",
    desc: "￥750/month",
    img: deepl,
  },
  {
    title: "Chat GPT",
    subtitle: "Creative Designer",
    desc: "$20/month bull shit job staff.",
    img: chatgpt,
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
                subtitle={card.subtitle}
                desc={card.desc}
                img={card.img}
              />
            ))}
          </div>
        </div>
      </Background>
    </Layout>
  );
};

export default Member;
