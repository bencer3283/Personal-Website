import React from "react"
import { GeneralTabs, ResponsiveTab } from '../components/generalTab';
import GeneralTabList from '../components/generalTabList';
import { Tab, TabPanel, TabPanels, Text, Card, CardBody, Box, OrderedList, ListItem, Heading, Button, Stack, Center, List, UnorderedList } from '@chakra-ui/react';
import { StaticImage } from 'gatsby-plugin-image';

export const frontmatter = {
    sort: 3,
    title: "Online Gallery of My Photography",
    description: 'an interactive and responsive web app for displaying photography',
    image: '../images/gallery.png'
}

const GallerySection = () => {
    return(
        <div>
        <a href='https://photographic-gallery-of-posheng.netlify.app/' target="_blank" rel="noopener noreferrer">
                <Text fontSize={'6xl'} textDecoration={'underline'}>
                    My Online Photographic Gallery
                </Text>
            </a>
            <Text fontSize={'4xl'} mt={6}>Interface design & development</Text>
            <Text>
                The whole digital experience is designed & built by myself as a modern, friendly, intuitive and visually neutral image gallery.
                Click the above link to experience it. 
            </Text>
            <GeneralTabs>
            <GeneralTabList>
                    <ResponsiveTab>Homepage</ResponsiveTab>
                    <ResponsiveTab>Responsive design</ResponsiveTab>
                    <ResponsiveTab>Design detail</ResponsiveTab>
                    <ResponsiveTab>Design system</ResponsiveTab>
                </GeneralTabList>
                <TabPanels>
                    <TabPanel>
                        <Card w={{base: '2xs', md: '5xl'}} variant={'unstyled'}>
                            <CardBody>
                                <StaticImage src='../images/gallery.png' imgStyle={{borderRadius: '15px'}}></StaticImage>

                            </CardBody>
                        </Card>
                    </TabPanel>
                    <TabPanel>
                        <Card w={{base: '2xs', md: '5xl'}} variant={'unstyled'}>
                            <CardBody>
                                <StaticImage src='../images/gallery_responsive.png' imgStyle={{borderRadius: '15px'}}></StaticImage>

                            </CardBody>
                        </Card>
                    </TabPanel>
                    <TabPanel>
                        <Card w={{base: '2xs', md: '5xl'}} variant={'unstyled'}>
                            <CardBody>
                                <StaticImage src='../images/gallery_showcase.png' imgStyle={{borderRadius: '15px'}}></StaticImage>

                            </CardBody>
                        </Card>
                    </TabPanel>
                    <TabPanel>
                        <Card w={{base: '2xs', md: '5xl'}} variant={'unstyled'}>
                            <CardBody>
                                <StaticImage src='../images/gallery_design.png' imgStyle={{borderRadius: '15px'}}></StaticImage>

                            </CardBody>
                        </Card>
                    </TabPanel>
                </TabPanels>
                
            </GeneralTabs>
            <Card variant={'outline'} mt={6}>
                <CardBody>
                    <Heading>Learn more</Heading>
                    <a href='https://github.com/bencer3283/ImageGallery' target="_blank" rel="noopener noreferrer">
                    <Button variant={'link'} m={4}>Source code</Button>
                    </a>
                </CardBody>
            </Card>
            </div>
    )
}


export default GallerySection