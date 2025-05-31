export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  venue: string;
  image: string;
  ticketUrl: string;
  price: string;
  category: string;
}

export interface EmailSubscription {
  email: string;
  eventId: string;
}