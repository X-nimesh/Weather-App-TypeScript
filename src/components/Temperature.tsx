import React from 'react'
import { Avatar, Box, Flex, Grid, GridItem, Image, Text } from '@chakra-ui/react'
import { MdOutlineShareLocation } from "react-icons/md";
import { TodaysWeather } from '../Schemas/Schema';

const Tempertaure:React.FC<{TodayWeather:TodaysWeather}>  = (props) => {
    let { TodayWeather } = props;
    // console.log("log : TodayWeather", TodayWeather)
    return (
        <Grid bg='white'
            gridTemplateColumns='auto 20%'
            gridTemplateRows='10% auto 30%'
            p='20px 30px'>
            <GridItem >
                <Text> Temperature</Text>
            </GridItem>
            <GridItem rowSpan={3}>
                <Image src='./assets/temprature.svg' h='150px' />
            </GridItem>
            <Flex alignItems='center' justifyItems='center'>
                <Text fontSize='4xl' color='brand.dblue'>{TodayWeather.temp}<Text as='span' fontSize='xl' color='brand.lgrey'>C</Text></Text>
            </Flex>
            <Flex alignItems='center' gap='10px'>
                <Box fontSize='30px'>
                    <MdOutlineShareLocation />
                </Box>
                <Text color='brand.dblue'> Kathmandu, Nepal</Text>
            </Flex>
        </Grid >
    )
}

export default Tempertaure