import * as React from 'react'
import { Tab, Tabs, Text } from '@chakra-ui/react'

export const GeneralTabs = ({defaultTab, children}) => {
    return(
    <Tabs 
        variant='soft-rounded'
        size={{base: 'sm', md: 'md'}} 
        colorScheme='green' 
        align='center' 
        mt={4} 
        border={'2px'}
        borderColor={'blackAlpha.200'}
        p={{base: 3 ,md: 6}} 
        borderRadius={10} 
        defaultIndex={defaultTab}>
            {children}
    </Tabs>
    )
}

export const ResponsiveTab = ({children}) => {
    return(
        <Tab>
            <Text fontSize={{ base: '2xs', md: 'md' }}>
                {children}
            </Text>
        </Tab>
    )
}

export default GeneralTabs