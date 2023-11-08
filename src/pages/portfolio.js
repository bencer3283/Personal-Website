import * as React from 'react';
import { useState } from 'react';
import Layout from '../components/Layout';
import { SEO } from '../components/seo';
import { Container, Slider, SliderFilledTrack, SliderTrack, SliderThumb, Center, useControllableState, Box, HStack } from '@chakra-ui/react';

let initArm = Array(12).fill(14);


const PortfolioPage = () => {
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

    const TeleshiftArm = ({direction, isReversed=false, id, length}) => {
        const [value, setValue] = useState(length[id])
        return <Slider
            orientation={direction}
            h={direction === 'vertical' ? '20vh' : ''}
            w={direction === 'horizontal' ? '20vh' : ''}
            onChangeEnd={(val) => {
                handleArmInteraction(val, id, length);
            } }
            onChange={(val) => {
                if (val >= 14 ) setValue(val)
                else setValue(14)
            }}
            min={5}
            max={40}
            isReversed={isReversed}
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
            <HStack m={'20vh'}>
                <Center p={'2vh'}>
                    <div style={{ transform: `rotate(0deg) translateY(0vh)` }}>
                        <TeleshiftArm direction={'vertical'} id={0} length={armLength}/>
                    </div>
                    <div style={{ transform: `rotate(60deg) translate3d(8vh, -4vh, 0)` }}>
                        <TeleshiftArm direction={'vertical'} id={1} length={armLength}/>
                    </div>
                    <div style={{ transform: `rotate(30deg) translate3d(4vh, 15vh, 0)` }}>
                        <TeleshiftArm direction={'horizontal'} id={2} length={armLength}/>
                    </div>
                    <div style={{ transform: `rotate(0deg) translate3d(-24vh, 20vh, 0)` }}>
                        <TeleshiftArm direction={'vertical'} isReversed={true} id={3} length={armLength}/>
                    </div>
                    <div style={{ transform: `rotate(-60deg) translate3d(-21vh, -27vh, 0)` }}>
                        <TeleshiftArm direction={'vertical'} id={4} length={armLength}/>
                    </div>
                    <div style={{ transform: `rotate(-30deg) translate3d(-47vh, -9vh, 0)` }}>
                        <TeleshiftArm direction={'horizontal'} isReversed={true} id={5} length={armLength}/>
                    </div>
                    <Box borderRadius={'50%'} w={'10vh'} h={'10vh'} bg={'blue.300'} style={{
                        transform: `translate3d(-51vh, 10vh, 0)`
                    }} />
                </Center>
                <Center p={'2vh'}>
                    <div style={{ transform: `rotate(0deg) translateY(0vh)` }}>
                        <TeleshiftArm direction={'vertical'} id={6} length={armLength}/>
                    </div>
                    <div style={{ transform: `rotate(60deg) translate3d(8vh, -4vh, 0)` }}>
                        <TeleshiftArm direction={'vertical'} id={7} length={armLength}/>
                    </div>
                    <div style={{ transform: `rotate(30deg) translate3d(4vh, 15vh, 0)` }}>
                        <TeleshiftArm direction={'horizontal'} id={8} length={armLength}/>
                    </div>
                    <div style={{ transform: `rotate(0deg) translate3d(-24vh, 20vh, 0)` }}>
                        <TeleshiftArm direction={'vertical'} isReversed={true} id={9} length={armLength}/>
                    </div>
                    <div style={{ transform: `rotate(-60deg) translate3d(-21vh, -27vh, 0)` }}>
                        <TeleshiftArm direction={'vertical'} id={10} length={armLength}/>
                    </div>
                    <div style={{ transform: `rotate(-30deg) translate3d(-47vh, -9vh, 0)` }}>
                        <TeleshiftArm direction={'horizontal'} isReversed={true} id={11} length={armLength}/>
                    </div>
                    <Box borderRadius={'50%'} w={'10vh'} h={'10vh'} bg={'blue.300'} style={{
                        transform: `translate3d(-51vh, 10vh, 0)`
                    }} />
                </Center>
            </HStack>

        </Layout>
    )
}

export default PortfolioPage;

export const Head = () => {
    <SEO title={'Interactive Design Engineering Portfolio | Po Sheng Cheng'} pathname={'design'} description={'An interactive online portfolio for Po Sheng Cheng\'s design and engineering works'} />
}


