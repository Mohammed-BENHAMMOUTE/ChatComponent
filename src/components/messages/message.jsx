import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const MessageContainer = styled.div`
  display: flex;
  margin: 10px 0;
  justify-content: ${({ isUser }) => (isUser ? 'flex-end' : 'flex-start')};
  align-items: center;
`;

const MessageBubble = styled.div`
  max-width: 60%;
  padding: 10px 15px;
  border-radius: 10px;
  background-color: ${({ isUser }) => (isUser ? '#d4f1f4' : '#d1e7dd')};
  color: ${({ isUser }) => (isUser ? '#1b6ca8' : '#1d643b')};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
`;
const Message = ({ isUser, text }) => {
  return (
    <MessageContainer isUser={isUser}>
      <MessageBubble isUser={isUser}>
        {text}
      </MessageBubble>
    </MessageContainer>
  );
};

Message.propTypes = {
  isUser: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

export default Message;
