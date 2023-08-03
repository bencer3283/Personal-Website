import * as React from 'react';
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Stack,
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
            id
          }
        }
      }
    `);
    return <Stack direction={{base: 'column', md: 'row'}} bg='#9EC972' overflow={'auto'}>
        <Link to={`/${directory}`}>
            <Button size={{base: 'xs', md: 'sm'}} m={{base: '1', md: '3'}}>
                Learn more
            </Button>
        </Link>
        {
            data.allFile.nodes.map((file) => {
                if(file.relativeDirectory === directory) {
                    return(
                        <Card key={file.id} w={{ base: '', md: '20vw' }} h={{base: '', md: '22em'}} direction='column' m={{base: '1', md: '3'}} flexShrink='0'>
                            
                            <CardHeader>
                                <Text textTransform={'uppercase'} fontSize={'8pt'} noOfLines={{base: 3, md: 2}}>
                                    { file.childrenMarkdownRemark[0].frontmatter.keywords }
                                </Text>
                                <Heading size='md' noOfLines={{base: 1, md: 3}}>
                                    {file.childrenMarkdownRemark[0].frontmatter.title}
                                </Heading>
                            </CardHeader>
                            
                            <CardBody hideBelow={'md'}>
                                <Text noOfLines={'3'}>
                                    {file.childrenMarkdownRemark[0].frontmatter.subtitle}
                                </Text>
                            </CardBody>
                            
                            <CardFooter>
                                <Link to={`/${file.relativeDirectory}/${file.name}`}>
                                    <Button variant='outline' size={{base: 'xs', md: 'sm'}}>
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
    </Stack>;
}

export default DesktopNav;