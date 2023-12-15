import { graphql } from 'gatsby';
import React from 'react';

import BlogPosts from '../components/BlogPosts';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import NotFound from '../pages/404';
import Pagination from '../components/Pagination';

const News = ({ data, pageContext }) => {
  const posts = data.allMarkdownRemark.edges;
  const noBlog = !posts || !posts.length;

  const totalCount = data.allMarkdownRemark.totalCount;

  if (!posts || !posts.length) {
    return <NotFound />;
  }

  return (
    <Layout>
      <Header
        metadata={data.site.siteMetadata}
        pageContext="{locale: language}"
      />
      {!noBlog && <BlogPosts pageContext="{locale: language}" posts={posts} />}
      <Pagination
        totalCount={totalCount}
        currentPage={pageContext.currentPage}
        itemPerPage={pageContext.itemPerPage}
        type={pageContext.type}
      />
      <Footer pageContext="{locale: language}" />
    </Layout>
  );
};

export default News;

export const pageQuery = graphql`
  query news($skip: Int! = 0) {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
      filter: { frontmatter: { posttype: { eq: "news" } } }
      limit: 9
      skip: $skip
    ) {
      totalCount
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`;
export const Head = ({}) => <Seo title="News" />;
