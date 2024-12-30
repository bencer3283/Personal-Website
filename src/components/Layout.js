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
    AbsoluteCenter,
    Stack,
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

    const year = new Date().getFullYear();

    return (
        <ChakraProvider theme={theme}>
            
            <Box as='header' position='fixed' w='100%' zIndex={100} top={'0'}>
                <Flex w='100vw' p='4' pr={{ base: 10, md: 20 }} bgColor='white'>
                    <Box p='2'>
                        <Link to='/'>
                            <StaticImage src='../images/%%.png' alt='Po Sheng Cheng' width='40' />
                        </Link>
                    </Box>
                    <Spacer />
                    <Button variant='link' hideBelow='md'>
                        <Link to={'/art'}>
                            Portfolios
                        </Link>
                        
                    </Button>
                    {
                        directories.map((theDirectory, index, directoryArray) => {
                            return (
                                [<Spacer hideBelow='md' key={index}/>, 
                                <Button key={theDirectory} variant='link' hideBelow='md' onMouseEnter={() => {
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
                    <Button variant='link' rightIcon={<HamburgerIcon boxSize={6} />} hideFrom='md' onClick={setAccordion.toggle}>
                        Menu
                    </Button>
                </Flex>
                
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
            </Box>

            <Box minH={'100vh'} pb={'5rem'}>
            <Box p={{ base: '1.5rem', md: '3rem' }} pt={{ base: '8rem', md: '8rem' }}>
                {children}
            </Box>
            
            <Box bg={'#9EC972'} width={'100vw'} h={'5rem'} position={'absolute'} bottom={'0'}>
                <AbsoluteCenter axis='vertical'>
                        <Flex w={'100vw'} pr={'2rem'} pl={'2rem'} direction={{base: 'column', md: 'row'}}>

                            <Stack direction={'row'} spacing={'0.5rem'}>
                                <Text fontSize={'10pt'}><a href='mailto: bencer@outlook.com'>Email</a></Text>
                                <Text fontSize={'10pt'}><a href='https://github.com/bencer3283'>GitHub</a></Text>
                                <Text fontSize={'10pt'}><a href='https://www.linkedin.com/in/posheng'>LinkedIn</a></Text>
                                <Text fontSize={'10pt'}><a href='https://www.instagram.com/bencer3283/'>Instagram</a></Text>
                                <Text fontSize={'10pt'}><a href='https://www.facebook.com/bencercheng/'>Facebook</a></Text>
                                <Text fontSize={'10pt'}><a href='https://twitter.com/ben3283'>Twitter</a></Text>
                            </Stack>
                            <Spacer />
                            <Text fontSize={'8pt'}>
                                © Po Sheng Cheng {year}
                            </Text>

                        </Flex>
                    
                    
                </AbsoluteCenter>
                
            </Box>
            </Box>
        </ChakraProvider>
    )
}

export default Layout;