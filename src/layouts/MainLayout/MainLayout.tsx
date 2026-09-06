import { Outlet } from "react-router-dom";
import { Navbar } from "../../features/landing/Navbar/Navbar";
import Footer from "../../features/landing/Footer/Footer";

const MainLayout = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <Outlet />

      <Footer />
    </div>
  );
};

export default MainLayout;
