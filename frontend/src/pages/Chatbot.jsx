import React, { useState, useRef, useEffect } from "react";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import axios from "axios";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const chatWindowRef = useRef(null);

  useEffect(() => {
    if (chatWindowRef.current) {
      chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
    }
  }, [messages]);
  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const newMessage = { id: Date.now(), text: inputMessage, sender: "user" };
    setMessages((prev) => [...prev, newMessage]);
    setInputMessage("");
    setIsTyping(true);

    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/chat`, {
        message: inputMessage,
      });

      setMessages((prev) => [
        ...prev,
        { id: Date.now() + 1, text: res.data.reply, sender: "bot" },
      ]);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        { id: Date.now() + 1, text: "Error getting response", sender: "bot" },
      ]);
    }

    setIsTyping(false);
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0F2C16] to-black p-4 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-4xl backdrop-blur-lg bg-white/10 rounded-2xl shadow-2xl overflow-hidden"
      >
        <div className="p-6 border-b border-white/10 bg-gradient-to-r from-[#2AB673]/20 to-transparent">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <img src="/hitesh.png" alt="hitesh" className="w-full h-full" />
            </div>
            <div>
              <h1 className="text-[#F0F0F0] text-xl font-bold">
                Hitesh Choudhary
              </h1>
              <p className="text-[#F0F0F0]/60 text-sm">
                Chalo dosto, thodi baatein karte hain coding aur chai ke saath!
              </p>
            </div>
          </div>
        </div>

        <div
          ref={chatWindowRef}
          className="h-[500px] overflow-y-auto p-6 space-y-4 scrollbar-thin scrollbar-thumb-[#2AB673] scrollbar-track-transparent"
        >
          {messages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex ${
                message.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[70%] p-4 rounded-2xl backdrop-blur-sm
                      ${
                        message.sender === "user"
                          ? "bg-[#2AB673]/20 text-[#F0F0F0]"
                          : "bg-white/5 text-[#F0F0F0]"
                      }
                    `}
              >
                {message.text}
              </div>
            </motion.div>
          ))}
          {isTyping && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center space-x-2 text-[#F0F0F0]/60"
            >
              <span className="w-2 h-2 bg-[#2AB673] rounded-full animate-bounce"></span>
              <span className="w-2 h-2 bg-[#2AB673] rounded-full animate-bounce delay-100"></span>
              <span className="w-2 h-2 bg-[#2AB673] rounded-full animate-bounce delay-200"></span>
            </motion.div>
          )}
        </div>

        <div className="p-6 border-t border-white/10 bg-black/20">
          <div className="flex items-center space-x-4">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
              placeholder="Type your message here..."
              className="flex-1 bg-white/5 backdrop-blur-sm rounded-xl px-6 py-3 text-[#F0F0F0] placeholder-[#F0F0F0]/40 focus:outline-none focus:ring-2 focus:ring-[#2AB673]/50"
            />
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleSendMessage}
              className="p-2 rounded-full bg-[#2AB673] hover:bg-[#2AB673]/80 text-white transition-colors"
            >
              <FaPaperPlane className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Chatbot;
