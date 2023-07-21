import * as React from 'react';
import {
    Flex,
    Spacer,
    Box,
    Button,
    useBoolean,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    SlideFade
} from '@chakra-ui/react';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import { HamburgerIcon } from '@chakra-ui/icons';

const Layout = () => {
    const [isAccordionOn, setAccordion] = useBoolean();
    return (
        <Box>
            <Flex p='4' pr={{base: 10, md: 20}}>
                <Box p='2' href='./' as={Link}>
                    <StaticImage src='../images/%%.png' alt='Po Sheng Cheng' width='40' />
                </Box>
                <Spacer hideBelow='md' />
                <Button variant='link' hideBelow='md'>
                    Education
                </Button>
                <Spacer hideBelow='md' />
                <Button variant='link' hideBelow='md'>
                    Experiences
                </Button>
                <Spacer hideBelow='md' />
                <Button variant='link' hideBelow='md'>
                    Origanization
                </Button>
                <Spacer />
                <Button variant='link' hideBelow='md'>
                    Art Creation
                </Button>
                <Button variant='link' rightIcon={<HamburgerIcon boxSize={6} />} hideFrom='md' onClick={setAccordion.toggle}>
                    Menu
                </Button>
            </Flex>
            <SlideFade in={isAccordionOn} reverse={true} offsetX={20} offsetY={0} unmountOnExit={false}>
                <Accordion defaultIndex={[0]} allowMultiple hideFrom='md'>
                    <AccordionItem>
                        <h2>
                            <AccordionButton p={6}>
                                <Box as="span" flex='1' textAlign='left'>
                                    Education
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat.
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <h2>
                            <AccordionButton p={6}>
                                <Box as="span" flex='1' textAlign='left'>
                                    Experiences
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat.
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <h2>
                            <AccordionButton p={6}>
                                <Box as="span" flex='1' textAlign='left'>
                                    Origanization
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat.
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <h2>
                            <AccordionButton p={6}>
                                <Box as="span" flex='1' textAlign='left'>
                                    Art Creation
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat.
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            </SlideFade>

        </Box>

    )
}

export default Layout;