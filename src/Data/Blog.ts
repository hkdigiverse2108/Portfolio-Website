export interface BlogPost {
  id: number;
  image: string;
  category: string;
  date: string;
  title: string;
  link: string;
  delay: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    image: "assets/img/news/1.jpg",
    category: "Branding",
    date: "26 June 2024",
    title: "The Role of Prototyping in UI/UX Design",
    link: "news-details.html",
    delay: ".3s"
  },
  {
    id: 2,
    image: "assets/img/news/2.jpg",
    category: "Design System",
    date: "26 June 2024",
    title: "The Psychology Behind Color Choices in UI/UX Design",
    link: "news-details.html",
    delay: ".6s"
  },
  {
    id: 3,
    image: "assets/img/news/3.jpg",
    category: "UI/UX Design",
    date: "26 June 2024",
    title: "The Importance of User Research in UI/UX Design",
    link: "news-details.html",
    delay: ".9s"
  }
];
