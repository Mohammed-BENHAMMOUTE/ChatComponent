import React from 'react';
import Image from 'next/image';
import { Box, Flex, Text, Avatar } from '@chakra-ui/react';
import { botIcon } from '../../../public/Images/imagepath';

const Header = () => {
  const bgColor = 'gray.200';
  const borderColor = 'gray.200';
  const userNameColor = 'gray.700';
  const userStatusColor = 'gray.500';

  return (
      <Box
          as="header"
          bg={bgColor}
          borderBottomWidth="1px"
          borderBottomColor={borderColor}
          p={3}
          borderRadius='60px'
          boxShadow="sm"
      >
        <Flex alignItems="center">
          <Avatar src={botIcon} alt="Bot Icon" mr={3} />
          <Box>
            <Text fontWeight="bold" color={userNameColor}>
              eESJ CHATBOT
            </Text>
            <Text fontSize="sm" color={userStatusColor}>
              Online
            </Text>
          </Box>
        </Flex>
      </Box>
  );
};

export default Header;
