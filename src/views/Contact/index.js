import React from 'react'
import CustomBanner from '../../components/CustomBanner'
import HorizontalTab from '../../components/HorizantalTab'
import {Text, Button, useTheme , Box , Flex } from '@chakra-ui/react';
import { FaLongArrowAltRight } from "react-icons/fa";
import MapComponent from '../../components/MapComponent';
import ContactForm from '../../components/ContactForm';
import InfoBox from '../../components/InfoBox';
import { M3, M6 } from '../../assets/images';

const Contact = () => {
  const theme = useTheme();
  const bgColor = theme.colors.brand[800];
  return (
    <>
      <div style={{position:"relative"}}>
      <CustomBanner
        title="Contact Us"
        description="HOME  /  Contact Us"
        imageUrl={M6}
      />
      <HorizontalTab position={"absolute"} 
        leftContent={<Text fontWeight={"bold"} fontSize={20}>For More Information Or To Contact Us, Call Us Or Complete The Form Below</Text>}
        rightContent={<Button w={60} p={6} bg={"black"} colorScheme='white'>
        <Text mr={2} fontStyle={"italic"}>Contact US</Text><FaLongArrowAltRight /></Button>}
      />
      </div>
      <Flex
      direction={{ base: 'column', md: "row" }}
      align={{ base: 'center', md: 'flex-start' }}
      justify="space-between"  
      borderWidth="1px"
    >
      <Box maxW={{ base: '100%', md: '60%' }} mb={{ base: 8, md: 0 }} w="100%">
        <ContactForm/> 
      </Box>
      <Box maxW={{ base: '100%', md: '40%' }} mb={{ base: 8, md: 0 }} w="100%">
        <InfoBox/>
      </Box>
      </Flex>
      <Box maxW={{ base: '100%', md: '100%' }} mb={{ base: 8, md: 0 }} w="100%" mt={8} p={8}>
      <MapComponent/>
      </Box>
      <HorizontalTab imageUrl={M3}
        leftContent={<Text fontWeight={"bold"} fontSize={20}>Let Us Service Your Vehicle Today!<br/>Give us a call at: <strong>(909) 499-9590</strong>   or visit our shop today.</Text>}
        rightContent={<Button w={60} p={6} bg={"black"} colorScheme='white' _hover={bgColor}>
        <Text mr={2} fontStyle={"italic"}>Contact US</Text><FaLongArrowAltRight /></Button>}
      />
    </>
  )
}

export default Contact
