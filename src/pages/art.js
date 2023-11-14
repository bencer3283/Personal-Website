import * as React from 'react';
import { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import { Box, Card, CardBody, ListItem, Text, UnorderedList } from '@chakra-ui/react';
import { SEO } from '../components/seo';
import { Link } from 'gatsby';
import { AnimatePresence, motion } from 'framer-motion';

const ArtPage = () => {

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
    })
    
    return(
        <Layout>
            <Card variant={'unstyled'} ml={10}>
                <CardBody>
                    <Box display={'flex'} position={'relative'} h={'-moz-max-content'}>
                    <AnimatePresence>
                        <motion.div key={title} initial={{y: -80, opacity: 0}} animate={{y: 0, opacity: 1}} exit={{y: 80, opacity: 0}}>
                            <Text fontSize={'72pt'} textTransform={'capitalize'} >{title}</Text>
                        </motion.div>
                    </AnimatePresence>
                    </Box>
                    <Text fontSize={'72pt'}>almost anything.</Text>
                    <Text fontSize={'2xl'}>This is the home of all my dreams and buidings. I hope they make an impact.</Text>
                </CardBody>
            </Card>
            
            <UnorderedList mt={'20vh'} ml={10}>
                <ListItem>
                    <Link to='/portfolio'>
                        <Text fontSize={'3xl'} textDecoration={'underline'}>
                            Interactive Design Engineering Portfolio
                        </Text>
                    </Link>
                    <Text fontSize={'xl'}>Showcasing a curated selection of my projects with an interactive experience built by myself.</Text>
                    <a href='https://github.com/bencer3283/Personal-Website'>
                        <Text fontSize={'xl'} textDecoration={'underline'}>Built with React, Gatsby, Chakra UI and Framer Motion.</Text>
                    </a>
                </ListItem>
                <ListItem mt={4}>
                    <a href='https://photographic-gallery-of-posheng.netlify.app/'>
                        <Text fontSize={'3xl'} textDecoration={'underline'}>
                            Online Photographic Gallery
                        </Text>
                    </a>
                    <Text fontSize={'xl'}>An online image gallery designed & built by myself to exibit my photography.</Text>
                    <a href='https://github.com/bencer3283/ImageGallery'>
                    <Text fontSize={'xl'} textDecoration={'underline'}>Built with Flutter.</Text>
                    </a>
                </ListItem>
                <ListItem mt={4}>
                    <a href='/docs/portfolio.pdf'>
                        <Text fontSize={'3xl'} textDecoration={'underline'}>
                            Art Portfolio
                        </Text>
                    </a>
                    <Text fontSize={'2xl'}>a selection of my artworks curated in 2018. (PDF)</Text>
                </ListItem>
            </UnorderedList>
            
            
            
            
        </Layout>
    )
}

export default ArtPage;

export const Head = () => (
    <SEO title={'Art Creation | Po Sheng Cheng'} pathname={'art'} description={`Po Sheng Cheng's works in photography, drawing and others.`} />
)