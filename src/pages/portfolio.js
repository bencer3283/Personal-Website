import * as React from 'react';
import { useState } from 'react';
import Layout from '../components/Layout';
import { SEO } from '../components/seo';
import { Container, Slider, SliderFilledTrack, SliderTrack, SliderThumb, Center, Avatar, Box, HStack } from '@chakra-ui/react';

const PortfolioPage = () => {
    const [oneSize, setOneSize] = useState('15vh');
    const [twoSize, setTwoSize] = useState('15vh');

    return (
        <Layout>

            <Container w={'50vw'} h={oneSize} bg={'blue.300'} rotate={'60deg'}>
                {oneSize.toString()}
            </Container>
            <HStack m={'20vh'}>
                <Center p={'2vh'}>
                    <div style={{ transform: `rotate(0deg) translateY(0vh)` }}>
                        <TeleshiftArm armController={setOneSize} direction={'vertical'} />
                    </div>
                    <div style={{ transform: `rotate(60deg) translate3d(8vh, -4vh, 0)` }}>
                        <TeleshiftArm armController={setOneSize} direction={'vertical'} />
                    </div>
                    <div style={{ transform: `rotate(30deg) translate3d(4vh, 15vh, 0)` }}>
                        <TeleshiftArm armController={setOneSize} direction={'horizontal'} />
                    </div>
                    <div style={{ transform: `rotate(0deg) translate3d(-24vh, 20vh, 0)` }}>
                        <TeleshiftArm armController={setOneSize} direction={'vertical'} isReversed={true} />
                    </div>
                    <div style={{ transform: `rotate(-60deg) translate3d(-21vh, -27vh, 0)` }}>
                        <TeleshiftArm armController={setOneSize} direction={'vertical'} />
                    </div>
                    <div style={{ transform: `rotate(-30deg) translate3d(-47vh, -9vh, 0)` }}>
                        <TeleshiftArm armController={setOneSize} direction={'horizontal'} isReversed={true} />
                    </div>
                    <Box borderRadius={'50%'} w={'10vh'} h={'10vh'} bg={'blue.300'} style={{
                        transform: `translate3d(-51vh, 10vh, 0)`
                    }} />
                </Center>
                <Center p={'2vh'}>
                    <div style={{ transform: `rotate(0deg) translateY(0vh)` }}>
                        <TeleshiftArm armController={setOneSize} direction={'vertical'} />
                    </div>
                    <div style={{ transform: `rotate(60deg) translate3d(8vh, -4vh, 0)` }}>
                        <TeleshiftArm armController={setOneSize} direction={'vertical'} />
                    </div>
                    <div style={{ transform: `rotate(30deg) translate3d(4vh, 15vh, 0)` }}>
                        <TeleshiftArm armController={setOneSize} direction={'horizontal'} />
                    </div>
                    <div style={{ transform: `rotate(0deg) translate3d(-24vh, 20vh, 0)` }}>
                        <TeleshiftArm armController={setOneSize} direction={'vertical'} isReversed={true} />
                    </div>
                    <div style={{ transform: `rotate(-60deg) translate3d(-21vh, -27vh, 0)` }}>
                        <TeleshiftArm armController={setOneSize} direction={'vertical'} />
                    </div>
                    <div style={{ transform: `rotate(-30deg) translate3d(-47vh, -9vh, 0)` }}>
                        <TeleshiftArm armController={setOneSize} direction={'horizontal'} isReversed={true} />
                    </div>
                    <Box borderRadius={'50%'} w={'10vh'} h={'10vh'} bg={'blue.300'} style={{
                        transform: `translate3d(-51vh, 10vh, 0)`
                    }} />
                </Center>
            </HStack>
            <Container w={'50vw'} h={oneSize} bg={'blue.300'} rotate={'60deg'}>
                {oneSize.toString()}
            </Container>

        </Layout>
    )
}

export default PortfolioPage;

export const Head = () => {
    <SEO title={'Interactive Design Engineering Portfolio | Po Sheng Cheng'} pathname={'design'} description={'An interactive online portfolio for Po Sheng Cheng\'s design and engineering works'} />
}

const TeleshiftArm = ({armController, direction, isReversed=false}) => {
    return <Slider
        aria-label='slider-ex-3'
        defaultValue={15}
        orientation={direction}
        h={direction === 'vertical' ? '20vh' : ''}
        w={direction === 'horizontal' ? '20vh' : ''}
        onChangeEnd={(value) => {
            let size = value.toString() + 'vh';
            armController(size);
        } }
        min={5}
        max={40}
        isReversed={isReversed}
    >
        <SliderTrack>
            <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
    </Slider>;
}
