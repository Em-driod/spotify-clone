import { Chat } from './types';

export const chats: Chat[] = [
  {
    id: '1',
    name: 'Faridat',
    lastMessage: 'Is this still available?',
    time: '12:30PM',
    messages: [
      { id: 'm1', sender: 'other', text: 'Good afternoon', timestamp: '12:00PM' },
      { id: 'm2', sender: 'me', text: 'Afternoon', timestamp: '12:01PM' },
      { id: 'm3', sender: 'me', text: 'Is the self con. at tanike still available', timestamp: '12:02PM' },
      { id: 'm4', sender: 'other', text: 'Yes it is still available', timestamp: '12:03PM' },
      { id: 'm5', sender: 'me', text: 'Can i book a visit?', timestamp: '12:04PM' },
      { id: 'm6', sender: 'other', text: 'Yes you can', timestamp: '12:05PM' },
      { id: 'm7', sender: 'me', text: 'When are you available so we can meet', timestamp: '12:06PM' },
      { id: 'm8', sender: 'other', text: 'Today around 2:00pm', timestamp: '12:07PM' },
      { id: 'm9', sender: 'me', text: 'Okay no problem', timestamp: '12:08PM' },
    ],
  },
  {
    id: '2',
    name: 'Emmanuel',
    lastMessage: 'Is this still available?',
    time: '01:30PM',
    messages: [
      { id: 'm10', sender: 'other', text: 'Hello there!', timestamp: '01:25PM' },
      { id: 'm11', sender: 'me', text: 'Hey, I saw your listing.', timestamp: '01:26PM' },
      { id: 'm12', sender: 'other', text: 'How can I help you?', timestamp: '01:27PM' },
    ],
  },
  {
    id: '3',
    name: 'Hassan',
    lastMessage: 'Is this still available?',
    time: '01:45PM',
    messages: [
      { id: 'm13', sender: 'other', text: 'Good morning', timestamp: '01:40PM' },
      { id: 'm14', sender: 'me', text: 'Morning, still got that car?', timestamp: '01:41PM' },
    ],
  },
  {
    id: '4',
    name: 'Olamide',
    lastMessage: 'Is this still available?',
    time: '02:00PM',
    messages: [
      { id: 'm15', sender: 'other', text: 'Hi', timestamp: '01:55PM' },
      { id: 'm16', sender: 'me', text: 'Yes, looking for a house.', timestamp: '01:56PM' },
    ],
  },
  {
    id: '5',
    name: 'Olayinka',
    lastMessage: 'Is this still available?',
    time: '02:30PM',
    messages: [
      { id: 'm17', sender: 'other', text: 'How are you?', timestamp: '02:25PM' },
      { id: 'm18', sender: 'me', text: 'I\'m good, thanks. You?', timestamp: '02:26PM' },
    ],
  },
  {
    id: '6',
    name: 'Funke',
    lastMessage: 'Is this still available?',
    time: '03:30PM',
    messages: [
      { id: 'm19', sender: 'other', text: 'Can we meet today?', timestamp: '03:25PM' },
      { id: 'm20', sender: 'me', text: 'Sure, what time?', timestamp: '03:26PM' },
    ],
  },
];