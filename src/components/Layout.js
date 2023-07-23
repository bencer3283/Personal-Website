import * as React from 'react';
import MobileAccordionNav from './accordion';
import DesktopNav from './desktopNav';
import {
    Flex,
    Spacer,
    Box,
    Button,
    useBoolean,
} from '@chakra-ui/react';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import { HamburgerIcon } from '@chakra-ui/icons';
import { motion, AnimatePresence } from 'framer-motion';

const Layout = ({ children }) => {
    const [isAccordionOn, setAccordion] = useBoolean();
    const [isDesktopNavOn, setDesktopNav] = useBoolean();
    return (
        <Box>
            <Box as='header' position='fixed' w='100%'>
                <Flex w='100%' p='4' pr={{ base: 10, md: 20 }} bgColor='white'>
                    <Box p='2'>
                        <Link to='/'>
                            <StaticImage src='../images/%%.png' alt='Po Sheng Cheng' width='40' />
                        </Link>
                    </Box>
                    <Spacer hideBelow='md' />
                    <Button variant='link' hideBelow='md' onClick={setDesktopNav.toggle}>
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
                        transition={{ type: "tween", ease: "easeIn", duration: 0.3 }}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }} >
                        <MobileAccordionNav />
                    </motion.div>}
                </AnimatePresence>
                <AnimatePresence>
                    {isDesktopNavOn && <motion.div
                        key='deskop-navi'
                        transition={{ type: "tween", ease: "linear", duration: 0.2, opacity: { duration: 0.3 } }}
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -50 }} >
                        <DesktopNav />
                    </motion.div>}
                </AnimatePresence>
            </Box>
            <motion.div layout transition={{ layout: { duration: 0.2, ease: "easeIn", type: "tween" } }}>
                {children}
            </motion.div>
        </Box>
    )
}

export default Layout;