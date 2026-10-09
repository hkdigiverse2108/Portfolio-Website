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
  "/services": {
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
    title: "Startup Brand Growth Workshop in Surat By Het Mangukiya",
    desc: "Join Het Mangukiya’s Startup Brand Growth Workshop in Surat on 24 Oct 2026. Learn how to build, brand, market and grow your startup with practical digital strategies.",
  },
  "/book-a-demo": {
    title: "Startup Brand Growth Workshop in Surat By Het Mangukiya",
    desc: "Join Het Mangukiya’s Startup Brand Growth Workshop in Surat on 24 Oct 2026. Learn how to build, brand, market and grow your startup with practical digital strategies.",
  },
  "/privacy-policy": {
    title: "Privacy Policy | Het Mangukiya",
    desc: "Privacy policy and data protection terms for Het Mangukiya portfolio.",
  },
  "/terms-condition": {
    title: "Terms & Conditions | Het Mangukiya",
    desc: "Terms of service and conditions for Het Mangukiya website and programs.",
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

    if (cleanPath !== "/book-a-demo" && cleanPath !== "/webinar") {
      const pageTitle = routeInfo ? routeInfo.title : (() => {
        const segment = cleanPath.split("/")[1];
        return segment ? `${segment.charAt(0).toUpperCase() + segment.slice(1)} | ${baseBrand}` : baseBrand;
      })();
      document.title = pageTitle;

      const pageDesc = routeInfo?.desc;
      if (pageDesc) {
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
          metaDesc.setAttribute("content", pageDesc);
        } else {
          const meta = document.createElement("meta");
          meta.name = "description";
          meta.content = pageDesc;
          document.head.appendChild(meta);
        }

        const ogDesc = document.querySelector('meta[property="og:description"]');
        if (ogDesc) ogDesc.setAttribute("content", pageDesc);

        const twitterDesc = document.querySelector('meta[name="twitter:description"]');
        if (twitterDesc) twitterDesc.setAttribute("content", pageDesc);
      }

      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) ogTitle.setAttribute("content", pageTitle);

      const twitterTitle = document.querySelector('meta[name="twitter:title"]');
      if (twitterTitle) twitterTitle.setAttribute("content", pageTitle);

      const pageUrl = `https://hetmangukiya.in${cleanPath === "/" ? "" : cleanPath}`;
      const ogUrl = document.querySelector('meta[property="og:url"]');
      if (ogUrl) ogUrl.setAttribute("content", pageUrl);

      let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      if (canonical) {
        canonical.setAttribute("href", pageUrl);
      } else {
        canonical = document.createElement("link");
        canonical.rel = "canonical";
        canonical.href = pageUrl;
        document.head.appendChild(canonical);
      }
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
