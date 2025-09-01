import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, RotateCcw } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

export default function RanielAIAssistant() {
  const { isDarkMode } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! I'm Raniel's AI Assistant. I can answer questions about Raniel's background, skills, and experience. Choose a question below to get started!",
      isBot: true,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");

  const predefinedQuestions = [
    "Tell me about Raniel's background",
    "What are Raniel's main skills?",
    "What kind of projects has Raniel worked on?",
    "How can I contact Raniel?",
    "What drives Raniel as a developer?",
    "What are Raniel's problem-solving abilities?",
    "What certifications does Raniel have?",
    "What is Raniel's educational background?"
  ];

  const botResponses = {
    "Tell me about Raniel's background": "Raniel Encarnacion is currently a fourth-year college student at Exact Colleges of Asia, pursuing a Bachelor of Science in Information Systems. His journey into web development began with curiosity about how websites are built and evolved into a deep passion for creating interactive and visually appealing web experiences.",
    "What are Raniel's main skills?": "Raniel specializes in modern web technologies including HTML, CSS, JavaScript, jQuery, PHP, MySQL, Vite, Supabase, Bootstrap, and Tailwind CSS. He's also familiar with tools like VS Code, XAMPP, MS Office, Canva, ChatGPT, GitHub, Vercel, Google Drive, Gmail, Cursor, Windsurf, Neatbeans, Virtual Box, Docker Desktop, and Netlify.",
    "What kind of projects has Raniel worked on?": "Raniel has worked on major projects including System Analysis Design - ECA MIS IT Service Management Ticketing System (a comprehensive ticketing platform for IT support operations), ECA MIS General Mobile Inventory System (mobile-based inventory management for digitizing asset tracking), ESCafe - Coffee Shop Website (responsive cafe website with modern design), and First Build in Portfolio Website (his first web development project showcasing fundamental skills).",
    "How can I contact Raniel?": "You can reach Raniel at lumawigraniel@gmail.com, call +639278026885, or connect through his social media: GitHub (ranielencarnacion), LinkedIn (encarnacion-raniel-b78416263), Facebook (raniel.encarnacion.2024), or Twitter (@rainraingoaweyn).",
    "What drives Raniel as a developer?": "Raniel is driven by core values: Problem Solver - creative solutions to complex challenges, Time Management - efficiently organizing tasks and meeting deadlines, Team Player - collaborative and supportive approach, Clean Code - writing maintainable and scalable solutions, Passionate - driven by love for technology and innovation, and Goal-Oriented - focused on delivering exceptional results.",
    "What are Raniel's problem-solving abilities?": "Raniel excels at breaking down complex problems into manageable components, using systematic debugging approaches, and implementing creative solutions. His experience with inventory management systems and business automation demonstrates his ability to solve real-world challenges through code.",
    "What certifications does Raniel have?": "Raniel has earned several professional certifications: Networking Devices and Initial Configuration by Cisco (Apr 2025), OCI AI Foundations Associate by Oracle (Aug 2025), Ethical Hacker by Cisco (Aug 2025), and Advanced Foundry by Cyfrin Updraft (Aug 2025). These certifications demonstrate his expertise in networking, AI, cybersecurity, and blockchain development.",
    "What is Raniel's educational background?": "Raniel is currently pursuing a Bachelor of Science in Information Systems at Exact Colleges of Asia, where he's in his fourth year. His academic foundation combined with hands-on project experience gives him both theoretical knowledge and practical skills in software development."
  };

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const newMessage = {
      id: messages.length + 1,
      text: inputMessage,
      isBot: false,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, newMessage]);

    // Bot response
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        text: botResponses[inputMessage as keyof typeof botResponses] || "I'm sorry, I don't have information about that specific topic. Please try one of the suggested questions or ask about Raniel's background, skills, projects, or contact information.",
        isBot: true,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);

    setInputMessage("");
  };

  const handleQuestionClick = (question: string) => {
    const newMessage = {
      id: messages.length + 1,
      text: question,
      isBot: false,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, newMessage]);

    // Bot response
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        text: botResponses[question as keyof typeof botResponses] || "I'm sorry, I don't have information about that specific topic. Please try one of the suggested questions or ask about Raniel's background, skills, projects, or contact information.",
        isBot: true,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  const clearChat = () => {
    setMessages([
      {
        id: 1,
        text: "Hi! I'm Raniel's AI Assistant. I can answer questions about Raniel's background, skills, and experience. Choose a question below to get started!",
        isBot: true,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ]);
  };

  return (
    <>
      {/* Chat Widget */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className={`fixed bottom-20 sm:bottom-24 right-4 sm:right-6 w-[calc(100vw-2rem)] sm:w-96 max-w-md h-[525px] rounded-2xl shadow-2xl z-50 overflow-hidden ${
              isDarkMode ? 'bg-black border border-gray-700' : 'bg-white border border-gray-200'
            }`}
          >
            {/* Header */}
            <div className={`p-4 border-b flex items-center justify-between ${
              isDarkMode ? 'border-gray-700 bg-black' : 'border-gray-200 bg-white'
            }`}>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full flex items-center justify-center overflow-hidden">
                  <img 
                    src={isDarkMode ? "/rm.png" : "/rm-black-removebg.png"} 
                    alt="AI Assistant Logo" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className={`font-semibold ${isDarkMode ? 'text-white' : 'text-black'}`}>
                    AI Assistant
                  </h3>
                  <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    Online
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={clearChat}
                  className={`px-3 py-1 rounded-lg text-xs font-medium transition-colors ${
                    isDarkMode 
                      ? 'bg-gray-700 hover:bg-gray-600 text-gray-300' 
                      : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
                  }`}
                >
                  <RotateCcw size={14} className="inline mr-1" />
                  Clear
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className={`p-1 rounded-full hover:bg-gray-200 transition-colors ${
                    isDarkMode ? 'hover:bg-gray-700 text-gray-400' : 'text-gray-500'
                  }`}
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto" style={{ height: messages.length === 1 ? '160px' : '280px' }}>
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`mb-4 ${message.isBot ? 'text-left' : 'text-right'}`}
                >
                  <div
                    className={`inline-block max-w-[80%] p-3 rounded-2xl ${
                      message.isBot
                        ? isDarkMode
                          ? 'bg-gray-800 text-white'
                          : 'bg-gray-200 text-black'
                        : 'bg-blue-500 text-white'
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                    <p className={`text-xs mt-1 opacity-70`}>
                      {message.timestamp}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Predefined Questions */}
            {messages.length === 1 && (
              <div className={`p-4 border-t max-h-32 overflow-y-auto ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                <p className={`text-sm mb-3 font-semibold ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Questions about Raniel:
                </p>
                <div className="grid grid-cols-1 gap-2">
                  {predefinedQuestions.slice(0, 4).map((question, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuestionClick(question)}
                      className={`w-full text-left p-2 rounded-lg text-xs transition-colors hover:scale-[1.02] ${
                        isDarkMode
                          ? 'bg-gray-800 hover:bg-gray-700 text-gray-300 border border-gray-600'
                          : 'bg-gray-100 hover:bg-gray-200 text-gray-700 border border-gray-300'
                      }`}
                    >
                      {question}
                    </button>
                  ))}
                </div>
                {predefinedQuestions.length > 4 && (
                  <div className="mt-2 grid grid-cols-2 gap-2">
                    {predefinedQuestions.slice(4).map((question, index) => (
                      <button
                        key={index + 4}
                        onClick={() => handleQuestionClick(question)}
                        className={`w-full text-left p-2 rounded-lg text-xs transition-colors hover:scale-[1.02] ${
                          isDarkMode
                            ? 'bg-gray-800 hover:bg-gray-700 text-gray-300 border border-gray-600'
                            : 'bg-gray-100 hover:bg-gray-200 text-gray-700 border border-gray-300'
                        }`}
                      >
                        {question}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Input */}
            <div className={`p-3 border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Type your message..."
                  className={`flex-1 px-3 py-2 rounded-md border text-sm ${
                    isDarkMode
                      ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400'
                      : 'bg-white border-gray-300 text-black placeholder-gray-500'
                  }`}
                />
                <button
                  onClick={handleSendMessage}
                  className="px-3 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
                >
                  <Send size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={`fixed bottom-6 right-6 w-14 h-14 rounded-full shadow-lg z-50 flex items-center justify-center transition-all ${
          isOpen
            ? 'bg-red-500 hover:bg-red-600'
            : 'bg-blue-500 hover:bg-blue-600'
        } text-white`}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X size={24} />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle size={24} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </>
  );
}
