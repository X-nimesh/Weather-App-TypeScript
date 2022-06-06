import { Flex, Grid, GridItem, Image, Text } from '@chakra-ui/react'
import React from 'react'

interface Props {
    title: string;
    head: number;
    status:string;
    sub:string;
    img:string;
  }

const HighlightComponent:React.FC<Props> = (props) => {
    let { title, head, status, sub, img } = props;
    return (
        <Grid
            gridTemplateColumns='1fr 20%'
            bg='white'
            p='20px 30px'>
            <Grid
                gridTemplateRows='10% 1fr 10%'
            >
                <Text>{title}</Text>
                <Flex alignItems='center'>
                    <Text fontSize='2xl' color='brand.dblue'>{head}<Text as='span' fontSize='xl' color='brand.lgrey'>{sub}</Text></Text>
                </Flex>
                <GridItem>
                    <Flex>
                        <Text>Status:<Text as='span'>{status}</Text></Text>
                    </Flex>
                </GridItem>
            </Grid>
            <GridItem >
                <Image src={img} h='150px' />
            </GridItem>



        </Grid >
    )
}

export default HighlightComponent