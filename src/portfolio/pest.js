import { Box, Card, CardBody, Center, HStack, Heading, ListItem, OrderedList, Tab, TabPanel, TabPanels, Tabs, Text, Button, Stack } from '@chakra-ui/react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import { GeneralTabs, ResponsiveTab} from '../components/generalTab';
import GeneralTabList from '../components/generalTabList';

export const frontmatter = {
    title: 'Pest Machine'
}

export default function PestSection() {
    return(
        <div>
            <Text fontSize={'6xl'} mt={8}> {frontmatter.title} </Text>
            <Text fontSize={'4xl'}>An IoT machine designed to monitor the amount of bugs in farm fields.</Text>
            <Center mt={6}>
                <Card w={{base: '2xs',md: '5xl'}} direction={{base: 'column', md: 'row'}} variant={'outline'}>
                    <Box m={4}>
                        <StaticImage src='../images/pest.png' height={400} imgStyle={{borderRadius: '15px'}}></StaticImage>
                    </Box>
                    <CardBody>
                        <Text>
                        Historically it's very hard to constantly monitor the amount of flying bugs in outdoor farm fields.This design aims to provide solution while being consistent, weather-proof and connected to existing farm field monitoring IoT grid.
                        </Text>
                    </CardBody>
                </Card>
            </Center>
            <Text fontSize={'4xl'} mt={6}>Iterating the working principle</Text>
            <Center>
            <Card direction={{base: 'column', md: 'row'}} variant={'filled'} w={'6xl'} mt={6} textAlign={'start'}>
                <Stack direction={{base: 'column' ,md: 'row'}} spacing={4}>
                    <Box m={4}>
                        <StaticImage src='../images/pestold.png' height={300} imgStyle={{borderRadius: '10px'}}></StaticImage>
                    </Box>
                    <Box m={4}>
                        <StaticImage src='../images/pestnew.png' height={300} imgStyle={{borderRadius: '10px'}}></StaticImage>
                    </Box>    
                </Stack>
                <CardBody>
                    <Tabs variant={'soft-rounded'}>
                        <GeneralTabList>
                            <Tab>Origin</Tab>
                            <Tab>Iterations</Tab>
                        </GeneralTabList>
                        <TabPanels>
                            <TabPanel>
                                <Text>
                                    The original concept uses a simpler structure, but has problems for stability and consistency of rotational movements.
                                </Text>
                            </TabPanel>
                            <TabPanel>
                                <Text>
                                    The modified design addresses the stability and consistency problem by driving the roll of adhesive paper indirectly.
                                </Text>
                                <Text mt={4}>More iterations were made, including:</Text>
                                <OrderedList>
                                    <ListItem>A knife cutter at the end.</ListItem>
                                    <ListItem>An anchor in the end and guide added.</ListItem>
                                    <ListItem>Another roller added.</ListItem>
                                </OrderedList>
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </CardBody>
            </Card>
            </Center>
            <Text fontSize={'4xl'} mt={6}>Engineering</Text>
            <GeneralTabs>
            <GeneralTabList>
                    <ResponsiveTab>Custom PCB</ResponsiveTab>
                    <ResponsiveTab>Roller</ResponsiveTab>
                    <ResponsiveTab>Power</ResponsiveTab>
                </GeneralTabList>
                <TabPanels>
                    <TabPanel>
                        <Card w={{base: '2xs',md: '5xl'}} variant={'unstyled'}>
                            <CardBody textAlign={'start'}>
                                <Center>
                                    <HStack spacing={4}>
                                        <StaticImage src='../images/pest_layout.png' height={400} imgStyle={{borderRadius: '15px'}}></StaticImage>
                                        <StaticImage src='../images/pest_pcb.jpg' height={400} imgStyle={{borderRadius: '15px'}}></StaticImage>
                                    </HStack>
                                </Center>
                                <Heading mt={6}>Custom Controller and IoT Board</Heading>
                                <Text mt={4}>
                                    I designed a custom PCB that acts as the central controller of the machine. It monitors the environment with various sensors like temperature, humidity and illuminance. More importantly, it includes a XBee wireless connectivity module that allows it to connect to a IoT bridge.
                                </Text>
                            </CardBody>
                        </Card>
                    </TabPanel>
                    <TabPanel>
                        <Card w={{base: '2xs',md: '5xl'}} variant={'unstyled'}>
                            <CardBody textAlign={'start'}>
                                <Center>
                                    <HStack spacing={4}>
                                        <StaticImage src='../images/pestroller1.png' height={400} imgStyle={{borderRadius: '15px'}}></StaticImage>
                                        <StaticImage src='../images/pestroller2.png' height={400} imgStyle={{borderRadius: '15px'}}></StaticImage>
                                        <StaticImage src='../images/pestroller3.png' height={400} imgStyle={{borderRadius: '15px'}}></StaticImage>
                                    </HStack>
                                </Center>
                                <Heading mt={6}>Spring-loaded roller</Heading>
                                <Text mt={4}>
                                    The spring-loaded roller is an essential part of the modified design. These photos shows that the two sets of rollers driving the adhesive paper are spring-loaded to maintain the normal force between them.
                                </Text>
                            </CardBody>
                        </Card>
                    </TabPanel>
                    <TabPanel>
                    <Card w={{base: '2xs',md: '5xl'}} variant={'unstyled'}>
                            <CardBody textAlign={'start'}>
                                <Center>
                                    <StaticImage src='../images/pestpower.png' height={400} imgStyle={{borderRadius: '15px'}}></StaticImage>
                                </Center>
                                <Heading mt={6}>Single power source</Heading>
                                <Text mt={4}>
                                    Another highlight is how all three rotating part is motorized by a single motor with two belts.
                                </Text>
                            </CardBody>
                        </Card>
                    </TabPanel>
                </TabPanels>
                
            </GeneralTabs>
            <Text fontSize={'4xl'} mt={6}>Improving the workflow</Text>
            <GeneralTabs>
            <GeneralTabList>
                    <ResponsiveTab>CAD</ResponsiveTab>
                    <ResponsiveTab>BOM</ResponsiveTab>
                </GeneralTabList>
                <TabPanels>
                    <TabPanel>
                        <Card w={{base: '2xs',md: '5xl'}} variant={'unstyled'}>
                            <CardBody textAlign={'start'}>
                                <Center>
                                        <StaticImage src='../images/pestcad.png' height={400} imgStyle={{borderRadius: '15px'}}></StaticImage>
                                        
                                </Center>
                                <Heading mt={6}>Git-based CAD collaboration</Heading>
                                <Text mt={4}>
                                    The extensive CAD work was shared by me and a collegue. I created a git-based collaboration workflow that allow us to work on different part of the model while complying to the specified dimension at the same time.
                                </Text>
                                <Button variant={'link'}>
                                <a href='https://github.com/bencer3283/Pest-Machine-CAD/tree/split' target="_blank" rel="noopener noreferrer">
                                    
                                        Check out the Git repo.
                                    
                                    
                                </a>
                                </Button>
                            </CardBody>
                        </Card>
                    </TabPanel>
                    <TabPanel>
                    <Card w={{base: '2xs',md: '5xl'}} variant={'unstyled'}>
                            <CardBody textAlign={'start'}>
                                <Center>
                                    <StaticImage src='../images/pestbom.png' height={400} imgStyle={{borderRadius: '15px'}}></StaticImage>
                                </Center>
                                <Heading mt={6}>Bill of Materials managment</Heading>
                                <Text mt={4}>
                                    In order to track the large number of components used in this machine, I created a Notion-based Bill of Materials (BOM) managment database so I can track quotes from vendors as well as changes in the design.
                                </Text>
                            </CardBody>
                        </Card>
                    </TabPanel>
                </TabPanels>
                
            </GeneralTabs>
            <Card variant={'outline'} mt={6} mb={40}>
                <CardBody>
                    <Heading>Learn more</Heading>
                    <Button variant={'link'} m={4}>
                        <Link to='../experiences/Iot/'>About the IoT controller for this machine</Link>
                    </Button>
                </CardBody>
            </Card>
        </div>
    )
}