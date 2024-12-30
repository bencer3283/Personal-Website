import * as React from 'react';
import { GeneralTabs, ResponsiveTab } from '../components/generalTab';
import GeneralTabList from '../components/generalTabList';
import { Tab, TabPanel, TabPanels, Text, Card, CardBody, Box, OrderedList, ListItem, Heading, Button, Stack, Center, List, UnorderedList } from '@chakra-ui/react';
import { StaticImage } from 'gatsby-plugin-image';

export const frontmatter = {
    title: 'MITM Router'
}

export default function MITMSection() {
    return(
        <div>
            <Text fontSize={'6xl'} mt={8}> {frontmatter.title} </Text>
            <Text fontSize={'4xl'}>Raising Awareness of the Hidden Cost of Technology</Text>
            <GeneralTabs defaultTab={0}>
                <GeneralTabList>
                    <ResponsiveTab>
                        Concept Video
                    </ResponsiveTab>
                    <ResponsiveTab>
                        Live Demo
                    </ResponsiveTab>
                    <ResponsiveTab>
                        Design Iterations
                    </ResponsiveTab>
                </GeneralTabList>
                <TabPanels>
                    <TabPanel>
                        <Card w={{base: '65vw', md: '5xl'}} variant={'unstyled'}>
                            <CardBody>
                            <div style={{ padding: `56.25% 0 0 0`, position: `relative` }}><iframe src="https://player.vimeo.com/video/1041609425?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" style={{ position: `absolute`, top: `0`, left: `0`, width: `100%`, height: `100%` }} title="mitm-video"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
                            </CardBody>
                        </Card>
                    </TabPanel>
                    <TabPanel>
                        <Card w={{base: '65vw',md: '5xl'}} direction={{base: 'column', md: 'row'}} variant={'unstyle'}>
                            <CardBody>
                                <div style={{ padding: `56.25% 0 0 0`, position: `relative` }}><iframe src="https://player.vimeo.com/video/1042066539?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" style={{ position: `absolute`, top: `0`, left: `0`, width: `100%`, height: `100%` }} title="mitm-live-demo"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
                            </CardBody> 
                            <CardBody>
                                <OrderedList textAlign={'start'} m={4}>
                                    <ListItem>Connect your personal device to the wifi MITM</ListItem>
                                    <ListItem>Go to a website</ListItem>
                                    <ListItem>Observe your internet becomes very slow</ListItem>
                                    <ListItem>The slider is a representation of your data traveling to the server and back to you</ListItem>
                                    <ListItem>After each travel of the slider, a small part of your webpage loads incrementally</ListItem>
                                    <ListItem>Everytime part of your webpage loads, the labour meter goes up.</ListItem>
                                    <ListItem>Your can expedite the data by using your own labour to move the slider to the server and back. Each time you move the slider to the server and back a part of your webpage loads</ListItem>
                                    <ListItem>Alternatively, your can rotate the dial to permanently increase the speed of your internet at the cost of a louder fan noise.</ListItem>
                                </OrderedList>
                            </CardBody>
                        </Card>
                    </TabPanel>
                    <TabPanel>
                        <Card w={{base: '65vw',md: '5xl'}} direction={{base: 'column' ,md: 'row'}} variant={'unstyle'}>
                            <Stack m={{base: '1vh' ,md: '2vh'}} direction={'column'}>
                               <StaticImage src='../images/mitm/sketches-1.jpg' width={600}></StaticImage>
                               <StaticImage src='../images/mitm/FLOW CHART.jpg' height={350} imgStyle={{borderRadius: '15px'}}></StaticImage>
                            </Stack>
                            <CardBody>
                                <Text ml={4} textAlign={'start'}>
                                This work took inspiration from Kate Crawford's Anatomy of AI system and Thijs Biersteker's MB {'>'} CO2. I wanted to present the hidden cost of technology to people in a tangible and interactive way in order to confront people with the question "do we really need so many technology advancement?" 
                                </Text>
                            </CardBody>
                        </Card>
                    </TabPanel>
                </TabPanels>
            </GeneralTabs>
            <Text fontSize={'4xl'} mt={6}>Product Design</Text>
            <GeneralTabs defaultTab={2}>
                <GeneralTabList>
                    <ResponsiveTab>Mechanical Structure</ResponsiveTab>
                    <ResponsiveTab>Custom Mechanisms</ResponsiveTab>
                    <ResponsiveTab>Design Language</ResponsiveTab>
                </GeneralTabList>
                <TabPanels>
                    <TabPanel>
                        <Card w={{base: '65vw',md: '5xl'}} maxH={'lg'} direction={{base: 'column' ,md: 'row'}} variant={'unstyle'}>
                            <Box m={'2vh'}>
                                <StaticImage src='../images/mitm/chasis.png' height={350} imgStyle={{borderRadius: '15px'}}></StaticImage>
                            </Box>
                            <CardBody>
                                <Text ml={4} textAlign={'start'}>
                                    Due to the interactive nature of the device, it has to be mechanically reliable to withstand constant interaction from users in a museum or exibition setting. I modeled every component thoroughly to ensure that the 3D printed chasis provide a stable structure to support extensive user interactions.
                                </Text>
                            </CardBody>
                            
                        </Card>
                    </TabPanel>
                    <TabPanel>
                        <Card w={{base: '65vw',md: '5xl'}} maxH={'2xl'} direction={{base: 'column' ,md: 'row'}} variant={'unstyle'}>
                            <CardBody>
                                <div style={{ padding: `56.25% 0 0 0`, position: `relative` }}><iframe src="https://player.vimeo.com/video/1041613274?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" style={{ position: `absolute`, top: `0`, left: `0`, width: `100%`, height: `100%` }} title="mitm - shaft coupling"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
                            </CardBody>
                            <CardBody>
                                <Text ml={4} textAlign={'start'}>
                                    Several complex mechanisms are required to enable the various tangible user interactions of the device. For example, the live labour hour meter requires a stepper motors to accurately rotate the meter to a specific number. I made a custom shaft coupling (the silver bar in the middle of the video) to connect the stepper motor and the meter to ensure the mechanism is reliable.
                                </Text>
                            </CardBody>
                            
                        </Card>
                    </TabPanel>
                    <TabPanel>
                        <Card w={{base: '65vw',md: '5xl'}} direction={'column'} variant={'unstyle'}>
                            <Stack direction={{base: 'column', md: 'row'}} m={4}>
                                <StaticImage src='../images/mitm/mitm-2161.jpg' width={500} imgStyle={{borderRadius: '15px'}}></StaticImage>
                                <StaticImage src='../images/mitm/mitm-2197.jpg' width={500} imgStyle={{borderRadius: '15px'}}></StaticImage>
                            </Stack>
                            <CardBody>
                                <Text ml={4} textAlign={'start'}>
                                    I wanted to exploit people's familiarity with the internet to surprise them when they see their internet data delayed and represented by this physical device. Hence the design language employed here meant to make the device easily blend into people's daily, domestic settings. Inspirations were also taken from some retro tech devices in order to remind people that modern technology still runs on old school resources and labour.
                                </Text>
                            </CardBody>
                            
                        </Card>
                    </TabPanel>
                </TabPanels>
            </GeneralTabs>
            <Text fontSize={'4xl'} mt={6}>System Architecture</Text>
            <GeneralTabs>
                <GeneralTabList>
                    <ResponsiveTab>Microcontrollers</ResponsiveTab>
                    <ResponsiveTab>Software Stack</ResponsiveTab>
                    <ResponsiveTab>Power Supply</ResponsiveTab>
                </GeneralTabList>
                <TabPanels>
                    <TabPanel>
                        <Card w={{base: '65vw',md: '5xl'}} direction={'column'} variant={'unstyled'}>
                        <Stack direction={{base: 'column', md: 'row'}} m={4}>
                                <StaticImage src='../images/mitm/Block diagram.jpg' width={600} imgStyle={{borderRadius: '15px'}}></StaticImage>
                                <StaticImage src='../images/mitm/mess.jpg' width={400} imgStyle={{borderRadius: '15px'}}></StaticImage>
                            </Stack>
                            <CardBody ml={8}>
                            <Text textAlign={'start'}>
                                Due to the number of input/output device involved and the computation required to run a router with proxy server, several microcontrollers were used in addition to the Raspberry Pi 5 to perform the following function:
                                <OrderedList textAlign={'start'} mt={2}>
                                    <ListItem>An ESP32-S3 was used to act as a secondary wifi chip for the Raspberry Pi 5</ListItem>
                                    <ListItem>An RP2040 was used to control the motorized potentiometer and the stepper motor</ListItem>
                                    <ListItem>An ESP8266 was used to detect the touch pad on the slider</ListItem>
                                </OrderedList>
                            </Text>
                            </CardBody>
                        </Card>

                    </TabPanel>
                    <TabPanel>
                        <Card w={{base: '65vw',md: '5xl'}} maxH={'2xl'} direction={'column'} variant={'unstyled'}>
                            <CardBody ml={8}>
                            <UnorderedList textAlign={'start'}>
                                    <ListItem>The Raspberry Pi runs the wifi hotspot.</ListItem>
                                    <ListItem>A mitmproxy proxy server hosted on the Raspberry Pi intercept http/https packets going through the device and send command to the RP2040 to control the input/output interfaces.</ListItem>
                                    <ListItem>ESP32-S3 is programmed with the esp-hosted firmware to act as a secondary wifi chip of the Raspberry Pi.</ListItem>
                                </UnorderedList>
                            </CardBody>
                        </Card>

                    </TabPanel>
                    <TabPanel>
                        <Card w={{base: '65vw',md: '5xl'}} maxH={'2xl'} direction={'column'} variant={'unstyled'}>
                            <CardBody ml={8}>
                            <Text textAlign={'start'}>
                                The power supply schema in the device is complicated by the different voltage and current requirement of various components, for example the motorized potentiometer operates at 12v for its motor but the potetiometer has to be operated at logic voltage level of the RP2040 microcontroller. I ended up using a STUSB4500 USB-PD controller to regulate power from a USB-PD wall adapter.
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
                        <a href='https://github.com/bencer3283/MITM-Delayer' target="_blank" rel="noopener noreferrer">Raspberry Pi proxy server code</a>
                    </Button>
                    <Button variant={'link'} m={4}>
                        <a href='https://github.com/bencer3283/MITM-Actuators' target="_blank" rel="noopener noreferrer">Microcontroller code</a>
                    </Button>
                    <Button variant={'link'} m={4}>
                        <a href='https://thijsbiersteker.com/mbco2' target="_blank" rel="noopener noreferrer">MB {'>'} CO2, Thijs Biersteker</a>
                    </Button>
                    <Button variant={'link'} m={4}>
                        <a href='https://www.moma.org/collection/works/401279?classifications=any&date_begin=Pre-1850&date_end=2024&include_uncataloged_works=false&on_view=false&q=ai&recent_acquisitions=false&with_images=true'>Anatomy of an AI System, Kate Crawford & Vladan Joler</a>
                    </Button>
                </CardBody>
            </Card>
        </div>
    )
}