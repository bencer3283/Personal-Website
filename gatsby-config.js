/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Posheng Cheng`,
    siteUrl: `https://bencer3283.github.io`,
    description: `Posheng Cheng (Ben Ceheng) is an interaction designer whose works question our relationships with emerging technologies. He uses electronics and computing as the primary creative media to craft unexpected experiences with technology, sparking conversations about the critical issues of our age like the cost of technological advancement, surveillance, perception and embodied AI.`,
    image: `/docs/icon.png`
  },
  plugins: ["gatsby-plugin-image", "gatsby-plugin-sitemap", "gatsby-plugin-sharp", "gatsby-transformer-sharp", "gatsby-transformer-javascript-frontmatter", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "posts",
      "path": "./src/posts/"
    },
    __key: "experiences"
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "portfolio",
      "path": `${__dirname}/src/portfolio`
    },
    __key: "portfolio"
  },{
    resolve: '@chakra-ui/gatsby-plugin',
    options: {
      resetCSS: true,
      portalZIndex: undefined
    }
  },{
    resolve: "gatsby-plugin-mdx",
    options: {
      extensions: [`.mdx`, `.md`]
    }
  },{
    resolve: `gatsby-omni-font-loader`,
    options: {
      enableListener: true,
      preconnect: [`https://fonts.googleapis.com`, `https://fonts.gstatic.com`],
      web: [
        {
          name: 'IBM Plex Serif',
          file: "https://fonts.googleapis.com/css2?family=IBM+Plex+Serif&display=swap"
        },
        {
          name: 'IBM Plex Sans',
          file: "https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;700&display=swap"
        }
      ]
    }
  },{
    resolve: "gatsby-transformer-remark",
    options: {
      plugins: [
        {
          resolve: `gatsby-remark-images`,
          options: {
            maxWidth: 800,
          }
        }
      ]
    }
  },{
    resolve: `gatsby-plugin-manifest`,
    options: {
      icon: `src/images/%%.png`
    }
  },
]
};

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
   resolve: {
      fallback: {
        path: require.resolve('path-browserify'),
      },
    },
  })
}