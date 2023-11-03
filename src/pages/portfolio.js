import * as React from 'react';
import { useState } from 'react';
import Layout from '../components/Layout';
import { SEO } from '../components/seo';
import { Container, Slider, SliderFilledTrack, SliderTrack, SliderThumb, Center } from '@chakra-ui/react';

const PortfolioPage = () => {
    const [oneSize, setOneSize] = useState('15vh');
    const [twoSize, setTwoSize] = useState('15vh');

    return (
        <Layout>

            <Container w={'50vw'} h={oneSize} bg={'blue.300'} rotate={'60deg'}>
                {oneSize.toString()}
            </Container>
            <Center>
                <div style={{ transform: `rotate(0deg) translateY(0vh)` }}>
                    <Slider
                        aria-label='slider-ex-3'
                        defaultValue={15}
                        orientation='vertical'
                        h={'20vh'}
                        onChangeEnd={(value) => {
                            let size = value.toString() + 'vh';
                            setOneSize(size);
                        }}
                        min={5}
                        max={40}
                    >
                        <SliderTrack>
                            <SliderFilledTrack />
                        </SliderTrack>
                        <SliderThumb />
                    </Slider>
                </div>
                <div style={{ transform: `rotate(60deg) translate3d(8vh, -4vh, 0)` }}>
                    <Slider
                        aria-label='slider-ex-3'
                        defaultValue={15}
                        orientation='vertical'
                        h='20vh'
                        onChangeEnd={(value) => {
                            let size = value.toString() + 'vh';
                            setOneSize(size);
                        }}
                        min={5}
                        max={40}
                    >
                        <SliderTrack>
                            <SliderFilledTrack />
                        </SliderTrack>
                        <SliderThumb />
                    </Slider>
                </div>
                <div style={{ transform: `rotate(30deg) translate3d(4vh, 15vh, 0)` }}>
                    <Slider
                        aria-label='slider-ex-3'
                        defaultValue={15}
                        orientation='horizontal'
                        w={'20vh'}
                        onChangeEnd={(value) => {
                            let size = value.toString() + 'vh';
                            setOneSize(size);
                        }}
                        min={5}
                        max={40}
                    >
                        <SliderTrack>
                            <SliderFilledTrack />
                        </SliderTrack>
                        <SliderThumb />
                    </Slider>
                </div>
                <div style={{ transform: `rotate(0deg) translate3d(0vh, 0vh, 0)` }}>
                    <Slider
                        aria-label='slider-ex-3'
                        defaultValue={15}
                        orientation='vertical'
                        h={'20vh'}
                        onChangeEnd={(value) => {
                            let size = value.toString() + 'vh';
                            setOneSize(size);
                        }}
                        min={5}
                        max={40}
                        isReversed={true}
                    >
                        <SliderTrack>
                            <SliderFilledTrack />
                        </SliderTrack>
                        <SliderThumb />
                    </Slider>
                </div>
            </Center>

        </Layout>
    )
}

export default PortfolioPage;

export const Head = () => {
    <SEO title={'Interactive Design Engineering Portfolio | Po Sheng Cheng'} pathname={'design'} description={'An interactive online portfolio for Po Sheng Cheng\'s design and engineering works'} />
}