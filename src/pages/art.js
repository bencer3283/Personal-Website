import * as React from 'react';
import { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import { Box, Button, Text, Wrap, WrapItem, Card, CardHeader, CardBody, CardFooter, Heading } from '@chakra-ui/react';
import { SEO } from '../components/seo';
import { graphql, Link } from 'gatsby';
// import { AnimatePresence, motion } from 'framer-motion';
import { motion, AnimatePresence } from 'motion/react';
import { GatsbyImage } from 'gatsby-plugin-image';

const MotionCard = motion.create(React.forwardRef((props, ref) => (
    <Card {...props} ref={ref}/>
)))

const ArtPage = ({data}) => {

    let initialShadow = data.allFile.nodes.map((file) => 'base')

    const [title, setTitle] = useState('dream');
    // const [shadow, setShadow] = useState(initialShadow);

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
        }, 1000);
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
    console.log(data.allFile.nodes)

    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
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
                    data.allFile.nodes.sort((a, b) => a.childJavascriptFrontmatter.frontmatter.sort - b.childJavascriptFrontmatter.frontmatter.sort).map((file, idx) => {
                        
                        return (
                            <motion.div variants={item}>
                                <WrapItem key={file.id}>
                                <MotionCard 
                                    as={Link} 
                                    to={`/portfolio/${file.name}`} 
                                    w={{base: '85vw', md: '40vw'}} 
                                    direction='column' m='3' 
                                    flexShrink={{base: '0'}} 
                                    key={idx}
                                    // boxShadow={shadow[idx]} 
                                    onMouseEnter={() => {
                                        // setShadow(
                                        //     shadow.map((shadow, index) => {
                                        //         return index == idx ? '2xl' : shadow
                                        //     })
                                        // )
                                    }} 
                                    onMouseLeave={() => {
                                        // setShadow(
                                        //     shadow.map((shadow, index) => {
                                        //         return index == idx ? 'base' : shadow
                                        //     })
                                        // )
                                    }}
                                    whileHover={{
                                        boxShadow: "0px 24px 40px rgb(165 199 126 / 40%)",
                                        scale: 1.01,
                                        transition: {
                                            duration: 0.3
                                        }
                                    }}
                                    whileInView={isMobile? {
                                        boxShadow: "0px 24px 40px rgb(165 199 126 / 40%)",
                                        scale: 1.01,
                                        transition: {
                                            duration: 0.3
                                        }
                                    } : {}}
                                    viewport={{
                                        margin: '10px 0px -80px 0px',
                                        amount: 0.8
                                    }}
                                    >

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
                                        {/* <Link> to={`/${file.relativeDirectory}/${file.name}`}> */}
                                            <Button variant='solid' as={Link} to={`/portfolio/${file.name}`}> 
                                                Learn more
                                            </Button>
                                        {/* </Link> */}

                                    </CardFooter>

                                </MotionCard>
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
      sort: {childJavascriptFrontmatter: {frontmatter: {sort: ASC}}}
    ) {
      nodes {
        name
        id
        childJavascriptFrontmatter {
            frontmatter {
                title
                sort
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