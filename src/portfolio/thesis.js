import * as React from 'react';
import { GeneralTabs, ResponsiveTab } from '../components/generalTab';
import GeneralTabList from '../components/generalTabList';
import { Tab, TabPanel, TabPanels, Text, Card, CardBody, Box, OrderedList, ListItem, Heading, Button, Stack, Center } from '@chakra-ui/react';
import { StaticImage } from 'gatsby-plugin-image';

export const frontmatter = {
    sort: 0.4,
    title: 'Work in Progress: Objectified AI',
    description: 'Physical embodiment and tangible user interface for LLM',
    image: '../images/thesis/IMG_6283.jpg'
}

export default function ObjectifiedAISection() {
    return(
        <div>
            <Text fontSize={'6xl'} mt={8}> {frontmatter.title} </Text>
            <Text fontSize={'4xl'}> {frontmatter.description} </Text>
            <Text fontSize={'4xl'} mt={6}>Multi-Axis Embedding Console</Text>
            <GeneralTabs defaultTab={0}>
                <GeneralTabList>
                    <ResponsiveTab>
                        Components
                    </ResponsiveTab>
                    <ResponsiveTab>
                        CAD Animation
                    </ResponsiveTab>
                    <ResponsiveTab>
                        Videos
                    </ResponsiveTab>
                </GeneralTabList>
                <TabPanels>
                    <TabPanel>
                        <Card w={{base: '65vw', md: '5xl'}} variant={'unstyled'}>
                            <CardBody>
                                <StaticImage src='../images/thesis/IMG_6279.jpg' height={600} imgStyle={{borderRadius: '15px'}} /> 
                            </CardBody>
                        </Card>
                    </TabPanel>
                    <TabPanel>
                        <Card w={{base: '65vw', md: '5xl'}} variant={'unstyled'}>
                            <CardBody>
                                <Box
                                    as="video"
                                    src="/motorized-6col.mp4"
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    width="100%"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '15px' }}
                                />
                            </CardBody>
                        </Card>
                    </TabPanel>
                    <TabPanel>
                        <Card w={{base: '65vw', md: '5xl'}} direction={{base: 'column', md: 'row'}} variant={'unstyle'}>
                            <Box
                                as="video"
                                src="/webvideo.mov"
                                autoPlay
                                loop
                                muted
                                playsInline
                                w={{ base: '100%', md: '60%' }}
                                style={{ height: '100%', objectFit: 'cover', borderRadius: '15px' }}
                                m={'6px'}
                            />
                            <Box
                                as="video"
                                src="/abacusbreadboard.mov"
                                autoPlay
                                loop
                                muted
                                playsInline
                                w={{ base: '100%', md: '25%' }}
                                m={'6px'}
                                style={{ height: '100%', objectFit: 'cover', borderRadius: '15px' }}
                            />
                        </Card>
                    </TabPanel>
                    
                </TabPanels>
            </GeneralTabs>
            <GeneralTabs defaultTab={0}>
                <GeneralTabList>
                    <ResponsiveTab>
                        Schematics - Main
                    </ResponsiveTab>
                    <ResponsiveTab>
                        Schematics - uC
                    </ResponsiveTab>
                    <ResponsiveTab>
                        Schematics - Hall
                    </ResponsiveTab>
                    <ResponsiveTab>
                        Schematics - Power
                    </ResponsiveTab>
                    <ResponsiveTab>
                        Layout
                    </ResponsiveTab>
                </GeneralTabList>
                <TabPanels>
                    <TabPanel>
                        <Card w={{base: '65vw', md: '5xl'}} variant={'unstyled'}>
                            <CardBody>
                                <StaticImage src='../images/thesis/Job1_Page_1.jpg' height={600} imgStyle={{borderRadius: '15px'}} /> 
                            </CardBody>
                        </Card>
                    </TabPanel>
                    <TabPanel>
                        <Card w={{base: '65vw', md: '5xl'}} variant={'unstyled'}>
                            <CardBody>
                                <StaticImage src='../images/thesis/Job1_Page_2.jpg' height={600} imgStyle={{borderRadius: '15px'}} /> 
                            </CardBody>
                        </Card>
                    </TabPanel>
                    <TabPanel>
                        <Card w={{base: '65vw', md: '5xl'}} variant={'unstyled'}>
                            <CardBody>
                                <StaticImage src='../images/thesis/Job1_Page_3.jpg' height={600} imgStyle={{borderRadius: '15px'}} /> 
                            </CardBody>
                        </Card>
                    </TabPanel>
                    <TabPanel>
                        <Card w={{base: '65vw', md: '5xl'}} variant={'unstyled'}>
                            <CardBody>
                                <StaticImage src='../images/thesis/Job1_Page_4.jpg' height={600} imgStyle={{borderRadius: '15px'}} /> 
                            </CardBody>
                        </Card>
                    </TabPanel>
                    <TabPanel>
                        <Card w={{base: '65vw', md: '5xl'}} variant={'unstyled'}>
                            <CardBody>
                                <StaticImage src='../images/thesis/Job1_Page_5.jpg' height={600} imgStyle={{borderRadius: '15px'}} /> 
                            </CardBody>
                        </Card>
                    </TabPanel>
                </TabPanels>
            </GeneralTabs>
            <Card variant={'outline'} mt={6}>
                <CardBody>
                    <Heading>This is a work-in-progess project</Heading>
                    <Text textAlign={'start'} m={4}>
                        More infomration can be found in the following link.  
                    </Text>
                    <Button variant={'link'} m={4}>
                        <a href='https://objectified-ai.netlify.app' target="_blank" rel="noopener noreferrer">Project Website</a>
                    </Button>
                    <Button variant={'link'} m={4}>
                        <a href='https://github.com/bencer3283/abacus-pcb.git' target="_blank" rel="noopener noreferrer">PCB design files</a>
                    </Button>
                </CardBody>
            </Card>
        </div>
    )
}