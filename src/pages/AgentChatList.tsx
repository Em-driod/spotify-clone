// AgentChatList.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';

// Define the type for an individual agent
interface Agent {
  id: string;
  name: string;
  lastMessage: string;
  time: string;
  avatar: string;
}

// Define the props for the AgentChatList component
interface AgentChatListProps {
  onSelectChat: (id: string, name: string) => void; // Callback function with chat ID and agent name
}

const AgentChatList: React.FC<AgentChatListProps> = ({ onSelectChat }) => {
  // Dummy data for chat agents
  const agents: Agent[] = [
    { id: 'agent1', name: 'Alice Smith', lastMessage: 'Okay, I will send it to you.', time: '10:30 AM', avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=AS' },
    { id: 'agent2', name: 'Bob Johnson', lastMessage: 'Sounds good!', time: 'Yesterday', avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=BJ' },
    { id: 'agent3', name: 'Charlie Brown', lastMessage: 'Thank you for your help.', time: 'Monday', avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=CB' },
    { id: 'agent4', name: 'Diana Prince', lastMessage: 'Please confirm delivery.', time: '07/12/2025', avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=DP' },
  ];

  return (
    <div className="w-full bg-white shadow-lg rounded-lg overflow-hidden md:w-80 lg:w-96">
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-2xl flex font-bold text-gray-800"> <Link to='/first'>
          <IoIosArrowBack size={24} className="text-gray-600 mr-4 cursor-pointer" />
        </Link>Chats</h2>
      </div>
      <div className="divide-y divide-gray-100">
        {agents.map((agent) => (
          <div
            key={agent.id}
            className="flex items-center p-4 cursor-pointer hover:bg-gray-50 transition-colors duration-200"
            onClick={() => onSelectChat(agent.id, agent.name)} // Pass agent ID and name to parent
          >
            <img
              src={agent.avatar}
              alt={agent.name}
              className="w-12 h-12 rounded-full mr-4 object-cover"
            />
            <div className="flex-1">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-800">{agent.name}</h3>
                <span className="text-sm text-gray-500">{agent.time}</span>
              </div>
              <p className="text-gray-600 text-sm truncate">{agent.lastMessage}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AgentChatList;