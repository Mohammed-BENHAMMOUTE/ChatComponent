import React, { useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import chatfooter1 from '/assets/img/icons/chat-foot-icon-01.svg';
import chatfooter2 from '/assets/img/icons/chat-foot-icon-02.svg';
import chatfooter3 from '/assets/img/icons/chat-foot-icon-03.svg';
import chatfooter4 from '/assets/img/icons/chat-foot-icon-04.svg';
import '/assets/css/style.css';

const FooterChat = ({ setMessages }) => {
    const [message, setMessage] = React.useState('');
    const inputRef = React.useRef();
    const recognitionRef = React.useRef();

    const sendMessage = useCallback(() => {
        if (message.trim()) {
            setMessages((prevMessages) => [...prevMessages, { isUser: true, text: message, time: new Date().toLocaleTimeString() }]);
            setMessage('');
        }
        inputRef.current.focus();
    }, [message, setMessages]);

    const handleVoiceInput = () => {
        if (!('webkitSpeechRecognition' in window)) {
            alert('Speech recognition not supported in this browser');
            return;
        }

        const recognition = new webkitSpeechRecognition();
        recognition.continuous = false;
        recognition.interimResults = false;
        recognition.lang = 'en-US';

        recognition.onstart = () => {
            console.log('Voice recognition started');
        };

        recognition.onresult = (event) => {
            const transcript = event.results[0][0].transcript;
            console.log('Voice input:', transcript);
            setMessage(transcript);
        };

        recognition.onerror = (event) => {
            console.error('Voice recognition error:', event.error);
        };

        recognition.onend = () => {
            console.log('Voice recognition ended');
        };

        recognitionRef.current = recognition;
        recognition.start();
    };

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
        <div className="fixed bottom-0 left-0 right-0 bg-white p-4 shadow-md">
            <div className="flex items-center">
                <input
                    type="text"
                    ref={inputRef}
                    placeholder="Type your Message here..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="flex-grow p-2 border rounded mr-2"
                />
                <button className="mr-2" onClick={handleVoiceInput}>
                    <Image src={chatfooter4} alt="Microphone" />
                </button>
                <button onClick={sendMessage}>
                    <Image src={chatfooter3} alt="Submit" />
                </button>
                <div className="flex items-center space-x-2 ml-2">
                    <Link href="#">
                        <Image src={chatfooter1} alt="Camera" />
                    </Link>
                    <Link href="#">
                        <Image src={chatfooter2} alt="Icon" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default FooterChat;
