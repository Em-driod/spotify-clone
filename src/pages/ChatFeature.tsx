import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import ChatList from './ChatList'; // Adjust path if needed
import ChatScreen from './ChatScreen'; // Adjust path if needed
import { chats } from './data'; // Adjust path if needed
import { Chat } from './types'; // Adjust path if needed

// Note: Without CSS, these components will only show basic text.
// The "cool" design requires the CSS files provided previously.

const ChatFeature: React.FC = () => {
  const [selectedChatId, setSelectedChatId] = useState<string | null>(null);

  const handleSelectChat = (chatId: string) => {
    setSelectedChatId(chatId);
  };

  const handleBack = () => {
    setSelectedChatId(null);
  };

  const selectedChat: Chat | undefined = selectedChatId
    ? chats.find((chat) => chat.id === selectedChatId)
    : undefined; // Use undefined for clarity if not found

  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden' }}>
      {/* Basic inline style to simulate the container behavior without external CSS */}
      <AnimatePresence initial={false}>
        {selectedChat ? (
          <ChatScreen key="chat-screen" chat={selectedChat} onBack={handleBack} />
        ) : (
          <ChatList key="chat-list" chats={chats} onSelectChat={handleSelectChat} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default ChatFeature;