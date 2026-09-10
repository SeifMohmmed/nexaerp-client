import { createBrowserRouter } from "react-router-dom";
import About from "../features/pages/About/About";
import { LandingPage } from "../features/landing/LandingPage";
import Register from "../features/pages/Register/Register";

import Login from "../features/pages/Login/Login";
import DashboardLayout from "../layouts/DashboardLayout/DashboardLayout";
import Dashboard from "../features/pages/Dashboard/Dashboard";
import Categories from "../features/pages/Category/Category";
import ProtectedRoute from "./ProtectedRoute";
import MainLayout from "../layouts/MainLayout/MainLayout";

export const router = createBrowserRouter([
  // =========================
  // Public Routes
  // =========================

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

  // =========================
  // Authentication
  // =========================

  {
    path: "/login",
    element: <Login />,
  },

  {
    path: "/register",
    element: <Register />,
  },

  // =========================
  // Protected Routes
  // =========================

  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <DashboardLayout />
      </ProtectedRoute>
    ),
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
