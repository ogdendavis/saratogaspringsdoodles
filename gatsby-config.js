module.exports = {
  siteMetadata: {
    title: `Imaginary Dogs`,
    description: `We dream up the best doggos that you can imagine. And, as you can probably guess, they're not real.`,
    author: `Lucas Ogden-Davis`,
    company: `Imaginary Dog Breeders, LLC`,
    siteUrl: `https://hungry-archimedes-85647a.netlify.app/`,
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
        name: `Midwoofery Template 1`,
        short_name: `Woof`,
        start_url: `/`,
        background_color: `#008080`,
        theme_color: `#008080`,
        display: `minimal-ui`,
        icon: `src/images/dog1.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-styled-components`,
    // END temp for dummy page content
    `gatsby-transformer-remark`,
    // Netlify CMS to manage content
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
        htmlTitle: `Imaginary Dogs Admin`,
        htmlFavicon: `${__dirname}/src/images/dog1.png`,
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
    `gatsby-plugin-sitemap`,
    // Keep netlify plugin last
    `gatsby-plugin-netlify`,
  ],
};
