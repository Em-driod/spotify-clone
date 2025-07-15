// ChatWindow.tsx
import React, { useState, useRef, useEffect } from 'react';

// Define the type for a chat message
interface ChatMessage {
  id: number;
  sender: string; // Could be 'user' or the agent's ID
  text: string;
  time: string;
  type: 'sent' | 'received'; // Type of message for styling
}

// Define the props for the ChatWindow component
interface ChatWindowProps {
  selectedChatId: string | null;
  agentName: string;
}

const ChatWindow: React.FC<ChatWindowProps> = ({ selectedChatId, agentName }) => {
  // Dummy messages for demonstration, replace with real data
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: 1, sender: 'agent1', text: 'Hello! How can I help you today?', time: '10:28 AM', type: 'received' },
    { id: 2, sender: 'user', text: 'Hi, I have a question about my order.', time: '10:29 AM', type: 'sent' },
    { id: 3, sender: 'agent1', text: 'Certainly, what is your order number?', time: '10:30 AM', type: 'received' },
  ]);
  const [newMessage, setNewMessage] = useState<string>('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Scroll to the bottom of the chat when messages update
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Dummy effect to simulate loading messages for a different chat
  useEffect(() => {
    if (selectedChatId) {
      // In a real app, you'd fetch messages for selectedChatId from an API
      console.log(`Loading messages for chat: ${selectedChatId}`);
      // Reset messages for the demo when a new chat is selected
      setMessages([
        { id: 1, sender: selectedChatId, text: `Welcome to chat with ${agentName || 'Agent'}!`, time: '10:00 AM', type: 'received' },
        { id: 2, sender: 'user', text: 'Hey there!', time: '10:01 AM', type: 'sent' },
      ]);
    }
  }, [selectedChatId, agentName]);

  const handleSendMessage = (): void => {
    if (newMessage.trim()) {
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          id: prevMessages.length + 1,
          sender: 'user',
          text: newMessage.trim(),
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          type: 'sent',
        },
      ]);
      setNewMessage('');
    }
  };

  if (!selectedChatId) {
    return (
      <div className="flex flex-col items-center justify-center h-full text-gray-500">
        <p className="text-xl">Select a chat to start messaging.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full h-full bg-white shadow-lg rounded-lg overflow-hidden">
      {/* Chat Header */}
      <div className="p-4 border-b border-gray-200 bg-gray-50">
        <h2 className="text-xl font-bold text-gray-800">{agentName || `Chat with ${selectedChatId}`}</h2>
      </div>

      {/* Messages Area */}
      <div className="flex-1 p-4 overflow-y-auto space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.type === 'sent' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[75%] p-3 rounded-lg ${
                message.type === 'sent'
                  ? 'bg-blue-500 text-white rounded-br-none'
                  : 'bg-gray-200 text-gray-800 rounded-bl-none'
              }`}
            >
              <p className="text-sm">{message.text}</p>
              <span className="text-xs mt-1 block text-right opacity-75">
                {message.time}
              </span>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} /> {/* Scroll target */}
      </div>

      {/* Message Input */}
      <div className="p-4 border-t border-gray-200 bg-gray-50 flex items-center">
        <input
          type="text"
          placeholder="Type your message..."
          className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={newMessage}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewMessage(e.target.value)}
          onKeyPress={(e: React.KeyboardEvent<HTMLInputElement>) => e.key === 'Enter' && handleSendMessage()}
        />
        <button
          onClick={handleSendMessage}
          className="ml-3 px-4 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatWindow;