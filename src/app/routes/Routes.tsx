import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout/DashboardLayout";
import ProtectedRoute from "./ProtectedRoute";
import MainLayout from "../layouts/MainLayout/MainLayout";
import LandingPage from "../../pages/Landing/Landing";
import About from "../../pages/About/About";
import Login from "../../features/auth/components/Login/Login";
import Register from "../../features/auth/components/Register/Register";
import Dashboard from "../../features/dashboard/components/Dashboard/Dashboard";
import PermissionGuard from "../../guards/PermissionGuard";
import Categories from "../../features/categories/components/Category/Category";
import Customers from "../../features/customers/components/CustomersList/CustomersList";
import AddCustomer from "../../features/customers/components/AddCustomer/AddCustomer";
import UpdateCustomer from "../../features/customers/components/UpdateCustomer/UpdateCustomer";
import CustomerProfile from "../../features/customers/components/CustomerProfile/CustomerProfile";
import { Permissions } from "../../constants/Permissions";

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
        element: (
          <PermissionGuard permission={Permissions.CategoriesRead}>
            <Categories />
          </PermissionGuard>
        ),
      },

      {
        path: "customers",
        element: (
          <PermissionGuard permission={Permissions.CustomersRead}>
            <Customers />
          </PermissionGuard>
        ),
      },

      {
        path: "customers/add",
        element: (
          <PermissionGuard permission={Permissions.CustomersCreate}>
            <AddCustomer />
          </PermissionGuard>
        ),
      },

      {
        path: "customers/:id/edit",
        element: (
          <PermissionGuard permission={Permissions.CustomersUpdate}>
            <UpdateCustomer />
          </PermissionGuard>
        ),
      },
      {
        path: "customers/:id",
        element: (
          <PermissionGuard permission={Permissions.CustomersRead}>
            <CustomerProfile />
          </PermissionGuard>
        ),
      },
    ],
  },
]);
