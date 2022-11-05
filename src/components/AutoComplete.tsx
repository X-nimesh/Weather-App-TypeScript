import { Box, Flex } from '@chakra-ui/react';
import React from 'react'
import { CityDetails, Coordinates } from '../Schemas/Schema';
interface cityProps {
    'CityName': string

    'CountryName': string
    'State': string
    'Latitude': number
    'Longitude': number
};
interface Props {
    city: cityProps
    cord: (arg: Coordinates) => void
    cityDetails: (arg: CityDetails) => void
}

// const AutoComplete: React.FC<{ city: props, cord: (arg: Coordinates) => void, cityDetails: (arg: CityDetails) => void }> = (props) => {
const AutoComplete = (props: Props) => {
    let { city, cord, cityDetails } = props;
    let handleCityChange = (e: any) => {
        console.log("city", city);
        let cordinates = {
            'latitude': city.Latitude,
            'longitude': city.Longitude
        }
        let citynames: CityDetails = {
            'CityName': city.CityName,
            'Cntry': city.CountryName,
            'State': city.State
        }
        // console.log("cityname",cityname);
        cityDetails(citynames);
        cord(cordinates);
    }
    return (
        <Box pl='10px' onClick={(e) => { handleCityChange(e) }}>{city.CityName},{city.State},{city.CountryName}</Box>
    )
}

export default AutoComplete