require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Gatsby Workshop by @AgustinDMulet`,
    description: `Workshop de GatsbyJS, por Agustin Mulet.`,
    author: `@AgustinDMulet`,
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-github-api`,
      options: {
        token: process.env.GATSBY_GH_KEY,
        graphQLQuery: `
          query {
            user (login: "pablowbk") {
              repositories (privacy: PUBLIC, first: 50, orderBy:{field:UPDATED_AT, direction:DESC}) {
                edges {
                  node {
                    id
                    name
                    description
                    stargazers {
                      totalCount
                    }
                    url
                    isFork
                  }
                }
              }
            }
          }
        `,
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
