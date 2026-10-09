import AmbientAudio from "../components/ui/AmbientAudio";
import { Outlet } from "react-router-dom";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import "./MainLayout.css";

function MainLayout() {
  return (
    <div className="main-layout">
      <Navbar />
      <Outlet />
      <Footer />
      <AmbientAudio />
    </div>
  );
}

export default MainLayout;
