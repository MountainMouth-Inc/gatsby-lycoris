module.exports = {
  siteMetadata: {
    title: `Mountain Mouth`,
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
        icon: "static/icon.png",
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
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: `${__dirname}/src/pages/`,
      },
    },
  ],
};
