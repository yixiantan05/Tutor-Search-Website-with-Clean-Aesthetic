import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, SendHorizontal, UserCircle } from 'lucide-react';

interface ChatMessage {
  sender: 'Tutor' | 'Student';
  content: string;
  timestamp: string;
}

interface MessageData {
  tutorId: number;
  tutorName: string;
  tutorImage: string;
  messages: ChatMessage[];
  unread: boolean;
  studentImage?: string;
}

const MessagesExample: React.FC = () => {
  const dummyData: MessageData[] = [
    {
      tutorId: 1,
      tutorName: 'Dr. Alice Lim',
      tutorImage: 'https://images.unsplash.com/photo-1603415526960-f7c4a4c88f4b?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
      messages: [
        { sender: 'Student', content: 'Hi, can we review calculus?', timestamp: '10:30 AM' },
        { sender: 'Tutor', content: 'Sure, let’s go over it now.', timestamp: '10:32 AM' },
      ],
      unread: true,
      studentImage: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
    },
    {
      tutorId: 2,
      tutorName: 'Mr. David Chen',
      tutorImage: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
      messages: [
        { sender: 'Student', content: 'Thanks for the last session!', timestamp: 'Yesterday' },
      ],
      unread: false,
    },
  ];

  const [selectedChatId, setSelectedChatId] = useState<number | null>(dummyData[0].tutorId);
  const [messagesData, setMessagesData] = useState<MessageData[]>(dummyData);
  const [currentMessage, setCurrentMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const selectedChat = messagesData.find(msg => msg.tutorId === selectedChatId);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [selectedChat, messagesData]);

  const handleSendMessage = () => {
    if (!currentMessage.trim() || !selectedChat) return;

    const newMsg: ChatMessage = {
      sender: 'Tutor',
      content: currentMessage,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessagesData(messagesData.map(msg =>
      msg.tutorId === selectedChat.tutorId
        ? { ...msg, messages: [...msg.messages, newMsg], unread: false }
        : msg
    ));
    setCurrentMessage('');
  };

  return (
    <div className="flex flex-col md:flex-row h-[70vh] p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
      {/* Left: Tutor List */}
      <div className="w-full md:w-1/3 border-r dark:border-gray-700 pr-4 overflow-y-auto">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Messages</h2>
        {messagesData.map(msg => (
          <div
            key={msg.tutorId}
            onClick={() => setSelectedChatId(msg.tutorId)}
            className={`flex items-center p-3 rounded-lg mb-2 cursor-pointer transition-colors ${
              selectedChatId === msg.tutorId ? 'bg-blue-100 dark:bg-blue-700' : 'hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
          >
            <img src={msg.tutorImage} alt={msg.tutorName} className="w-12 h-12 rounded-full object-cover mr-3" />
            <div className="flex-1">
              <div className="flex justify-between items-center">
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white">{msg.tutorName}</h3>
                {msg.unread && <span className="bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full">1</span>}
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 truncate mt-1">
                {msg.messages[msg.messages.length - 1]?.content || ''}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Right: Chat Window */}
      <div className="w-full md:w-2/3 md:pl-4 flex flex-col mt-6 md:mt-0">
        {selectedChat ? (
          <>
            <div className="flex items-center border-b dark:border-gray-700 pb-4 mb-4">
              <img className="h-12 w-12 rounded-full object-cover mr-4" src={selectedChat.tutorImage} alt={selectedChat.tutorName} />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{selectedChat.tutorName}</h3>
            </div>

            {/* Message History */}
            <div className="flex-1 overflow-y-auto mb-4 space-y-4">
              {selectedChat.messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.sender === 'Tutor' ? 'justify-end' : 'justify-start'}`}>
                  <div className="flex items-end">
                    {msg.sender === 'Student' && (
                      <img
                        src={selectedChat.studentImage || selectedChat.tutorImage}
                        alt="Student"
                        className="w-8 h-8 rounded-full mr-2"
                      />
                    )}
                    <div className={`flex flex-col ${msg.sender === 'Tutor' ? 'items-end' : 'items-start'}`}>
                      <div className={`p-3 rounded-lg max-w-sm ${msg.sender === 'Tutor' ? 'bg-blue-600 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white'}`}>
                        {msg.content}
                      </div>
                      <span className="text-xs text-gray-500 dark:text-gray-400 mt-1">{msg.timestamp}</span>
                    </div>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Message Input */}
            <div className="p-4 border-t border-gray-200 dark:border-gray-700 flex items-center space-x-2">
              <input
                type="text"
                value={currentMessage}
                onChange={(e) => setCurrentMessage(e.target.value)}
                placeholder="Type a message..."
                className="flex-1 px-4 py-3 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
              />
              <button
                onClick={handleSendMessage}
                className="p-3 bg-blue-600 dark:bg-blue-500 text-white rounded-full hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
              >
                <SendHorizontal size={20} />
              </button>
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center h-full text-gray-400 dark:text-gray-600">
            <UserCircle size={64} className="mb-4" />
            <p className="text-lg">Select a conversation to start messaging.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Messages;
