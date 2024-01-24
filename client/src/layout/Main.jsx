import { Outlet } from "react-router-dom";
import NavBar from "../pages/components/Navbar";
import Footer from "../pages/components/Footer";

const Main = () => {
  return (
    <div className="text-black">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
