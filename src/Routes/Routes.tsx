import { createBrowserRouter } from "react-router-dom";
import About from "../features/pages/About/About";
import { LandingPage } from "../features/landing/LandingPage";
import Register from "../features/pages/Register/Register";

import MainLayout from "../layouts/MainLayout/MainLayout";
import AuthLayout from "../layouts/AuthLayout/AuthLayout";
export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },

  {
    element: <AuthLayout />,
    children: [
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);
