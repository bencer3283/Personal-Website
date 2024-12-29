import * as React from 'react';
import { GeneralTabs, ResponsiveTab } from '../components/generalTab';
import GeneralTabList from '../components/generalTabList';
import { Tab, TabPanel, TabPanels, Text, Card, CardBody, Box, OrderedList, ListItem, Heading, Button, Stack, Center } from '@chakra-ui/react';
import { StaticImage } from 'gatsby-plugin-image';

export const frontmatter = {
    title: 'Work In Progess: Haptic Belt'
}

export default function HapticBeltSection() {
    return(
        <div>
            <Text fontSize={'6xl'} mt={8}>{ frontmatter.title }</Text>
            <Text fontSize={'4xl'}>Using Haptic Feedback to Provide Navigation for Visually impaired People</Text>
            <GeneralTabs>
                <GeneralTabList>
                    <ResponsiveTab>
                        Video
                    </ResponsiveTab>
                    <ResponsiveTab>
                        Photo
                    </ResponsiveTab>
                </GeneralTabList>
                <TabPanels>
                    <TabPanel>
                        <Card w={{ base: '2xs', md: '5xl' }} variant={'unstyled'}>
                            <div style={{ padding: `56.25% 0 0 0`, position: `relative` }}><iframe src="https://player.vimeo.com/video/1041562115?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" style={{ position: `absolute`, top: `0`, left: `0`, width: `100%`, height: `100%` }} title="LRA_assembly"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
                        </Card>
                    </TabPanel>
                    <TabPanel>
                        <Card w={{ base: '2xs', md: '5xl' }} variant={'unstyled'}>
                            <StaticImage src='../images/hapticBelt/pcb.png' mb={4} height={450} imgStyle={{ borderRadius: '15px' }}></StaticImage>
                        </Card>
                    </TabPanel>
                </TabPanels>
            </GeneralTabs>
            
            <GeneralTabs defaultTab={0}>
                <GeneralTabList>
                    <ResponsiveTab>
                        Mechanical 
                    </ResponsiveTab>
                    <ResponsiveTab>
                        Electrical - FPCB
                    </ResponsiveTab>
                    <ResponsiveTab>
                        Electrical - RF
                    </ResponsiveTab>
                </GeneralTabList>
                <TabPanels>
                    <TabPanel>
                        <Card w={{ base: '2xs', md: '5xl' }} variant={'unstyled'} direction={'column'}>
                            <Text ml={4} textAlign={'start'}>
                                The main challenge is the mounting of the vibration motors on the flexible PCB. Becuase the vibration motor is a constantly moving component, soldering the motor on the flexible pcb by any means will likely fail very quickly. My solution to this is to use a spring loaded contact connector to connect the motor to the PCB. 
                                However, the contact point between the motor and the spring contact will need to be held at a constant distance to maintain contact. So I designed a custom bracket to hold the motor and maintain its vertical distance to the board. I also designed the flexible PCB to be a rigid-flex PCB, meaning that there are four rigid sections within the flexible PCB that can support the stress of the motor contact point.
                            </Text>
                            <CardBody>
                                <Stack direction={{base: 'column', md:'row'}}>
                                    <Box m={{ base: '1vh', md: '2vh' }}>
                                        <StaticImage src='../images/hapticBelt/pcb_closeup_no_bracket.png' mb={4} height={450} imgStyle={{ borderRadius: '15px' }}></StaticImage>
                                    </Box>
                                    <Box m={{ base: '1vh', md: '2vh' }}>
                                        <StaticImage src='../images/hapticBelt/pcb_closeup.png' mb={4} height={450} imgStyle={{ borderRadius: '15px' }}></StaticImage>
                                    </Box>
                                </Stack>
                            </CardBody>
                        </Card>
                    </TabPanel>
                    <TabPanel>
                        <Card w={{base: '2xs',md: '5xl'}} direction={{base: 'column', md: 'column'}} variant={'unstyle'}>
                            <CardBody>
                                <Box m={{ base: '1vh', md: '2vh' }}>
                                    <StaticImage src='../images/hapticBelt/felxBoard_Page_3.jpg' mb={4} height={450} imgStyle={{ borderRadius: '15px' }}></StaticImage>
                                </Box>
                                <Stack direction={{base:'column', md:'row'}}>
                                    <Box m={{ base: '1vh', md: '2vh' }}>
                                        <StaticImage src='../images/hapticBelt/felxBoard_Page_1.jpg' mb={4} height={450} imgStyle={{ borderRadius: '15px' }}></StaticImage>
                                    </Box>
                                    <Box m={{ base: '1vh', md: '2vh' }}>
                                        <StaticImage src='../images/hapticBelt/felxBoard_Page_2.jpg' mb={4} height={450} imgStyle={{ borderRadius: '15px' }}></StaticImage>
                                    </Box>
                                </Stack>
                            </CardBody>
                        </Card>
                    </TabPanel>
                    <TabPanel>
                        <Card w={{base: '2xs',md: '5xl'}} direction={{base: 'column', md: 'column'}} variant={'unstyle'}>
                            <CardBody>
                            <Box m={{ base: '1vh', md: '2vh' }}>
                                    <StaticImage src='../images/hapticBelt/RFShield_Page_2.jpg' mb={4} height={450} imgStyle={{ borderRadius: '15px' }}></StaticImage>
                                </Box>
                                <Box m={{ base: '1vh', md: '2vh' }}>
                                    <StaticImage src='../images/hapticBelt/RFShield_Page_1.jpg' mb={4} height={450} imgStyle={{ borderRadius: '15px' }}></StaticImage>
                                </Box>
                            </CardBody>
                        </Card>
                    </TabPanel>
                </TabPanels>
            </GeneralTabs>
            
            <Card variant={'outline'} mt={6} mb={40}>
                <CardBody>
                    <Heading>This is a work-in-progess project</Heading>
                    <Text textAlign={'start'} m={4}>
                        More infomration can be found in the following link.  
                    </Text>
                    <Button variant={'link'} m={4}>
                        <a href='https://www.figma.com/proto/j6K0yQERpqzsRSXfOPJrhV/Lost-and-Found-kiosk?node-id=87-462&node-type=canvas&t=cDUlCAl5i40aa5f9-1&scaling=min-zoom&content-scaling=fixed&page-id=87%3A461&starting-point-node-id=87%3A462&share=1' target="_blank" rel="noopener noreferrer">FPCB design files</a>
                    </Button>
                    <Button variant={'link'} m={4}>
                        <a href='https://github.com/bencer3283/Lost-and-Found-Mockup' target="_blank" rel="noopener noreferrer">RF desing files</a>
                    </Button>
                    <Button variant={'link'} m={4}>
                        <a href='https://github.com/bencer3283/STM-DRV2605' target="_blank" rel="noopener noreferrer">STM32 firmware repo</a>
                    </Button>
                </CardBody>
            </Card>
        </div>
    )
}