import * as React from 'react';
import { GeneralTabs, ResponsiveTab } from '../components/generalTab';
import GeneralTabList from '../components/generalTabList';
import { Tab, TabPanel, TabPanels, Text, Card, CardBody, Box, OrderedList, ListItem, Heading, Button, Stack, Center } from '@chakra-ui/react';
import { StaticImage } from 'gatsby-plugin-image';

export const frontmatter = {
    title: 'Nexus'
}

export default function NexusSection() {
    return(
        <div>
            <Text fontSize={'6xl'} mt={8}> {frontmatter.title} </Text>
            <Text fontSize={'4xl'}>Intelligent Lost Item Recognition and Management Platform</Text>
            <GeneralTabs defaultTab={0}>
                <GeneralTabList>
                    <ResponsiveTab>
                        Demo Video
                        
                    </ResponsiveTab>
                    <ResponsiveTab>
                        Hardware Concept
                    </ResponsiveTab>
                    <ResponsiveTab>
                        User Journey
                    </ResponsiveTab>
                </GeneralTabList>
                <TabPanels>
                    <TabPanel>
                        <Card w={{base: '65vw', md: '5xl'}} variant={'unstyled'}>
                            <CardBody>
                            <div style={{ padding: `56.25% 0 0 0`, position: `relative` }}><iframe src="https://player.vimeo.com/video/1011505769?texttrack=en&badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" style={{ position: `absolute`, top: `0`, left: `0`, width: `100%`, height: `100%` }} title="Nexus: Intelligent Lost Item Recognition and Management Platform"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
                            </CardBody>
                        </Card>
                    </TabPanel>
                    <TabPanel>
                        <Card w={{base: '65vw',md: '5xl'}} maxH={'lg'} direction={{base: 'column', md: 'row'}} variant={'unstyle'}>
                            <Box m={{base: '1vh' ,md: '2vh'}}>
                               <StaticImage src='../images/nexus/platform-render.24.jpg' height={450} imgStyle={{borderRadius: '15px'}}></StaticImage>
                            </Box>
                            <CardBody>
                                <Text ml={4} textAlign={'start'}>
                                The main compenent of Nexus is its modular kiosk that can be easily deployed to a wide range of public facilities. The kiosk is equipped with a human interface and a camera in the item scanning chamber to recognize and automatically log the item to our database as well as an expandable storage system.
                                </Text>
                            </CardBody>
                        </Card>
                    </TabPanel>
                    <TabPanel>
                        <Card w={{base: '65vw',md: '5xl'}} maxH={'lg'} direction={{base: 'column' ,md: 'row'}} variant={'unstyle'}>
                            <Box m={{base: '1vh' ,md: '2vh'}}>
                               <StaticImage src='../images/nexus/user journey.jpg' height={350} imgStyle={{borderRadius: '15px'}}></StaticImage>
                            </Box>
                            <CardBody>
                                <Text ml={4} textAlign={'start'}>
                                This graph documented how users will interact with each component of the Nexus platform. Since Nexus is a platform consisting of several products, this was an important piece of document that laid out how every part of the platform works together to solve different user's problems. 
                                </Text>
                            </CardBody>
                        </Card>
                    </TabPanel>
                </TabPanels>
            </GeneralTabs>
            <Text fontSize={'4xl'} mt={6}>System Architecture</Text>
            <GeneralTabs>
                <GeneralTabList>
                    <ResponsiveTab>System Block Diagram</ResponsiveTab>
                    <ResponsiveTab>Hardware EVT</ResponsiveTab>
                    <ResponsiveTab>Software EVT</ResponsiveTab>
                </GeneralTabList>
                <TabPanels>
                    <TabPanel>
                        <Card w={{base: '65vw',md: '5xl'}} maxH={'lg'} direction={{base: 'column' ,md: 'row'}} variant={'unstyle'}>
                            <Box m={'2vh'}>
                                <StaticImage src='../images/nexus/system block diagram.png' height={450} imgStyle={{borderRadius: '15px'}}></StaticImage>

                            </Box>
                            <CardBody>
                                <Text ml={4} textAlign={'start'}>
                                    As the system architect of the project, I laid out the system block diagram for the platform. This is the final version in which Raspberry Pi was chosen as the main hardware platform.
                                </Text>
                            </CardBody>
                            
                        </Card>
                    </TabPanel>
                    <TabPanel>
                        <Card w={{base: '65vw',md: '5xl'}} maxH={'lg'} direction={{base: 'column' ,md: 'row'}} variant={'unstyle'}>
                            <Box m={'2vh'}>
                                <StaticImage src='../images/nexus/hardware architecture.png' width={500} imgStyle={{borderRadius: '15px'}}></StaticImage>

                            </Box>
                            <CardBody>
                                <Text ml={4} textAlign={'start'}>
                                    I also laid out the Engineering Validation Test plan for the kiosk hardware. I built several prototypes using different hardware architectures shown here to finalize our engineering parameters and options. The following section shows the prototypes I built during the process.
                                </Text>
                            </CardBody>
                            
                        </Card>
                    </TabPanel>
                    <TabPanel>
                        <Card w={{base: '65vw',md: '5xl'}} maxH={'lg'} direction={{base: 'column' ,md: 'row'}} variant={'unstyle'}>
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
            <Text mt={4} textAlign={'start'}>
                The various stages of prototyping was crucial in turning the direction of the project from a single product to a platform that integrtes several products. The prototypes I developed helped showcase the feasibility and the benefit of having the hardware, software and services all working seamlessly.                          
            </Text>
            <GeneralTabs>
                <GeneralTabList>
                    <ResponsiveTab>Gen 1</ResponsiveTab>
                    <ResponsiveTab>Gen 2</ResponsiveTab>
                    <ResponsiveTab>Final</ResponsiveTab>
                    <ResponsiveTab>Circuit Schematics</ResponsiveTab>
                </GeneralTabList>
                <TabPanels>
                    <TabPanel>
                        <Card w={{base: '65vw',md: '5xl'}} maxH={'2xl'} direction={{base: 'column' ,md: 'row'}} variant={'unstyled'}>
                            <CardBody>
                            <div style={{ padding: `56.25% 0 0 0`, position: `relative` }}><iframe src="https://player.vimeo.com/video/1011681586?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" style={{ position: `absolute`, top: `0`, left: `0`, width: `100%`, height: `100%` }} title="Nexus: iPad Prototype"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
                            </CardBody>
                            <CardBody ml={{base: 0, md: 8}} mt={{base: 4, md: 0}} >
                            <Text textAlign={'start'}>
                                    This first generation prototype use an iPad app to test the feasibility and options of the two biggest technical uncertainties:
                                </Text>
                                <OrderedList textAlign={'start'} mt={2}>
                                    <ListItem>Object Recognition: I tested using genAI APIs to recognize items stored in the kiosk.</ListItem>
                                    <ListItem>Control Circuit: In order for my iPad prototype app to be able to control the circuit for the locking mechanism on the kiosk, I used an ESP32 microcontroller that is connected to iPad via BLE wirelessly to control the circuit.</ListItem>
                                </OrderedList>
                                <Text textAlign={'start'} mt={2}>
                                    This video shows the app controlling a pin on the microprocessor that is connected to the multimeter.</Text>
                            </CardBody>
                        </Card>

                    </TabPanel>
                    <TabPanel>
                        <Card w={{base: '65vw',md: '5xl'}} maxH={'2xl'} direction={{base: 'column' ,md: 'row'}} variant={'unstyled'}>
                            <CardBody>
                            <div style={{ padding: `56.25% 0 0 0`, position: `relative` }}><iframe style={{ position: `absolute`, top: `0`, left: `0`, width: `100%`, height: `100%` }} src="https://www.youtube.com/embed/2ZBIWHq8Y6I?si=oxNjNHlSjtssL7IA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
                            </CardBody>
                            <CardBody ml={{base: 0, md: 8}} mt={{base: 4, md: 0}}>
                            <Text textAlign={'start'}>
                                    As the first gen prototype proved it's very feasible to use a genAI API to perform object recognition, the next step for me is then to try migrating the application to a Raspberry Pi. The benefits of using Raspberry Pi compared to an iPad are:
                            </Text>
                            <OrderedList textAlign={'start'} mt={2}>
                                    <ListItem>A Raspberry Pi combined with a touch screen is half the price of an iPad.</ListItem>
                                    <ListItem>Raspberry Pi provides the pinout that can be used to control the circuit of the locking mechanism.</ListItem>
                                </OrderedList>
                                <Text textAlign={'start'} mt={2}>
                                    This video also shows that the application on Raspberry Pi is capable of uploading the object recognition result to our Nexus database.</Text>
                            </CardBody>
                        </Card>

                    </TabPanel>
                    <TabPanel>
                        <Card w={{base: '65vw',md: '5xl'}} maxH={'2xl'} direction={{base: 'column' ,md: 'row'}} variant={'unstyled'}>
                        <CardBody>
                            <div style={{ padding: `56.25% 0 0 0`, position: `relative` }}><iframe style={{ position: `absolute`, top: `0`, left: `0`, width: `100%`, height: `100%` }} src="https://www.youtube.com/embed/w9UUa1uOnb8?si=7XxCfk2Z-KvR6WRm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
                            </CardBody>
                            <CardBody ml={{base: 0, md: 8}} mt={{base: 4, md: 0}}>
                            <Text textAlign={'start'}>
                                This video shows the application of Gen 2 prototype integrated with the control circuit tested by a multimeter.
                            </Text>
                            
                            </CardBody>
                        </Card>

                    </TabPanel>
                    <TabPanel>
                        <Card w={{base: '65vw',md: '5xl'}} maxH={'2xl'} direction={'column'} variant={'unstyled'}>
                            <Center>
                                <StaticImage src='../images/nexus/nexus_schematics.png' width={500} imgStyle={{borderRadius: '15px'}}></StaticImage>
                            </Center>
                        
                        </Card>

                    </TabPanel>
                </TabPanels>
            </GeneralTabs>
            <Text mt={4} textAlign={'start'}>
                Besides the electronics part of the hardware, I also designed the concept hardware of the kiosk and the mechanical design of an early candidate for our build plan.
            </Text>
            <GeneralTabs>
                <GeneralTabList>
                    <ResponsiveTab>Concept Design</ResponsiveTab>
                    <ResponsiveTab>Mechanical Design</ResponsiveTab>
                </GeneralTabList>
                <TabPanels>
                    <TabPanel>
                    <Card w={{base: '65vw',md: '5xl'}} maxH={'lg'} direction={{base: 'column' ,md: 'row'}} variant={'unstyled'}>
                        <Box m={'2vh'}>
                            <StaticImage src='../images/nexus/untitled.19.jpg' height={400} imgStyle={{ borderRadius: '15px' }}></StaticImage>
                        </Box>
                        <Box m={'2vh'}>
                            <StaticImage src='../images/nexus/platform-render.26.jpg' height={400} imgStyle={{ borderRadius: '15px' }}></StaticImage>
                        </Box>
                    </Card>
                    </TabPanel>
                    <TabPanel >
                    <Card w={{base: '65vw',md: '5xl'}} maxH={'lg'} direction={{base: 'column' ,md: 'row'}} variant={'unstyled'}>
                    <Box m={'2vh'} >
                            <StaticImage src='../images/nexus/mechanical.png' height={400} imgStyle={{ borderRadius: '15px' }}></StaticImage>
                        </Box>
                        <CardBody>
                            <Text mt={4} textAlign={'start'}>
                                This is a CAD model designed in Fusion that incorporates an iPad as the main device and use aluminum frame as the main structure.
                            </Text>
                        </CardBody>
                    </Card>
                        
                    </TabPanel>
                </TabPanels>
            </GeneralTabs>
            <Text fontSize={'4xl'} mt={6}>UI Prototyping</Text>
            <Text mt={4} textAlign={'start'}>
                I performed extensive evaluations on the operation flow of all the user interfaces across different product in the platform. For example, I created several different flow for validating identification on the kiosk and also various ways to modify the result of object recognition. Then, user tesing was conducted to decide the final flow. 
            </Text>
            <GeneralTabs>
                <GeneralTabList>
                    <ResponsiveTab>Kiosk UI</ResponsiveTab>
                    <ResponsiveTab>Website UI</ResponsiveTab>
                </GeneralTabList>
                <TabPanels>
                    <TabPanel>

                        <Card w={{base: '65vw',md: '5xl'}} maxH={{md: 'lg'}} direction={'column'} variant={'unstyled'}>
                            <Text m={4} textAlign={'start'}>These are two of the candidates for different operation flow for authenticating owner of lost items. We decided to choose the passcode flow (on the left).</Text>
                                <Center>
                                    <Stack direction={{base: 'column' , md: 'row'}}>
                                        <Box m={'2vh'}>
                                            <StaticImage src='../images/nexus/kiosk ui.png' height={400} imgStyle={{ borderRadius: '15px' }}></StaticImage>
                                        </Box>
                                        <Box m={'2vh'}>
                                            <StaticImage src='../images/nexus/kiosk ui 2.png' height={400} imgStyle={{ borderRadius: '15px' }}></StaticImage>
                                        </Box>
                                    </Stack>
                                </Center>
                                
                        </Card>
                    </TabPanel>
                    <TabPanel>
                        <StaticImage src='../images/nexus/website ui.png' height={600} imgStyle={{ borderRadius: '15px' }}></StaticImage>
                    </TabPanel>
                </TabPanels>
            </GeneralTabs>
            <Card variant={'outline'} mt={6} mb={40}>
                <CardBody>
                    <Heading>Learn more</Heading>
                    <Text textAlign={'start'} m={4}>
                        This project was funded by Google. I am grateful to have a wonderful team working on other aspects of the project. Heather Hsieh implemented the Nexus website, ChunKai Hsu helped fine tune the prompt for Google Gemini LLM, they also shot and edited the main demo video. Alan Chen helped building the final prototype hardware and YuJie Huang helped implemented the database in Notion.  
                    </Text>
                    <Button variant={'link'} m={4}>
                        <a href='https://www.figma.com/proto/j6K0yQERpqzsRSXfOPJrhV/Lost-and-Found-kiosk?node-id=87-462&node-type=canvas&t=cDUlCAl5i40aa5f9-1&scaling=min-zoom&content-scaling=fixed&page-id=87%3A461&starting-point-node-id=87%3A462&share=1' target="_blank" rel="noopener noreferrer">Figma prototypes</a>
                    </Button>
                    <Button variant={'link'} m={4}>
                        <a href='https://github.com/bencer3283/Lost-and-Found-Mockup' target="_blank" rel="noopener noreferrer">Code for initial iPad app prototype</a>
                    </Button>
                    <Button variant={'link'} m={4}>
                        <a href='https://github.com/bencer3283/Lost-and-Found-Kiosk' target="_blank" rel="noopener noreferrer">Production version of the kiosk software</a>
                    </Button>
                </CardBody>
            </Card>
        </div>
    )
}