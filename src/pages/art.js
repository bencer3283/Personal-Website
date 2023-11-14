import * as React from 'react';
import { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import { Box, Button, Card, CardBody, ListItem, Text, UnorderedList } from '@chakra-ui/react';
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
            <Box ml={10}>
                <AnimatePresence>
                    <motion.div key={title} style={{ position: 'absolute' }} initial={{ y: -80, opacity: 0.5 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 80, opacity: 0 }}>
                        <Text fontSize={'72pt'} textTransform={'capitalize'} fontWeight={'bold'}>{title}</Text>
                    </motion.div>
                </AnimatePresence>
                <Text fontSize={'72pt'} pt={'90pt'}>almost anything.</Text>
                <Text fontSize={'2xl'}>This is the home of my dreams and buidings. I hope they make an impact.</Text>
            </Box>
            <UnorderedList mt={'20vh'} ml={10}>
                <ListItem>
                    <Link to='/portfolio'>
                        <Text fontSize={'3xl'} textDecoration={'underline'}>
                            Interactive Design Engineering Portfolio
                        </Text>
                    </Link>
                    <Text fontSize={'xl'}>Showcasing a curated selection of my projects with an interactive experience built by myself.</Text>
                    <a href='https://github.com/bencer3283/Personal-Website'>
                        <Button variant={'link'} fontSize={'xl'} fontWeight={'normal'}> Built with React, Gatsby, Chakra UI and Framer Motion.</Button>
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
                    <Button variant={'link'} fontSize={'xl'} fontWeight={'normal'}>Built with Flutter.</Button>
                    </a>
                </ListItem>
                <ListItem mt={4}>
                    <a href='/docs/portfolio.pdf'>
                        <Text fontSize={'3xl'} textDecoration={'underline'}>
                            Art Portfolio
                        </Text>
                    </a>
                    <Text fontSize={'xl'}>a selection of my artworks curated in 2018. (PDF)</Text>
                </ListItem>
            </UnorderedList>
            
            
            
            
        </Layout>
    )
}

export default ArtPage;

export const Head = () => (
    <SEO title={'Dream, Build, Impact | Po Sheng Cheng'} pathname={'art'} description={`Po Sheng Cheng's works in portfolio of design engineering, photgraphy and art works.`} />
)