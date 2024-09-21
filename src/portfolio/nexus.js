import * as React from 'react';
import GeneralTabs from '../components/generalTab';
import GeneralTabList from '../components/generalTabList';
import { Tab, TabPanel, TabPanels, Text, Card, CardBody, Box, OrderedList, ListItem, Heading, Button } from '@chakra-ui/react';
import { StaticImage } from 'gatsby-plugin-image';

export default function NexusSection() {
    return(
        <div>
            <Text fontSize={'6xl'} mt={8}>Nexus</Text>
            <Text fontSize={'4xl'}>Intelligent Lost Item Recognition and Management Platform</Text>
            <GeneralTabs defaultTab={0}>
                <GeneralTabList>
                    <Tab>Demo Video</Tab>
                    <Tab>Hardware Concept</Tab>
                    <Tab>User Journey</Tab>
                </GeneralTabList>
                <TabPanels>
                    <TabPanel>
                        <Card w={'5xl'} variant={'unstyled'}>
                            <CardBody>
                            <div style={{ padding: `56.25% 0 0 0`, position: `relative` }}><iframe src="https://player.vimeo.com/video/1011505769?texttrack=en&badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" style={{ position: `absolute`, top: `0`, left: `0`, width: `100%`, height: `100%` }} title="Nexus: Intelligent Lost Item Recognition and Management Platform"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
                            </CardBody>
                        </Card>
                    </TabPanel>
                    <TabPanel>
                        <Card w={'5xl'} maxH={'lg'} direction={'row'} variant={'unstyle'}>
                            <Box m={'2vh'}>
                               <StaticImage src='../images/nexus/platform-render.24.jpg' height={450} imgStyle={{borderRadius: '15px'}}></StaticImage>
                            </Box>
                            <CardBody>
                                <Text ml={4} textAlign={'start'}>
                                The main compenent of Nexus is its modular kiosk that can be easily deployed to a wide range of public facilities. The kiosk is equipped with a human interface and a camera in the item scanning chamber as well as a expandable storage system.
                                </Text>
                            </CardBody>
                        </Card>
                    </TabPanel>
                    <TabPanel>
                        <Card w={'5xl'} maxH={'lg'} direction={'row'} variant={'unstyle'}>
                            <Box m={'2vh'}>
                               <StaticImage src='../images/nexus/user journey.jpg' height={450} imgStyle={{borderRadius: '15px'}}></StaticImage>
                            </Box>
                            <CardBody>
                                <Text ml={4} textAlign={'start'}>
                                The main compenent of Nexus is its modular kiosk that can be easily deployed to a wide range of public facilities. The kiosk is equipped with a human interface and a camera in the item scanning chamber as well as a expandable storage system.
                                </Text>
                            </CardBody>
                        </Card>
                    </TabPanel>
                </TabPanels>
            </GeneralTabs>
            <Text fontSize={'4xl'} mt={6}>System Architecture</Text>
            <GeneralTabs>
                <GeneralTabList>
                    <Tab>System Block Diagram</Tab>
                    <Tab>Hardware EVT</Tab>
                    <Tab>Software EVT</Tab>
                </GeneralTabList>
                <TabPanels>
                    <TabPanel>
                        <Card w={'5xl'} maxH={'lg'} direction={'row'} variant={'unstyle'}>
                            <Box m={'2vh'}>
                                <StaticImage src='../images/nexus/system block diagram.png' height={450} imgStyle={{borderRadius: '15px'}}></StaticImage>

                            </Box>
                            <CardBody>
                                <Text ml={4} textAlign={'start'}>
                                    As the system architect of the project, I laid out system block diagram for the platform. This is the final version in which Raspberry Pi was chosen as the main hardware platform.
                                </Text>
                            </CardBody>
                            
                        </Card>
                    </TabPanel>
                    <TabPanel>
                        <Card w={'5xl'} maxH={'lg'} direction={'row'} variant={'unstyle'}>
                            <Box m={'2vh'}>
                                <StaticImage src='../images/nexus/hardware architecture.png' width={500} imgStyle={{borderRadius: '15px'}}></StaticImage>

                            </Box>
                            <CardBody>
                                <Text ml={4} textAlign={'start'}>
                                    I also laid out the Engineering Validation Test plan for the kiosk hardware. I built several prototypes using different hardware architectures shown here to finalize our engineering parameters and options. The following section shows the prototypes I built.
                                </Text>
                            </CardBody>
                            
                        </Card>
                    </TabPanel>
                    <TabPanel>
                        <Card w={'5xl'} maxH={'lg'} direction={'row'} variant={'unstyle'}>
                            <Box m={'2vh'}>
                                <StaticImage src='../images/nexus/software architecture.jpg' width={500} imgStyle={{borderRadius: '15px'}}></StaticImage>

                            </Box>
                            <CardBody>
                                <Text ml={4} textAlign={'start'}>
                                    Similarily, I also made the EVT plan for our software platform, outlining different options for developing the software services.
                                </Text>
                            </CardBody>
                            
                        </Card>
                    </TabPanel>
                </TabPanels>
            </GeneralTabs>
            <Text fontSize={'4xl'} mt={6}>Hardware Prototyping</Text>
            <Text fontSize={'4xl'} mt={6}>UI Prototyping</Text>
        </div>
    )
}