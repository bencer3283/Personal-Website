import * as React from 'react';
import { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import { Box, Button, Text, Wrap, WrapItem, Card, CardHeader, CardBody, CardFooter, Heading } from '@chakra-ui/react';
import { SEO } from '../components/seo';
import { graphql, Link } from 'gatsby';
import { AnimatePresence, motion } from 'framer-motion';

const path = require('path');

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
            delay: 1,
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
            <Box ml={10}>
                <AnimatePresence>
                    <motion.div key={title} style={{ position: 'absolute' }} initial={{ y: -80, opacity: 0.5 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 80, opacity: 0 }}>
                        <Text fontSize={{base: '36pt', md: '72pt'}} textTransform={'capitalize'} fontWeight={'bold'}>{title}</Text>
                    </motion.div>
                </AnimatePresence>
                <Text fontSize={{base: '36pt', md: '72pt'}} pt={{ base: '51pt' ,md: '90pt'}} textColor={'#9EC972'}>almost anything.</Text>
                <Text fontSize={{base: 'xl', md: '2xl'}} pt={'5vh'}>This is the home of my dreams and buildings. I hope they make an impact.</Text>
            </Box>
            <Box mt={'20vh'} ml={10}>
            
            <motion.ul variants={container} initial="hidden" animate="show">
                <motion.li variants={item}>
                    <Link to='/portfolio'>
                        <Text fontSize={{ base: '2xl', md: '3xl'}} textDecoration={'underline'}>
                            Interactive Design Engineering Portfolio
                        </Text>
                    </Link>
                    <Text fontSize={'xl'}>Showcasing selected projects with an interactive experience built by myself.</Text>
                    <a href='https://github.com/bencer3283/Personal-Website' target="_blank" rel="noopener noreferrer">
                        <Button variant={'link'} fontSize={'xl'} fontWeight={'normal'}> Built with React, Gatsby, Chakra UI and Framer Motion.</Button>
                    </a>
                </motion.li>
                <motion.li variants={item}>
                    <a href='https://photographic-gallery-of-posheng.netlify.app/' target="_blank" rel="noopener noreferrer">
                        <Text fontSize={{ base: '2xl', md: '3xl'}} textDecoration={'underline'}  mt={4}>
                            Online Photographic Gallery
                        </Text>
                    </a>
                    <Text fontSize={'xl'}>An online image gallery designed & built by myself to exibit my photography.</Text>
                    <a href='https://github.com/bencer3283/ImageGallery' target="_blank" rel="noopener noreferrer">
                    <Button variant={'link'} fontSize={'xl'} fontWeight={'normal'}>Built with Flutter.</Button>
                    </a>
                </motion.li>
                <motion.li variants={item}>
                    <a href='/docs/portfolio.pdf'>
                        <Text fontSize={{ base: '2xl', md: '3xl'}} textDecoration={'underline'}  mt={4}>
                            Art Portfolio
                        </Text>
                    </a>
                    <Text fontSize={'xl'}>A selection of my artworks curated in 2018. (PDF)</Text>
                </motion.li>
            </motion.ul>
            </Box>
            <Wrap p={{base: '0', md: '10'}} pt='10' zIndex={0}>
                {
                    data.allFile.nodes.map((file) => {
                        
                        return (
                            <WrapItem key={file.id}>
                                <Card w={{base: 'md'}} direction='column' m='3' flexShrink={{base: '0'}}>

                                    <CardHeader>
                                        {/* <Text textTransform={'uppercase'} fontSize={'8pt'} noOfLines={1}>
                                            { file.childrenMarkdownRemark[0].frontmatter.keywords }
                                        </Text> */}
                                        <Heading size='md' noOfLines={2} textTransform={'capitalize'}>
                                            { file.childJavascriptFrontmatter.frontmatter.title }
                                        </Heading>
                                        {/* <Text textTransform={'capitalize'} noOfLines={4}>
                                            { file.childrenMarkdownRemark[0].frontmatter.subtitle }
                                        </Text> */}
                                    </CardHeader>

                                    <CardBody>

                                        {/* <Text noOfLines={4}>
                                            {file.childrenMarkdownRemark[0].frontmatter.meta_description}
                                        </Text> */}
                                    </CardBody>

                                    <CardFooter>
                                        <Link> {/*to={`/${file.relativeDirectory}/${file.name}`}>*/}
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

export default ArtPage;

export const query = graphql`query {
    allFile(
      filter: {sourceInstanceName: {eq: "portfolio"}}
      sort: {modifiedTime: DESC}
    ) {
      nodes {
        name
        id
        childJavascriptFrontmatter {
            frontmatter {
                title
            }
        }
      }
    }
  }`

export const Head = () => (
    <SEO title={'Dream, Build, Impact | Po Sheng Cheng'} pathname={'art'} description={`Po Sheng Cheng's works in portfolio of design engineering, photgraphy and art works.`} />
)