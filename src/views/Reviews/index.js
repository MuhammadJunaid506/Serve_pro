import React from 'react'
import CustomBanner from '../../components/CustomBanner'
import HorizontalTab from '../../components/HorizantalTab'
import { Image, Text, Button, useTheme , Box , Flex } from '@chakra-ui/react';
import { FaLongArrowAltRight } from "react-icons/fa";
import MapComponent from '../../components/MapComponent';
import ContactForm from '../../components/ContactForm';
import InfoBox from '../../components/InfoBox';
import ReviewCard from '../../components/ReviewCard'
import axios from 'axios';
import { M1, M6 } from '../../assets/images';


const Reviews = () => {
const apiKey = 'AIzaSyBmlxPmwQplg09dFhBZAMzsG3dTYRTESEw';
const placeId = '0x80c2caed56a4e7d9:0xd9afdf934a7a4031';

const fetchReviews = async () => {
  try {
    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeId}&key=${apiKey}`
    );

    if (response.data && response.data.result && response.data.result.reviews) {
      const reviews = response.data.result.reviews;
      console.log('Reviews:', reviews);
      // Process or display the reviews as needed
    } else {
      console.error('No reviews found for the specified place.');
    }
  } catch (error) {
    console.error('Error fetching reviews:', error.message);
  }
};

// Call the function to fetch reviews
fetchReviews();

    const data = [
        { name: 'John Doe', comments: 'Great service!', rating: 5 },
        { name: 'Jane Smith', comments: 'Awesome experience!', rating: 4 },
        { name: 'Jane Smith', comments: 'Awesome experience!', rating: 1 },
        { name: 'Jane Smith', comments: 'Awesome experience!', rating: 4 },
        { name: 'Jane Smith', comments: 'Awesome experience!', rating: 3 },
        { name: 'Jane Smith', comments: 'Awesome experience!', rating: 2 },
      ];
  return (
    <>
    <div style={{position:"relative" , marginBottom:100}}>
      <CustomBanner
        title="Contact Us"
        description="HOME  /  Contact Us"
        imageUrl={M1}
      />
      <HorizontalTab position={"absolute"} 
        leftContent={<Text fontWeight={"bold"} fontSize={20}>For More Information Or To Contact Us, Call Us Or Complete The Form Below</Text>}
        rightContent={<Button w={60} p={6} bg={"black"} colorScheme='white'>
        <Text mr={2} fontStyle={"italic"}>Contact US</Text><FaLongArrowAltRight /></Button>}
      />
      </div>
      <ReviewCard data={data} />
      <HorizontalTab imageUrl={M6}
        leftContent={<Text fontWeight={"bold"} fontSize={20}>Let Us Service Your Vehicle Today!<br/>Give us a call at: <strong>(909) 499-9590</strong>   or visit our shop today.</Text>}
        rightContent={<Button w={60} p={6} bg={"black"} colorScheme='white'>
        <Text mr={2} fontStyle={"italic"}>Contact US</Text><FaLongArrowAltRight /></Button>}
      />
    </>
  )
}

export default Reviews
