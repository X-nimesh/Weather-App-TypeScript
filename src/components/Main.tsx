import { Avatar, Box, Flex, Grid, GridItem, Text } from '@chakra-ui/react'
import React from 'react'
import { MdArrowDropDown } from "react-icons/md";
import { TodaysWeather, WeeklyWeather } from '../Schemas/Schema';
import HighlightComponent from './HighlightComponent';
import Sunrise from './Sunrise';
import Tempertaure from './Temperature';
import WeatherWidget from './WeatherWidget';

// interface Props{
//     weeklyData:WeeklyWeather
// }
const Main:React.FC<{weeklyData:WeeklyWeather[];TodayWeather:TodaysWeather}> = (props) => {
    let { weeklyData,TodayWeather } = props;
    // console.log("log : weeklyData", weeklyData)
  
    return (
        <>
            <Grid gridTemplateRows='10% 30% auto' h='100vh' p='10px 20px' gap='20px'  >
                <Grid gridTemplateColumns='20% 50% auto' w='100%' h='100%' alignItems='center'>
                    <Flex justifyContent='space-around'>
                        <Text color='#8c8d9c' fontSize='xl' fontWeight='600'>Today</Text>
                        <Text color='#58b0f7' fontSize='xl' fontWeight='600'>Week</Text>
                    </Flex>
                    <Flex justifyContent='flex-end' gap='10px' fontFamily='Poppins'>
                        <Flex bg='#4dabf7' w='8' h='8' alignItems='center' justifyContent='center' color='white' borderRadius='50%' >
                            <Text>
                                °C
                            </Text>
                        </Flex>
                        <Flex bg='#8c8d9c' w='8' h='8' alignItems='center' justifyContent='center' color='white' borderRadius='50%'>
                            <Text fontFamily='Poppins'>
                                °F
                            </Text>
                        </Flex>
                    </Flex>
                    <Flex alignItems='center' justifyContent='space-between' bg='white' p='5px 20px' ml='20px' borderRadius='10px'>
                        <Flex alignItems='center' gap='10px'>

                            <Avatar src='https://i1.adis.ws/i/canon/get-inspired-home-studio-portraits-1-hub_0259e4eec3a54ed6bc6e310ff403fb9d?w=550&qlt=100' w='10' h='10' />
                            <Text fontSize='sm' fontWeight='600' color='#17183c' >
                                Diagonal Tech
                            </Text>
                        </Flex>
                        <Text fontSize='3xl' fontWeight='600' color='#17183c' >
                            <MdArrowDropDown />
                        </Text>
                    </Flex>

                </Grid>
                <Flex w='100%' h='100%' justifyContent='space-around'>
                    {weeklyData?.map((item) => (
                        // <h1></h1>
                        // { item }
                        <WeatherWidget day={item.day} status={item.status} temp={item.temp}/>
                    ))}
                </Flex>
                <GridItem w='100%' h='100%' pl='15px' >
                    <Text color='#7c7d8f' fontSize='2xl' mb='10px'>
                        Today Highlight
                    </Text>
                    <Grid gridTemplateColumns='repeat(3, 1fr)' gap='10px' >

                        <Sunrise TodayWeather={TodayWeather}/>
                        <Tempertaure TodayWeather={TodayWeather}/>
                        {/* {weather.map((item) => (
                            <HighlightComponent title={item.title} head={item.head} sub={item.sub} status={item.status} img={item.img} />
                        ))} */}



                    </Grid>
                </GridItem>
            </Grid >
        </>
    )
}

export default Main