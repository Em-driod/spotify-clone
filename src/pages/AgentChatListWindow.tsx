import React, { useState } from 'react';
import AgentChatList from './AgentChatList';
import AgentChatwindow from './AgentChatwindow';

const AgentChatListWindow: React.FC = () => {
  const [selectedChatId, setSelectedChatId] = useState<string | null>(null);
  const [selectedAgentName, setSelectedAgentName] = useState<string>('');

  return (
    <div className="flex flex-col md:flex-row w-full h-full min-h-screen bg-gray-100">
      <div className="md:w-1/3 w-full border-r border-gray-200 bg-white">
        <AgentChatList
          onSelectChat={(id, name) => {
            setSelectedChatId(id);
            setSelectedAgentName(name);
          }}
        />
      </div>
      <div className="flex-1 w-full">
        <AgentChatwindow selectedChatId={selectedChatId} agentName={selectedAgentName} />
      </div>
    </div>
  );
};

export default AgentChatListWindow;
