import * as React from 'react';
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    HStack,
    Heading,
    Text,
} from '@chakra-ui/react';
import { Link, useStaticQuery, graphql } from 'gatsby';

function DesktopNav({ directory }) {
    const data = useStaticQuery(graphql`query fileSort {
        allFile(sort: {modifiedTime: DESC}, filter: {extension: {eq: "md"}}) {
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
    `);
    return <HStack bg='#9EC972' overflowX='auto'>
        <Link to={`/${directory}`}>
            <Button size='lg' m='4'>
                Learn more
            </Button>
        </Link>
        {
            data.allFile.nodes.map((file) => {
                if(file.relativeDirectory === directory) {
                    return(
                        <Card w={{ base: '40vw', md: '30vw' }} h={{base: '25em', md: '20em'}} direction='column' m='3' flexShrink='0'>
                            
                            <CardHeader>
                                <Heading size='md' noOfLines={{base: 3, md: 2}}>
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
                    )
                    
                }
                else return null;
            })
        }
    </HStack>;
}

export default DesktopNav;