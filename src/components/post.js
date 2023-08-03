import * as React from "react"
import { graphql, Link } from "gatsby"
import Layout from "./Layout"
import { Box, Heading, Container, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Text, Card, CardHeader, CardBody } from "@chakra-ui/react"
import { ChevronRightIcon } from "@chakra-ui/icons"

const PostPage = ({ data }) => {
  return (
    <Layout>
      <Box overflowY='auto'>
        <Breadcrumb separator={<ChevronRightIcon color='gray.500'/>}>
          <BreadcrumbItem>
            <BreadcrumbLink as={Link} to='/'>Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink as={Link} to={`/${data.markdownRemark.parent.relativeDirectory}`}>
              <Text textTransform='capitalize'> {data.markdownRemark.parent.relativeDirectory} </Text>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink as={Link} to='./' isCurrentPage noOfLines={2}>{data.markdownRemark.frontmatter.title}, {data.markdownRemark.frontmatter.subtitle}</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        <Card m='2rem'>
          <CardHeader>
            <Heading >{data.markdownRemark.frontmatter.title}</Heading>
          </CardHeader>
          <CardBody>
            <Heading size={'md'}>{data.markdownRemark.frontmatter.subtitle}</Heading>
          </CardBody>
        </Card>
        
        
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
          },
          'a': {
            textDecoration: 'underline'
          },
          'code': {
            fontSize: '8pt',
            lineHeight: 1,
            padding: '3em'
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
    parent {
      ... on File {
        relativeDirectory
      }
    }
  }
}`

export default PostPage;