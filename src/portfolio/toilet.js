import * as React from 'react';
import { GeneralTabs, ResponsiveTab } from '../components/generalTab';
import GeneralTabList from '../components/generalTabList';
import { Tab, TabPanel, TabPanels, Text, Card, CardBody, Box, OrderedList, ListItem, Heading, Button, Stack, Center } from '@chakra-ui/react';
import { StaticImage } from 'gatsby-plugin-image';

export const frontmatter = {
    sort: 0.5,
    title: 'Toilet Vision',
    description: 'A tissue paper dispenser that challenges the socially-constructed perception',
    image: '../images/toilet-vision-yolo.jpg'
}

export default function toiletSection() {
    return(
        <div>
            <Text fontSize={'6xl'} mt={8}> {frontmatter.title} </Text>
            <Text fontSize={'4xl'}> {frontmatter.description} </Text>
            <GeneralTabs defaultTab={0}>
                <GeneralTabList>
                    <ResponsiveTab>
                        Demo Video
                    </ResponsiveTab>
                    <ResponsiveTab>
                        Design Intention
                    </ResponsiveTab>
                    <ResponsiveTab>
                        Tech Stack
                    </ResponsiveTab>
                </GeneralTabList>
                <TabPanels>
                    <TabPanel>
                        <Card w={{base: '65vw', md: '5xl'}} variant={'unstyled'}>
                            <CardBody>
                                <div style={{ padding: `56.25% 0 0 0`, position: `relative` }}><iframe style={{ position: `absolute`, top: `0`, left: `0`, width: `100%`, height: `100%` }} src="https://www.youtube.com/embed/ayTdVjmZIbg?si=5rwTXNq1wMkkuGaI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
                            </CardBody>
                        </Card>
                    </TabPanel>
                    <TabPanel>
                        <Card w={{base: '65vw',md: '5xl'}} direction={{base: 'column' ,md: 'row'}} variant={'unstyle'}>
                            <CardBody>
                                <StaticImage src='../images/toilet-vision-dispenser.jpg' height={350} imgStyle={{borderRadius: '15px'}}></StaticImage>
                            </CardBody>
                            <CardBody>
                                <Text ml={4} textAlign={'start'}>
                                    This toilet paper dispenser asks its user a simple question: how clean is enough clean? It logs the number of toilet paper "blocks" used by each patron during their pooping sessions, computes the average number, and then tells you if you should wipe more to reach the collective average.
                                </Text>
                                <Text ml={4} textAlign={'start'}>
                                    We live our lives around various "standards". These standards dictates our behavior and habits. Some of them are derived from our innate values, some of them are used to "measured" other people. In the digital era, more data are available than ever, we are able to observe more closely how other people's mundane routine are like. Does these data enable us to understand each other better? Or does it create more urge for us to match the "standartd"? 
                                </Text>
                            </CardBody>
                        </Card>
                    </TabPanel>
                    <TabPanel>
                        <Card w={{base: '65vw',md: '5xl'}} direction={{base: 'column', md: 'row'}} variant={'unstyle'}>
                            <CardBody>
                                <div style={{ padding: `56.25% 0 0 0`, position: `relative` }}><iframe style={{ position: `absolute`, top: `0`, left: `0`, width: `100%`, height: `100%` }} src="https://www.youtube.com/embed/ECBI_dnbEek?si=3H8avpYfe2h7-Uhe" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay=1; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
                            </CardBody> 
                            <CardBody>
                                <OrderedList textAlign={'start'} m={4}>
                                    <ListItem>A Raspberry Pi AI Camera with IMX500's embedded NPU is installed inside the dispenser.</ListItem>
                                    <ListItem>Around 300 photos of the "seams" of toilet paper rolls are taken under different lighting conditions, and labeled.</ListItem>
                                    <ListItem>A custom YOLOv8 object recognition model was trained, quantized and loaded to the embedded NPU.</ListItem>
                                    <ListItem>Everytime a block of toilet paper is pulled out, the LED lights will flash.</ListItem>
                                    <ListItem>As your number of wipes approaches the collective average, the LED will change from red to green.</ListItem>
                                </OrderedList>
                            </CardBody>
                        </Card>
                    </TabPanel>
                </TabPanels>
            </GeneralTabs>
        </div>
    )
}