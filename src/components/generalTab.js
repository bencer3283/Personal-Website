import * as React from 'react'
import { Tabs } from '@chakra-ui/react'

const GeneralTabs = ({defaultTab, children}) => {
    return(
    <Tabs 
        variant='soft-rounded'
        size={'md'} 
        colorScheme='green' 
        align='center' 
        mt={4} 
        border={'2px'}
        borderColor={'blackAlpha.200'}
        p={6} 
        borderRadius={10} 
        defaultIndex={defaultTab}>
            {children}
    </Tabs>
    )
}

export default GeneralTabs;