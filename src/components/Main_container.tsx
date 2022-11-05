import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Grid, GridItem } from '@chakra-ui/react'
import Sidebar from './Sidebar';
import Main from './Main';
import { TodaysWeather, WeeklyWeather } from '../Schemas/Schema';

const Main_container = () => {
  const [unit, setUnit] = useState('metric')
  const [cordinate, setcordinate] = useState(
    {
      'longitude': 85.3240,
      'latitude': 27.7172
    }
  );

  let [TodaysWeatherData, setTodayWeatherData] = useState<TodaysWeather>({
    humidity: 0,
    sunrise: 0,
    sunset: 0,
    temp: 0,
    visibility: 0,
    wind_speed: 0,
    status: 'clear',
    rain_status: 0,
    Icon: 'd'
  });
  let [weeklyWeatherData, setWeeklyWeatherData] = useState<WeeklyWeather[]>([]);
  let AllWeather = [];
  useEffect(() => {
    getWeather();
  }, [cordinate, unit]);
  const [unitDet, setunitDet] = useState('C');
  useEffect(() => {
    if (unit === 'metric') {
      setunitDet('C');
    }
    else if (unit === 'imperial') {
      setunitDet('F');
    }

  }, [unit])
  // console.log('unitDet', unitDet);

  let getWeather = async () => {
    await axios({
      method: 'GET',
      url: `https://api.openweathermap.org/data/2.5/onecall?lat=${cordinate.latitude}&lon=${cordinate.longitude}&units=${unit}&exclude=hourly,minutely&appid=2cef435fc80892a1fcba4005dc6b4223`,
    })
      .then(function (response: any) {
        let weeklyStatics: any = [];
        let todays: TodaysWeather = {
          humidity: response.data.current.humidity,
          sunrise: response.data.current.sunrise,
          sunset: response.data.current.sunset,
          temp: response.data.current.temp,
          visibility: response.data.current.visibility,
          wind_speed: response.data.current.wind_speed,
          status: response.data.current.weather[0].main,
          rain_status: response.data.current.uvi,
          Icon: response.data.current.weather[0].icon
        }
        // console.log('Response',response);

        setTodayWeatherData(todays);
        let day1 = new Date().getDay();
        response.data.daily.map((item: any, index: number) => {
          // console.log(item.weather[0].icon);
          if (day1 > 6) {
            day1 = 0;
          }
          weeklyStatics.push({
            id: index,
            temp: item.temp.day,
            status: item.weather[0].description,
            day: day1,
            icon: item.weather[0].icon,
          });

          day1++;
        })
        setWeeklyWeatherData(weeklyStatics);


      })
      .catch(function (error) {
        console.log(error)
      });

  }
  // console.log("log : weeklyWeatherData", weeklyWeatherData)


  return (
    <>
      <Grid gridTemplateColumns='25% 75%' gridTemplateRows='100% 100%' w='100vw' h='100vh' >
        <GridItem bg='white'>
          <Sidebar Todayweather={TodaysWeatherData} unit={unitDet} cord={setcordinate} />
        </GridItem>
        <GridItem bg='#fafafa' >
          <Main weeklyData={weeklyWeatherData} setUnit={setUnit} Tempunit={unit} unitDet={unitDet} TodayWeather={TodaysWeatherData} />
        </GridItem>
      </Grid>


    </>
  )
}

export default Main_container