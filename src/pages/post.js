import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import { Box, Heading, Container } from "@chakra-ui/react"

const PostPage = ({ data }) => {
  return (
    <Layout>
      <Box p='4' overflowY='auto' pt='150'>
        <Heading pb={6}>{data.markdownRemark.frontmatter.title}</Heading>
        <Heading size={'md'}>{data.markdownRemark.frontmatter.subtitle}</Heading>
        <Container maxW={{base: 'lg', md: '60vw'}} sx={{
          'h2': {
            fontSize: 'x-large',
            fontWeight: 'bold',
            lineHeight: 1.3,
            pb: 2,
            pt: 8
          },
          'h3': {
            fontSize: 'large',
            fontWeight: 'bold',
            lineHeight: 1.6
          },
          'ul': {
            paddingStart: '48px'
          }
        }}
          dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
        />
        
      </Box>
    </Layout>
  )
}

export const query = graphql`
query ($id: String) {
  markdownRemark(id: {eq: $id}) {
    html
    frontmatter {
      title
      subtitle
    }
  }
}`

export default PostPage;