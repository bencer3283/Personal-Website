import * as React from 'react';
import Layout from './Layout';
import {
    Wrap,
    WrapItem,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Heading,
    Text,
    Button,
    Breadcrumb, BreadcrumbItem, BreadcrumbLink,
} from '@chakra-ui/react';
import { MdChevronRight } from "@react-icons/all-files/md/MdChevronRight";
import { graphql, Link } from 'gatsby';
import { SEO } from './seo';
import { useSiteMetadata } from '../hooks/site-meta';

const DirectoryPage = ({ data }) => {
    return (
        <Layout>
            <Breadcrumb separator={<MdChevronRight color='gray.500' />}>
                <BreadcrumbItem>
                    <BreadcrumbLink as={Link} to='/'>Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <BreadcrumbLink isCurrentPage as={Link} to={`/${data.allFile.nodes[0].relativeDirectory}`}>
                        <Text textTransform='capitalize'> {data.allFile.nodes[0].relativeDirectory} </Text>
                    </BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>
            <Heading size='2xl' textTransform='capitalize' pt='8'>
                {data.allFile.nodes[0].relativeDirectory}
            </Heading>
            <Wrap p={{base: '0', md: '10'}} pt='10' zIndex={0}>
                {
                    data.allFile.nodes.map((file) => {
                        return (
                            <WrapItem key={file.id}>
                                <Card w={{md: 'sm'}} direction='column' m='3' flexShrink={{md: '0'}}>

                                    <CardHeader>
                                        <Text textTransform={'uppercase'} fontSize={'8pt'} noOfLines={1}>
                                            { file.childrenMarkdownRemark[0].frontmatter.keywords }
                                        </Text>
                                        <Heading size='md' noOfLines={2}>
                                            { file.childrenMarkdownRemark[0].frontmatter.title }
                                        </Heading>
                                        <Text textTransform={'capitalize'} noOfLines={4}>
                                            { file.childrenMarkdownRemark[0].frontmatter.subtitle }
                                        </Text>
                                    </CardHeader>

                                    <CardBody>

                                        <Text noOfLines={4}>
                                            {file.childrenMarkdownRemark[0].frontmatter.meta_description}
                                        </Text>
                                    </CardBody>

                                    <CardFooter>
                                        <Link to={`/${file.relativeDirectory}/${file.name}`}>
                                            <Button variant='outline'>
                                                Learn more
                                            </Button>
                                        </Link>

                                    </CardFooter>

                                </Card>
                            </WrapItem>
                        )


                    })
                }
            </Wrap>
        </Layout>
    )
}

export const query = graphql`query ($name: String) {
    allFile(sort: {modifiedTime: DESC}, filter: {relativeDirectory: {eq: $name}}) {
      nodes {
        childrenMarkdownRemark {
          frontmatter {
            title
            subtitle
            meta_description
            keywords
          }
        }
        name
        relativeDirectory
        id
      }
    }
  }
`

export default DirectoryPage;

export const Head = ({ location, params, data, pageContext }) => (
    <SEO 
      title={pageContext.name + ' | ' + useSiteMetadata().title}
      description={pageContext.name}
      ></SEO>
  )