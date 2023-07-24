/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `personal-site`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-image", "gatsby-plugin-sitemap", "gatsby-plugin-sharp", "gatsby-transformer-sharp", "gatsby-transformer-remark", {
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
  },{
    resolve: '@chakra-ui/gatsby-plugin',
    options: {
      resetCSS: true,
      portalZIndex: undefined
    }
  },
{
  resolve: "gatsby-plugin-mdx",
  options: {
    extensions: [`.mdx`, `.md`]
  }
}]
};