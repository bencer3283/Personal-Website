import * as React from 'react';
import { GeneralTabs, ResponsiveTab } from '../components/generalTab';
import GeneralTabList from '../components/generalTabList';
import { Tab, TabPanel, TabPanels, Text, Card, CardBody, Box, OrderedList, ListItem, Heading, Button, Stack, Center } from '@chakra-ui/react';
import { StaticImage } from 'gatsby-plugin-image';

export const frontmatter = {
    sort: 0.4,
    title: 'Frictional Intelligence',
    description: 'Physical embodiment and tangible human interface for LLMs',
    image: '../images/thesis/DSC_3373.jpg'
}

export default function ObjectifiedAISection() {
    return(
        <div>
            <Text fontSize={'6xl'} mt={8}> {frontmatter.title} </Text>
            <Text fontSize={'4xl'}> {frontmatter.description} </Text>
            <Text fontSize={'2xl'} mt={6}>Visit the <Button variant={'link'} fontSize={'2xl'}>
                <a href='https://objectified-ai.netlify.app' target="_blank" rel="noopener noreferrer">project website</a></Button> to learn about the ideas and outcome of this project. This page focuses on process documentation.</Text>
            <Center mt={6}>
                <Card w={{base: '65vw', md: '5xl'}} direction={{base: 'column', md: 'row'}} variant={'outline'}>
                    <CardBody>
                        <div style={{ padding: `56.25% 0 0 0`, position: `relative` }}><iframe style={{ position: `absolute`, top: `0`, left: `0`, width: `100%`, height: `100%` }} src="https://www.youtube.com/embed/1S7cqKz_r4k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
                    </CardBody>
                </Card>
            </Center>
            <Text fontSize={'4xl'} mt={6}>BLDC and Gesture/Touch Sensing PCB</Text>
            This PCB integrates a BLDC driver, a hardware-based FOC motion controller, and three ToF sensors along with touch sensing and USB-C Power Delivery capabilities of STM32 microcontrollers. It is used across several different components of the Frictional Intelligence machine.
            <GeneralTabs>
                <GeneralTabList>
                    <ResponsiveTab>
                        Finished Assembly
                    </ResponsiveTab>
                    <ResponsiveTab>
                        Layout
                    </ResponsiveTab>
                    <ResponsiveTab>
                        ECAD-MCAD Co-Design
                    </ResponsiveTab>
                </GeneralTabList>
                <TabPanels>
                    <TabPanel>
                        <Card w={{base: '65vw', md: '5xl'}} variant={'unstyled'}>
                            <CardBody>
                                <StaticImage src='../images/thesis/DSC_3248.jpg' height={600} imgStyle={{borderRadius: '15px'}} /> 
                            </CardBody>
                        </Card>
                    </TabPanel>
                    <TabPanel>
                        <Card w={{base: '65vw', md: '5xl'}} variant={'unstyled'}>
                            <CardBody>
                                <StaticImage src='../images/thesis/documentation_Page_5.jpg' height={600} imgStyle={{borderRadius: '15px'}} /> 
                            </CardBody>
                        </Card>
                    </TabPanel>
                    <TabPanel>
                        <Card w={{base: '65vw', md: '5xl'}} variant={'unstyled'}>
                            <CardBody>
                                <Box
                                    as="video"
                                    src="/touch_scroll_wheel_explode.mp4"
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
                </TabPanels>
            </GeneralTabs>
            <Text fontSize={'4xl'} mt={6}>Proof of Concept Prototypes</Text>
            <GeneralTabs>
                <GeneralTabList>
                    <ResponsiveTab>
                        Sketch Model
                    </ResponsiveTab>
                    <ResponsiveTab>
                        Interactive Model
                    </ResponsiveTab>
                    <ResponsiveTab>
                        Early Prototype
                    </ResponsiveTab>
                </GeneralTabList>
                <TabPanels>
                    <TabPanel>
                        <Card w={{base: '65vw', md: '5xl'}} variant={'unstyled'} direction={{base: 'column', md: 'row'}}>
                            <CardBody>
                                <StaticImage src='../images/thesis/IMG_6493.jpg' height={600} imgStyle={{borderRadius: '15px'}} /> 
                            </CardBody>
                            <CardBody alignSelf={'center'}>
                                <Text textAlign={'start'} m={6}>What ended up being the AI machine was originally imagined as a control box. This is one of the crude early models I made to try to communicate how the intefaces would work and test the concepts. </Text>
                            </CardBody>
                        </Card>
                    </TabPanel>
                    <TabPanel>
                        <Card w={{base: '65vw', md: '5xl'}} variant={'unstyled'} direction={{base: 'column', md: 'row'}}>
                            <CardBody>
                                <div style={{ padding: `56.25% 0 0 0`, position: `relative` }}><iframe style={{ position: `absolute`, top: `0`, left: `0`, width: `100%`, height: `100%` }} src="https://www.youtube.com/embed/gFgd65yUYEU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
                            </CardBody>
                            <CardBody alignSelf={'center'}>
                                <Text textAlign={'start'} m={6}>A more detailed model was then developed with off-the-shelf parts to further test the interactions.</Text>
                            </CardBody>
                        </Card>
                    </TabPanel>
                    <TabPanel>
                        <Card w={{base: '65vw', md: '5xl'}} variant={'unstyled'} direction={{base: 'column', md: 'row'}}>
                            <CardBody>
                                <StaticImage src='../images/thesis/IMG_6502.jpg' height={600} imgStyle={{borderRadius: '15px'}} /> 
                            </CardBody>
                            <CardBody alignSelf={'center'}>
                                <Text textAlign={'start'} m={6}>Moving on to the final design, since this project is about manifesting the internal mechanics of LLMs, I decided to utilize the aesthetics of industrial machineries to make evident that AI should be controlled and examined by human operators. <br />The physical scale of the machine is also intentionally large so that the individual interfaces don't just become recognizable daily objects.</Text>
                            </CardBody>
                        </Card>
                    </TabPanel>
                </TabPanels>
            </GeneralTabs>
            <Text fontSize={'4xl'} mt={6}>Multi-Axis Embedding Console</Text>
            <Text textAlign={'start'} my={4}>
                This is an early exploration for different type of tangible interfaces.
            </Text>
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
                    <Heading>To know more</Heading>
                    <Text textAlign={'start'} m={4}>
                        This is my thesis project for Master of Industrial Design degree from Rhode Island School of Design.
                    </Text>
                    <Button variant={'link'} m={4}>
                        <a href='https://objectified-ai.netlify.app' target="_blank" rel="noopener noreferrer">Project Website</a>
                    </Button>
                    <Button variant={'link'} m={4}>
                        <a href='https://github.com/bencer3283/abacus-pcb.git' target="_blank" rel="noopener noreferrer">Embedding console PCB design files</a>
                    </Button>
                    <Button variant={'link'} m={4}>
                        <a href='https://github.com/bencer3283/Machine-like-LLM-PCB.git' target="_blank" rel="noopener noreferrer">Frictional Machine PCB design files</a>
                    </Button>
                    <Button variant={'link'} m={4}>
                        <a href='https://github.com/bencer3283/ai-tui-thesis/blob/main/151.pdf' target="_blank" rel="noopener noreferrer">Thesis paper</a>
                    </Button>
                </CardBody>
            </Card>
        </div>
    )
}