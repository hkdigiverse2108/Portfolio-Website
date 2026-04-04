import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "./Footer";
import Header from "./Header";
import { VideoModal, ScrollToTop, BackToTopBtn, CustomCursor } from "../Components/Common";
import { Queries } from "../Api";

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
    if (userData) {
      if (userData?.profileImage) {
        const link = document.querySelector("link[rel~='icon']") as HTMLLinkElement;
        if (link) {
          link.href = userData.profileImage;
        }
      }
      // Update Document Title dynamic from logoTitle or name
      const title = userData?.logoTitle || `${userData?.firstName} ${userData?.lastName}` || "Portfolio";
      document.title = title;
    }
  }, [userData]);

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
    </>
  );
};

export default Layout;
