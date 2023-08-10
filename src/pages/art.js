import * as React from 'react';
import Layout from '../components/Layout';
import { Text } from '@chakra-ui/react';
import { SEO } from '../components/seo';

const ArtPage = () => {
    return(
        <Layout>
            <a href='https://photographic-gallery-of-posheng.netlify.app/'>
                <Text fontSize={'2xl'} textDecoration={'underline'}>
                    Online Photographic Gallery
                </Text>
            </a>
            <a href='/docs/portfolio.pdf'>
            <Text fontSize={'2xl'} textDecoration={'underline'}>
                    Art Portfolio
                </Text>
            </a>
        </Layout>
    )
}

export default ArtPage;

export const Head = () => (
    <SEO title={'Art Creation | Po Sheng Cheng'} pathname={'art'} description={`Po Sheng Cheng's works in photography, drawing and others.`} />
)