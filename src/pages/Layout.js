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
} from '@chakra-ui/react';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import { HamburgerIcon } from '@chakra-ui/icons';
import { motion, AnimatePresence } from 'framer-motion';

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
            <AnimatePresence>
            {isAccordionOn && <motion.div 
                key='mobile_nav'
                transition={{ type: "tween", ease: "easeOut", delay: 0.2, duration: 0.3 }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x:0 }}
                exit={{ opacity: 0, x: 20 }} >
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
            </motion.div>}
            </AnimatePresence>
            <motion.div layout transition={{ layout: { duration: 0.2, ease: "easeOut", type: "tween" }}}>
                <h1>
                    Content Placeholder
                </h1>
            </motion.div>
            
        </Box>

    )
}

export default Layout;