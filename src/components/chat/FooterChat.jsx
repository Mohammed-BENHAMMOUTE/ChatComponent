import React, { useEffect, useCallback } from 'react';
import Image from 'next/image';
import chatfooter1 from '/assets/img/icons/chat-foot-icon-01.svg';
import chatfooter4 from '/assets/img/icons/chat-foot-icon-04.svg';
import sendIcon from '/assets/send-4008.svg';


const FooterChat = ({ setMessages }) => {
    const [message, setMessage] = React.useState('');
    const [image, setImage] = React.useState(null);
    const inputRef = React.useRef();
    const recognitionRef = React.useRef();

    const sendMessage = useCallback(() => {
        if (message.trim()) {
            setMessages((prevMessages) => [...prevMessages, { isUser: true, text: message, time: new Date().toLocaleTimeString() }]);
            setMessage('');
        }
        inputRef.current.focus();
    }, [message, setMessages]);

    const handleVoiceInput = async () => {
        try {
            const response = await fetch('/api/startRecording', {
                method: 'POST',
            });

            if (response.ok) {
                setTimeout(async () => {
                    const stopResponse = await fetch('/api/stopRecording', {
                        method: 'POST',
                    });

                    if (stopResponse.ok) {
                        const data = await stopResponse.json();
                        setMessages((prevMessages) => [...prevMessages, data]);
                    } else {
                        console.error('Error stopping recording');
                    }
                }, 5000); // Stop recording after 5 seconds for demonstration purposes
            } else {
                console.error('Error starting recording');
            }
        } catch (error) {
            console.error('Error with voice input', error);
        }
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];

        if (file && allowedTypes.includes(file.type)) {
            setImage(URL.createObjectURL(file));
            // Handle the uploaded image file as needed
        } else {
            alert('Please upload a valid image file (JPEG, PNG, GIF)');
        }
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
                <button className="mr-2" onClick={handleVoiceInput}>
                    <Image src={chatfooter4} alt="Microphone" />
                </button>
                <input
                    type="text"
                    ref={inputRef}
                    placeholder="Type your Message here..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="flex-grow p-2 border rounded mr-2"
                />
                <div className="flex items-center space-x-2 ml-2">
                    <input
                        type="file"
                        accept="image/jpeg, image/png, image/gif"
                        onChange={handleImageUpload}
                        className="hidden"
                        id="imageUpload"
                    />
                    <label htmlFor="imageUpload" className="cursor-pointer">
                        <Image src={chatfooter1} alt="Image upload" />
                    </label>
                    <button onClick={sendMessage}>
                        <Image src={sendIcon} alt="Submit" width={24} height={24} />
                    </button>
                </div>
            </div>
            {image && (
                <div className="mt-4">
                    <Image src={image} alt="Uploaded Image" width={200} height={200} />
                </div>
            )}
        </div>
    );
};

export default FooterChat;