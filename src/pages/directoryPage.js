import * as React from 'react';
import Layout from '../components/Layout';
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
import { ChevronRightIcon } from "@chakra-ui/icons"
import { graphql, Link } from 'gatsby';

const DirectoryPage = ({ data }) => {
    return (
        <Layout>
            <Breadcrumb separator={<ChevronRightIcon color='gray.500' />} p={'4'} pt={'150'}>
                <BreadcrumbItem>
                    <BreadcrumbLink as={Link} to='/'>Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <BreadcrumbLink isCurrentPage as={Link} to={`/${data.allFile.nodes[0].relativeDirectory}`}>
                        <Text textTransform='capitalize'> {data.allFile.nodes[0].relativeDirectory} </Text>
                    </BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>
            <Heading size='2xl' textTransform='capitalize' p='4' pt='8'>
                {data.allFile.nodes[0].relativeDirectory}
            </Heading>
            <Wrap p='10' zIndex={0}>
                {
                    data.allFile.nodes.map((file) => {
                        return (
                            <WrapItem>
                                <Card w='sm' direction='column' m='3' flexShrink='0'>

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
      }
    }
  }
`

export default DirectoryPage;