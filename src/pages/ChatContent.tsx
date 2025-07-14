import React, { useRef, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const dummyMessages = [
  { id: 1, sender: 'Agent Mide', content: 'Hello, how can I help you?', time: '10:30 AM' },
  { id: 2, sender: 'You', content: 'I am interested in the apartment.', time: '10:31 AM' },
  { id: 3, sender: 'Agent Mide', content: 'Great! Do you have any questions?', time: '10:32 AM' },
];

const ChatContent: React.FC = () => {
  const { id } = useParams();
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <div className="w-full max-w-2xl mx-auto flex flex-col flex-1">
        <div className="flex items-center p-4 bg-white shadow mb-2">
          <Link to="/chatlist" className="text-2xl mr-4">&#8592;</Link>
          <h2 className="text-xl font-bold">Chat with Agent {id}</h2>
        </div>
        <div className="flex-1 overflow-y-auto px-4 py-2 space-y-3">
          {dummyMessages.map(msg => (
            <div key={msg.id} className={`flex ${msg.sender === 'You' ? 'justify-end' : 'justify-start'}`}>
              <div className={`rounded-lg px-4 py-2 max-w-xs ${msg.sender === 'You' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'}`}>
                <div className="text-xs font-semibold mb-1">{msg.sender}</div>
                <div>{msg.content}</div>
                <div className="text-[0.7rem] text-right mt-1">{msg.time}</div>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
        <form className="flex p-4 bg-white shadow mt-2">
          <input
            type="text"
            placeholder="Type a message..."
            className="flex-1 border rounded-l-lg px-3 py-2 focus:outline-none"
            disabled
          />
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-r-lg font-semibold" disabled>
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatContent;
