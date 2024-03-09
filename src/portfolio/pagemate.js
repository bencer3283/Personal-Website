import * as React from 'react';
import GeneralTabs from '../components/generalTab';
import { Tab, TabList, TabPanel, TabPanels, Text, Card, CardBody, Box } from '@chakra-ui/react';
import { StaticImage } from 'gatsby-plugin-image';

export default function PagemateSection() {
    return (
        <div>
            <Text fontSize={'6xl'} mt={8}>PageMate</Text>
            <Text fontSize={'4xl'}>A smart bookmark that bridges physical and digital books.</Text>
            <GeneralTabs>
                <TabList>
                    <Tab>Concept</Tab>
                    <Tab>Prototype</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <Card w={'5xl'} variant={'unstyled'}>
                            <CardBody>
                                <StaticImage src='../images/pagemate/concept.jpg' height={500} imgStyle={{ borderRadius: '15px' }}></StaticImage>
                                <Text textAlign={'start'} m={4}>
                                    By making the switch from one format to another quick
                                    and easy with our PageMate bookmark, readers can effortlessly enjoy both the
                                    experience of the physical book and the convenience of the ebook. Our bookmark
                                    allows users to go from reading a physical book at home to reading the digital
                                    version during their commute without frustration or time delay.
                                </Text>
                            </CardBody>
                        </Card>
                    </TabPanel>
                    <TabPanel>
                        <Card w={'5xl'} variant={'unstyled'}>
                            <CardBody>
                            <div style={{padding:`56.25% 0 0 0`, position:`relative`}}><iframe src="https://player.vimeo.com/video/921592442?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" style={{position:`absolute`,top:`0`,left:`0`,width:`100%`,height:`100%`}} title="Pagemate Smartbookmart Demo"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
                            </CardBody>
                        </Card>
                    </TabPanel>
                </TabPanels>
            </GeneralTabs>
            <Text fontSize={'4xl'} mt={6}>User experience</Text>
            <GeneralTabs>
                <TabList>
                    <Tab>Scenario</Tab>
                    <Tab>Journey Map</Tab>
                    <Tab>App</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <Card w={'5xl'} maxH={'lg'} direction={'row'} variant={'unstyled'}>
                            <Box m={'2vh'}>
                                <StaticImage src='../images/pagemate/scenarioimage.jpg' height={400} imgStyle={{ borderRadius: '15px' }}></StaticImage>
                            </Box>
                            <CardBody>
                                <Text textAlign={'start'} mt={4}>
                                    Hover on the images to learn more.
                                </Text>
                            </CardBody>
                        </Card>
                    </TabPanel>
                    <TabPanel>
                        <Card w={'5xl'} maxH={'lg'} direction={'row'} variant={'unstyled'}>
                            <Box m={'2vh'}>
                                <StaticImage src='../images/pagemate/NEPPI Team 10.jpg' height={400} imgStyle={{ borderRadius: '15px' }}></StaticImage>
                            </Box>
                            <CardBody>
                                <Text textAlign={'start'} mt={4}>
                                    Hover on the images to learn more.
                                </Text>
                            </CardBody>
                        </Card>
                    </TabPanel>
                    <TabPanel>
                        <Card w={'5xl'} maxH={'lg'} direction={'row'} variant={'unstyled'}>
                            <Box m={'2vh'}>
                                <StaticImage src='../images/pagemate/app.jpg' height={400} imgStyle={{ borderRadius: '15px' }}></StaticImage>
                            </Box>
                            <CardBody>
                                <Text textAlign={'start'} mt={4}>
                                    Hover on the images to learn more.
                                </Text>
                            </CardBody>
                        </Card>
                    </TabPanel>
                </TabPanels>
            </GeneralTabs>
            <Text fontSize={'4xl'} mt={6}>Design iterations</Text>
            <GeneralTabs>
                <TabList>
                    <Tab>Explorations</Tab>
                    <Tab>Final CMF</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <Card w={'5xl'} maxH={'lg'} direction={'row'} variant={'unstyled'}>
                            <Box m={'2vh'}>
                                <StaticImage src='../images/pagemate/iterations.jpg' height={400} imgStyle={{ borderRadius: '15px' }}></StaticImage>
                            </Box>
                            <Box m={'2vh'}>
                                <StaticImage src='../images/pagemate/iterations2.jpg' height={400} imgStyle={{ borderRadius: '15px' }}></StaticImage>
                            </Box>
                        </Card>

                    </TabPanel>
                    <TabPanel>
                    <Card w={'5xl'} maxH={'lg'} direction={'row'} variant={'unstyled'}>
                            <Box m={'2vh'}>
                                <StaticImage src='../images/pagemate/cmf.jpg' height={400} imgStyle={{ borderRadius: '15px' }}></StaticImage>
                            </Box>
                            <CardBody>
                                <Text textAlign={'start'} mt={4}>
                                    Hover on the images to learn more.
                                </Text>
                            </CardBody>
                        </Card>
                    </TabPanel>
                </TabPanels>
            </GeneralTabs>
            <Text fontSize={'4xl'} mt={6}>Prototype engineering</Text>
            <GeneralTabs>
                <TabList>
                    <Tab>Architecture</Tab>
                    <Tab>Hardware</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                    <Card w={'5xl'} maxH={'lg'} direction={'row'} variant={'unstyled'}>
                            <Box m={'2vh'}>
                                <StaticImage src='../images/pagemate/architecture.jpg' height={400} imgStyle={{ borderRadius: '15px' }}></StaticImage>
                            </Box>
                            <CardBody>
                                <Text textAlign={'start'} mt={4}>
                                    Hover on the images to learn more.
                                </Text>
                            </CardBody>
                        </Card>
                    </TabPanel>
                    <TabPanel>
                    <Card w={'5xl'} maxH={'lg'} direction={'row'} variant={'unstyled'}>
                            <Box m={'2vh'}>
                                <StaticImage src='../images/pagemate/internals.jpg' height={400} imgStyle={{ borderRadius: '15px' }}></StaticImage>
                            </Box>
                            <Box m={'2vh'}>
                                <StaticImage src='../images/pagemate/IMG_3088.jpeg' height={400} imgStyle={{ borderRadius: '15px' }}></StaticImage>
                            </Box>
                            <CardBody>
                                <Text textAlign={'start'} mt={4}>
                                    Hover on the images to learn more.
                                </Text>
                            </CardBody>
                        </Card>
                    </TabPanel>
                </TabPanels>
            </GeneralTabs>
        </div>

    )
}