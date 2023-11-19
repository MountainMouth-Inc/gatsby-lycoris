module.exports = {
  siteMetadata: {
    title: `Mountain Mouth`,
    author: {
      name: `syamaguc`,
      summary: `Miracle cute programmer`,
    },
    description: `MountainMouth homepage inspired by my favorite anime "Lycoris Recoil"`,
    siteUrl: `https://mountainmouth.xyz`,
    social: {
      twitter: `syamaguc`,
    },
  },

  plugins: [
    `gatsby-plugin-preact`,
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
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-J51B0TWW9Q", // Google Analytics / GA
        ],
        pluginConfig: {
          head: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://mountainmouth.xyz`,
        stripQueryString: true,
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: `https://mountainmouth.xyz`,
      },
    },
  ],
};
