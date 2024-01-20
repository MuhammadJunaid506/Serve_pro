import React from 'react'
import CustomBanner from '../../components/CustomBanner'
import HorizontalTab from '../../components/HorizantalTab'
import {Text, Button, useTheme , Box , Flex , Heading, Image ,Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import { FaLongArrowAltRight ,FaQuoteLeft} from "react-icons/fa";
import {MdStar} from "react-icons/md"
import { B1, B2, B3, B4, B6 } from '../../assets/images';
import Footer from '../../components/Footer';
import "swiper/css";
import "swiper/css/navigation";
import { Navigation ,Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import Nav from '../../components/Nav';

const Booking = () => {
  const theme = useTheme();
  const bgColor = theme.colors.brand[800];
  const data = [
    { name: "Hyder`s", address: 'Sindhi Muslim Society', rating: 3 },
    { name: 'Food Break', address: 'charminar , Bahadurabad', rating: 4 },
    { name: 'Koffie Chalet', address: 'Sindhi Muslim Society', rating: 3 },
    { name: 'Buland Roll Point', address: 'City Koat', rating: 4 },
    { name: 'Street Pizza', address: 'Soldier Bazar', rating: 3 },
    { name: 'Cafe Bogie', address: 'I.I Chundigar Road', rating: 2 },
  ];
  return (
    <>
      <div style={{position:"relative"}}>
        <Nav/>
      <CustomBanner
        title="Booking"
        description="Explore the Restaurants & Dining Options With Serve_Pro"
        imageUrl={B6}
      />
      {/* <HorizontalTab position={"absolute"} 
        leftContent={<Text fontWeight={"bold"} fontSize={20}>For More Information Or To Contact Us, Call Us Or Complete The Form Below</Text>}
        rightContent={<Button w={60} p={6} bg={"black"} colorScheme='white'>
        <Text mr={2} fontStyle={"italic"}>Contact US</Text><FaLongArrowAltRight /></Button>}
      /> */}
      </div>

      <Flex
      direction={"column"}
      justify="center"  
      flexWrap={"wrap"}  
      alignItems={"center"}
      p={8}
      gap={10}
    >
    {data.map((item, index)=>(
    <Flex
    borderWidth="1px"
    borderColor={"gray.400"}
    borderRadius={"10px"}
    alignItems={"center"}
    justifyContent={"space-around"}
    width={"100%"} key={index}
    >
    <Box ml={3} width={{base:"200px", md:"300px"}} height={{base:"300px", md:"300px"}}>
    <Swiper
      navigation={true}
      className='mySwiper'
      modules={[Navigation,Autoplay,Pagination]}
      autoplay={{
        delay: 3500,
        disableOnInteraction: true,
      }}
      pagination={{
        clickable: true,
      }}
    >
      <SwiperSlide borderRadius={"10px"}>
        <Image src={B1} w={"300px"} h={"300px"}/>
      </SwiperSlide>
      <SwiperSlide >
      <Image src={B2} w={"300px"} h={"300px"}/>
      </SwiperSlide>
      <SwiperSlide >
      <Image src={B3} w={"300px"} h={"300px"}/>
      </SwiperSlide>
      <SwiperSlide >
      <Image src={B4} w={"300px"} h={"300px"}/>
      </SwiperSlide>
    </Swiper>
    </Box>
    <Flex p={8} gap={"10px"} direction={"column"} maxWidth={"600px"}>
        <Heading fontSize={"24px"}>{item ? item?.name :"Dinner at Eiffel Tower's Madame Brasserie"}</Heading>
        <Text fontSize={"18px"}>{item? item?.address: ""}</Text>
        <Tabs>
            <TabList>
                <Tab>Highlights</Tab>
                <Tab>Inclusions</Tab>
                <Tab>Need To Know</Tab>
                <Tab>Cancellation Policy</Tab>
            </TabList>

            <TabPanels>
                <TabPanel>
                <ul>
                    <li>Feast on gourmet French cuisine at the Eiffel Tower's Madame Brasserie restaurant as you look out over Paris.</li>
                    <li>Feast on gourmet French cuisine at the Eiffel Tower's Madame Brasserie restaurant as you look out over Paris.</li>
                    <li>Feast on gourmet French cuisine at the Eiffel Tower's Madame Brasserie restaurant as you look out over Paris.</li>
                </ul>
                </TabPanel>
                <TabPanel>
                <h2><strong>Exclusions</strong></h2>
                <ul>
                <li>Feast on gourmet French cuisine at the Eiffel Tower's Madame Brasserie restaurant as you look out over Paris.</li>
                </ul>
                <h2><strong>Inclusions</strong></h2>
                <ul>
                <li>Feast on gourmet French cuisine at the Eiffel Tower's Madame Brasserie restaurant as you look out over Paris.</li>
                </ul>
                </TabPanel>
                <TabPanel>
                <ul>
                    <li>Feast on gourmet French cuisine at the Eiffel Tower's Madame Brasserie restaurant as you look out over Paris.</li>
                    <li>Feast on gourmet French cuisine at the Eiffel Tower's Madame Brasserie restaurant as you look out over Paris.</li>
                    <li>Feast on gourmet French cuisine at the Eiffel Tower's Madame Brasserie restaurant as you look out over Paris.</li>
                </ul>
                </TabPanel>
                <TabPanel>
                <ul>
                    <li>Feast on gourmet French cuisine at the Eiffel Tower's Madame Brasserie restaurant as you look out over Paris.</li>
                    <li>Feast on gourmet French cuisine at the Eiffel Tower's Madame Brasserie restaurant as you look out over Paris.</li>
                    <li>Feast on gourmet French cuisine at the Eiffel Tower's Madame Brasserie restaurant as you look out over Paris.</li>
                </ul>
                </TabPanel>
            </TabPanels>
            </Tabs>
    </Flex>
    <Flex p={8} mr={3} direction={"column"} gap={"10px"}
        borderWidth="1px"
        borderColor={"gray.400"}
        borderRadius={"10px"}>
        <Button w={60} p={6} bg={"black"} colorScheme='white' _hover={bgColor}>
        <Text mr={2} fontStyle={"italic"}>Check Availability</Text><FaLongArrowAltRight /></Button>
        <Text fontSize={"12px"}>Charges applied after 15 Minutes</Text>
        <Flex alignItems={"center"}><FaLongArrowAltRight /><Text ml={2}>Free Cancellation On First 3 Orders</Text></Flex>
        <Flex alignItems={"center"}><FaLongArrowAltRight /><Text ml={2}>Instant Confirmation</Text></Flex>
        <Flex alignItems={"center"}><FaLongArrowAltRight /><Text ml={2}>Max Time: 1 hr</Text></Flex>
        <Flex mt={2}  alignItems={"center"}>
        <Text mr={2}>Reviews:</Text>
        {Array.from({ length: item?.rating }).map((_, i) => (
                <MdStar key={i} color="teal.500" />
                ))}
        </Flex>
    </Flex>

    </Flex>
    ))}

      </Flex>
      <HorizontalTab imageUrl={B3}
        leftContent={<Text fontWeight={"bold"} fontSize={20}>Let Us Service Your Vehicle Today!<br/>Give us a call at: <strong>(909) 499-9590</strong>   or visit our shop today.</Text>}
        rightContent={<Button w={60} p={6} bg={"black"} colorScheme='white' _hover={bgColor}>
        <Text mr={2} fontStyle={"italic"}>Contact US</Text><FaLongArrowAltRight /></Button>}
      />
      <Footer/>
    </>
  )
}

export default Booking
