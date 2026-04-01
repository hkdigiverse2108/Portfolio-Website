import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "./Footer";
import Header from "./Header";
import { VideoModal, ScrollToTop, BackToTopBtn, CustomCursor } from "../Components/Common";

const Layout = () => {
  const { pathname } = useLocation();

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
