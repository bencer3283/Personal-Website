const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const postTemplate = path.resolve(`src/components/post.js`)
  const directoryPageTemplate = path.resolve(`src/components/directoryPage.js`)
  const portfolioWorkTemplate = path.resolve(`src/components/portfolioWork.js`) 

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
    allFile(
      filter: {sourceInstanceName: {eq: "portfolio"}}
      sort: {childrenJavascriptFrontmatter: {frontmatter: {sort: ASC}}}
    ) {
      nodes {
        name
        id
        childJavascriptFrontmatter {
            frontmatter {
                title
            }
        }
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
      if (directory.name !== 'posts') {
        createPage({
          path: `/${directory.name}`,
          component: directoryPageTemplate,
          context: {
            name: directory.name
          }
        })
      }
      
    })

    result.data.allFile.nodes.forEach((file, index, array) => {
      let nextidx = index + 1
      if(index == array.length - 1) {
        nextidx = 0
      }
      createPage({
        path: `/portfolio/${file.name}`,
        component: portfolioWorkTemplate,
        context: {
          title: file.childJavascriptFrontmatter.frontmatter.title,
          fileName: file.name,
          nextTitle: array[nextidx].childJavascriptFrontmatter.frontmatter.title,
          nextFile: array[nextidx].name
        }
      })
    })
  })
}