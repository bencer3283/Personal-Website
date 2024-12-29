import { Box, Card, CardBody, Center, Stack, Heading, TabPanel, TabPanels, Tabs, Text, Tooltip, Button } from '@chakra-ui/react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import {GeneralTabs, ResponsiveTab} from '../components/generalTab';
import GeneralTabList from '../components/generalTabList';

export const frontmatter = {
    title: 'HSI Imaging System'
}

export default function HSIsection() {
    return(
        <div>
            <Text fontSize={'6xl'} mt={8}>{frontmatter.title}</Text>
            <Text fontSize={'4xl'}>A novel line-scan HyperSpectral Imaging system for scientific uses.</Text>
            <Center mt={6}>
                <Card w={{base: '2xs', md: '5xl'}} direction={{base: 'column', md: 'row'}} variant={'outline'}>
                    <Box m={4}>
                        <StaticImage src='../images/hsi.png' height={400} imgStyle={{borderRadius: '3%'}}></StaticImage>
                    </Box>
                    <CardBody>
                        <Text>
                            Hyperspectral imaging, or spectral mapping, is an imaging process that measures the whole spectrum on each location of a sample. The scanning process of traditional microscopic spectral mapping is complex and the scanning range is often small.  I developed this system and its accompanying software to enable researchers in the field of optoelectronics to work more efficiently by improving scanning speed and range and providing self-contained data analysis features.
                        </Text>
                    </CardBody>
                </Card>
            </Center>
            <Text fontSize={'4xl'} mt={6}>Visual communications</Text>
            <Text>
                The complex concepts involved in this novel spectral imaging system is not easy to understand even for people in the field.
                That is why I devoted a lot of effort into the visual communication of this product and made the following graphs.
            </Text>
            <GeneralTabs>
            <GeneralTabList>
                    <ResponsiveTab>Working Principle</ResponsiveTab>
                    <ResponsiveTab>System Components</ResponsiveTab>
                </GeneralTabList>
                <TabPanels>
                
                    <TabPanel>
                        <Card w={{base: '2xs', md: '5xl'}} variant={'unstyled'}>
                            <CardBody textAlign={'start'}>
                                <Center>
                                    <StaticImage src='../images/hsi_concept.jpg' height={450}></StaticImage>
                                </Center>
                                <Heading mt={6}>From scanning to formation of data</Heading>
                                <Text mt={4}>
                                    From A to C:
                                </Text>
                                <Box ml={10}>
                                    <ol type='A'>
                                    <li>The system takes a photo of a line on the sample through the input slit.</li>
                                    <li>Every point on the line has its spectrum dispersed simoutaneously by a linear spectrometer.</li>
                                    <li>These spectra is imaged on a 2D monochrome EMCCD sensor to form the "on sensor image".</li>
                                </ol>
                                </Box>
                                <Text>From ABC to abc: the same procedure is repeated on other lines on the sample to acquire the spectra on every location of the sample. The movement is achieved by a motorized stage.</Text>
                            </CardBody>
                        </Card>
                    </TabPanel>
                    <TabPanel>
                    <Card w={{base: '2xs', md: '5xl'}} variant={'unstyled'}>
                            <CardBody textAlign={'start'}>
                                <Center>
                                    <StaticImage src='../images/hsiraypath.png' height={450}></StaticImage>
                                </Center>
                                <Heading mt={6}>Ray trace and system configuration</Heading>
                                <Text mt={4}>
                                    Based on my observations when working alongside researchers in the field, 
                                    I found that once they fully understand the optical components of HSI,
                                    they will also be able to comprehend the working principle of HSI at the same time.
                                    Instead of trying to explain the complicated working principle everytime, I found that simply explaining only the system configuration is much easier and more effective.
                                </Text>
                            </CardBody>
                        </Card>
                    </TabPanel>
                </TabPanels>
                
            </GeneralTabs>

            <Text fontSize={'4xl'} mt={6}>Human-centered approach</Text>
            <Text>
                In order to find the needs and bottleneck of current spectral mapping workflow, I worked with professional researchers
                in the institute for a couple of monthes before the development of HSI.
            </Text>
            <Text as={'b'}>I identified the following painpoints and developed features accordingly.</Text>
            <Center>
                <Stack mt={6} direction={{base: 'column', md: 'row'}}>
                    <Card variant={'outline'} w={'m'}>
                        <CardBody textAlign={'center'}>
                            <Text fontSize={'2xl'}>Painpoints</Text>
                        </CardBody>
                    </Card>
                    
                    <Card variant={'filled'} w={'m'}>
                        <CardBody textAlign={'start'}>
                            <Heading>1</Heading>
                            <Text>Jumping between equipments</Text>
                        </CardBody>
                    </Card>
                    <Card variant={'filled'} w={'m'}>
                        <CardBody textAlign={'start'}>
                            <Heading>2</Heading>
                            <Text>Jumping between softwares</Text>
                        </CardBody>
                    </Card>
                    <Card variant={'filled'} w={'m'}>
                        <CardBody textAlign={'start'}>
                            <Heading>3</Heading>
                            <Text>Lack of suitable file format</Text>
                        </CardBody>
                    </Card>
                </Stack>
                
            </Center>
            <Center mt={3}>
                <Card variant={'filled'} w={'5xl'}>
                    <CardBody textAlign={'start'}>
                        <Heading>HSI</Heading>
                        <Text mb={6}>An one-stop, integrated solution</Text>
                        <Tabs variant={'soft-rounded'}>
                            <GeneralTabList>
                                <ResponsiveTab>Integrated OM</ResponsiveTab>
                                <ResponsiveTab>Built-in Analysis</ResponsiveTab>
                                <ResponsiveTab>Custom TIFF</ResponsiveTab>
                            </GeneralTabList>
                            <TabPanels>
                                <TabPanel>
                                    <Text mb={6}>
                                        A big bottleneck in the workflow of spectral mapping is the need to decide the range of scanning by examining the sample on another equipment beforehand.
                                        That is why I integrated another Optical Microscope (OM) in HSI hardware so users can set and iterate scanning ranges in the same HSI software without moving the sample to another OM.
                                    </Text>
                                    <Tooltip placement={'top-end'} label='The screen on the right shows the live-view image of the sample from the OM in HSI. User can drag the red line to set the scanning range.'>
                                        <Box>
                                            <StaticImage src='../images/hsiom.png' imgStyle={{ borderRadius: '15px' }}></StaticImage>
                                        </Box>
                                    </Tooltip>
                                </TabPanel>
                                <TabPanel>
                                    <Text mb={6}>
                                        Due to the special 3D array data structure of hyperspectral imaging, another issue in spectral mapping workflow is the need to use special software to view and perform analysis on the image.
                                        So, I developed analysis features in the HSI software that allows users to browse the three dimensional image from different "perspectives" (2D slices), which is not a feature availiable on existing softwares like ImageJ.
                                        Also, analysis features for specific workflow like backgroud subtraction for reflective spectrum are also built-in, so users no longer have to switch between different softwares.
                                    </Text>
                                    <StaticImage src='../images/hsianalysis.png' imgStyle={{borderRadius: '15px'}}></StaticImage>
                                </TabPanel>
                                <TabPanel>
                                    <Text mb={6}>
                                        While there are existing file formats that are able to store hyperspectral images, their compatibilities are often limited and can not store important scanning settings.
                                        I developed a custom TIFF file format that is compatible with existing softwares but also carries information unique to HSI to address the issue. 
                                    </Text>
                                    <Tooltip placement={'top-end'} label='This screeshot was taken while HSI is performing scan, during which scanning setting controls are disabled.'>
                                        <Box>
                                            <StaticImage src='../images/hsifile.png' imgStyle={{borderRadius: '15px'}}></StaticImage>
                                        </Box>
                                    </Tooltip>
                                </TabPanel>
                            </TabPanels>
                        </Tabs>
                    </CardBody>
                </Card>
            </Center>
            <Card variant={'outline'} mt={6} mb={40}>
                <CardBody>
                    <Heading>Learn more</Heading>
                    <Button variant={'link'} m={4}>
                        <Link to='../experiences/intern_at_PW_2020/'>Previous internship to understand the research workflow</Link>
                    </Button>
                    <Button variant={'link'} m={4}>
                        <Link to='../experiences/collegeStudentResearch/'>At the project page</Link>
                    </Button>
                    <Button variant={'link'} m={4}>
                        <a href='https://github.com/HyperSpectral-Imaging' target="_blank" rel="noopener noreferrer">On the GitHub repo</a>
                    </Button>
                </CardBody>
            </Card>
        </div>
        
    )
}