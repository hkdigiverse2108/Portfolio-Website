import { PageNotFound } from "../Components/Common";
import { ROUTES } from "../Constant";
import { About, Contact, Faq, Home } from "../Pages";

export const PageRoutes = [
  { path: ROUTES.HOME, element: <Home /> },
  { path: ROUTES.ABOUT, element: <About /> },
  { path: ROUTES.CONTACT, element: <Contact /> },
  { path: ROUTES.FAQ, element: <Faq /> },
  { path: "*", element: <PageNotFound /> },
];