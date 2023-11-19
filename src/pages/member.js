import * as React from "react";
import Layout from "@components/layout.js";
import Background from "@components/background.js";
import Card from "@components/card.js";
import Seo from "@components/seo.js";
import Nav from "@components/nav.js";
import { members } from "@constants/members.js";

const Member = () => {
  return (
    <Layout>
      <Background>
        <Nav />
        <div
          style={{
            padding: "7rem 0rem 0rem 0rem",
          }}
        />
        <div className="row flex-spaces child-shadows-hover">
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
        <div
          style={{
            padding: "0rem 0rem 7rem 0rem",
          }}
        />
      </Background>
    </Layout>
  );
};

export const Head = () => <Seo title="Member"></Seo>;

export default Member;
