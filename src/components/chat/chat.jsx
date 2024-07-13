'use client'
import React from 'react'
import FooterChat from './FooterChat'
import ChatMessages from './ChatMessages'
import '/assets/css/style.css'
import HeaderChat from './HeaderChat'
import chatIcon07 from '/assets/img/icons/chat-icon-07.svg';
import chatIcon08 from '/assets/img/icons/chat-icon-08.svg';
import chatIcon06 from '/assets/img/icons/chat-icon-06.svg';
import chatIcon05 from '/assets/img/icons/chat-icon-05.svg';
import chatIcon04 from '/assets/img/icons/chat-icon-04.svg';

const Chat = () => {
  const [messages, setMessages] = React.useState([
    { isUser: false, name: 'eESJ', text: 'Hello there how may i help you?', time: Date.now().toLocaleString() },
  ]);

  return (
    <div className="flex flex-col h-screen" style={{backgroundColor:'#00000014'}}>
      <HeaderChat />
      <div className="flex-1 overflow-y-auto">
        <ChatMessages messages={messages} />
      </div>
      <FooterChat setMessages={setMessages} />
    </div>
  )
}

export default Chat
