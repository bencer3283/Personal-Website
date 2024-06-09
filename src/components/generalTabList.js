import * as React from 'react';
import { TabList } from '@chakra-ui/react';

const GeneralTabList = ({children}) => {
    return(
        <TabList bg={'blackAlpha.100'} p={'6px'} borderRadius={26} w={'fit-content'}>
            {children}
        </TabList>
    )
}

export default GeneralTabList;