import React from 'react'
import {Box,Heading,Flex, useTheme, Button , Text} from '@chakra-ui/react';
import { FaLongArrowAltRight } from "react-icons/fa";

const VisitUsCard = (props) => {
    const flexDirection = props.imageOnLeft ? 'row-reverse' : "row" ;
    const theme = useTheme();
    const bgColor = theme.colors.brand[800];
    const bannerStyle = {
        backgroundImage: `url(${props.imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      };
  return (
    <Flex 
    direction={props.direction? flexDirection :"column"}    
    alignItems={"center"}
    m={5}
    borderWidth="1px"
    borderRadius="lg"
    boxShadow="lg"
    color="black">
    <Box maxW={{ base: '100%', md: '100%' }} w="100%" style={bannerStyle} pt={40}></Box>
    <Box bg={bgColor} maxW={{ base: '100%', md: '100%' }} w="100%" p={8}>
    <Flex align={"center"} direction={"column"}>
      <Heading mt={2}fontSize="4xl" fontStyle={"italic"} color={"white"} >
        Visit Us Today!
      </Heading>
      <Button w={60} p={6} mt={8} bg={"black"} colorScheme={"while"}>
          <Text mr={2} fontStyle={"italic"}>FIND OUR SHOP</Text><FaLongArrowAltRight />
      </Button>
      </Flex>
    </Box>
    </Flex>
  )
}

export default VisitUsCard
