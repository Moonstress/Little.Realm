import { Flex, Card, Image, Center } from '@chakra-ui/react'
import React from 'react'

const Carousel = () => {
    return (
        <Center>
            <Flex justify="space-around">
                <Card w='xs' m='5'>
                    <Image src="https://via.placeholder.com/150" alt="Placeholder Image" />
                </Card>
                <Card w='xs' m='5'>
                    <Image src="https://via.placeholder.com/150" alt="Placeholder Image" />
                </Card>
                <Card w='xs' m='5'>
                    <Image src="https://via.placeholder.com/150" alt="Placeholder Image" />
                </Card>
                <Card w='xs' m='5'>
                    <Image src="https://via.placeholder.com/150" alt="Placeholder Image" />
                </Card>
            </Flex>
        </Center>
    )
}

export default Carousel
