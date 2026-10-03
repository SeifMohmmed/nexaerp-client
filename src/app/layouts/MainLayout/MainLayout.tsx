import { Outlet } from "react-router-dom";
import ScrollToTop from "../../../components/common/ScrollToTop/ScrollToTop";
import Navbar from "../../../pages/Landing/components/Navbar/Navbar";
import Footer from "../../../pages/Landing/components/Footer/Footer";

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
