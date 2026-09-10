import { Outlet } from "react-router-dom";
import { Navbar } from "../../features/landing/Navbar/Navbar";
import Footer from "../../features/landing/Footer/Footer";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";

const MainLayout = () => {
  return (
    <div className="min-h-screen">
      <ScrollToTop />

      <Navbar />

      <Outlet />

      <Footer />
    </div>
  );
};

export default MainLayout;
