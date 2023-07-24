import * as React from 'react';
import {
    Button,
    Card,
    CardBody,
    CardFooter,
    HStack,
    Stack,
    Heading,
    Text
} from '@chakra-ui/react';
import { StaticImage } from 'gatsby-plugin-image';
import { Link, useStaticQuery, graphql } from 'gatsby';

function DesktopNav() {
    const data = useStaticQuery(graphql`query {
        allMarkdownRemark {
          nodes {
            parent {
              ... on File {
                name
                relativeDirectory
              }
            }
            frontmatter {
              title
              meta_description
            }
          }
        }
      }
    `);
    return <HStack maxH='sm' bg='#9EC972' overflowX='auto' hideBelow='md'>
        {
            data.allMarkdownRemark.nodes.map((md) => {
                if(md.parent.relativeDirectory === 'experiences') {
                    return(
                        <Card w='sm' direction='row' m='4' flexShrink='0'>
                            <Stack>
                                <CardBody>
                                    <Heading size='md'>
                                        {md.frontmatter.title}
                                    </Heading>
                                    <Text>
                                        {md.frontmatter.meta_description}
                                    </Text>
                                </CardBody>
                                <CardFooter>
                                    <Link to={`/${md.parent.relativeDirectory}/${md.parent.name}`}>
                                        <Button variant='outline'>
                                            Learn more
                                        </Button>
                                    </Link>
                                    
                                </CardFooter>
                            </Stack>
                        </Card>
                    )
                }
            })
        }
        

        <Card w='sm' direction='row' m='4' flexShrink='0'>
            <StaticImage src='../images/%%.png' height='200' />
            <Stack>
                <CardBody>
                    <Heading size='md'>
                        Page Card Heading
                    </Heading>
                    <Text>
                        An excerpt of the page this card is heading to.
                    </Text>
                </CardBody>
                <CardFooter>
                    <Button variant='outline'>
                        Learn more
                    </Button>
                </CardFooter>
            </Stack>
        </Card>
        <Card w='sm' direction='row' m='4' flexShrink='0'>
            <StaticImage src='../images/%%.png' height='200' />
            <Stack>
                <CardBody>
                    <Heading size='md'>
                        Page Card Heading
                    </Heading>
                    <Text>
                        An excerpt of the page this card is heading to.
                    </Text>
                </CardBody>
                <CardFooter>
                    <Button variant='outline'>
                        Learn more
                    </Button>
                </CardFooter>
            </Stack>
        </Card>
    </HStack>;
}

export default DesktopNav;