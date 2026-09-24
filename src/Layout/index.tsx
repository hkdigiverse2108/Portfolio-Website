import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "./Footer";
import Header from "./Header";
import { VideoModal, ScrollToTop, BackToTopBtn, CustomCursor, WhatsAppButton } from "../Components/Common";
import { Queries } from "../Api";

const ROUTE_PAGE_TITLES: Record<string, { title: string; desc: string }> = {
  "/": {
    title: "Het Mangukiya | Top Performance Marketer & Digital Growth Strategist",
    desc: "Het Mangukiya - Proven track record delivering 10x ROI for top brands across Gujarat & India.",
  },
  "/about": {
    title: "About Me | Het Mangukiya - Growth Marketer & Consultant",
    desc: "Discover the journey, vision, and milestones of Het Mangukiya in scaling businesses.",
  },
  "/service": {
    title: "Services | High-Impact Digital Marketing & Brand Strategy",
    desc: "Explore performance marketing, social media marketing, personal branding, and growth consulting services.",
  },
  "/portfolio": {
    title: "Portfolio & Case Studies | Het Mangukiya",
    desc: "Explore successful campaigns, brand collaborations, and proven marketing case studies.",
  },
  "/blog": {
    title: "Marketing Insights & Blog | Het Mangukiya",
    desc: "Read the latest insights on digital marketing trends, growth strategies, and brand building.",
  },
  "/contact": {
    title: "Contact Het Mangukiya | Get In Touch For Brand Growth",
    desc: "Have a project in mind or looking for performance marketing? Let's talk.",
  },
  "/webinar": {
    title: "Exclusive Workshop & Webinar | Het Mangukiya",
    desc: "Book your seat for practical, high-impact marketing and growth workshops.",
  },
  "/book-a-demo": {
    title: "Book A Workshop | Het Mangukiya",
    desc: "Reserve your spot for live business growth and digital scaling workshops.",
  },
  "/privacy-policy": {
    title: "Privacy Policy | Het Mangukiya",
    desc: "Privacy policy and data protection terms for Het Mangukiya portfolio.",
  },
  "/terms-conditions": {
    title: "Terms & Conditions | Het Mangukiya",
    desc: "Terms of service and conditions for Het Mangukiya website and programs.",
  },
};

const Layout = () => {
  const { pathname } = useLocation();
  const { data: userRes } = Queries.useGetUser();
  const userData = userRes?.data;

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [pathname]);

  useEffect(() => {
    if (userData?.profileImage) {
      const link = document.querySelector("link[rel~='icon']") as HTMLLinkElement;
      if (link) {
        link.href = userData.profileImage;
      }
    }

    const baseBrand = userData?.logoTitle || `${userData?.firstName || "Het"} ${userData?.lastName || "Mangukiya"}`;
    const cleanPath = pathname.toLowerCase().replace(/\/$/, "") || "/";
    const routeInfo = ROUTE_PAGE_TITLES[cleanPath];

    if (routeInfo) {
      document.title = routeInfo.title;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute("content", routeInfo.desc);
      } else {
        const meta = document.createElement("meta");
        meta.name = "description";
        meta.content = routeInfo.desc;
        document.head.appendChild(meta);
      }
    } else {
      const segment = cleanPath.split("/")[1];
      const fallbackTitle = segment ? `${segment.charAt(0).toUpperCase() + segment.slice(1)} | ${baseBrand}` : baseBrand;
      document.title = fallbackTitle;
    }
  }, [pathname, userData]);

  return (
    <>
      <CustomCursor />
      <Header />
      <main className="">
        <Outlet />
      </main>
      <Footer />
      <VideoModal />
      <ScrollToTop />
      <BackToTopBtn />
      <WhatsAppButton />
    </>
  );
};

export default Layout;
