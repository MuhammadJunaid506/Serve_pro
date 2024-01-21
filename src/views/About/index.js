import React from 'react'
import MapComponent from '../../components/MapComponent'
import { Text, Flex , Box, Heading } from '@chakra-ui/react';
import ShortForm from '../../components/ShortForm';
import { Banner, Kaique, B1, B2, Vedanti, B6, B4 } from '../../assets/images';
import ImageLinks from '../../components/ImageLinks';
import VisitUsCard from '../../components/VisitUsCard';
import Footer from '../../components/Footer';
import CustomBanner from '../../components/CustomBanner';
import Nav from '../../components/Nav';


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
    <Nav/>
      <CustomBanner
        title="About US"
        description="Home / About US"
        imageUrl={B4}
      />
      <Flex
      direction={{ base: 'column', md: "row" }}
      align={{ base: 'center', md: 'flex-start' }}
      justify="space-between"  
      p={8}
    >
      <Box maxW={{ base: '100%', md: '60%' }} mb={{ base: 8, md: 0 }} w="100%">
      <Heading style={heading2Styles}>Business Venture Selection</Heading>
      <Text style={paragraphStyles}>SERVE_PRO IN KARACHI</Text>
      <Text style={paragraphStyles}>The company's name is Servepro, and it is a website-based dine-in service provider.  .Our mission is offering the highest-caliber dine-in services, Serve Pro provides a distinctive experience for everyone and makes it simple for them to access through digital technology. The idea of this business came when saw a gap in the market that how customers were unsatisfied with restaurants services which not only affect the customers experience but also the restaurants reputation. With these considerations in mind, We created a website that would provide one-way solutions ranging from making reservations to pre-ordering food 3D menus to save time, as well as providing them with digitalized wallets and much more through digital technology</Text>
      <Heading style={heading2Styles}>Brief description:</Heading>
      <Text style={paragraphStyles}>
	The concept for this idea service based business  was inspired by a void in the market where people wanted to take advantage of high-quality dining options without putting much effort into it; making reservations and planning a budget were challenges they encountered when selecting a restaurant. Overall impression. After considering these issues, we came to the conclusion that
•	Servepro will be a one-stop shop for all issues that a client may experience when
•	it comes to choosing what to eat. What should I eat there? What price?
•	This platform's website will be accessible and meet all of the requirements of the
•	Customers. A 3D digital menu card will be made available to them via the website, giving them a preview of the dishes before they make a purchase. You can make reservations based on the number of seats available and order food in advance by viewing the information, saving time. Using your preferences as a guide, they can obtain restaurant recommendations.
•	I with my  4 team members invest and organize whole structure means we work as a partnership business and form legal entity in order to avoid collapses between partners in future so if in business transaction everyone is responsible  for loss and profits.
</Text>
<Heading style={heading2Styles}>Business Venture Selection</Heading>
<Text style={paragraphStyles}>
Serve Pro provides a distinctive experience for everyone and makes it simple for them to access through digital technology. The idea of this business came when saw a gap in the market that how customers were unsatisfied with restaurants services which not only affect the customers experience but also the restaurants reputation.

•	Business's unique selling proposition (USP) :

•	The USP of Servepro is that it offers the option, which is something else it does as well Viewing the 3D menus prior to entering the restaurant allowed anyone to easily place a preorder. This is extremely practical and saves time. For instance, if an employee has a one-hour lunch break, he will preorder and reserve the table via Servepro before entering the restaurant. Additionally, those who are unable to speak or hear would now be going to the restaurant by utilizing our online services. For some customers, carrying cash everywhere is very difficult. and prefer using cards, but occasionally the restaurant's ATMs do not work. Given that we have provided the option to pay the bill, this issue is also resolved on the site. The thing that makes Servepro different from any other firm is the idea of preordering. However, there are no such options for preordering. Reservations and payment options are offered by the restaurants. This is the foundation of Servepro's competitive advantage. giving them a competitive advantage and assisting It expands their market share and draws in more customers
</Text>
      
      </Box>
      <Box maxW={{ base: '100%', md: '40%' }} mb={{ base: 8, md: 0 }} w="100%" > 
      <Flex p={2} m={5} borderWidth="1px" borderRadius="lg" boxShadow="lg"><MapComponent/></Flex>
      <ShortForm/>
      <ImageLinks imageUrl={B2}/>     
      </Box>
      </Flex>
      <Footer/>
    </>
  )
}

export default About
