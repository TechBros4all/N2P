import { Outlet } from "react-router-dom";
import NavBar from "../pages/components/Navbar";
import Footer from "../pages/components/Footer";

const Main = () => {
  return (
    <div>
      <NavBar />
      <div className="flex flex-col h-screen">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
