import { Avatar, Box, Button, ButtonGroup, Flex, Grid, GridItem, IconButton, Switch, Text } from '@chakra-ui/react'
import React, { useContext, useState } from 'react'
import { MdArrowDropDown, MdOutlineDarkMode, MdLightMode } from "react-icons/md";

import { TodaysWeather, WeeklyWeather } from '../Schemas/Schema';
import HighlightComponent from './HighlightComponent';
import Sunrise from './Sunrise';
import Tempertaure from './Temperature';
import Timer from './Timer';
import useClick from './useClick';
import WeatherWidget from './WeatherWidget';
import { ThemeContext } from '../ThemeContext';

interface Props {
    TodayWeather: TodaysWeather,
    weeklyData: WeeklyWeather[],
    setUnit: (arg: string) => void,
    Tempunit: string,
    unitDet: string
}
const Main = (props: Props) => {
    // const Main: React.FC<{ weeklyData: WeeklyWeather[]; TodayWeather: TodaysWeather, setUnit: (arg: string) => void, unitDet: string }> = (props) => {
    let { weeklyData, TodayWeather, setUnit, unitDet, Tempunit } = props;
    // let { DarkTheme } = useContext(ThemeContext);
    // const [Darktheme, setDarktheme] = useState(useContext(ThemeContext))
    let { DarkTheme, themeChange } = useContext<any>(ThemeContext);
    // console.log("log : Darktheme", Darktheme)

    // console.log("log : DarkTheme", DarkTheme)

    // console.log("log : weeklyData", weeklyData)
    let unit = (unitClick: string) => {
        if (unitClick === 'metric') {
            setUnit('metric');
            console.log('metric');

        }
        else if (unitClick === 'imperial') {
            console.log('imperial');
            setUnit('imperial');

        }
    }
    const { loading, loadingChange } = useClick();
    // console.log(Darktheme);


    return (
        <>
            <Grid gridTemplateRows='10% 30% auto' h='100vh' p='10px 20px' gap='20px' bg={DarkTheme ? '#181818' : 'white'} >
                <Grid gridTemplateColumns='20% 50% auto' w='100%' h='100%' alignItems='center'>
                    <Flex justifyContent='space-around'>
                        <Text color='#8c8d9c' fontSize='xl' fontWeight='600'>Today</Text>
                        <Text color='#58b0f7' fontSize='xl' fontWeight='600'>Week</Text>
                    </Flex>
                    <Flex justifyContent='flex-end' gap='10px' fontFamily='Poppins'>
                        <Flex alignItems={'center'}>
                            <Switch onChange={() => { themeChange(!DarkTheme) }}
                                zIndex='0'
                                _active={{
                                    outline: 'none',
                                }}
                                _focus={{
                                    outline: 'none',
                                    border: 'none'
                                }}
                                colorScheme='blue'
                            />
                            {/* <Button p='0' borderRadius='50%'

                                zIndex='1'
                                transition={'.3s'}
                                size='sm'
                                bg={DarkTheme ? 'blue.100' : 'blue.900'}
                                color={DarkTheme ? 'blue.900' : 'blue.200'}
                                onClick={themeChange}
                                _hover={{
                                    bg: 'black',
                                    color: 'blue.200'
                                }}
                                _focus={{
                                    outline: 'none',
                                }}
                                _active={{
                                    outline: 'none',
                                    background: 'black',
                                    transform: 'scale(0.85)'
                                }}
                            >
                                {DarkTheme ? <MdLightMode /> : <MdOutlineDarkMode />}
                            </Button> */}

                        </Flex>
                        <Flex bg={Tempunit === 'metric' ? '#4dabf7' : '#8c8d9c'} w='8' h='8'
                            alignItems='center'
                            justifyContent='center'
                            color='white'
                            borderRadius='50%'
                            cursor='pointer'
                            onClick={() => { unit('metric') }} >
                            <Text>
                                °C
                            </Text>
                        </Flex>
                        <Flex bg={Tempunit === 'imperial' ? '#4dabf7' : '#8c8d9c'} w='8' h='8' alignItems='center' justifyContent='center' color='white' borderRadius='50%'
                            cursor='pointer'
                            onClick={() => { unit('imperial') }}
                        >
                            <Text fontFamily='Poppins'>
                                °F
                            </Text>
                        </Flex>
                    </Flex>
                    <Flex alignItems='center' justifyContent='space-between'
                        bg={DarkTheme ? '#161515' : 'white'}
                        p='5px 20px' ml='20px' borderRadius='10px'>
                        <Flex alignItems='center' gap='10px'>

                            <Avatar src='https://i1.adis.ws/i/canon/get-inspired-home-studio-portraits-1-hub_0259e4eec3a54ed6bc6e310ff403fb9d?w=550&qlt=100' w='10' h='10' />
                            <Text fontSize='sm' fontWeight='600' color={DarkTheme ? '#ffff' : '#181818'} >
                                Diagonal Tech
                            </Text>
                        </Flex>
                        <Text fontSize='3xl' fontWeight='600' color={DarkTheme ? '#ffff' : '#181818'} >
                            <MdArrowDropDown />
                        </Text>
                    </Flex>

                </Grid>
                <Flex w='100%' h='100%' justifyContent='space-around'>
                    {weeklyData?.map((item) => (
                        // <h1></h1>
                        // { item }
                        <WeatherWidget day={item.day} unitDet={unitDet} status={item.status} temp={item.temp} />
                    ))}
                </Flex>
                <GridItem w='100%' h='100%' pl='15px' >
                    <Text color='#7c7d8f' fontSize='2xl' mb='10px'>
                        Today Highlight
                    </Text>
                    <Grid gridTemplateColumns='repeat(3, 1fr)' gap='10px' >

                        <Sunrise TodayWeather={TodayWeather} />
                        <Tempertaure unitDet={unitDet} TodayWeather={TodayWeather} />
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