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
    { isUser: false, name: 'Williams Bruk', text: 'How likely are you to recommend our company to your friends and family?', time: '06:00 PM, 30 Sep 2022' },
    { isUser: true, text: 'How likely are you to recommend our company to your friends and family?', time: '06:00 PM, 30 Sep 2022' },
    { isUser: false, name: 'Galaviz Lalema', text: 'non tellus dignissim', time: '06:32 PM Yesterday', attachments: [
        { src: chatIcon07, text: 'Explainer Video.avi', size: '30.0 MB', icon: chatIcon07 },
        { src: chatIcon05, text: 'Ayush Therapy.mp3', size: '4.0 MB', icon: chatIcon08 },
        { src: chatIcon06, text: 'The liver.img', size: '520KB' }
      ] },
    { isUser: true, text: 'Vivamus sed dictum dictum ligula, cursus blandit risus\nVivamus sed dictum', time: '06:50 PM Today' },
    { isUser: false, name: 'William Stephin', text: 'aliquam ut a ex', time: '5min Ago' },
  ]);

  return (
    <div className="flex flex-col h-screen">
      <HeaderChat />
      <div className="flex-1 overflow-y-auto">
        <ChatMessages messages={messages} />
      </div>
      <FooterChat setMessages={setMessages} />
    </div>
  )
}

export default Chat
