import React from 'react'
import CustomBanner from '../../components/CustomBanner'
import HorizontalTab from '../../components/HorizantalTab'
import MapComponent from '../../components/MapComponent'
import ShortForm from '../../components/ShortForm';
import { Image, Text, Button, useTheme, Flex , Box, Heading , Divider, Stack} from '@chakra-ui/react';
import { FaLongArrowAltRight } from "react-icons/fa";
import { Banner , Fotios, Kaique, Logo, B8, B3, B4, B5, Tolga, Vedanti } from '../../assets/images';
import { BsTelephoneFill , BsClockFill} from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { GrMapLocation } from "react-icons/gr";
import ImageLinks from '../../components/ImageLinks';
import VisitUsCard from '../../components/VisitUsCard';
import ScrollerCard from '../../components/ScrollerCard';
import Footer from '../../components/Footer';
import Nav from '../../components/Nav';

const Service = () => {
  const theme = useTheme();
  const bgColor = theme.colors.brand[800];
  const paragraphStyles = {
    display: 'block',
    marginBlockStart: '1em',
    marginBlockEnd: '1em',
    marginInlineStart: '0px',
    marginInlineEnd: '0px',
  };
  
  const heading2Styles = {
    display: 'block',
    marginBlockStart: '1em',
    marginBlockEnd: '1em',
    marginInlineStart: '0px',
    marginInlineEnd: '0px',
  };
  return (
    <>
      <div style={{position:"relative" , marginBottom:80}}>
        <Nav/>
      <CustomBanner
        title="Services & Pricing"
        description="HOME  /  Services & Pricing"
        imageUrl={B5}
      />
      <HorizontalTab
        leftContent={<Text fontWeight={"bold"} fontSize={20}>For More Information Or To Contact Us, Call Us Or Complete The Form Below</Text>}
        centerContent={<Button w={60} p={6} bg={"black"} color={bgColor} colorScheme='white'>
        <Text mr={2} fontStyle={"italic"}>Contact US</Text><FaLongArrowAltRight /></Button>}
        rightContent={<Text fontSize={20}>SE HABLA ESPAÑOL<br/><span style={{fontWeight:"bold" , fontSize:"32"}}>(909) 499-9590</span></Text>}
      />
      </div>
      <Flex
      direction={{ base: 'column', md: "row" }}
      align={{ base: 'center', md: 'flex-start' }}
      justify="space-between"  
      p={8}
    >
      <Box maxW={{ base: '100%', md: '60%' }} mb={{ base: 8, md: 0 }} w="100%">
      <Image src={Logo} alt='' height={"40%"} width={200}/>
      <Heading color={bgColor} style={heading2Styles}>Official State Certified Star Smog Check Center!</Heading>
      <Text color={bgColor} style={paragraphStyles}>SERVE_PRO IN RIVERSIDE, CA</Text>
      <Text style={paragraphStyles}>Also looking for a Star Smog Check near you? We have been officially approved by the state to be a Star Certified. Not only do we provide Test Only services, be we also provide star tests. Some locations are only authorized to do Test Only. Often this means that the facilities has not met state standards, or have failed inspections by city officials.</Text>
      <Heading style={heading2Styles}>We’re Your Local Smog Certification Center In Riverside</Heading>
      <Text style={paragraphStyles}>If you’re looking for a smog certification near you, then look no further. We use the newest advanced system that allows us to connect directly with the California state DMV computer database. We’ll electronically notify the DMV your results, and instantly report to them your certification approval from our shop.</Text>
      <Text style={paragraphStyles}>Here at Neighbor Hood we gladly service cars that were manufactured in 1999 or later, and we will gladly service motorhomes, boats, atv, motorcycle, hybrids, and diesel trucks. These are services that surrounding locations prefer not to do and they quickly turn customers away. Not us! We wont turn you away. Sure some of these take more time and significantly more testing, but we’re committed to take care of you. And we try our very best to get you back on the road as quickly as possible.</Text>
      <VisitUsCard imageUrl={B8} direction={"row"} imageOnLeft/>
      <Heading style={heading2Styles}>We Specialize in RVs, Diesel Engine Vehicles, & Hybrids</Heading>
      <Text style={paragraphStyles}>Not many shops are equipped to handle large recreational vehicles, but we are. Don’t burn gas driving all over town with your RV only to get turned away from shop after shop. Bring your RV here. We have the equipment and space necessary for you to easily enter our work area and exit safely without much traffic through the street behind our shop. If we have the availability, we will even help slow and stop traffic in an effort to get you in and out quickly and safely.</Text>
      <Heading style={heading2Styles}>Neighbor Hood Registration Services</Heading>
      <Text style={paragraphStyles}>We offer all your DMV services without the big lines and wait times at the DMV. We are located in Riverside CA on Neighbor Hood Ave inside the Valero Gas Station. Our services include</Text>
      <Box p={4} ml={2}>
        <Flex gap={10} align={"center"}>
        <BsTelephoneFill size={25}/>
        <Stack spacing={0}><Heading fontStyle={"italic"} fontSize="2xl">Call Us</Heading>
        <Text>(909) 499-9590</Text></Stack>
        </Flex>
    </Box >
    <Divider orientation='horizontal'/>
    <Box p={4} ml={2}>
    <Flex gap={10} align={"center"}>
    <AiOutlineMail size={25}/>
        <Stack spacing={0}><Heading fontStyle={"italic"} fontSize="2xl">Email</Heading>
        <Text>lucasdylan0222@gmail.com</Text></Stack>
        </Flex>
    </Box>
    <Divider orientation='horizontal'/>
    <Box p={4} ml={2}> 
    <Flex gap={10} align={"center"}>
    <GrMapLocation size={25}/>
        <Stack spacing={0}><Heading fontStyle={"italic"} fontSize="2xl">Address</Heading>
        <Text>9407 Neighbor Hood Ave,<br/>Riverside, CA 92503</Text></Stack>
        </Flex>
    </Box>
    <Divider orientation='horizontal'/>
    <Box p={4} ml={2} mb={4}> 
    <Flex gap={10} align={"center"}>
    <BsClockFill size={25}/>
        <Stack spacing={0}><Heading fontStyle={"italic"} fontSize="2xl">Business Hours</Heading>
        <Text><strong>MON - FRI:  </strong>{"  "}9am - 5pm</Text>
        <Text><strong>SATURDAY:  </strong>{"  "}10am - 1pm</Text></Stack>
        </Flex>
    </Box>
      </Box>
      <Box maxW={{ base: '100%', md: '40%' }} mb={{ base: 8, md: 0 }} w="100%" > 
      <Flex p={2} m={5} borderWidth="1px" borderRadius="lg" boxShadow="lg"><MapComponent/></Flex>
      <ShortForm/>
      <ImageLinks imageUrl={B3}/>
      <VisitUsCard imageUrl={B4}/>
      <Flex m={5} borderWidth="1px" borderRadius="lg" boxShadow="lg"><ScrollerCard/> </Flex>     
      </Box>
      </Flex>
      <Footer/> 
    </>
  )
}

export default Service
