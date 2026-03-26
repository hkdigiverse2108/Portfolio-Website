export interface FaqItem {
  id: number;
  question: string;
  answer: string;
  delay: string;
}

export const faqData: FaqItem[] = [
  {
    id: 1,
    question: "What services do you offer in development?",
    answer: "Yes, we provide tailored solutions based on your business needs, ensuring efficiency, scalability, and security.",
    delay: ".1s",
  },
  {
    id: 2,
    question: "Do you offer custom development solutions?",
    answer: "Yes, we provide tailored solutions based on your business needs, ensuring efficiency, scalability, and security.",
    delay: ".3s",
  },
  {
    id: 3,
    question: "Can you help with website and app maintenance?",
    answer: "Yes, we provide tailored solutions based on your business needs, ensuring efficiency, scalability, and security.",
    delay: ".5s",
  },
  {
    id: 4,
    question: "Do you develop e-commerce websites?",
    answer: "Yes, we provide tailored solutions based on your business needs, ensuring efficiency, scalability, and security.",
    delay: ".6s",
  },
];
