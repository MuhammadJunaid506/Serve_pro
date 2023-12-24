import React from 'react'
import {Box,Heading,Flex ,Text, } from '@chakra-ui/react';
import { FaQuoteLeft  } from "react-icons/fa";
import {MdStar} from "react-icons/md"

const ReviewCard = ({data}) => {
  return (
    <>

    <Flex 
    direction={{ base: 'column', md: "row" }}
    flexWrap={"wrap"}  
    alignItems={"center"}
    justifyContent={"space-around"}
    p={8}
    gap={10}
    >
    {data.map((item, index) => (    
    <Box bg={index % 2 === 0 ? 'teal.100' : 'gray.300'} maxW={{ base: '100%', md: '30%' }} w="100%" p={8} mt={index % 2 === 0 ? 20 : 0} key={index} >
    <Flex align={"left"} direction={"column"}>
    <FaQuoteLeft size={30}/>
      <Text mt={10}>{item?.comment ? item?.comment : "Good, quick and easy.. Make sure to bring cash for your DMV charges and $25 processing fee to avoid taxes.. Cash is king. Thanks for the help and quick process."}</Text>
      <Heading mt={6}fontSize="4xl" fontStyle={"italic"} color={"white"} >
       { item?.name ? item?.name : "Sergio Cruz" }
      </Heading>
      <Flex mt={3}>
      {Array.from({ length: item?.rating }).map((_, i) => (
                <MdStar key={i} color="teal.500" />
              ))}
      </Flex>
      </Flex>
    </Box>
        ))}
    </Flex>

    </>
  )
}

export default ReviewCard
