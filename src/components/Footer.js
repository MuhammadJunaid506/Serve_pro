import React from 'react';
import { Box, Center, Text, Link, Stack , useTheme , Image, Flex, Heading, Link as ChakraLink } from '@chakra-ui/react';
import { MdOutlineEmail } from "react-icons/md";
import { SiGooglemybusiness } from "react-icons/si";
import { Logo } from '../assets/images';

const Footer = () => {
  const theme = useTheme();
  const bgColor = theme.colors.brand[800];
  return (
    <>
    <Box as="footer" p="4" bg={bgColor} color="white">
      <Center>
        <Stack spacing={4}>
          <Flex flexDirection={"column"} mt={10} textAlign={"center"} alignItems={"center"}>
          <Image src={Logo} alt={''} width={350} height={"100%"}/>
          <Text fontSize="lg" mt={5}>
            CALL US ANYTIME AT:
          </Text>
          <Text fontSize="lg" >
          <strong>(909) 499-9590</strong>
          </Text>
          </Flex>
        </Stack>
        </Center>
        <Flex justifyContent={"space-around"} mt={4} direction={{ base: 'column', md: "row" }}>
          <Stack direction="column" spacing={4} mt={{ base: 8, md: 0 }}>
            <Heading fontSize={20} as="h3">Navigation</Heading>
            <ChakraLink as={Link} to="/" mr="4">Home</ChakraLink>
            <ChakraLink as={Link} to="/about" mr="4">About Us</ChakraLink>
            <ChakraLink as={Link} to="/location" mr="4">Locations</ChakraLink>
          </Stack>
          <Stack direction="column" spacing={4} mt={{ base: 8, md: 0 }}>
            <Heading fontSize={20} as="h3">Services</Heading>
            <Text><strong>Smog Check</strong> for Autos and RVs,<br/> Diesel Engine Vehicles, & Hybrids</Text>
            <Heading fontSize={20} as="h3">DMV Services</Heading>
          </Stack>

          <Stack direction="column" spacing={4} mt={{ base: 8, md: 0 }}>
            <Heading fontSize={20} as="h3">Contact Us</Heading>
            <Heading fontSize={20} as="h3"><strong>(909) 499-9590</strong></Heading>
            <Text>lucasdylan0222@gmail.com</Text>
            <Text>9407 Neighbor Hood Ave</Text>
            <Text>Riverside, CA 92503</Text>
          </Stack>
        </Flex>
        <Box as="footer" mt="8" p="4" bg={bgColor} color="white">
        <Flex justifyContent={"space-between"} direction={{ base: 'column', md: "row" }}>
        <Stack direction={"row"} spacing={2}>
          <Box p={1} borderRadius={50} bg={"white"}><SiGooglemybusiness color='black'/></Box>
          <Box p={1} borderRadius={50} bg={"white"}><MdOutlineEmail color='black' /></Box>
        </Stack>
        <Text fontSize="lg" fontWeight="bold" fontStyle={"italic"}>© 2021 All Rights Reserved | SERVE_PRO</Text>
        <Text>Privacy Policy</Text>
        </Flex>
        </Box>
    </Box>
    </>
  );
};
export default Footer;