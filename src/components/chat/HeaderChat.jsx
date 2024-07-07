import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { openai } from '../../../public/Images/imagepath';
import { botIcon } from '../../../public/Images/imagepath';

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  background-color: #f8f9fa;
  border-bottom: 1px solid #e0e0e0;
`;

const BotIcon = styled.div`
  width: 40px;
  height: 40px;
  position: relative;
  margin-right: 10px;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserName = styled.span`
  font-weight: bold;
  color: #333;
`;

const UserStatus = styled.span`
  font-size: 0.9em;
  color: #888;
`;

const ActionIcons = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;

  & > div {
    margin-left: 10px;
    cursor: pointer;
  }
`;
botIcon
const Header = () => {
  return (
    <HeaderContainer>
      <BotIcon>
        <Image src={botIcon} alt="Bot Icon" layout='fill' />
      </BotIcon>
      <UserInfo>
        <UserName>eESJ CHATBOT</UserName>
        <UserStatus>Online</UserStatus>
      </UserInfo>
    </HeaderContainer>
  );
};
export default Header;
