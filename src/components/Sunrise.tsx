import { Flex, Grid, Image, Text } from '@chakra-ui/react'
import React, { useContext, useEffect, useState } from 'react'
import ContextMain from '../ContextMain';
import { TodaysWeather } from '../Schemas/Schema'
import { ThemeContext } from '../ThemeContext';
interface Time {
    sunset: number
    sunrise: number
};
const Sunrise: React.FC<{ TodayWeather: TodaysWeather }> = (props) => {
    let { theme, changeTheme } = ContextMain;
    // let { DarkTheme, themeChange } = useContext<any>(ThemeContext);
    let { TodayWeather } = props;
    // let [weeklyWeatherData, setWeeklyWeatherData] = useState<WeeklyWeather[]>([]);
    let [sunTime, setsunTime] = useState<Time>({
        sunset: 0,
        sunrise: 0
    });
    useEffect(() => {
        setsunTime({
            sunset: TodayWeather.sunset,
            sunrise: TodayWeather.sunrise
        });
    }, [TodayWeather])
    let timeset = new Date(sunTime.sunset * 1000);
    let timerise = new Date(sunTime.sunrise * 1000);
    // setSunrise(TodayWeather?.sunrise);
    // console.log("log : TodayWeather", sunTime)  

    return (
        <Grid gridTemplateRows='10% auto auto' p='20px 30px'
            boxShadow={DarkTheme ? '0px 0px 10px black' : '0px 0px 10px #dedede'}
            bg={DarkTheme ? '#181818' : 'white'} gap='10px'>
            <Text color={DarkTheme ? '#fffb' : '#181818'} >
                Sunrise and Sunset
            </Text>
            <Flex alignItems='center' w='100%' gap='20px'>
                <Image boxSize='70px' src='./assets/sunny.svg' />
                <Flex direction='column' alignItems='flex-start'>
                    <Text fontSize='xl' color={DarkTheme ? '#fffb' : '#181818'} fontWeight='500'>
                        {timeset.getHours().toLocaleString() + ":" + timeset.getMinutes()}
                    </Text>
                    <Text fontSize='sm' color={DarkTheme ? '#fffb' : '#181818'} >
                        Sunset
                    </Text>
                </Flex>
            </Flex>
            <Flex gap='20px' alignItems='center' w='100%'>
                <Image boxSize='70px' src='./assets/sunny.svg' />
                <Flex direction='column' alignItems='flex-start'>
                    <Text fontSize='xl' color={DarkTheme ? '#fffb' : '#181818'} fontWeight='500' w='100%'>
                        {'0' + timerise.getHours().toLocaleString() + ":" + timerise.getMinutes()}

                    </Text>
                    <Text fontSize='sm' color={DarkTheme ? '#fffb' : '#181818'} >
                        Sunrise
                    </Text>
                </Flex>
            </Flex>
        </Grid>
    )
}

export default Sunrise