export interface Message {
  id: string;
  sender: 'me' | 'other';
  text: string;
  timestamp: string;
}

export interface Chat {
  id: string;
  name: string;
  lastMessage: string;
  time: string;
  messages: Message[];
}