import { ROUTES } from "../Constant";

interface MenuItem {
  label: string;
  link: string | null;
  active?: boolean;
  submenu?: MenuItem[];
  borderNone?: boolean;
}

export const navItems: MenuItem[] = [
  {
    label: "Home",
    link: ROUTES.HOME,
    active: true,
    borderNone: true,
    // submenu: [
    //     { label: "Home 01", link: "index.html" },
    //     { label: "Home 02", link: "index-2.html" },
    //     { label: "Home 03", link: "index-3.html" },
    // ],
  },
  {
    label: "About",
    link: ROUTES.ABOUT,
  },
  {
    label: "Pages",
    link: null,
    submenu: [
      {
        label: "Our Services",
        link: ROUTES.SERVICE,
        // submenu: [
        //   { label: "Service", link: ROUTES.SERVICE },
        //   { label: "Service Details", link: ROUTES.SERVICE_DETAIL },
        // ],
      },
      {
        label: "Our Portfolio",
        link: ROUTES.PORTFOLIO,
        // submenu: [
        //   { label: "Portfolio", link: ROUTES.PORTFOLIO },
        //   { label: "Portfolio Details", link: ROUTES.PORTFOLIO_DETAIL },
        // ],
      },
      // { label: "404", link: ROUTES.NOT_FOUND },
    ],
  },
  {
    label: "Blog",
    link: ROUTES.BLOG,
    // submenu: [
    //     { label: "Blog Grid", link: ROUTES.BLOG },
    //     { label: "Blog Details", link: ROUTES.BLOG_DETAIL },
    // ],
  },
  {
    label: "Contact Me",
    link: ROUTES.CONTACT,
  },
];
