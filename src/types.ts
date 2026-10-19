export interface PurchaseEvent {
  id: string;
  location: string;
  timeAgo: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Chapter {
  number: string;
  title: string;
  subtitle: string;
  summary: string;
  highlights: string[];
}
