import React from 'react'
import MapComponent from '../../components/MapComponent'
import { Text, Flex , Box, Heading } from '@chakra-ui/react';
import ShortForm from '../../components/ShortForm';
import { Banner, Kaique, M1, M2, Vedanti } from '../../assets/images';
import ImageLinks from '../../components/ImageLinks';
import VisitUsCard from '../../components/VisitUsCard';


const About = () => {
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
      <Flex
      direction={{ base: 'column', md: "row" }}
      align={{ base: 'center', md: 'flex-start' }}
      justify="space-between"  
      p={8}
    >
      <Box maxW={{ base: '100%', md: '60%' }} mb={{ base: 8, md: 0 }} w="100%">
      <Heading style={heading2Styles}>Official State Certified Star Smog Check Center!</Heading>
      <Text style={paragraphStyles}>SERVE_PRO IN RIVERSIDE, CA</Text>
      <Text style={paragraphStyles}>Also looking for a Star Smog Check near you? We have been officially approved by the state to be a Star Certified. Not only do we provide Test Only services, be we also provide star tests. Some locations are only authorized to do Test Only. Often this means that the facilities has not met state standards, or have failed inspections by city officials.</Text>
      <Heading style={heading2Styles}>We’re Your Local Smog Certification Center In Riverside</Heading>
      <Text style={paragraphStyles}>If you’re looking for a smog certification near you, then look no further. We use the newest advanced system that allows us to connect directly with the California state DMV computer database. We’ll electronically notify the DMV your results, and instantly report to them your certification approval from our shop.</Text>
      <Text style={paragraphStyles}>Here at Neighbor Hood we gladly service cars that were manufactured in 1999 or later, and we will gladly service motorhomes, boats, atv, motorcycle, hybrids, and diesel trucks. These are services that surrounding locations prefer not to do and they quickly turn customers away. Not us! We wont turn you away. Sure some of these take more time and significantly more testing, but we’re committed to take care of you. And we try our very best to get you back on the road as quickly as possible.</Text>
      <VisitUsCard imageUrl={M1} direction={"row"} imageOnLeft/>
      <Heading style={heading2Styles}>We Specialize in RVs, Diesel Engine Vehicles, & Hybrids</Heading>
      <Text style={paragraphStyles}>Not many shops are equipped to handle large recreational vehicles, but we are. Don’t burn gas driving all over town with your RV only to get turned away from shop after shop. Bring your RV here. We have the equipment and space necessary for you to easily enter our work area and exit safely without much traffic through the street behind our shop. If we have the availability, we will even help slow and stop traffic in an effort to get you in and out quickly and safely.</Text>
      <Heading style={heading2Styles}>Neighbor Hood Registration Services</Heading>
      <Text style={paragraphStyles}>We offer all your DMV services without the big lines and wait times at the DMV. We are located in Riverside CA on Neighbor Hood Ave inside the Valero Gas Station. Our services include</Text>
      </Box>
      <Box maxW={{ base: '100%', md: '40%' }} mb={{ base: 8, md: 0 }} w="100%" > 
      <Flex p={2} m={5} borderWidth="1px" borderRadius="lg" boxShadow="lg"><MapComponent/></Flex>
      <ShortForm/>
      <ImageLinks imageUrl={M2}/>     
      </Box>
      </Flex>
    </>
  )
}

export default About
