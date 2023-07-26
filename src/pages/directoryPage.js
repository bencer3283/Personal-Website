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
    Button
} from '@chakra-ui/react';
import { graphql, Link } from 'gatsby';

const DirectoryPage = ({ data }) => {
    return (
        <Layout>
            <Heading size='2xl' textTransform='capitalize' p='4' pt='4em'>
                {data.allFile.nodes[0].relativeDirectory}
            </Heading>
            <Wrap p='10' zIndex={0}>
                {
                    data.allFile.nodes.map((file) => {
                        return (
                            <WrapItem>
                                <Card w='sm' h={{ base: '25em', md: '20em' }} direction='column' m='3' flexShrink='0'>

                                    <CardHeader>
                                        <Heading size='md' noOfLines={{ base: 3, md: 2 }}>
                                            {file.childrenMarkdownRemark[0].frontmatter.title}
                                        </Heading>
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
            meta_description
          }
        }
        name
        relativeDirectory
      }
    }
  }
`

export default DirectoryPage;