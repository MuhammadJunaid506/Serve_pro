import React from 'react'
import { Flex, Box, useTheme, Heading , Text , Divider, Stack} from '@chakra-ui/react'
import { BsTelephoneFill , BsClockFill} from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { GrMapLocation } from "react-icons/gr";

const InfoBox = (props) => {
    const theme = useTheme();
    const bgColor = theme.colors.brand[800];
  return (
    <Flex direction={"column"} 
    justify="space-between"  
    m={5}
    mt={props.info?-10:5}
    borderWidth="1px"
    borderRadius="lg"
    boxShadow="lg"
    color={props.info ? "white" : "black"}
    bgColor={props.info ? bgColor : "white"}
    >
    {!props.info && <Box bg={bgColor} color={"white"} p={4}>
        <Heading fontStyle={"italic"} fontSize="3xl">Contact Info</Heading>
    </Box>}
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
    {!props.info && <Box p={4} ml={2} mb={4}> 
    <Flex gap={10} align={"center"}>
    <BsClockFill size={25}/>
        <Stack spacing={0}><Heading fontStyle={"italic"} fontSize="2xl">Business Hours</Heading>
        <Text><strong>MON - FRI:  </strong>{"  "}9am - 5pm</Text>
        <Text><strong>SATURDAY:  </strong>{"  "}10am - 1pm</Text></Stack>
        </Flex>
    </Box>}
    </Flex>
  )
}

export default InfoBox
