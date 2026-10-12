import { lazy } from "react";
import { PageNotFound } from "../Components/Common";
import { ROUTES } from "../Constant";
import Home from "../Pages/Home";

const About = lazy(() => import("../Pages/About"));
const Contact = lazy(() => import("../Pages/Contact"));
const Portfolio = lazy(() => import("../Pages/Portfolio"));
const PortfolioDetails = lazy(() => import("../Pages/Portfolio/PortfolioDetails"));
const Service = lazy(() => import("../Pages/Service"));
const ServiceDetails = lazy(() => import("../Pages/Service/ServiceDetails"));
const Blog = lazy(() => import("../Pages/Blog"));
const BlogDetails = lazy(() => import("../Pages/Blog/BlogDetails"));
const TermsConditions = lazy(() => import("../Pages/TermsConditions"));
const PrivacyPolicy = lazy(() => import("../Pages/PrivacyPolicy"));
const Webinar = lazy(() => import("../Pages/Webinar"));
const PaymentSuccess = lazy(() => import("../Pages/Webinar/PaymentSuccess"));
const PaymentFailed = lazy(() => import("../Pages/Webinar/PaymentFailed"));

export const PageRoutes = [
  { path: ROUTES.HOME, element: <Home /> },
  { path: ROUTES.ABOUT, element: <About /> },
  { path: ROUTES.CONTACT, element: <Contact /> },
  { path: ROUTES.PORTFOLIO, element: <Portfolio /> },
  { path: ROUTES.PORTFOLIO_DETAIL, element: <PortfolioDetails /> },
  { path: ROUTES.SERVICE, element: <Service /> },
  { path: "/service", element: <Service /> },
  { path: ROUTES.SERVICE_DETAIL, element: <ServiceDetails /> },
  { path: "/service-detail/:id", element: <ServiceDetails /> },
  { path: ROUTES.BLOG, element: <Blog /> },
  { path: ROUTES.BLOG_DETAIL, element: <BlogDetails /> },
  { path: ROUTES.TERMS_CONDITION, element: <TermsConditions /> },
  { path: "/terms-conditions", element: <TermsConditions /> },
  { path: ROUTES.PRIVACY_POLICY, element: <PrivacyPolicy /> },
  { path: ROUTES.BOOK_A_DEMO, element: <Webinar /> },
  { path: ROUTES.WEBINAR, element: <Webinar /> },
  { path: ROUTES.PAYMENT_SUCCESS, element: <PaymentSuccess /> },
  { path: ROUTES.PAYMENT_FAILED, element: <PaymentFailed /> },
  { path: "*", element: <PageNotFound /> },
];