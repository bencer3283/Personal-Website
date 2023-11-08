import * as React from 'react';
import { useState } from 'react';
import Layout from '../components/Layout';
import { SEO } from '../components/seo';
import { Container, Slider, SliderFilledTrack, SliderTrack, SliderThumb, Center, Avatar, Box, HStack } from '@chakra-ui/react';

let initArm = Array(12).fill(15);


const PortfolioPage = () => {
    const [oneSize, setOneSize] = useState('15vh');
    const [twoSize, setTwoSize] = useState('15vh');

    const [armLength, setArmLength] = useState(initArm);

    function handleArmInteraction(newVal, id, length) {
        const newLength = length.map((e, i) => {
            if (i === id || i === id + 6) {
                return newVal
            }
            else {
                return e
            }
        })
        setArmLength(newLength);
    }

    const TeleshiftArm = ({armController, direction, isReversed=false, id, length, value}) => {
        return <Slider
            orientation={direction}
            h={direction === 'vertical' ? '20vh' : ''}
            w={direction === 'horizontal' ? '20vh' : ''}
            onChangeEnd={(value) => {
                handleArmInteraction(value, id, length);
            } }
            min={5}
            max={40}
            isReversed={isReversed}
            isReadOnly={false}
            value={value}
        >
            <SliderTrack>
                <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
        </Slider>;
    }

    return (
        <Layout>

            <Container w={'50vw'} h={oneSize} bg={'blue.300'} rotate={'60deg'}>
                {oneSize.toString()}
            </Container>
            <HStack m={'20vh'}>
                <Center p={'2vh'}>
                    <div style={{ transform: `rotate(0deg) translateY(0vh)` }}>
                        <TeleshiftArm armController={setArmLength} direction={'vertical'} id={0} length={armLength} />
                    </div>
                    <div style={{ transform: `rotate(60deg) translate3d(8vh, -4vh, 0)` }}>
                        <TeleshiftArm armController={setOneSize} direction={'vertical'} id={1} length={armLength}/>
                    </div>
                    <div style={{ transform: `rotate(30deg) translate3d(4vh, 15vh, 0)` }}>
                        <TeleshiftArm armController={setOneSize} direction={'horizontal'} id={2} length={armLength}/>
                    </div>
                    <div style={{ transform: `rotate(0deg) translate3d(-24vh, 20vh, 0)` }}>
                        <TeleshiftArm armController={setOneSize} direction={'vertical'} isReversed={true} id={3} length={armLength}/>
                    </div>
                    <div style={{ transform: `rotate(-60deg) translate3d(-21vh, -27vh, 0)` }}>
                        <TeleshiftArm armController={setOneSize} direction={'vertical'} id={4} length={armLength}/>
                    </div>
                    <div style={{ transform: `rotate(-30deg) translate3d(-47vh, -9vh, 0)` }}>
                        <TeleshiftArm armController={setOneSize} direction={'horizontal'} isReversed={true} id={5} length={armLength}/>
                    </div>
                    <Box borderRadius={'50%'} w={'10vh'} h={'10vh'} bg={'blue.300'} style={{
                        transform: `translate3d(-51vh, 10vh, 0)`
                    }} />
                </Center>
                <Center p={'2vh'}>
                    <div style={{ transform: `rotate(0deg) translateY(0vh)` }}>
                        <TeleshiftArm armController={setOneSize} direction={'vertical'} id={6} length={armLength} value={armLength[6]}/>
                    </div>
                    <div style={{ transform: `rotate(60deg) translate3d(8vh, -4vh, 0)` }}>
                        <TeleshiftArm armController={setOneSize} direction={'vertical'} id={7} length={armLength}/>
                    </div>
                    <div style={{ transform: `rotate(30deg) translate3d(4vh, 15vh, 0)` }}>
                        <TeleshiftArm armController={setOneSize} direction={'horizontal'} id={8} length={armLength}/>
                    </div>
                    <div style={{ transform: `rotate(0deg) translate3d(-24vh, 20vh, 0)` }}>
                        <TeleshiftArm armController={setOneSize} direction={'vertical'} isReversed={true} id={9} length={armLength}/>
                    </div>
                    <div style={{ transform: `rotate(-60deg) translate3d(-21vh, -27vh, 0)` }}>
                        <TeleshiftArm armController={setOneSize} direction={'vertical'} id={10} length={armLength}/>
                    </div>
                    <div style={{ transform: `rotate(-30deg) translate3d(-47vh, -9vh, 0)` }}>
                        <TeleshiftArm armController={setOneSize} direction={'horizontal'} isReversed={true} id={11} length={armLength}/>
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


