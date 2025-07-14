// LandlordChats.tsx
import React, { useState } from 'react';

// Simplified Chat and Message types for demonstration
interface ChatMessage {
  id: string;
  sender: 'landlord' | 'tenant';
  text: string;
  timestamp: string;
}

interface Conversation {
  id: string;
  tenantName: string;
  propertyTitle: string;
  messages: ChatMessage[];
}

const dummyConversations: Conversation[] = [
  {
    id: 'conv1',
    tenantName: 'Sheen',
    propertyTitle: 'Spacious 2-Bedroom Flat',
    messages: [
      { id: 'msg1', sender: 'tenant', text: 'Is the 2-bedroom flat still available?', timestamp: '10:00 AM' },
      { id: 'msg2', sender: 'landlord', text: 'Yes, it is! When would you like to view it?', timestamp: '10:05 AM' },
      { id: 'msg3', sender: 'tenant', text: 'How about tomorrow at 2 PM?', timestamp: '10:15 AM' },
      
    ],
  },
  {
    id: 'conv2',
    tenantName: 'Adisa',
    propertyTitle: 'Cozy Studio Apartment',
    messages: [
      { id: 'msg4', sender: 'tenant', text: 'What are the payment terms for the studio?', timestamp: 'Yesterday 3:00 PM' },
      { id: 'msg5', sender: 'landlord', text: 'It\'s annual payment, 150k. Utility bills are separate.', timestamp: 'Yesterday 3:10 PM' },
    ],
  },
];

const LandlordChats: React.FC = () => {
  const [selectedConversationId, setSelectedConversationId] = useState<string | null>(null);
  const [newMessageText, setNewMessageText] = useState<string>('');

  const selectedConversation = selectedConversationId
    ? dummyConversations.find((conv) => conv.id === selectedConversationId)
    : null;

  const handleSendMessage = () => {
    if (newMessageText.trim() && selectedConversation) {
      const newMsg: ChatMessage = {
        id: `msg${Date.now()}`,
        sender: 'landlord',
        text: newMessageText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      // In a real app, you'd send this to a backend and update state upon success
      // For this demo, we'll just add it to the dummy data (this won't persist across renders)
      selectedConversation.messages.push(newMsg);
      setNewMessageText('');
      // Force re-render if needed (though state update should handle it)
      setSelectedConversationId(selectedConversationId); // Dummy update to trigger re-render
    }
  };

  return (
    <div className="landlord-chats-container" style={{
      display: 'flex',
      flexDirection: 'column',
      height: 'calc(100vh - 120px)', // Adjust based on header/footer height
      backgroundColor: '#fff',
      borderRadius: '8px',
      overflow: 'hidden',
    }}>
      {!selectedConversation ? (
        // Chat List View
        <div className="conversation-list" style={{ flex: 1, overflowY: 'auto', padding: '10px' }}>
          {dummyConversations.length === 0 ? (
            <p style={{ textAlign: 'center', color: '#666', marginTop: '20px' }}>
              No active conversations.
            </p>
          ) : (
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {dummyConversations.map((conv) => (
                <li
                  key={conv.id}
                  onClick={() => setSelectedConversationId(conv.id)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '12px 10px',
                    borderBottom: '1px solid #eee',
                    cursor: 'pointer',
                    backgroundColor: '#f8f8f8',
                    borderRadius: '8px',
                    marginBottom: '8px',
                    transition: 'background-color 0.2s',
                  }}
                >
                  <div style={{
                    width: '45px',
                    height: '45px',
                    borderRadius: '50%',
                    backgroundColor: '#B4E0FF', // Light blue for avatar
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#0056b3',
                    fontWeight: 'bold',
                    fontSize: '18px',
                    marginRight: '12px',
                  }}>
                    {conv.tenantName.charAt(0).toUpperCase()}
                  </div>
                  <div style={{ flexGrow: 1 }}>
                    <h4 style={{ fontSize: '16px', fontWeight: 'bold', color: '#333', marginBottom: '2px' }}>
                      {conv.tenantName}
                    </h4>
                    <p style={{ fontSize: '13px', color: '#777', marginBottom: '2px' }}>
                      About: {conv.propertyTitle}
                    </p>
                    <p style={{ fontSize: '14px', color: '#555', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>
                      {conv.messages[conv.messages.length - 1]?.text || 'No messages yet.'}
                    </p>
                  </div>
                  <span style={{ fontSize: '12px', color: '#999', marginLeft: '10px' }}>
                    {conv.messages[conv.messages.length - 1]?.timestamp || ''}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
      ) : (
        // Specific Chat View
        <div className="chat-screen" style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
          <div className="chat-header" style={{
            backgroundColor: '#eee',
            padding: '10px',
            display: 'flex',
            alignItems: 'center',
            borderBottom: '1px solid #ddd',
          }}>
            <span
              onClick={() => setSelectedConversationId(null)}
              style={{ cursor: 'pointer', fontSize: '24px', marginRight: '10px' }}
            >
              &#8592;
            </span>
            <div>
              <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#333' }}>
                {selectedConversation.tenantName}
              </h3>
              <p style={{ fontSize: '14px', color: '#777' }}>
                About: {selectedConversation.propertyTitle}
              </p>
            </div>
          </div>
          <div className="messages-area" style={{ flex: 1, overflowY: 'auto', padding: '15px', backgroundColor: '#f5f5f5' }}>
            {selectedConversation.messages.map((message) => (
              <div
                key={message.id}
                style={{
                  display: 'flex',
                  justifyContent: message.sender === 'landlord' ? 'flex-end' : 'flex-start',
                  marginBottom: '10px',
                }}
              >
                <div
                  style={{
                    backgroundColor: message.sender === 'landlord' ? '#4A00B7' : '#e0e0e0',
                    color: message.sender === 'landlord' ? 'white' : '#333',
                    padding: '10px 15px',
                    borderRadius: '15px',
                    maxWidth: '70%',
                    wordBreak: 'break-word',
                  }}
                >
                  <p style={{ fontSize: '14px' }}>{message.text}</p>
                  <span style={{ fontSize: '10px', color: message.sender === 'landlord' ? '#ccc' : '#888', display: 'block', textAlign: 'right', marginTop: '5px' }}>
                    {message.timestamp}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="message-input-area" style={{
            display: 'flex',
            padding: '10px',
            borderTop: '1px solid #ddd',
            backgroundColor: '#fff',
          }}>
            <input
              type="text"
              value={newMessageText}
              onChange={(e) => setNewMessageText(e.target.value)}
              onKeyPress={(e) => { if (e.key === 'Enter') handleSendMessage(); }}
              placeholder="Type a message..."
              style={{
                flex: 1,
                padding: '10px',
                borderRadius: '20px',
                border: '1px solid #ddd',
                marginRight: '10px',
                fontSize: '14px',
              }}
            />
            <button
              onClick={handleSendMessage}
              style={{
                backgroundColor: '#4A00B7',
                color: 'white',
                border: 'none',
                borderRadius: '20px',
                padding: '10px 15px',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: 'bold',
              }}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LandlordChats;