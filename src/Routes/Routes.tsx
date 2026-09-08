import { createBrowserRouter } from "react-router-dom";
import About from "../features/pages/About/About";
import { LandingPage } from "../features/landing/LandingPage";
import Register from "../features/pages/Register/Register";

import MainLayout from "../layouts/MainLayout/MainLayout";
import AuthLayout from "../layouts/AuthLayout/AuthLayout";
import Login from "../features/pages/Login/Login";
import DashboardLayout from "../layouts/DashboardLayout/DashboardLayout";
import Dashboard from "../features/pages/Dashboard/Dashboard";
import Categories from "../features/pages/Category/Category";
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
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
  // Dashboard routes
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "categories",
        element: <Categories />,
      },
    ],
  },
]);
