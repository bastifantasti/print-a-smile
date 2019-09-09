module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `svgo`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-graphql`,
      options: {
        // The top level query type, can be anything you want!
        typeName: `Content`,
        // The field you'll query against, can also be anything you want.
        fieldName: `Content`,
        // Your API endpoint, available from the dashboard and settings window.
        url: `https://b3xa4sjsgjckfnft4nn4ucwygu.appsync-api.eu-central-1.amazonaws.com/graphql`,
        headers: {
          'x-api-key':'da2-z72rxkb53bextddzenss5m66ba'
        }
      },
    },
    {
      resolve: `gatsby-source-graphql`,
      options: {
        // The top level query type, can be anything you want!
        typeName: `Stats`,
        // The field you'll query against, can also be anything you want.
        fieldName: `Stats`,
        // Your API endpoint, available from the dashboard and settings window.
        url: `https://b3xa4sjsgjckfnft4nn4ucwygu.appsync-api.eu-central-1.amazonaws.com/graphql`,
        headers: {
          'x-api-key':'da2-z72rxkb53bextddzenss5m66ba'
        },
        refetchInterval: 5
      },
    },
    {
      resolve: `gatsby-source-graphql`,
      options: {
        // The top level query type, can be anything you want!
        typeName: `Print`,
        // The field you'll query against, can also be anything you want.
        fieldName: `Print`,
        // Your API endpoint, available from the dashboard and settings window.
        url: `https://b3xa4sjsgjckfnft4nn4ucwygu.appsync-api.eu-central-1.amazonaws.com/graphql`,
        headers: {
          'x-api-key':'da2-z72rxkb53bextddzenss5m66ba'
        },
        refetchInterval: 5
      },
    },
  ],
}
