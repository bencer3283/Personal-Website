import * as React from 'react';
import { GeneralTabs , ResponsiveTab } from '../components/generalTab';
import GeneralTabList from '../components/generalTabList';
import { Tab, TabPanel, TabPanels, Text, Card, CardBody, Box, OrderedList, ListItem, Heading, Button } from '@chakra-ui/react';
import { StaticImage } from 'gatsby-plugin-image';

export const frontmatter = {
    title: 'PageMate',
    description: 'A smart bookmark that bridges physical and digital books',
    image: '../images/pagemate/scenarioimage.jpg'
}

export default function PagemateSection() {
    return (
        <div>
            <Text fontSize={'6xl'} mt={8}> {frontmatter.title} </Text>
            <Text fontSize={'4xl'}> {frontmatter.description} </Text>
            <GeneralTabs defaultTab={1}>
                <GeneralTabList>
                    <ResponsiveTab>Concept</ResponsiveTab>
                    <ResponsiveTab>Prototype</ResponsiveTab>
                </GeneralTabList>
                <TabPanels>
                    <TabPanel>
                        <Card w={{base: '65vw', md: '5xl'}} variant={'unstyled'}>
                            <CardBody>
                                <StaticImage src='../images/pagemate/concept.jpg' height={500} imgStyle={{ borderRadius: '15px' }}></StaticImage>
                                <Text textAlign={'start'} m={4}>
                                    The PageMate smart bookmark syncs your reading progress between physical book and ebook.
                                    It's a slim and phone-connected bookmark that has a screen showing your latest reading progress on
                                    your connected ebook service. It also has a intuitive touch-sensitive scrollwheel that allows you to quickly update
                                    your ebook with your progress on the physical copy. PageMate
                                    allows users to go from reading a physical book at home to reading the digital
                                    version during their commute without frustration or time delay.
                                </Text>
                            </CardBody>
                        </Card>
                    </TabPanel>
                    <TabPanel>
                        <Card w={{base: '65vw', md: '5xl'}} variant={'unstyled'}>
                            <CardBody>
                                <div style={{ padding: `56.25% 0 0 0`, position: `relative` }}><iframe src="https://player.vimeo.com/video/921592442?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" style={{ position: `absolute`, top: `0`, left: `0`, width: `100%`, height: `100%` }} title="Pagemate Smartbookmart Demo"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
                            </CardBody>
                        </Card>
                    </TabPanel>
                </TabPanels>
            </GeneralTabs>
            <Text fontSize={'4xl'} mt={6}>Prototype engineering</Text>
            <GeneralTabs>
                <GeneralTabList>
                    <ResponsiveTab>Architecture</ResponsiveTab>
                    <ResponsiveTab>Hardware</ResponsiveTab>
                    <ResponsiveTab>Circuit Schematics</ResponsiveTab>
                </GeneralTabList>
                <TabPanels>
                    <TabPanel>
                        <Card w={{base: '65vw', md: '5xl'}} maxH={{md: 'lg'}} direction={{base: 'column', md: 'row'}} variant={'unstyled'}>
                            <Box m={'2vh'}>
                                <StaticImage src='../images/pagemate/architecture.jpg' height={500} imgStyle={{ borderRadius: '15px' }}></StaticImage>
                            </Box>
                            <CardBody textAlign={'start'}>
                                <Heading>
                                    Cloud service
                                </Heading>
                                <Text mt={4}>
                                    The cloud service was developed as a simple node.js app using the Express framework. It has a couple of POST and GET request interface for PageMate and ebook service.
                                    We hosted the service on Render.
                                </Text>
                                <Button variant={'link'}>
                                    <a href='https://github.com/bencer3283/Bookmark-Server' target="_blank" rel="noopener noreferrer">Checkout source code.</a>
                                </Button>
                                <Heading mt={4}>
                                    Hardware
                                </Heading>
                                <Text mt={4}>
                                    The prototype uses an ESP32 as the main processor. The capacitive touch-sensitive scroll wheel is a small touchpad with integrated controller IC.
                                    It communicates with the processor with I2C protocol. After reading the input value from the touchpad, the processor sends a POST request to our cloud service. 
                                </Text>
                            </CardBody>
                        </Card>
                    </TabPanel>
                    <TabPanel>
                        <Card w={{base: '65vw', md: '5xl'}} maxH={{md: 'lg'}} direction={{base: 'column', md: 'row'}} variant={'unstyled'}>
                            <Box m={'2vh'}>
                                <StaticImage src='../images/pagemate/internals.jpg' height={500} imgStyle={{ borderRadius: '15px' }}></StaticImage>
                            </Box>
                            <Box m={'2vh'}>
                                <StaticImage src='../images/pagemate/IMG_3088.jpeg' height={500} imgStyle={{ borderRadius: '15px' }}></StaticImage>
                            </Box>

                        </Card>
                    </TabPanel>
                    <TabPanel>
                        <Card w={{base: '65vw', md: '5xl'}} maxH={'lg'} direction={'column'} variant={'unstyled'}>
                            <Box m={'2vh'}>
                                <StaticImage src='../images/pagemate/pagemate_schematics.png' height={500} imgStyle={{ borderRadius: '15px' }}></StaticImage>
                            </Box>
                            
                        </Card>
                    </TabPanel>
                </TabPanels>
            </GeneralTabs>
            <Text fontSize={'4xl'} mt={6}>User experience</Text>
            <GeneralTabs>
                <GeneralTabList>
                    <ResponsiveTab>Scenario</ResponsiveTab>
                    <ResponsiveTab>Journey Map</ResponsiveTab>
                    <ResponsiveTab>App</ResponsiveTab>
                </GeneralTabList>
                <TabPanels>
                    <TabPanel>
                        <Card w={{base: '65vw', md: '5xl'}} maxH={{md: 'lg'}} direction={{base: 'column', md: 'row'}} variant={'unstyled'}>
                            <Box m={'2vh'}>
                                <StaticImage src='../images/pagemate/scenarioimage.jpg' height={450} imgStyle={{ borderRadius: '15px' }}></StaticImage>
                            </Box>
                            <CardBody>
                                <Text textAlign={'start'} mt={4}>
                                    You are reading a book both with physical copy at home and ebook copy on the go.
                                </Text>
                                <OrderedList ml={4} textAlign={'start'}>
                                    <ListItem>In the morning commute, you turn on the ereader and the ebook automatically updates to where you left off on the physical book last night before you went to bed.</ListItem>
                                    <ListItem>After you get back home, the PageMate bookmark in your physical book displays the page number of your progress on the ebook during commuting.</ListItem>
                                    <ListItem>After you finishing reading the physical book in the night, use the scrollwheel on the PageMate bookmark to enter your latest progress.</ListItem>
                                </OrderedList>
                            </CardBody>
                        </Card>
                    </TabPanel>
                    <TabPanel>
                        <Card w={{base: '65vw', md: '5xl'}} maxH={{md: 'lg'}} direction={{base: 'column', md: 'row'}} variant={'unstyled'}>
                            <Box m={'2vh'}>
                                <StaticImage src='../images/pagemate/NEPPI Team 10.jpg' height={400} imgStyle={{ borderRadius: '15px' }}></StaticImage>
                            </Box>
                            <CardBody>
                                <Text textAlign={'start'} mt={4}>
                                    A study by Bailey, Sahoo, and Jones (2020) conducted a format-switching
                                    experiment to examine how readers switch between different formats of the same
                                    book. They surveyed 100 participants and found that 50 of them owned at least
                                    one book in more than one format, with 48 of those owning a book in physical and
                                    ebook form. Of the 50-person subset, 26 would switch between formats of the
                                    same book, while the remaining 24 would not due to there not being an easy way
                                    to switch quickly. The readers who switched between formats would use
                                    strategies such as remembering plot points, ending at a chapter change, or
                                    placing the books side by side to compare. However, these strategies were
                                    frustrating and the average time to switch between an ebook and a physical book
                                    was over a minute.
                                </Text>
                            </CardBody>
                        </Card>
                    </TabPanel>
                    <TabPanel>
                        <Card w={{base: '65vw', md: '5xl'}} maxH={'lg'} direction={{base: 'column', md: 'row'}} variant={'unstyled'}>
                            <Box m={'2vh'}>
                                <StaticImage src='../images/pagemate/app.jpg' height={450} imgStyle={{ borderRadius: '15px' }}></StaticImage>
                            </Box>
                            <CardBody>
                                <Text textAlign={'start'} mt={4}>
                                    The PageMate companion app allows you to connect to your ebook service, choose which book your bookmark should track and monitor the battery status of your PageMate.
                                </Text>
                            </CardBody>
                        </Card>
                    </TabPanel>
                </TabPanels>
            </GeneralTabs>
            <Text fontSize={'4xl'} mt={6}>Design iterations</Text>
            <GeneralTabs>
                <GeneralTabList>
                    <ResponsiveTab>Explorations</ResponsiveTab>
                    <ResponsiveTab>Final Design</ResponsiveTab>
                </GeneralTabList>
                <TabPanels>
                    <TabPanel>
                        <Card w={{base: '65vw', md: '5xl'}} maxH={{md: 'lg'}} direction={{base: 'column', md: 'row'}} variant={'unstyled'}>
                            <Box m={'2vh'}>
                                <StaticImage src='../images/pagemate/iterations.jpg' height={400} imgStyle={{ borderRadius: '15px' }}></StaticImage>
                            </Box>
                            <Box m={'2vh'}>
                                <StaticImage src='../images/pagemate/iterations2.jpg' height={400} imgStyle={{ borderRadius: '15px' }}></StaticImage>
                            </Box>
                        </Card>

                    </TabPanel>
                    <TabPanel>
                        <Card w={{base: '65vw', md: '5xl'}} maxH={{md: 'lg'}} direction={{base: 'column', md: 'row'}} variant={'unstyled'}>
                            <Box m={'2vh'}>
                                <StaticImage src='../images/pagemate/cmf.jpg' height={500} imgStyle={{ borderRadius: '15px' }}></StaticImage>
                            </Box>
                            <CardBody>
                                <Text textAlign={'start'} mt={4}>
                                    Our prior iterations include one that uses a elasticated loop to fix PageMate on the cover of the book. This means it will be easier to carry it around .
                                    However, on our user testings, our target users found this design has more possibility to cause damages on the book. They also keep their physical copy at home for the most time.
                                    So we switched to this simpler design which PageMate is placed in between pages.
                                </Text>
                                <Text textAlign={'start'} mt={4}>
                                    The choice of using a touch-sensitive scroll wheel is also the result of user testing. 
                                    We had a numpad and an two-button increment/decrement option, but users found the scroll wheel to be the easiest one to use when they need to increase many numbers quickly. 
                                </Text>
                            </CardBody>
                        </Card>
                    </TabPanel>
                </TabPanels>
            </GeneralTabs>
            
            <Card variant={'outline'} mt={6} mb={40}>
                <CardBody>
                    <Heading>Credits</Heading>
                    <Text textAlign={'start'} m={4}>
                        I designed and implemented both the hardware and the cloud service for the prototype. I collaborated with Rinoj Raj Nakarmi
                        on connecting his ebook mock-up to our cloud sevice. He also designed the app prototype. I collaborated with Chin-Ying Chu on several iterations of CAD models of PageMate. She created the rendering images.
                    </Text>
                </CardBody>
            </Card>
        </div>

    )
}