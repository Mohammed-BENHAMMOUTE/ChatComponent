import React, { useEffect, useCallback, useRef, useState } from 'react';
import { Box, Input, IconButton, Flex } from '@chakra-ui/react';
import { FaPaperPlane } from 'react-icons/fa';

const FooterChat = ({ setMessages }) => {
  const [message, setMessage] = useState('');
  const inputRef = useRef();

  const sendMessage = useCallback(async () => {
    if (message.trim()) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { isUser: true, text: message, time: new Date().toLocaleTimeString() }
      ]);

      try {
        const response = await fetch('/api/chat', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ message }),
        });
        const data = await response.json();
        setMessages((prevMessages) => [
          ...prevMessages,
          { isUser: false, text: data.response, time: new Date().toLocaleTimeString() }
        ]);
      } catch (error) {
        console.error('Error fetching response:', error);
      }

      setMessage('');
      inputRef.current.focus();
    }
  }, [message, setMessages]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        sendMessage();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [sendMessage]);

  return (
      <Box position="fixed" bottom="0" left="0" right="0" bg="white" p="4" shadow="lg" backgroundColor="#EBEBEB">
        <Flex alignItems="center" >
          <Input
              ref={inputRef}
              placeholder="Type your message here..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              flexGrow="1"
              mr="2"
              borderColor="blue.500"
              borderRadius="full"
          />
          <IconButton
              icon={<FaPaperPlane />}
              aria-label="Send"
              variant="solid"
              colorScheme="teal"
              borderRadius="full"
              onClick={sendMessage}
          />
        </Flex>
      </Box>
  );
};

export default FooterChat;
