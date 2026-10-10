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
    title: "About Het Mangukiya | Our Vision & Expertise",
    desc: "Learn about Het Mangukiya, our expertise, approach and commitment to helping businesses grow through technology and digital innovation.",
  },
  "/service": {
    title: "Technology & Digital Marketing Services | Het Mangukiya",
    desc: "Explore IT consulting, software development, AI automation, digital marketing and creative services designed to support your business goals.",
  },
  "/services": {
    title: "Technology & Digital Marketing Services | Het Mangukiya",
    desc: "Explore IT consulting, software development, AI automation, digital marketing and creative services designed to support your business goals.",
  },
  "/portfolio": {
    title: "Portfolio & Projects | Het Mangukiya",
    desc: "Explore projects and creative work by Het Mangukiya across technology, software development, digital marketing and business solutions.",
  },
  "/blog": {
    title: "Technology & Digital Marketing Blog | Het Mangukiya",
    desc: "Read insights on technology, AI, software development, SEO, digital marketing and business growth to make informed decisions for your business.",
  },
  "/contact": {
    title: "Contact Het Mangukiya | Business Enquiries",
    desc: "Get in touch with Het Mangukiya to discuss your business requirements, technology needs, digital marketing goals and potential collaborations.",
  },
  "/webinar": {
    title: "Startup Brand Growth Workshop in Surat By Het Mangukiya",
    desc: "Join Het Mangukiya’s Startup Brand Growth Workshop in Surat on 24 Oct 2026. Learn how to build, brand, market and grow your startup with practical digital strategies.",
  },
  "/book-a-demo": {
    title: "Book a Demo | Het Mangukiya Business Solutions",
    desc: "Book a demo with Het Mangukiya to explore our business solutions, understand their features and discuss the right approach for your organisation.",
  },
  "/privacy-policy": {
    title: "Privacy Policy | Het Mangukiya",
    desc: "Learn how Het Mangukiya collects, uses, stores and protects personal information when you visit our website or interact with our services.",
  },
  "/terms-condition": {
    title: "Terms and Conditions | Het Mangukiya",
    desc: "Read the terms and conditions governing your use of the Het Mangukiya website, services and related digital resources.",
  },
  "/terms-conditions": {
    title: "Terms and Conditions | Het Mangukiya",
    desc: "Read the terms and conditions governing your use of the Het Mangukiya website, services and related digital resources.",
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

      let robotsMeta = document.querySelector('meta[name="robots"]') as HTMLMetaElement;
      if (robotsMeta) {
        robotsMeta.setAttribute("content", "noindex");
      } else {
        const meta = document.createElement("meta");
        meta.name = "robots";
        meta.content = "noindex";
        document.head.appendChild(meta);
      }

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
