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
                keywords
                subtitle
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
            <Button size='sm' m='4'>
                Learn more
            </Button>
        </Link>
        {
            data.allFile.nodes.map((file) => {
                if(file.relativeDirectory === directory) {
                    return(
                        <Card w={{ base: '30vw', md: '20vw' }} h={{base: '25em', md: '20em'}} direction='column' m='3' flexShrink='0'>
                            
                            <CardHeader>
                                <Text textTransform={'uppercase'} fontSize={'8pt'} noOfLines={{base: 3, md: 2}}>
                                    { file.childrenMarkdownRemark[0].frontmatter.keywords }
                                </Text>
                                <Heading size='md' noOfLines={{base: 4, md: 3}}>
                                    {file.childrenMarkdownRemark[0].frontmatter.title}
                                </Heading>
                            </CardHeader>
                            
                            <CardBody>
                                <Text noOfLines={{base: 3, md: 2}}>
                                    {file.childrenMarkdownRemark[0].frontmatter.subtitle}
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