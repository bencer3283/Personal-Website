import * as React from 'react';
import {
    Box,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Text
} from '@chakra-ui/react';
import DesktopNav from './desktopNav';

const directoriesArray = [
    'education',
    'research',
    'experiences',
    'organization'
]

function MobileAccordionNav() {
    return <Box overflowY={'auto'} maxH={'75vh'} boxShadow={'2xl'}>
        <Accordion defaultIndex={[]} allowToggle hideFrom='md' bgColor='#9EC972'>
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
            <AccordionItem border='none'>
                <h2>
                    <AccordionButton p={6}>
                        <Box as="span" flex='1' textAlign='left'>
                            Art Creation
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>

                </AccordionPanel>
            </AccordionItem>
        </Accordion></Box>;
}

export default MobileAccordionNav;