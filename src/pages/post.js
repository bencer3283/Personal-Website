import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import { Box, Heading } from "@chakra-ui/react"
import { MDXProvider } from "@mdx-js/react"

const PostPage = ({ data, children }) => {
  return (
    <Layout>
      <Box p='4' overflowY='auto' pt='150'>
        <Heading>{data.mdx.frontmatter.title}</Heading>
        <MDXProvider>{ children }</MDXProvider>
        
      </Box>
    </Layout>
  )
}

export const query = graphql`
query ($id: String) {
  mdx(id: {eq: $id}) {
    frontmatter {
      title
    }
  }
}`

export default PostPage;