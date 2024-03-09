import * as React from 'react'
import { Tabs } from '@chakra-ui/react'

const GeneralTabs = ({defaultTab, children}) => {
    return(
    <Tabs 
        variant='soft-rounded' 
        colorScheme='blue' 
        align='center' 
        mt={6} 
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