import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import useClick from './useClick';

const Timer = () => {
    const [Timer, setTimer] = useState('00:00:00');
    let EndTime = new Date('2022-06-09 14:30:00').getTime() / 1000;
    // console.log(EndTime);
    let t = (EndTime - new Date().getTime() / 1000) + 1;
    // console.log("log : Timer : t", t)
    // console.log("log : Timer : t1", t - 1000)
    // console.log(Math.round(((t - 1) % 3600) / 60));

    useEffect(() => {
        TimeLeft(t);
    }, [])

    let TimeLeft = (t: number) => {
        // console.log('time left', t);
        t--;
        let hours = Math.floor((t % 86400) / 3600);
        let minutes = Math.floor((t % 3600) / 60);
        // let seconds = Math.floor(t % 60);
        setTimer(` ${hours} hrs ${minutes} min`);
    }
    setInterval(function () {
        TimeLeft(t);
    }, 60000);
    // const [loading, setLoading] = useState(false);
    // let loadingChange = () => {

    //     setLoading(true)
    //     setInterval(function () {
    //         setLoading(false);

    //     }, 5000);

    // }
    const { loading, loadingChange } = useClick();
    return (
        <>
            <Flex direction='column' bg='white'
                w='20vw'
                gap='20px'
                justify='center'
                align='center'>
                <Heading>Timer</Heading>
                <Text fontSize='l'>{Timer}</Text>
                <Button size='sm' m='0 auto' w='100px' h='50px'
                    isLoading={loading}
                    onClick={loadingChange} >
                    Click Me
                </Button>

            </Flex>
        </>
    )
}

export default Timer