import React from 'react'
import CustomBanner from '../../components/CustomBanner'
import HorizontalTab from '../../components/HorizantalTab'
import {Text, Button, Box } from '@chakra-ui/react';
import { FaLongArrowAltRight } from "react-icons/fa";
import { M6, M1 } from '../../assets/images';
import MapComponent from '../../components/MapComponent';


const Locations = () => {
  return (
    <>
    <div style={{position:"relative"}}>
      <CustomBanner
        title="Locations"
        description="HOME  /  Locations"
        imageUrl={M6}
      />
      <HorizontalTab position={"absolute"} 
        leftContent={<Text fontWeight={"bold"} fontSize={20}>For More Information Or To Contact Us, Call Us Or Complete The Form Below</Text>}
        rightContent={<Button w={60} p={6} bg={"black"} colorScheme='white'>
        <Text mr={2} fontStyle={"italic"}>Contact US</Text><FaLongArrowAltRight /></Button>}
      />
      </div>
      <Box maxW={{ base: '100%', md: '100%' }} mb={{ base: 8, md: 0 }} w="100%" p={8}>
      <MapComponent/>
      </Box>
      {/* <Flex   direction={{ base: 'column', md: "row" }}  flexWrap={"wrap"}>
      {data?.map((item, index) => ( 
      <Box maxW={{ base: '100%', md: '30%' }} borderWidth="1px" borderRadius="lg" boxShadow="lg" p={2} m={5} bg={"gray.300"} key={index}>
      <MapComponent/>
      <Text mt={10}>{item?.comment ? item?.comment : "Good, quick and easy.. Make sure to bring cash for your DMV charges and $25 processing fee to avoid taxes.. Cash is king. Thanks for the help and quick process."}</Text>
      <Heading mt={6}fontSize="4xl" fontStyle={"italic"} color={"white"} >
       { item?.name ? item?.name : "Sergio Cruz" }
      </Heading>
      </Box>
      ))}
      </Flex> */}
      
      <HorizontalTab imageUrl={M1}
        leftContent={<Text fontWeight={"bold"} fontSize={20}>Let Us Service Your Vehicle Today!<br/>Give us a call at: <strong>(909) 499-9590</strong>   or visit our shop today.</Text>}
        rightContent={<Button w={60} p={6} bg={"black"} colorScheme='white'>
        <Text mr={2} fontStyle={"italic"}>Contact US</Text><FaLongArrowAltRight /></Button>}
      />
    </>
  )
}

export default Locations
