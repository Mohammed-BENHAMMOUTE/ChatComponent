import React from 'react';
import PropTypes from 'prop-types';
import { Box, Flex, Text } from '@chakra-ui/react';

const Message = ({ isUser, text }) => {
    const userBgColor = '#6082B6'; // User message background color
    const aiBgColor = '#4C3BCF'; // AI response background color
    const userTextColor = 'white';
    const aiTextColor = 'white';

    return (
        <Flex justify={isUser ? 'flex-end' : 'flex-start'} my={2}>
            <Box
                maxWidth="60%"
                p={4}
                borderRadius="lg"
                bg={isUser ? userBgColor : aiBgColor}
                color={isUser ? userTextColor : aiTextColor}
                boxShadow="md"
                borderRadius="37px"
            >
                <Text fontSize="md" color="white">{text}</Text>
            </Box>
        </Flex>
    );
};

Message.propTypes = {
    isUser: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
};

export default Message;
