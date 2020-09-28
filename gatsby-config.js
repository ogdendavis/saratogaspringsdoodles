module.exports = {
  siteMetadata: {
    title: `Saratoga Springs Doodles`,
    description: `Utah's premier breeder of top-quality, genetic health tested bernedoodles.`,
    author: `Lucas Ogden-Davis`,
    company: `Saratoga Springs Doodles`,
    siteUrl: `https://brave-payne-8d1469.netlify.app/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Saratoga Springs Doodles`,
        short_name: `SSD`,
        start_url: `/`,
        background_color: `#008080`,
        theme_color: `#008080`,
        display: `minimal-ui`,
        icon: `src/cms/general/img/saratogaspringsdoodles.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-remark`,
    // Netlify CMS to manage content
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
        htmlTitle: `Admin: Saratoga Springs Doodles`,
        htmlFavicon: `${__dirname}/src/images/saratogaspringsdoodles.png`,
      },
    },
    // Make gatsby aware of CMS content
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `dogs`,
        path: `${__dirname}/src/cms/dogs`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `litters`,
        path: `${__dirname}/src/cms/litters`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `general`,
        path: `${__dirname}/src/cms/general`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `static`,
        path: `${__dirname}/static/img`,
      },
    },
    `gatsby-plugin-sitemap`,
    // Keep netlify plugin last
    `gatsby-plugin-netlify`,
  ],
};
