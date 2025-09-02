import React, { useState, useRef, useEffect } from 'react';
import { MessageSquareIcon, ChevronLeftIcon } from 'lucide-react';

interface Message {
  sender: 'parent' | 'tutor';
  text: string;
  timestamp: string;
}

interface Chat {
  parentId: number;
  parentName: string;
  parentImage: string;
  unread: boolean;
  messages: Message[];
}

const TutorMessages: React.FC = () => {
  const [messages, setMessages] = useState<Chat[]>([
    {
      parentId: 101,
      parentName: 'Sarah Johnson',
      parentImage: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
      unread: true,
      messages: [
        {
          sender: 'parent',
          text: "Hi there! I wanted to check in on Emily's progress with calculus.",
          timestamp: '10:30 AM',
        },
        {
          sender: 'tutor',
          text: "Hello Sarah! Emily is doing great. She's really improved on derivatives and we're now working on integration techniques.",
          timestamp: '10:35 AM',
        },
      ],
    },
    {
      parentId: 102,
      parentName: 'David Lee',
      parentImage: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
      unread: false,
      messages: [
        {
          sender: 'tutor',
          text: "Hi David, I wanted to let you know that Michael is struggling a bit with probability concepts. I've given him some extra practice problems.",
          timestamp: 'Yesterday',
        },
      ],
    },
  ]);

  const [selectedChat, setSelectedChat] = useState<Chat | null>(null);
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [selectedChat, messages]);

  // Handle chat selection: mark unread as false
  const handleSelectChat = (chat: Chat) => {
    setSelectedChat(chat);
    setMessages(prev =>
      prev.map(c =>
        c.parentId === chat.parentId ? { ...c, unread: false } : c
      )
    );
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim() || !selectedChat) return;

    const updatedMessages = messages.map(chat => {
      if (chat.parentId === selectedChat.parentId) {
        return {
          ...chat,
          messages: [
            ...chat.messages,
            { sender: 'tutor', text: newMessage.trim(), timestamp: 'Now' },
          ],
          unread: false,
        };
      }
      return chat;
    });

    setMessages(updatedMessages);
    setNewMessage('');
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold mb-6 dark:text-white">Messages</h2>
      <div className="flex flex-col md:flex-row h-[70vh]">
        {/* Sidebar */}
        <div className={`md:w-1/3 flex-shrink-0 border-r border-gray-200 dark:border-gray-700 overflow-y-auto ${selectedChat ? 'hidden md:block' : 'block'}`}>
          {messages.map(chat => (
            <div
              key={chat.parentId}
              onClick={() => handleSelectChat(chat)}
              className={`flex items-center p-4 border-b border-gray-200 dark:border-gray-700 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 
                ${selectedChat?.parentId === chat.parentId ? 'bg-gray-50 dark:bg-gray-700' : chat.unread ? 'bg-blue-50 dark:bg-blue-900/20' : ''}`}
            >
              <img className="h-12 w-12 rounded-full object-cover" src={chat.parentImage} alt={chat.parentName} />
              <div className="ml-3 flex-1">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium text-gray-900 dark:text-white">{chat.parentName}</div>
                  {chat.unread && <span className="inline-block h-2 w-2 bg-blue-500 rounded-full"></span>}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400 truncate">
                  {chat.messages[chat.messages.length - 1].text}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Chat Window */}
        <div className={`flex-1 flex flex-col ${selectedChat ? 'block' : 'hidden md:block'}`}>
          {selectedChat ? (
            <>
              <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex items-center">
                <button
                  onClick={() => setSelectedChat(null)}
                  className="md:hidden mr-2 text-gray-500 dark:text-gray-400"
                >
                  <ChevronLeftIcon className="h-6 w-6" />
                </button>
                <img
                  className="h-10 w-10 rounded-full object-cover mr-3"
                  src={selectedChat.parentImage}
                  alt={selectedChat.parentName}
                />
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">{selectedChat.parentName}</h3>
              </div>

              <div className="flex-1 p-4 overflow-y-auto space-y-4">
                {selectedChat.messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex ${message.sender === 'tutor' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-xs md:max-w-md px-4 py-2 rounded-lg ${
                        message.sender === 'tutor'
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white'
                      }`}
                    >
                      <p>{message.text}</p>
                      <span
                        className={`block text-right text-xs mt-1 ${
                          message.sender === 'tutor' ? 'text-blue-100' : 'text-gray-500 dark:text-gray-400'
                        }`}
                      >
                        {message.timestamp}
                      </span>
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>

              <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                <form className="flex" onSubmit={handleSendMessage}>
                  <input
                    type="text"
                    placeholder="Type a message..."
                    value={newMessage}
                    onChange={e => setNewMessage(e.target.value)}
                    className="flex-1 px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-700"
                  >
                    Send
                  </button>
                </form>
              </div>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-gray-400 dark:text-gray-600">
              <MessageSquareIcon className="h-16 w-16 mb-4" />
              <p className="text-lg">Select a conversation to start messaging.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TutorMessages;
