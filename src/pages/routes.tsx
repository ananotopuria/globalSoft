import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import AboutUsPage from "./aboutUsPage";
import HomePage from "./homePage";
import ContactPage from "./contactPage";
import PortfolioPage from "./portfolioPage";
import ServicesPage from "./servicesPage";
import NotFoundPage from "./notFoundPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "about",
        element: <AboutUsPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "portfolio",
        element: <PortfolioPage />,
      },
      {
        path: "services",
        element: <ServicesPage />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

export default router;
