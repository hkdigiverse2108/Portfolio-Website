import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import { VideoModal } from "../Components/Common";

const Layout = () => {
  return (
    <>
      <Header />
      <main className="">
        <Outlet />
      </main>
      <Footer />
      <VideoModal />
    </>
  );
};

export default Layout;
