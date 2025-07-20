import { useEffect } from 'react';
import ChatbotSDK from '@rhinon/rhinonbot-sdk';

export default function Chatbot() {
  useEffect(() => {
    const chatbot = new ChatbotSDK();
    chatbot.init(1);
  }, []);

  return <div id="chatbot"></div>
}