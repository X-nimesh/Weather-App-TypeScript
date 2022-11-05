import React, { useContext, useEffect, useState } from 'react'
import { Grid, GridItem, Text, Input, InputGroup, InputLeftElement, InputRightElement, Stack, Flex, Spacer, Image, Box, Icon, Wrap, Button } from '@chakra-ui/react'
import { AiOutlineSearch } from "react-icons/ai";
import { BiCurrentLocation } from "react-icons/bi";
import rainy from '../assets/rainny.svg'
import cloud from '../assets/cloudy.svg'
import sunrise from '../assets/sunrise.svg'
import { CityDetails, Coordinates, TodaysWeather } from '../Schemas/Schema';
import AutoComplete from './AutoComplete';
import axios from 'axios';
import useClick from './useClick';
// import { ThemeContext } from '../index';
import { ThemeContext } from '../ThemeContext';
import { CUIAutoComplete } from 'chakra-ui-autocomplete';

const Sidebar: React.FC<{ Todayweather: TodaysWeather, cord: (arg: Coordinates) => void, unit: string }> = (props) => {
    let date = new Date()
    // const [Darktheme, setDarktheme] = useState(useContext(ThemeContext))
    // let darkTheme = useContext(ThemeContext);
    // let themeChange = useContext(ChangeThemeContext);
    let { DarkTheme, themeChange } = useContext<any>(ThemeContext);

    // console.log(Darktheme);


    let { Todayweather, cord, unit } = props;
    // let [city, setCity] = useState();
    // const [unitChange, setunitChange] = useState(unit);
    useEffect(() => {
        //   setunitChange(unit);
        // console.log(unit);


    }, [unit])

    const [cities, setcities] = useState<string[]>([]);
    const [cityNameDetails, setcityNameDetails] = useState<CityDetails>({
        CityName: 'Kathmandu',
        Cntry: 'Nepal',
        State: 'Bagmati'
    });
    let timer: any = null;

    // let cities:[string] = ['kathmandu'];
    let handleSearch = (e: any) => {
        // console.log("search", e);
        // setCity(e);
        e.preventDefault();
        if (setTimeout !== null) {
            clearTimeout(timer);
            console.log('hs');
        }
        timer = setTimeout(() => {
            getcities(e);
        }, 500);
    }
    let getcities = async (city: any) => {
        city.preventDefault();

        let citiesList: string[] = [];
        await axios({
            method: 'GET',
            url: `http://api.openweathermap.org/geo/1.0/direct?q=${city.target.value}&limit=4&appid=2cef435fc80892a1fcba4005dc6b4223`,
        })
            .then(function (response: any) {
                // console.log('Response',response);
                response.data.map((item: string, id: number) => {
                    citiesList.push(item);
                })
                setcities(citiesList);


            })
            .catch(function (error) {
                console.log(error)
            });
        // console.log("log : response.data.map : citiesList", citiesList)

    }

    // console.log(cities);
    let cityDetail = {
        'CityName': "Kathmandu",
        'CountryName': "Nepal",
        'State': "Nepal",
        'Latitude': 27.7172453,
        'Longitude': 85.3239605,
    };

    const { loading, loadingChange } = useClick();

    return (
        <>
            <Flex alignItems='center' direction='column' gap='20px' h='100vh' pl='20px' pt='20px' bg={DarkTheme ? '#181818' : 'white'}  >
                {/* <Button size='sm' m='0 auto' w='100px' h='50px'
                    isLoading={loading}
                    onClick={themeChange} >
                    Click Me
                </Button > */}

                <Stack w='95%' spacing={0} >
                    <InputGroup borderRadius='10px'
                        border={'black'}
                        _hover={{ outline: 'none' }}
                        bg={DarkTheme ? '#181818' : 'white'}
                    >
                        <InputLeftElement
                            pointerEvents='none'
                            children={<AiOutlineSearch color={DarkTheme ? 'white' : 'black'} />}
                        />
                        <Input type='tel' placeholder='search' color='black' onChange={handleSearch} />
                    </InputGroup>
                    {cities.length > 0 && <Flex direction='column' color='gray.500' bg={DarkTheme ? '#181818' : 'white'} borderColor='gray.200' >
                        {cities?.map((item: any) => {
                            console.log(item);
                            cityDetail.CityName = item.name;
                            cityDetail.CountryName = item.country;
                            cityDetail.Latitude = item.lat;
                            cityDetail.Longitude = item.lon;
                            cityDetail.State = item.state;
                            return <AutoComplete city={cityDetail} cord={cord} cityDetails={setcityNameDetails} />


                        })}
                    </Flex>}

                </Stack>
                <Stack w='100%' >

                    <Image
                        boxSize='70%'
                        src={cloud}
                        alt='Dan Abramov'
                    // m='0 auto'
                    />
                    <Text align='left' fontSize='5xl' fontFamily='Roboto' fontWeight='medium' color='#4dabf7'>
                        {Todayweather?.temp}°{unit}
                    </Text>
                    <Text as='span' align='left' fontSize='xl' fontFamily='Roboto' fontWeight='600' color={DarkTheme ? 'white' : 'black'}>
                        Monday,
                        <Text as='span' pl='4px' align='left' fontSize='xl' fontFamily='Roboto' fontWeight='500' color='#bfbfbf'>
                            {date.getHours()}:{date.getMinutes()}
                        </Text>
                    </Text>

                </Stack>


                <Flex alignItems='center' justifyContent='space-between' direction='column'  >
                    <Flex direction='row' alignItems='center' gap='15px'>
                        <Image src={rainy}
                            boxSize='15%'
                        />
                        <Text fontFamily='Roboto' fontWeight='500' color='#848596'>
                            {Todayweather?.status}
                            {/* {Todayweather?.current.Todayweather[0].icon} */}

                        </Text>
                    </Flex>
                    {/* <Flex direction='row' alignItems='center' gap='15px'>
                        <Image src={'http://openweathermap.org/img/wn/' + Todayweather?.Icon + '@4x.png'}
                            boxSize='20%'
                        />
                        <Text fontFamily='Roboto' fontWeight='500' color='#848596'>
                            Sunnny
                        </Text>
                    </Flex> */}
                </Flex>
                <Wrap gap='10px' w='90%' border='3px' h='150px' mr='20px' borderColor='#acacbe' borderStyle='dashed'>

                    <Icon as={BiCurrentLocation} w='8' h='12' mt='10px' color={DarkTheme ? 'lightblue' : 'black'} />
                    <Text fontSize='2xl' color={DarkTheme ? 'white' : 'black'} >
                        {cityNameDetails.CityName},<br />{cityNameDetails.State},<br />{cityNameDetails.Cntry}
                    </Text>
                </Wrap>

            </Flex >

        </>
    )
}

export default Sidebar