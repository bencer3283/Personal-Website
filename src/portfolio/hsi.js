import { Box, Card, CardBody, Center, Heading, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react';
import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import { Head } from '../pages/portfolio';

export default function HSIsection() {
    return(
        <div>
            <Text fontSize={'6xl'} mt={8}>HSI Imaging System</Text>
            <Text fontSize={'4xl'}>A novel line-scan HyperSpectral Imaging system for scientific uses.</Text>
            <Center mt={6}>
                <Card w={'5xl'} direction={'row'} variant={'elevated'}>
                    <Box m={4}>
                        <StaticImage src='../images/hsi.png' height={400} imgStyle={{borderRadius: '3%'}}></StaticImage>
                    </Box>
                    <CardBody>
                        <Text>
                            Hyperspectral, or spectral mapping, is an imaging process that measures the whole spectrum on each location of a sample. The scanning process of traditional microscopic spectral mapping is complex and the scanning range is often small.  I developed this system and its accompanying software to enable researchers in the field of optoelectronics to work more efficiently by improving scanning speed and range and providing self-contained data analysis features.
                        </Text>
                    </CardBody>
                </Card>
            </Center>
            <Text fontSize={'4xl'} mt={6}>Visual Communication</Text>
            <Text>
                The complex concepts involved in this novel spectral imaging system is not easy to understand even for people in the field.
                That is why I devoted a lot of effort into the visual communication of this product. 
            </Text>
            <Tabs variant={'soft-rounded'} align='center' colorScheme='blue'>
                <TabPanels>
                    <TabPanel>
                        <Card w={'5xl'} align={'start'}>
                            <CardBody>
                                <StaticImage src='../images/hsiconcept.png' height={450}></StaticImage>
                                <Heading textAlign={'start'}>Scanning and Formation of data</Heading>
                            </CardBody>
                        </Card>
                    </TabPanel>
                    <TabPanel>
                    <Card w={'5xl'}>
                            <CardBody>
                                <StaticImage src='../images/hsiraypath.png' height={450}></StaticImage>
                                <Heading textAlign={'start'}>Ray path and system configuration</Heading>
                            </CardBody>
                        </Card>
                    </TabPanel>
                </TabPanels>
                <TabList>
                    <Tab>Concept</Tab>
                    <Tab>System</Tab>
                </TabList>
            </Tabs>
        </div>
        
    )
}