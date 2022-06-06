import React, { useState } from 'react'
import { Grid, GridItem, Text, Input, InputGroup, InputLeftElement, InputRightElement, Stack, Flex, Spacer, Image, Box, Icon, Wrap } from '@chakra-ui/react'
import { AiOutlineSearch } from "react-icons/ai";
import { BiCurrentLocation } from "react-icons/bi";
import rainy from '../assets/rainny.svg'
import cloud from '../assets/cloudy.svg'
import sunrise from '../assets/sunrise.svg'
import { TodaysWeather } from '../Schemas/Schema';
import AutoComplete from './AutoComplete';
import axios from 'axios';
interface cordinate{
    'longitude':number,'latitude':number
}
const Sidebar:React.FC<{Todayweather:TodaysWeather,cord:cordinate}> = (props) => {
    let date=new Date();
    let { Todayweather,cord } = props;
    let [city, setCity] = useState();    
    const [cities, setcities] = useState<string[]>([]);
    // let cities:[string] = ['kathmandu'];
    let handleSearch=(e:any)=>{
        console.log("search",e);
        setCity(e);
        getcities(e);
    }
    let getcities = async (city:string) => {
        let citiesList:string[]=[];
        await axios({
            method: 'GET',
            url: `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=4&appid=2cef435fc80892a1fcba4005dc6b4223`,
        })
        .then(function (response:any) {
        // console.log('Response',response);
        response.data.map((item:string,id:number)=>{
            citiesList.push(item);
        })
        setcities(citiesList);
        
        
    })
    .catch(function (error) {
        console.log(error)
    });
    // console.log("log : response.data.map : citiesList", citiesList)
    
}
console.log(cities);
let cityDetail={
    'CityName':"Kathmandu",
    'CountryName':"Nepal",
    'State':"Nepal",
    'Latitude':27.7172453,
    'Longitude':85.3239605,
};

    return (
        <>
            <Flex alignItems='center' direction='column' gap='20px' pl='20px' pt='20px'>

                <Stack w='95%' spacing={0} >
                    <InputGroup bg='white' borderRadius='10px'>
                        <InputLeftElement
                            pointerEvents='none'
                            children={<AiOutlineSearch color='black' />}
                        />
                        <Input type='tel' placeholder='search' color='black' onChange={(event)=>{handleSearch(event.target.value)}} />
                    </InputGroup>
                     {cities.length>0 &&  <Flex direction='column' color='gray.500' bg='white' border='1px' borderColor='gray.200' pl='40px'>
                    {cities?.map((item:any)=>{
                        console.log(item);
                        cityDetail.CityName=item.name;
                        cityDetail.CountryName=item.country;
                        cityDetail.Latitude=item.lat;
                        cityDetail.Longitude=item.lon;
                        cityDetail.State=item.state;
                        return <AutoComplete city={cityDetail}/>
                        
                        
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
                        {Todayweather?.temp}°C
                    </Text>
                    <Text as='span' align='left' fontSize='xl' fontFamily='Roboto' fontWeight='600' color='black'>
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

                    <Icon as={BiCurrentLocation} w='8' h='12' mt='10px' color='#6875f5' />
                    <Text fontSize='2xl' color='#424360' >
                        Budhanilkantha,<br />Kathamndu,Nepal
                    </Text>
                </Wrap>

            </Flex>

        </>
    )
}

export default Sidebar