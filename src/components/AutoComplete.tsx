import { Flex } from '@chakra-ui/react';
import React from 'react'
interface props{
    'CityName':string
    'CountryName':string
    'State':string
    'Latitude':number
    'Longitude':number
};

const AutoComplete: React.FC<{ city:props}> = (props) => {
    let { city} = props;
    let handleCityChange=(e:any)=>{
        console.log("city",city);

    }
    return (
        <div onClick={(e)=>{handleCityChange(e)}}>{city.CityName},{city.State},{city.CountryName}</div>
    )
}

export default AutoComplete