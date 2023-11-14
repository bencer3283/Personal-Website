import { Box, Card, CardBody, Center, HStack, Heading, ListItem, OrderedList, Tab, TabList, TabPanel, TabPanels, Tabs, Text, Tooltip } from '@chakra-ui/react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';

export default function PestSection() {
    return(
        <div>
            <Text fontSize={'6xl'} mt={8}>Pest Machine</Text>
            <Text fontSize={'4xl'}>An IoT machine designed to monitor the amount of bugs in farm fields.</Text>
            <Center mt={6}>
                <Card w={'5xl'} direction={'row'} variant={'elevated'}>
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
            <Card direction={'row'} variant={'filled'} w={'6xl'} mt={6}>
                <Box m={4}>
                    <StaticImage src='../images/pestold.png' height={300} imgStyle={{borderRadius: '10px'}}></StaticImage>
                </Box>
                <Box mt={4} mb={4}>
                    <StaticImage src='../images/pestnew.png' height={300} imgStyle={{borderRadius: '10px'}}></StaticImage>
                </Box>
                <CardBody>
                    <Tabs variant={'soft-rounded'}>
                        <TabList>
                            <Tab>Origin</Tab>
                            <Tab>Iterations</Tab>
                        </TabList>
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
            <Text fontSize={'4xl'} mt={6}>Mechanics</Text>
            <Tabs variant={'soft-rounded'} align='center' colorScheme='blue'>
                <TabPanels>
                    <TabPanel>
                        <Card w={'5xl'}>
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
                    <Card w={'5xl'}>
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
                <TabList>
                    <Tab>Roller</Tab>
                    <Tab>Power</Tab>
                </TabList>
            </Tabs>
            <Text fontSize={'4xl'} mt={6}>Improving the workflow</Text>
            <Tabs variant={'soft-rounded'} align='center' colorScheme='blue'>
                <TabPanels>
                    <TabPanel>
                        <Card w={'5xl'}>
                            <CardBody textAlign={'start'}>
                                <Center>
                                        <StaticImage src='../images/pestcad.png' height={400} imgStyle={{borderRadius: '15px'}}></StaticImage>
                                        
                                </Center>
                                <Heading mt={6}>Git-based CAD collaboration</Heading>
                                <Text mt={4}>
                                    The extensive CAD work was shared by me and a collegue. I created a git-based collaboration workflow that allow us to work on different part of the model while complying to the specified dimension at the same time.
                                </Text>
                                <Link to='https://github.com/bencer3283/Pest-Machine-CAD/tree/split'>
                                    <Text as={'u'}>
                                        Check out the Git repo.
                                    </Text>
                                    
                                </Link>
                            </CardBody>
                        </Card>
                    </TabPanel>
                    <TabPanel>
                    <Card w={'5xl'}>
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
                <TabList>
                    <Tab>CAD</Tab>
                    <Tab>BOM</Tab>
                </TabList>
            </Tabs>
        </div>
    )
}