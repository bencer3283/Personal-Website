import * as React from 'react';
import {
    Box,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Text,
    Button
} from '@chakra-ui/react';
import DesktopNav from './desktopNav';
import { Link } from 'gatsby';

const directoriesArray = [
    'education',
    'research',
    'experiences',
    'organization'
]

function MobileAccordionNav() {
    return <Box overflowY={'auto'} maxH={'75vh'} boxShadow={'2xl'}>
        <Accordion defaultIndex={[]} allowToggle hideFrom='md' bgColor='#9EC972'>
            <AccordionItem border='none'>
                <h2>
                    <AccordionButton p={6} as={Link} to='/art'>
                        <Box as="span" flex='1' textAlign='left'>
                            Portfolio
                        </Box>
                    </AccordionButton>
                </h2>
                <AccordionPanel pb={4}></AccordionPanel>
            </AccordionItem>
            {
                directoriesArray.map((item) => {
                    return (
                        <AccordionItem border='none' key={item}>
                            <h2>
                                <AccordionButton p={6}>
                                    <Box as="span" flex='1' textAlign='left'>
                                        <Text textTransform='capitalize'>{item}</Text>
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <DesktopNav directory={item} />
                            </AccordionPanel>
                        </AccordionItem>

                    )
                })
            }
            
        </Accordion></Box>;
}

export default MobileAccordionNav;