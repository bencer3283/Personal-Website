const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const postTemplate = path.resolve(`src/pages/post.js`)
  const directoryPageTemplate = path.resolve(`src/pages/directoryPage.js`)
  // Query for markdown nodes to use in creating pages.
  // You can query for whatever data you want to create pages for e.g.
  // products, portfolio items, landing pages, etc.
  // Variables can be added as the second function parameter
  return graphql(`query remark {
    allMarkdownRemark {
      nodes {
        id
        parent {
          ... on File {
            name
            relativeDirectory
          }
        }
      }
      
    }
    allDirectory(filter: {sourceInstanceName: {eq: "posts"}}) {
      nodes {
        name
      }
    }
  }`).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create blog post pages.
    result.data.allMarkdownRemark.nodes.forEach(node => {
      createPage({
        // Path for this page — required
        path: `/${node.parent.relativeDirectory}/${node.parent.name}`,
        component: postTemplate,
        context: {
          // Add optional context data to be inserted
          // as props into the page component.
          //
          // The context data can also be used as
          // arguments to the page GraphQL query.
          //
          // The page "path" is always available as a GraphQL
          // argument.
          id: node.id
        },
      })
    })

    result.data.allDirectory.nodes.forEach(directory => {
      createPage({
        path: `/${directory.name}`,
        component: directoryPageTemplate,
        context: {
          name: directory.name
        }
      })
    })
  })
}