import React from 'react'
import CustomBanner from '../../components/CustomBanner'
import HorizontalTab from '../../components/HorizantalTab'
import { Image, Text, Box , Heading ,Button, useTheme , Flex} from '@chakra-ui/react';
import ContentImage from '../../components/ContentImage';
import InfoBox from '../../components/InfoBox';
import { B1, Banner, B4 ,Logo ,B2,B3, B5, B6, B7, B8 } from '../../assets/images';
import { FaLongArrowAltRight } from "react-icons/fa";
import ContactForm from '../../components/ContactForm';
import { motion } from "framer-motion";
import Footer from '../../components/Footer';
import Nav from '../../components/Nav';

const Home = () => {
  const theme = useTheme();
  const bgColor = theme.colors.brand[800];
  const bannerStyle = {
    backgroundImage: `url(${B2})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    opacity:"0.9"
  };
  return (
    <>
      <div style={{position:"relative" , marginBottom:110}}>
      <Nav/>
      <CustomBanner
        firstText="Rated #1 Smog Check Riverside CA"
        title="SERVE_PRO"
        description="Searching for smog check Riverside? SERVE_PRO is the #1 Leader of Smog Checks in Riverside CA. Here at Neighbor Hood we gladly service cars that were manufactured in 1999 or later, and we will gladly service motorhomes, boats, atv, motorcycle, hybrids, and diesel trucks. These are services that surrounding locations prefer not to do and they quickly turn customers away. Not us! We wont turn you away. Sure some of these take more time and significantly more testing, but we’re committed to take care of you. And we try our very best to get you back on the road as quickly as possible.."
        buttonText1="See Offers"
        buttonText2="Shop Now"
        imageUrl={Banner}
        showButtons="multiple"
      />
      <HorizontalTab position={"absolute"}
        leftContent={<Text fontWeight={"bold"} fontSize={20}>Find Out Why We're A Top-Rated <br/> Smog Check & Registration Shop</Text>}
        rightContent={<Text fontSize={20}>SE HABLA ESPAÑOL<br/><span style={{fontWeight:"bold" , fontSize:"32"}}>(909) 499-9590</span></Text>}
      />
      </div>
      <Flex
      direction={{ base: 'column', md: "row" }}
      align={{ base: 'center', md: 'flex-start' }}
      justify="center"  
      color="white"
      p={8}
    >
      <Box maxW={{ base: '100%', md: '50%' }} mb={{ base: 8, md: 0 }} w="100%"> 
      <Flex gap={3} align={"center"}>
        <Flex gap={3} direction={"column"} w={"50%"} h={"100%"}>
          <Image src={B7} alt="Image" borderRadius="md" h="250px"/>
          <Image src={B8} alt="Image" borderRadius="md" h="350px"/>
        </Flex>
        <Flex gap={3} direction={"column"} w={"50%"} h={"100%"}>
          <Image src={B5} alt="Image" borderRadius="md" h="350px"/>
          <Image src={B4} alt="Image" borderRadius="md" h="250px"/>
        </Flex>
      </Flex>
      </Box>
      <motion.div
        initial={{x:100}}
        animate={{x:0}}
        transition={{duration:10}} style={{maxWidth:"100%", width:"100%",}}>
      <Box mb={{ base: 8, md: 0 }} height={"600px"} 
      style={bannerStyle}
      textAlign={{ base: 'center', md: 'left' }}
      justifyContent={"center"}
      py={{ base: 5, md: 10 }}
      px={{ base: 2, md: 10 }}
      mt={{base: 0, md: -20}} ml={{base: 0, md: -20}}
      borderRadius="md">
      <Flex
        direction={"column"}
        align={{ base: 'center', md: 'flex-start' }}
        justifyContent="center"
        width={"100%"}
      >
        <Box><Image src={Logo} alt={""} h={59} w={150} mb={5}/></Box>
          <Text fontSize={{ base: 'md', md: 'lg' }} mb="6">
            ABOUT US
          </Text>
          <Heading as="h1" fontSize={{ base: '2xl', md: '4xl' }} mb="4">
            We’re Your Local Smog Certification Center
          </Heading>
          <Text fontSize={{ base: 'md', md: 'lg' }} mb="6">
            If you’re looking for a smog certification near you, then look no further. We use the newest advanced system that allows us to connect directly with the California state DMV computer database. We’ll electronically notify the DMV your results, and instantly report to them your certification approval from our shop.
          </Text>
          <Button w={60} p={6} bg={bgColor} colorScheme={"while"}>
          <Text mr={2}>Contact US</Text><FaLongArrowAltRight /></Button>
      </Flex>
      </Box>
      </motion.div>
    </Flex>
      <ContentImage title="Coupon Download"
        description="Ready for service? Click the button below to download our coupon and show it to one of our team members before you pay for your service!        "
        buttonText="Download Now!"
        imageUrl={B8}
        imageOnLeft={false}
      />
      <CustomBanner imageUrl={B3}>
        <Box bg={"white"} color={"black"} maxW={{ base: '100%', md: '70%' }} w="100%" p={8} mt="8">
          <Text>SERVE_PRO</Text>
          <Heading as="h2" fontSize={{ base: '2xl', md: '4xl' }} mb="4" color={bgColor}>We Operate At The Highest Standards</Heading>
          <Text fontSize={{ base: 'md', md: 'lg' }} mb="6">Our personal standards are far higher than the states minimum standards. Allow us the opportunity to service you and your vehicle. We’ll go through great lengths to take care of you!</Text>
          <Button w={60} p={6} bg={bgColor} colorScheme={"while"} mt={4}>
          <Text mr={2}>View Services</Text><FaLongArrowAltRight /></Button>
        </Box>
      </CustomBanner>
      <ContentImage title="Official State Certified Star Smog Check Center!"
        description="Also looking for a Star Smog Check near you? We have been officially approved by the state to be a Star Certified. Not only do we provide Test Only services, be we also provide star tests. Some locations are only authorized to do Test Only. Often this means that the facilities has not met state standards, or have failed inspections by city officials."
        buttonText="Read More"
        imageUrl={B6}
        imageOnLeft={true}
      />
      <ContentImage title="We Specialize in RVs, Diesel Engine Vehicles, & Hybrids"
        description="Not many shops are equipped to handle large recreational vehicles, but we are. Don’t burn gas driving all over town with your RV only to get turned away from shop after shop. Bring your RV here. We have the equipment and space necessary for you to easily enter our work area and exit safely without much traffic through the street behind our sho"
        buttonText="Read More"
        imageUrl={B7}
        imageOnLeft={false}
      />
      <ContentImage title="SERVE_PRORegistration Services"
        firstText="SERVE_PRO"
        description="We offer all your DMV services without the big lines and wait times at the DMV. We are located in Riverside CA on Magnolia Ave inside the Valero Gas Station. Our services include: Transfer of Ownership, Registration Renewal, One Day Moving Permit, Vehicle History Report, New Plates, Out of State Vehicle, Duplicate sticker, Duplicate Plate, Duplicate Registration, Duplicate Title, Apply or Remove Planned non Operation (PNO) and more! We service vehicles, boats, RVs, ATVs, motorcycles, and trailers."
        buttonText="Read More"
        imageUrl={B2}
        imageOnLeft={true}
      />
      <div style={{position:"relative", marginBottom:30}}>
      <CustomBanner
        title="Contact Us"
        imageUrl={B6}
      />
      <Flex
      direction={{ base: 'column', md: "row" }}
      align={{ base: 'center', md: 'flex-start' }}
      justify={"center"}
    >
      <motion.div
        initial={{x:100}}
        animate={{x:0}}
        transition={{duration:10}} style={{maxWidth:"600px", padding:2, width:"100%",height:"100%"}}>
        <InfoBox info/>
      </motion.div>
      <Box maxW={{ base: '100%', md: '60%' }} mb={{ base: 8, md: 0 }} zIndex={1} >
        <ContactForm imageUrl={Banner}/> 
      </Box>
      </Flex>
      </div>
      <HorizontalTab imageUrl={B5}
        leftContent={<Text fontWeight={"bold"} fontSize={20}>Let Us Service Your Vehicle Today!<br/>Give us a call at: <strong>(909) 499-9590</strong>   or visit our shop today.</Text>}
        rightContent={<Button w={60} p={6} bg={"black"} colorScheme='white' _hover={bgColor}>
        <Text mr={2} fontStyle={"italic"}>Contact US</Text><FaLongArrowAltRight /></Button>}
      />
      <Footer/>
    </>
  )
}

export default Home
