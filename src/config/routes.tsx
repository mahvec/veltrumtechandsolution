import { createBrowserRouter, Navigate } from "react-router-dom";
import BaseLayout from "../layout/Base";

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
          element: <>home</>,
        },
        {
          path: "/about",
          element: <>about</>,
        },
        {
          path: "/contact",
          element: <>contact</>,
        },
        {
          path: "/services",
          element: <>services</>,
        },
        {
          path: "/projects",
          element: <>projects</>,
        },
      ],
    },
  ]);
}
