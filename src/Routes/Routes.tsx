import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../features/pages/About/About";
import { LandingPage } from "../features/landing/LandingPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);
