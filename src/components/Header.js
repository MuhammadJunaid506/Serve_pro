import React from 'react';
import { Link } from 'react-router-dom';
import { Flex, Box, Text, Link as ChakraLink , Image , Button , useTheme } from '@chakra-ui/react';
import { Logo } from '../assets/images';
import { FaLongArrowAltRight } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { SiGooglemybusiness } from "react-icons/si";

const Header = () => {
  const theme = useTheme();
  const bgColor = theme.colors.brand[800];
  return (
    <header>
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        bg={bgColor}
        color="white"
        boxShadow="md"
        p="4"
      >
      <Link to="mailto:lucasdylan0222@gmail.com">
      <Text fontSize="lg" fontWeight="bold" fontStyle={"italic"} cursor={"pointer"}>
          Email Us At: <span fontWeight="100">lucasdylan0222@gmail.com</span>
      </Text>
      </Link>
        <Flex justify={"space-between"} gap={2}>
          <Box p={1} borderRadius={50} bg={"white"} cursor={"pointer"}><SiGooglemybusiness color='black'/></Box>
          <Box p={1} borderRadius={50} bg={"white"} cursor={"pointer"}><Link to="mailto:lucasdylan0222@gmail.com"><MdOutlineEmail color='black' /></Link></Box>
        </Flex>
      </Flex>
      <Flex
        as="nav"
        align="center"
        justify="space-evenly"
        bg="black"
        color="white"
        boxShadow="md"
        p="8" direction={{base:"column", md:"row"}}
      >
        <Image src={Logo} alt='Dan Abramov' height={"100%"} width={350} mb={{base:5, md:0}}/>
        <Button w={60} p={6} bg={bgColor} colorScheme={"while"}>
          <Text mr={2}>Contact US</Text><FaLongArrowAltRight /></Button>
        </Flex>
          <Flex align="center" justify="space-evenly" bg="gray.100" color={bgColor} boxShadow="md" p="5" flexWrap={"wrap"}>
            <ChakraLink as={Link} to="/" mr="4">
              Home
            </ChakraLink>
            <ChakraLink as={Link} to="/service" mr="4">
              Services & Pricing
            </ChakraLink>
            <ChakraLink as={Link} to="/about" mr="4">
              About Us
            </ChakraLink>
            {/* <ChakraLink as={Link} to="/reviews" mr="4">
              Reviews
            </ChakraLink> */}
            <ChakraLink as={Link} to="/location" mr="4">
              Locations
            </ChakraLink>
            <ChakraLink as={Link} to="/contact" mr="4">
              Contact
            </ChakraLink>

          </Flex>

    </header>
  );
};

export default Header;
