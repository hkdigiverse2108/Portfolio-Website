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
    image: "assets/img/news/4.jpg",
    category: "Branding",
    date: "26 June 2024",
    title: "How to Conduct Effective User Research for Better UX",
    link: "/blog-detail",
    delay: ".3s"
  },
  {
    id: 2,
    image: "assets/img/news/5.jpg",
    category: "Design System",
    date: "26 June 2024",
    title: "How to Make Data-Driven Design Decisions",
    link: "/blog-detail",
    delay: ".6s"
  },
  {
    id: 3,
    image: "assets/img/news/6.jpg",
    category: "UI/UX Design",
    date: "26 June 2024",
    title: "Trends That Will Shape Digital Experiences in 2025",
    link: "/blog-detail",
    delay: ".9s"
  },
  {
    id: 4,
    image: "assets/img/news/7.jpg",
    category: "Branding",
    date: "26 June 2024",
    title: "The Psychology of Colors in UI/UX Design",
    link: "/blog-detail",
    delay: ".3s"
  },
  {
    id: 5,
    image: "assets/img/news/8.jpg",
    category: "Design System",
    date: "26 June 2024",
    title: "The Power of A/B Testing in UX Design",
    link: "/blog-detail",
    delay: ".6s"
  },
  {
    id: 6,
    image: "assets/img/news/9.jpg",
    category: "UI/UX Design",
    date: "26 June 2024",
    title: "How to Plan Your UI/UX Design Like a Pro",
    link: "/blog-detail",
    delay: ".9s"
  },
  {
    id: 7,
    image: "assets/img/news/10.jpg",
    category: "Branding",
    date: "26 June 2024",
    title: "How to Create an Interactive Prototype in Figma",
    link: "/blog-detail",
    delay: ".3s"
  },
  {
    id: 8,
    image: "assets/img/news/11.jpg",
    category: "Design System",
    date: "26 June 2024",
    title: "The Impact of White Space in User Experience",
    link: "/blog-detail",
    delay: ".6s"
  },
  {
    id: 9,
    image: "assets/img/news/12.jpg",
    category: "UI/UX Design",
    date: "26 June 2024",
    title: "The Importance of User Research in UI/UX Design",
    link: "/blog-detail",
    delay: ".9s"
  }
];
