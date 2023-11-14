import * as React from 'react';
import Layout from '../components/Layout';
import { Card, CardBody, ListItem, Text, UnorderedList } from '@chakra-ui/react';
import { SEO } from '../components/seo';
import { Link } from 'gatsby';

const ArtPage = () => {
    return(
        <Layout>
            <Card variant={'unstyled'} ml={10} mt={30}>
                <CardBody>
                    <Text fontSize={'72pt'}>Dream</Text>
                    <Text fontSize={'72pt'}>Build</Text>
                    <Text fontSize={'72pt'}>Impact</Text>
                    <Text fontSize={'72pt'}>almost anything.</Text>
                    <Text fontSize={'2xl'}>This is the place of all of my dreams, buidings and impact.</Text>
                </CardBody>
            </Card>
            
            <UnorderedList mt={10}>
                <ListItem>
                    <Link to='/portfolio'>
                        <Text fontSize={'3xl'} textDecoration={'underline'}>
                            Interactive Design Engineering Portfolio
                        </Text>
                    </Link>
                    <Text fontSize={'2xl'}>showcasing a curated selection of my projects with an interactive experience built by myself.</Text>
                    <a href='https://github.com/bencer3283/Personal-Website'>
                        <Text fontSize={'2xl'} textDecoration={'underline'}>source code</Text>
                    </a>
                </ListItem>
                <ListItem mt={4}>
                    <a href='https://photographic-gallery-of-posheng.netlify.app/'>
                        <Text fontSize={'3xl'} textDecoration={'underline'}>
                            Online Photographic Gallery
                        </Text>
                    </a>
                    <Text fontSize={'2xl'}>an online image gallery designed & built by myself to exibit my photography.</Text>
                    <a href='https://github.com/bencer3283/ImageGallery'>
                    <Text fontSize={'2xl'} textDecoration={'underline'}>source code</Text>
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