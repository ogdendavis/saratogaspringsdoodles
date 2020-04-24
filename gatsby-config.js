module.exports = {
  siteMetadata: {
    title: `Imaginary Dogs`,
    description: `We dream up the best doggos that you can imagine. And, as you can probably guess, they're not real.`,
    author: `Lucas Ogden-Davis`,
    company: `Imaginary Dog Breeders, LLC`,
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
    // START temp for dummy page content until we hook up back-end
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/cms-content-pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `dogs`,
        path: `${__dirname}/src/cms-content-dogs`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `litters`,
        path: `${__dirname}/src/cms-content-litters`,
      },
    },
    'gatsby-transformer-remark',
    // END temp for dummy page content
  ],
};
