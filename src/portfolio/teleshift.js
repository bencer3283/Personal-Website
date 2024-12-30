import * as React from 'react';
import { useState } from 'react';
import { Text, Slider, SliderFilledTrack, SliderTrack, SliderThumb, Center, Box, Stack, Tab, Tabs, TabPanel, TabPanels, Button, Card, CardBody, Tooltip, Heading } from '@chakra-ui/react';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import { GeneralTabs, ResponsiveTab } from '../components/generalTab';
import GeneralTabList from '../components/generalTabList';

export const frontmatter = {
    sort: 4,
    title: "TeleSHift",
    description: 'Telexisting shape-shifting 3D tangible user interface for physical collaboration and interaction',
    image: '../images/teleshiftprototype.jpg'
}

let initArm = Array(12).fill(16);

const TeleshiftPage = () => {
    const [armLength, setArmLength] = useState(initArm);
    const [armMode, setArmMode] = useState(0);

    function handleArmInteraction(newVal, id, length) {
        const newLength = length.map((e, i) => {
            if (armMode === 0) {
                if (i === id || i === id + 6) {
                    return newVal
                }
                else {
                    return e
                }
            }
            else if (armMode === 1) {
                if (i === id || i === id + 6 || i === id - 6) {
                    return newVal
                }
                else {
                    return e
                }
            }
            else {
                if (i === id) {
                    return newVal
                }
                else {
                    return e
                }
            }
        })
        setArmLength(newLength);
    }

    function restore() {
        const newLength = armLength.map((e, i) => {
            if (i >= 6) {
                return armLength[i-6]
            }
            else {
                return e
            }
        })
        setArmLength(newLength);
    }

    const TeleshiftArm = ({direction, isReversed=false, id, length}) => {
        const [value, setValue] = useState(length[id])
        return <Slider
            orientation={direction}
            h={direction === 'vertical' ? '20vh' : ''}
            w={direction === 'horizontal' ? '20vh' : ''}
            onChangeEnd={(val) => {
                handleArmInteraction(val, id, length);
            } }
            onChange={(val) => {
                if (val >= 14 ) setValue(val)
                else setValue(14)
            }}
            min={5}
            max={40}
            isReversed={isReversed}
            value={value}
        >
            <SliderTrack>
                <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb bgColor={'blue.100'}/>
        </Slider>;
    }

    return (
        <div>
            <Text fontSize={'6xl'} mt={8}>TeleSHift</Text>
            <Text fontSize={'4xl'}> {frontmatter.description} </Text>
            <GeneralTabs defaultTab={1}>
            <GeneralTabList>
                    <ResponsiveTab>Concept</ResponsiveTab>
                    <ResponsiveTab>Prototype</ResponsiveTab>
                    <ResponsiveTab>Video</ResponsiveTab>
                </GeneralTabList>  
                <TabPanels>
                    <TabPanel>
                        <Card w={{base: '2xs', md: '5xl'}} variant={'unstyled'}>
                            <CardBody>
                                <StaticImage src='../images/teleshiftconcept.png'></StaticImage>
                                <Text textAlign={'start'}>
                                    TeleSHift is shape-transforming device that can be physically joined to form almost any object.
                                    It also has a Telexisting communication framework that enable people to collaborate on 3D shapes remotely and simoutaneously,
                                    and allows two separated objects formed by TeleSHift in different physical spaces to sense co-presence via interaction.
                                    With the Tangile User Interface (TUI) presented by TeleSHift, 3D concepts can be presented and edited on true 3D interface.
                                </Text>
                            </CardBody>
                        </Card>
                        
                    </TabPanel>
                    <TabPanel>
                        <Card w={{base: '2xs', md: '5xl'}} direction={{base: 'column', md: 'row'}} variant={'unstyled'}>
                            <Box m={'2vh'} maxH={'lg'}>
                                <StaticImage src='../images/teleshiftprototype.jpg' height={500} imgStyle={{borderRadius: '15px'}}></StaticImage>
                            </Box>
                            
                            <CardBody>
                                <Text textAlign={'start'}>
                                    In order to showcase the TUI concept, we developed this larger-scale prototype. Each prototype has six arms made of motorized potentiometer which has the functionalities
                                    of detecting its position and moving to a spcified position, enabling the shape-transforming capability of TeleSHift.
                                    Each TeleSHift prototype use a single ESP32 as its MCU, allowing network-connection and the Telexisting communication framework.
                                </Text>
                            </CardBody>
                        </Card>
                    </TabPanel>
                    <TabPanel>
                        <Card w={{base: '2xs', md: '5xl'}} variant={'unstyled'}>
                            <CardBody>
                                <div style={{padding:`56.25% 0 0 0`, position:`relative`}}><iframe src="https://player.vimeo.com/video/749458064?h=e53bbfeec2&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style={{position:`absolute`,top:`0`,left:`0`,width:`100%`,height:`100%`}} title="TeleSHift: Telexisting TUI for Physical Collaboration and Interaction"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
                            </CardBody>
                        </Card>
                    </TabPanel>
                </TabPanels>          
            </GeneralTabs>
            
            
            <Card variant={'filled'} mt={'6vh'} p={'6'}>
            <Text fontSize={'4xl'}>Three modes of Telexisting communication</Text>
            <Text>In this interactive widget, try move the sliders on both TeleSHifts in all three modes.</Text>
            <Stack direction={{base: 'column', md: 'row'}} m={{base: '40vh' ,md: '20vh'}} mt={'5vh'}>
                <Center p={'2vh'}>
                    <div style={{ transform: `rotate(0deg) translateX(-0.8vh)` }}>
                        <TeleshiftArm direction={'vertical'} id={0} length={armLength}/>
                    </div>
                    <div style={{ transform: `rotate(60deg) translate3d(8vh, -4vh, 0)` }}>
                        <TeleshiftArm direction={'vertical'} id={1} length={armLength}/>
                    </div>
                    <div style={{ transform: `rotate(30deg) translate3d(4vh, 15vh, 0)` }}>
                        <TeleshiftArm direction={'horizontal'} id={2} length={armLength}/>
                    </div>
                    <div style={{ transform: `rotate(0deg) translate3d(-24vh, 20vh, 0)` }}>
                        <TeleshiftArm direction={'vertical'} isReversed={true} id={3} length={armLength}/>
                    </div>
                    <div style={{ transform: `rotate(-60deg) translate3d(-21vh, -27vh, 0)` }}>
                        <TeleshiftArm direction={'vertical'} id={4} length={armLength}/>
                    </div>
                    <div style={{ transform: `rotate(-30deg) translate3d(-47vh, -9vh, 0)` }}>
                        <TeleshiftArm direction={'horizontal'} isReversed={true} id={5} length={armLength}/>
                    </div>
                    <Box borderRadius={'50%'} w={'10vh'} h={'10vh'} bg={'blue.300'} style={{
                        transform: `translate3d(-52vh, 10vh, 0)`
                    }} textAlign={'center'}> <div style={{
                        position: `absolute`,
                        top: `50%`,
                        left: `50%`,
                        transform: `translate(-50%, -50%)`
                    }}>
                            {armMode === 0 ? 'Master' : ' '}
                            {armMode === 2 ? 'Memory' : ' '}
                        </div></Box>
                </Center>
                <Center p={'2vh'}>
                    <div style={{ transform: `rotate(0deg) translateX(-0.8vh)` }}>
                        <TeleshiftArm direction={'vertical'} id={6} length={armLength}/>
                    </div>
                    <div style={{ transform: `rotate(60deg) translate3d(8vh, -4vh, 0)` }}>
                        <TeleshiftArm direction={'vertical'} id={7} length={armLength}/>
                    </div>
                    <div style={{ transform: `rotate(30deg) translate3d(4vh, 15vh, 0)` }}>
                        <TeleshiftArm direction={'horizontal'} id={8} length={armLength}/>
                    </div>
                    <div style={{ transform: `rotate(0deg) translate3d(-24vh, 20vh, 0)` }}>
                        <TeleshiftArm direction={'vertical'} isReversed={true} id={9} length={armLength}/>
                    </div>
                    <div style={{ transform: `rotate(-60deg) translate3d(-21vh, -27vh, 0)` }}>
                        <TeleshiftArm direction={'vertical'} id={10} length={armLength}/>
                    </div>
                    <div style={{ transform: `rotate(-30deg) translate3d(-47vh, -9vh, 0)` }}>
                        <TeleshiftArm direction={'horizontal'} isReversed={true} id={11} length={armLength}/>
                    </div>
                    <Box borderRadius={'50%'} w={'10vh'} h={'10vh'} bg={'blue.300'} style={{
                        transform: `translate3d(-52vh, 10vh, 0)`
                    }} >
                        <div style={{
                            position: `absolute`,
                            top: `50%`,
                            left: `50%`,
                            transform: `translate(-50%, -50%)`
                        }}>
                            {armMode === 0 ? 'Slave' : ' '}
                        </div>
                    </Box>
                </Center>
            </Stack>
            <Tabs variant='soft-rounded' colorScheme='blue' onChange={(mode) => {
                setArmMode(mode);
            }} align='start'>
                
                <TabPanels>
                    <TabPanel>
                        <p>Each arm of slave TeleSHift is programmed to follow the position of master TeleSHift, but not vice versa.</p>
                        <Text>Use case: Dimensional teaching.</Text>
                    </TabPanel>
                    <TabPanel>
                        <p>Each arm of both TeleSHifts is synced with the respective arm on the other TeleSHift.</p>
                        <Text>Use case: 3D structure co-editing for remote prototyping collaboration.</Text>
                    </TabPanel>
                    <TabPanel>
                        <Button variant={'outline'} onClick={restore} mb={'12px'} colorScheme='blue'>Restore</Button>
                        <Text>TeleSHift can be commanded to restore a pre-defined shape in its memory.</Text>
                        <Text>Use case: As a prototyping material to reduce material waste. </Text>
                    </TabPanel>
                </TabPanels>
                <GeneralTabList>
                    <Tab>Master & Slave</Tab>
                    <Tab>Mutual Sync</Tab>
                    <Tab>Shape Memory</Tab>
                </GeneralTabList>            
            </Tabs>
            </Card>
            <Text fontSize={'4xl'} mt={'6vh'}>How I built TeleSHift</Text>
            <GeneralTabs>
            <GeneralTabList>
                    <ResponsiveTab>CAD</ResponsiveTab>
                    <ResponsiveTab>Mechanical Iterations</ResponsiveTab>
                    <ResponsiveTab>Power and Control Circuit</ResponsiveTab>
                </GeneralTabList>
                <TabPanels>
                    <TabPanel>
                        <Card w={{base: '2xs', md: '5xl'}} maxH={{md: 'lg'}} direction={{base: 'column', md: 'row'}} variant={'unstyled'}>
                            <Tooltip placement='right-end' defaultIsOpen label='The unique hexahedron shape was meant to give the perception of a TeleSHift "particle" instead of a box.'>
                                <Box m={'2vh'}>
                                    <StaticImage src='../images/teleshiftCAD.png' height={400} imgStyle={{borderRadius: '15px'}}></StaticImage>
                                </Box> 
                            </Tooltip>
                            <CardBody>
                                <Heading textAlign={'start'}>
                                    Design considerations
                                </Heading>
                                <Text textAlign={'start'} mt={4}>
                                    Hover on the images to learn more. 
                                </Text>
                                <Text textAlign={'start'} mt={4}>
                                    An extensive and detailed design was done in SolidWorks, including analysis of mechanical interference. 
                                    A wide range of custom-designed components was used to ensure its structural stability and to achieve this 
                                    unique hexahedron shape.
                                    Despite this prototype is just a proof-of-concept, there are lots of consideration in its appearance.
                                </Text>
                            </CardBody>
                            <Tooltip placement='left-end' label='The spoon-loop shape of the arms was designed to encourage human interactions and to open other possibilities, 
                                    for instance connecting to other non-TeleSHift formed objects.'>
                                <Box m={'2vh'}>
                                    <StaticImage src='../images/teleshiftarm.png' height={400} imgStyle={{borderRadius: '15px'}}></StaticImage>
                                </Box> 
                            </Tooltip>
                        </Card>
                    </TabPanel>
                    <TabPanel>
                        <Card w={{base: '2xs', md: '5xl'}} maxH={{md: 'lg'}} direction={{base: 'column', md: 'row'}} p={'4'} variant={'unstyled'}>
                            <Card variant={'elevated'} m={4}>
                                <CardBody>
                                    <StaticImage src='../images/teleshiftanchor.png' imgStyle={{borderRadius: '10px'}}></StaticImage>
                                    <Text textAlign={'start'} mt={4}>
                                        This small component that anchors the extension rod on the motorized slide potentiometer is surprisingly the most
                                        difficult one to design.
                                    </Text>
                                </CardBody>
                            </Card>
                            <Card variant={'elevated'} m={4}>
                                <CardBody>
                                    <StaticImage src='../images/teleshiftanchor1.png' imgStyle={{borderRadius: '10px'}}></StaticImage>
                                    <Text textAlign={'start'} mt={4}>
                                        The original design requires adhesive to assemble, is very unstable and lacks pass-through for touch sensitivity wire.
                                    </Text>
                                </CardBody>
                            </Card>
                            <Card variant={'elevated'} m={4}>
                                <CardBody>
                                    <StaticImage src='../images/teleshiftanchor2.png' imgStyle={{borderRadius: '10px'}}></StaticImage>
                                    <Text textAlign={'start'} mt={4}>
                                        I tried six prototypes to arrive at this improved "snap" that only takes 3 seconds to assemble and is much more stable.
                                    </Text>
                                </CardBody>
                            </Card>
                            <Card variant={'elevated'} m={4}>
                                <CardBody>
                                    <StaticImage src='../images/teleshiftanchorfinal.png' imgStyle={{borderRadius: '10px'}}></StaticImage>
                                    <Text textAlign={'start'} mt={4}>
                                        The finalized version adds pass-through for touch sensitivity wire and takes 20% less time to be 3D printed by improving the shape.
                                    </Text>
                                </CardBody>
                            </Card>
                        </Card>
                    </TabPanel>
                    <TabPanel>
                        <Card w={{base: '2xs', md: '5xl'}} variant={'unstyled'}>
                            <CardBody>
                                <StaticImage src='../images/teleshiftcircuit.png' height={400} imgStyle={{borderRadius: '15px'}}></StaticImage>
                                <Text textAlign={'start'} mt={4}>
                                    In addition to the appearance and mechanical design, I also designed its power supply circuit and laid out the control system architecture.
                                </Text>
                                </CardBody>
                        </Card>
                    </TabPanel>
                </TabPanels>
                
            </GeneralTabs>
            <Card variant={'outline'} mt={6}>
                <CardBody>
                    <Heading>Learn more</Heading>
                    <Button variant={'link'} m={4}>
                        <Link to='../research/teleshift'>At the research page</Link>
                    </Button>
                    <Button variant={'link'} m={4}>
                        <a href='https://dl.acm.org/doi/10.1145/3544793.3560323' target="_blank" rel="noopener noreferrer">The paper on ACM website</a>
                    </Button>
                </CardBody>
            </Card>
        </div>
    )
}

export default TeleshiftPage;