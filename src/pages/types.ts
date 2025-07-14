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

// types.ts
export interface Property {
  id: string;
  title: string;
  location: string;
  price: number;
  period: 'year' | 'month'; // Or a more comprehensive enum
  bedrooms: number;
  bathrooms: number;
  description: string;
  imageUrl: string;
  isPublished: boolean;
}

// Add other types as needed, e.g., for Chat, Message if not already defined