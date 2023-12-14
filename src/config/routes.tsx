import { createBrowserRouter, Navigate } from "react-router-dom";
import BaseLayout from "../layout/Base";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import ServicesPage from "../pages/ServicesPage";
import ProjectsPage from "../pages/ProjectsPage";

export function appRouter() {
  return createBrowserRouter([
    {
      path: "/",
      element: <BaseLayout />,
      children: [
        {
          path: "/",
          element: <Navigate to='/landing' />,
        },
        {
          path: "/landing",
          element: <HomePage />,
        },
        {
          path: "/about",
          element: <AboutPage />,
        },
        {
          path: "/contact",
          element: <ContactPage />,
        },
        {
          path: "/services",
          element: <ServicesPage />,
        },
        {
          path: "/projects",
          element: <ProjectsPage />,
        },
      ],
    },
  ]);
}
