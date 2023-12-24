import React from 'react'
import {Box,Heading,Flex ,Image , Link, Divider} from '@chakra-ui/react';
import { Logo } from '../assets/images';

const ImageLinks = (props) => {
    const bannerStyle = {
        backgroundImage: `url(${props.imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      };
  return (
    <Box style={bannerStyle} p={8} m={4}
    borderWidth="1px" borderRadius="lg" boxShadow="lg">
    <Flex direction={"column"}
    justify="space-between"  
    m={5}
    color="white">
    <Image src={Logo} alt='' height={"40%"} width={200}/>
      <Heading mt={2}fontSize="3xl"  color={"white"} >
        Find Out More
      </Heading>
            <Link href="/"><Heading mt={5}fontSize="2xl"  color={"white"} > Home</Heading></Link>
            <Divider orientation='horizontal'/>
            <Link href="/"><Heading mt={5}fontSize="2xl"  color={"white"} > Services</Heading></Link>
            <Divider orientation='horizontal'/>
            <Link href="/"><Heading mt={5}fontSize="2xl"  color={"white"} > About Us</Heading></Link>
            <Divider orientation='horizontal'/>
            {/* <Link href="/"><Heading mt={5}fontSize="2xl"  color={"white"} > Reviews</Heading></Link>
            <Divider orientation='horizontal'/> */}
            <Link href="/"><Heading mt={5}fontSize="2xl"  color={"white"} > Locations</Heading></Link>
            <Divider orientation='horizontal'/>
    </Flex>
    </Box>
  )
}

export default ImageLinks
