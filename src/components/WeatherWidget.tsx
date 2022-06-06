import { Box, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react'
import rainy from '../assets/rainny.svg'


const WeatherWidget = (props: any) => {
  let { day, status, temp, icon, unitDet } = props;

  let weekDays = null;
  switch (day) {
    case 0:
      weekDays = "Sunday";
      break;
    case 1:
      weekDays = "Monday";
      break;
    case 2:
      weekDays = "Tuesday";
      break;
    case 3:
      weekDays = "Wednesday";
      break;
    case 4:
      weekDays = "Thursday";
      break;
    case 5:
      weekDays = "Friday";
      break;
    case 6:
      weekDays = "Saturday";

  }
  switch (status) {

  }
  return (
    <Flex
      alignItems='center' w='12%'
      direction='column'
      bg='white'
      p='20px 10px'
      fontSize='l'
      justifyContent='space-between'
      gap='15px'
      borderRadius='10px'
      _hover={{
        bg: '#72bdf7',
        color: 'white',
        boxShadow: '10px 10px 5px #dedede'

      }}
      boxShadow='0px 0px 10px #dedede'
    >
      <Text fontWeight='500'>
        {weekDays}
      </Text>
      <Image src={rainy} boxSize='80px' />
      <Text fontWeight='500'>
        {temp}°{unitDet}
      </Text>


    </Flex>
  )
}

export default WeatherWidget