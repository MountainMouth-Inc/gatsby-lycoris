import React from 'react';

import Section from '../components/Section';
import SummaryItem from '../components/SummaryItem';

const BlogPosts = ({ posts, pageContext: { locale: language } }) => {
  return (
    <Section title="News" description="最新のニュース">
      {posts.map((post) => (
        <SummaryItem
          key={post.node.fields.slug}
          name={post.node.frontmatter.title}
          description={post.node.frontmatter.description}
          date={post.node.frontmatter.date}
          link={post.node.fields.slug}
          internal
        />
      ))}
    </Section>
  );
};

export default BlogPosts;
