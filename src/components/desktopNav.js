import * as React from 'react';
import {
    Button,
    Card,
    CardBody,
    CardFooter,
    HStack,
    Stack,
    Heading,
    Text
} from '@chakra-ui/react';
import { StaticImage } from 'gatsby-plugin-image';

function DesktopNav() {
    return <HStack maxH='sm' bg='#9EC972' overflowX='auto' hideBelow='md'>
        <Card w='sm' direction='row' m='4' flexShrink='0'>
            <StaticImage src='../images/%%.png' height='200' />
            <Stack>
                <CardBody>
                    <Heading size='md'>
                        Page Card Heading
                    </Heading>
                    <Text>
                        An excerpt of the page this card is heading to.
                    </Text>
                </CardBody>
                <CardFooter>
                    <Button variant='outline'>
                        Learn more
                    </Button>
                </CardFooter>
            </Stack>
        </Card>
        <Card w='sm' direction='row' m='4' flexShrink='0'>
            <StaticImage src='../images/%%.png' height='200' />
            <Stack>
                <CardBody>
                    <Heading size='md'>
                        Page Card Heading
                    </Heading>
                    <Text>
                        An excerpt of the page this card is heading to.
                    </Text>
                </CardBody>
                <CardFooter>
                    <Button variant='outline'>
                        Learn more
                    </Button>
                </CardFooter>
            </Stack>
        </Card>
        <Card w='sm' direction='row' m='4' flexShrink='0'>
            <StaticImage src='../images/%%.png' height='200' />
            <Stack>
                <CardBody>
                    <Heading size='md'>
                        Page Card Heading
                    </Heading>
                    <Text>
                        An excerpt of the page this card is heading to.
                    </Text>
                </CardBody>
                <CardFooter>
                    <Button variant='outline'>
                        Learn more
                    </Button>
                </CardFooter>
            </Stack>
        </Card>
    </HStack>;
}

export default DesktopNav;