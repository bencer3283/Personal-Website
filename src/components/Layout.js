import * as React from 'react';
import MobileAccordionNav from './accordion';
import DesktopNav from './desktopNav';
import {
    Flex,
    Spacer,
    Box,
    Button,
    useBoolean,
    ChakraProvider,
    Text,
} from '@chakra-ui/react';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import { HamburgerIcon } from '@chakra-ui/icons';
import { motion, AnimatePresence } from 'framer-motion';
import theme from '../theme';

const Layout = ({ children }) => {
    const [isAccordionOn, setAccordion] = useBoolean();
    const [isDesktopNavOn, setDesktopNav] = useBoolean();

    const directories = [
        {
            name: 'education',
            boolean: useBoolean()
        },
        {
            name: 'research',
            boolean: useBoolean()
        },
        {
            name: 'experiences',
            boolean: useBoolean()
        },
        {
            name: 'organization',
            boolean: useBoolean()
        }
    ]

    return (
        <ChakraProvider theme={theme}>
        <Box>
            <Box as='header' position='fixed' w='100%' zIndex={1}>
                <Flex w='100vw' p='4' pr={{ base: 10, md: 20 }} bgColor='white'>
                    <Box p='2'>
                        <Link to='/'>
                            <StaticImage src='../images/%%.png' alt='Po Sheng Cheng' width='40' />
                        </Link>
                    </Box>
                    {
                        directories.map((theDirectory, index, directoryArray) => {
                            return (
                                [<Spacer hideBelow='md' key={index}/>, <Button key={theDirectory} variant='link' hideBelow='md' onMouseEnter={() => {
                                    directoryArray.forEach((directory) => {
                                        if (directory.name !== theDirectory.name) {directory.boolean[1].off()}
                                        else {directory.boolean[1].on()}
                                    })
                                    setDesktopNav.on();
                                }}>
                                    <Link to={`/${theDirectory.name}`}>
                                        <Text textTransform='capitalize' >{theDirectory.name}</Text>
                                    </Link>
                                </Button>]
                            )
                        })
                    }
                    
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
                            <Box hideBelow='md' onMouseLeave={() => {
                                setDesktopNav.off();
                            }}>
                                {
                                    directories.map((directory, index, array) => {
                                        if(directory.boolean[0]) return (
                                            <DesktopNav directory={directory.name} key={directory.name}/>
                                        )
                                        else return null
                                    })
                                }
                                
                            </Box>
                        
                    </motion.div>}
                </AnimatePresence>
            </Box>
            <motion.div layout transition={{ layout: { duration: 0.2, ease: "easeIn", type: "tween" } }}>
                <Box p='3rem' pt='8rem'>
                    {children}
                </Box>
            </motion.div>
        </Box>
        </ChakraProvider>
    )
}

export default Layout;