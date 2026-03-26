import { ROUTES } from "../Constant";

interface MenuItem {
    label: string;
    link: string;
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
        link: "#",
        submenu: [
            {
                label: "Our Services",
                link: "/",
                submenu: [
                    { label: "Service", link: "/" },
                    { label: "Service Details", link: "/" },
                ],
            },
            {
                label: "Our Portfolio",
                link: "/",
                submenu: [
                    { label: "Portfolio", link: "/" },
                    { label: "Portfolio Details", link: "/" },
                ],
            },
            { label: "Faq", link: ROUTES.FAQ },
            { label: "404", link: ROUTES.NOT_FOUND },
        ],
    },
    {
        label: "Blog",
        link: ROUTES.BLOG,
        submenu: [
            { label: "Blog Grid", link: "/" },
            { label: "Blog Classic", link: "/" },
            { label: "Blog Details", link: "/" },
        ],
    },
    {
        label: "Contact Me",
        link: ROUTES.CONTACT,
    },
];