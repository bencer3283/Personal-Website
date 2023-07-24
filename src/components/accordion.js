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
    return <Accordion defaultIndex={[0]} allowToggle hideFrom='md' bgColor='#9EC972'>
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
                <Box>
                    <DesktopNav directory='education'/>
                </Box>
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.
            </AccordionPanel>
        </AccordionItem>
    </Accordion>;
}

export default MobileAccordionNav;