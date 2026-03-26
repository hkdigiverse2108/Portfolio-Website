import { PageNotFound } from "../Components/Common";
import { ROUTES } from "../Constant";
import { About, Blog, BlogClassic, BlogDetails, Contact, Faq, Home, Portfolio, PortfolioDetails, Service, ServiceDetails } from "../Pages";

export const PageRoutes = [
  { path: ROUTES.HOME, element: <Home /> },
  { path: ROUTES.ABOUT, element: <About /> },
  { path: ROUTES.CONTACT, element: <Contact /> },
  { path: ROUTES.FAQ, element: <Faq /> },
  { path: ROUTES.PORTFOLIO, element: <Portfolio /> },
  { path: ROUTES.PORTFOLIO_DETAIL, element: <PortfolioDetails /> },
  { path: ROUTES.SERVICE, element: <Service /> },
  { path: ROUTES.SERVICE_DETAIL, element: <ServiceDetails /> },
  { path: ROUTES.BLOG, element: <Blog /> },
  { path: ROUTES.BLOG_CLASSIC, element: <BlogClassic /> },
  { path: ROUTES.BLOG_DETAIL, element: <BlogDetails /> },
  { path: "*", element: <PageNotFound /> },
];