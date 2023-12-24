// HorizontalTab.js
import React from 'react';
import { Box, Flex, useTheme } from '@chakra-ui/react';

const HorizontalTab = ({ leftContent, centerContent, rightContent ,position, imageUrl }) => {
    const bannerStyle = {
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      };
    const theme = useTheme();
    const bgColor = theme.colors.brand[800];
    return (
        <Box
            mt={position?-10:0}
            ml={position?4:0}
            mr={position?4:0}
            p={8}
            // ml={{ base: 2, md: 10 }}
            // mr={{ base: 2, md: 10 }}
            borderRadius="sm"
            bgColor={bgColor}
            style={bannerStyle}
            zIndex="1"
        >
            <Flex align="center" justifyContent="space-around" textAlign={"center"} direction={{base:"column", md:"row"}}>
                <Box flex="1" >
                    {leftContent && (
                        <Box color={"white"}>
                            {leftContent}
                        </Box>
                    )}
                </Box>
                <Box flex="1" ml={{base:0,md:10}}>
                    {centerContent && (
                        <Box color={"white"}>
                            {centerContent}
                        </Box>
                    )}
                </Box>
                <Box flex="1" >
                    {rightContent && (
                        <Box color={"white"}>
                            {rightContent}
                        </Box>
                    )}
                </Box>
            </Flex>
        </Box>
    );
};

export default HorizontalTab;
