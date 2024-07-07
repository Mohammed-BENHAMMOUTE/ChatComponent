import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import Message from '../messages/message';
import Avatar1 from '/assets/img/profiles/avatar-01.jpg';

const ChatMessages = ({ messages }) => {
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const messageVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="card chat-message-box">
      <div className="card-body p-0">
        <div className="chat-body overflow-y-auto max-h-screen">
          <ul className="list-none p-4">
            <AnimatePresence initial={false}>
              {messages.map((message, index) => (
                <motion.li
                  key={index}
                  className={`flex ${message.isUser ? 'justify-end' : 'justify-start'} mb-4`}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={messageVariants}
                  transition={{ duration: 0.3 }}
                >
                  {!message.isUser && message.name && (
                    <div className="flex-shrink-0">
                      <Image src={Avatar1} alt="User Image" className="rounded-full w-10 h-10 mr-2" />
                    </div>
                  )}
                  <div className="flex-grow">
                    <Message isUser={message.isUser} text={message.text} time={message.time} name={message.name} />
                    {message.attachments && (
                      <ul className="mt-2">
                        {message.attachments.map((attachment, idx) => (
                          <li key={idx} className="flex items-center mb-1">
                            <Image src={attachment.src} alt="#" className="w-5 h-5 mr-2" />
                            <span>{attachment.text}</span>
                            <span className="ml-2 text-gray-500">{attachment.size}</span>
                            {attachment.icon && <Image src={attachment.icon} alt="#" className="ml-auto w-5 h-5" />}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </motion.li>
              ))}
            </AnimatePresence>
            <div ref={messagesEndRef} />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ChatMessages;
