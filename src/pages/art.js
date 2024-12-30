import * as React from 'react';
import { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import { Box, Button, Text, Wrap, WrapItem, Card, CardHeader, CardBody, CardFooter, Heading } from '@chakra-ui/react';
import { SEO } from '../components/seo';
import { graphql, Link } from 'gatsby';
import { AnimatePresence, motion } from 'framer-motion';
import { GatsbyImage } from 'gatsby-plugin-image';

const ArtPage = ({data}) => {

    const [title, setTitle] = useState('dream');

    useEffect(() => {
        const interval = setInterval(() => {
            if (title === 'dream') {
                setTitle('build')
            }
            else if (title === 'build') {
                setTitle('impact')
            }
            else {
                setTitle('dream')
            } 
        }, 1500);
        return () => {
            clearInterval(interval);
        }
    });

    const container = {
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: 0.4,
            delay: 0.3,
            when: "beforeChildren"
          }
        }
      }
      
    const item = {
        hidden: { opacity: 0 },
        show: { opacity: 1 },
        transition: { duration: 0.5}
    }
    
    return(
        <Layout>
            <Box ml={{md: 10}}>
                <AnimatePresence>
                    <motion.div key={title} style={{ position: 'absolute' }} initial={{ y: -80, opacity: 0.5 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 80, opacity: 0 }}>
                        <Text fontSize={{base: '36pt', md: '72pt'}} textTransform={'capitalize'} fontWeight={'bold'}>{title}</Text>
                    </motion.div>
                </AnimatePresence>
                <Text fontSize={{base: '36pt', md: '72pt'}} pt={{ base: '51pt' ,md: '90pt'}} textColor={'#9EC972'}>almost anything.</Text>
            </Box>
            <motion.div variants={container} initial="hidden" animate="show">
            <Wrap pl={{md :5}} pt={{base: '15vh', md: '25vh'}} zIndex={0}>
                {
                    data.allFile.nodes.map((file) => {
                        
                        return (
                            <motion.div variants={item}>
                                <WrapItem key={file.id}>
                                <Card w={{base: '85vw', md: '40vw'}} direction='column' m='3' flexShrink={{base: '0'}}>

                                    <CardHeader>
                                        {/* <Text textTransform={'uppercase'} fontSize={'8pt'} noOfLines={1}>
                                            { file.childrenMarkdownRemark[0].frontmatter.keywords }
                                        </Text> */}
                                        <Heading size='md' noOfLines={2} textTransform={'capitalize'}>
                                            { file.childJavascriptFrontmatter.frontmatter.title }
                                        </Heading>
                                        <Text textTransform={'lowercase'} noOfLines={2}>
                                            { file.childJavascriptFrontmatter.frontmatter.description }
                                        </Text>
                                    </CardHeader>

                                    <CardBody>
                                        {file.childJavascriptFrontmatter.frontmatter.image != null && <GatsbyImage image={file.childJavascriptFrontmatter.frontmatter.image.childImageSharp.gatsbyImageData} imgStyle={{borderRadius: '2vh'}}></GatsbyImage>}
                                        {/* <Text noOfLines={4}>
                                            {file.childrenMarkdownRemark[0].frontmatter.meta_description}
                                        </Text> */}
                                    </CardBody>

                                    <CardFooter>
                                        <Link> {/*to={`/${file.relativeDirectory}/${file.name}`}>*/}
                                            <Button variant='solid' as={Link} to={`/portfolio/${file.name}`}> 
                                                Learn more
                                            </Button>
                                        </Link>

                                    </CardFooter>

                                </Card>
                            </WrapItem>
                            </motion.div>
                            
                        )


                    })
                }
            </Wrap>
            </motion.div>
        </Layout>
    )
}

export default ArtPage;

export const query = graphql`query {
    allFile(
      filter: {sourceInstanceName: {eq: "portfolio"}}
      sort: {childrenJavascriptFrontmatter: {frontmatter: {sort: ASC}}}
    ) {
      nodes {
        name
        id
        childJavascriptFrontmatter {
            frontmatter {
                title
                description
                image {
                    childImageSharp {
                        gatsbyImageData(
                            aspectRatio: 1.7
                            placeholder: BLURRED
                            transformOptions: {cropFocus: CENTER}
                        )
                    }
                }
            }
        }
      }
    }
  }`

export const Head = () => (
    <SEO title={'Dream, Build, Impact | Po Sheng Cheng'} pathname={'art'} description={`Po Sheng Cheng's works in portfolio of design engineering, photgraphy and art works.`} />
)