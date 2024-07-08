'use client'
import React from 'react'
import FooterChat from './FooterChat'
import ChatMessages from './ChatMessages'
import '/assets/css/style.css'
import HeaderChat from './HeaderChat'
import { px } from 'framer-motion'
const Chat = () => {
  const [messages, setMessages] = React.useState([
      { isUser: false, name: 'eESJ chatbot', text: "Hi there, i'm your a chatbot that can answer your health realated questions", time: `${Date.now()}` }
  ]);
  return (
    <div className="flex  flex-col h-screen">
      <HeaderChat />
      <div className="flex-1 overflow-y-auto">
        <ChatMessages messages={messages} />
      </div>
      <FooterChat setMessages={setMessages} />
    </div>
  )
}

export default Chat
