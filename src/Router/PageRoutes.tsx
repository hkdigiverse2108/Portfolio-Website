import { PageNotFound } from "../Components/Common";
import { ROUTES } from "../Constant";
import { About, Blog, BlogDetails, Contact, Home, PaymentFailed, PaymentSuccess, Portfolio, PortfolioDetails, PrivacyPolicy, Service, ServiceDetails, TermsConditions, Webinar } from "../Pages";

export const PageRoutes = [
  { path: ROUTES.HOME, element: <Home /> },
  { path: ROUTES.ABOUT, element: <About /> },
  { path: ROUTES.CONTACT, element: <Contact /> },
  { path: ROUTES.PORTFOLIO, element: <Portfolio /> },
  { path: ROUTES.PORTFOLIO_DETAIL, element: <PortfolioDetails /> },
  { path: ROUTES.SERVICE, element: <Service /> },
  { path: ROUTES.SERVICE_DETAIL, element: <ServiceDetails /> },
  { path: ROUTES.BLOG, element: <Blog /> },
  { path: ROUTES.BLOG_DETAIL, element: <BlogDetails /> },
  { path: ROUTES.TERMS_CONDITION, element: <TermsConditions /> },
  { path: ROUTES.PRIVACY_POLICY, element: <PrivacyPolicy /> },
  { path: ROUTES.BOOK_A_DEMO, element: <Webinar /> },
  { path: ROUTES.WEBINAR, element: <Webinar /> },
  { path: ROUTES.PAYMENT_SUCCESS, element: <PaymentSuccess /> },
  { path: ROUTES.PAYMENT_FAILED, element: <PaymentFailed /> },
  { path: "*", element: <PageNotFound /> },
];