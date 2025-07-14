import { Link } from 'react-router-dom';


import { Chat } from './types';

type ChatListProps = {
  chats: Chat[];
  onSelectChat: (chatId: string) => void;
};

const ChatList: React.FC<ChatListProps> = ({ chats, onSelectChat }) => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h2 className="text-2xl flex font-bold mb-4">
        <Link to="/Customer" className="flex items-center">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mr-4 cursor-pointer text-gray-700"
            >
            <path
              d="M15 18L9 12L15 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              />
          </svg>
              </Link>Chats</h2>
      <div className="space-y-3">
        {chats.map(chat => (
          <div
            key={chat.id}
            className="block bg-white rounded-lg shadow p-4 hover:bg-gray-50 transition cursor-pointer"
            onClick={() => onSelectChat(chat.id)}
          >
            <div className="flex justify-between items-center">
              <div>
                <p className="font-semibold text-lg">{chat.name}</p>
                <p className="text-gray-600 text-sm truncate">{chat.lastMessage}</p>
              </div>
              <span className="text-xs text-gray-400">{chat.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatList;