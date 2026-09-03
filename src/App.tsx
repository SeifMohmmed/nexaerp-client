import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./features/landing/Navbar/Navbar";
import Footer from "./features/landing/Footer/Footer";

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
