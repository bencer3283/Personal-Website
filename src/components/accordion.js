import * as React from 'react';
import {
    Box,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from '@chakra-ui/react';
import DesktopNav from './desktopNav';

function MobileAccordionNav() {
    return <Accordion defaultIndex={[]} allowToggle hideFrom='md' bgColor='#9EC972'>
        <AccordionItem border='none'>
            <h2>
                <AccordionButton p={6}>
                    <Box as="span" flex='1' textAlign='left'>
                        Education
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
                <DesktopNav directory='education'/>
            </AccordionPanel>
        </AccordionItem>

        <AccordionItem border='none'>
            <h2>
                <AccordionButton p={6}>
                    <Box as="span" flex='1' textAlign='left'>
                        Experiences
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
                <DesktopNav directory='experiences'/>
            </AccordionPanel>
        </AccordionItem>
        <AccordionItem border='none'>
            <h2>
                <AccordionButton p={6}>
                    <Box as="span" flex='1' textAlign='left'>
                        Origanization
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
                <DesktopNav directory='organization'/>
            </AccordionPanel>
        </AccordionItem>
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
    </Accordion>;
}

export default MobileAccordionNav;