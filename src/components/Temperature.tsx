import React, { useContext } from 'react'
import { Avatar, Box, Flex, Grid, GridItem, Image, Text } from '@chakra-ui/react'
import { MdOutlineShareLocation } from "react-icons/md";
import { TodaysWeather } from '../Schemas/Schema';
import { ThemeContext } from '../ThemeContext';
const Tempertaure: React.FC<{ TodayWeather: TodaysWeather, unitDet: string }> = (props) => {
    let { TodayWeather, unitDet } = props;
    let { DarkTheme, themeChange } = useContext<any>(ThemeContext);
    // console.log("log : TodayWeather", TodayWeather)
    return (
        <Grid bg={DarkTheme ? '#161515' : 'white'}
            gridTemplateColumns='auto 20%'
            gridTemplateRows='10% auto 30%'
            p='20px 30px'
            borderRadius='10px'
            boxShadow={DarkTheme ? '0px 0px 10px black' : '0px 0px 10px #dedede'}

        >
            <GridItem color={DarkTheme ? '#ffff' : '#181818'}>
                <Text> Temperature</Text>
            </GridItem>
            <GridItem rowSpan={3} color={DarkTheme ? '#fff' : '#181818'}>
                <Image src='./assets/temprature.svg' h='150px' />
            </GridItem>
            <Flex alignItems='center' justifyItems='center'>
                <Text fontSize='4xl' color={DarkTheme ? '#ffff' : 'brand.dblue'} >{TodayWeather.temp}<Text as='span' fontSize='xl' color='brand.lgrey'>{unitDet}</Text></Text>
            </Flex>
            <Flex alignItems='center' gap='10px' color={DarkTheme ? '#fff' : '#181818'}>
                <Box fontSize='30px'>
                    <MdOutlineShareLocation />
                </Box>
                <Text color={DarkTheme ? '#fff' : 'brand.dblue'}> Kathmandu, Nepal</Text>
            </Flex>
        </Grid >
    )
}

export default Tempertaure