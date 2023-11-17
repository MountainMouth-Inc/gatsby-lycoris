module.exports = {
  siteMetadata: {
    title: `Lycoris`,
    author: {
      name: `syamaguc`,
      summary: `Miracle cute programmer`,
    },
    description: `Gatsby landing page template inspired by "Lycoris Recoil"`,
    siteUrl: `https://mountainmouth.xyz`,
    social: {
      twitter: `syamaguc`,
    },
  },

  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-transformer-remark",
    "gatsby-plugin-sharp",
    `gatsby-plugin-react-helmet`,
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
