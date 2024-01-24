import { Link } from "react-router-dom";
import logo from "/images/N2P_LOGO.png";
import { FaHome, FaRegUser } from "react-icons/fa";
const Navbar = () => {
  return (
    <div>
      <div className="navbar xl:px-24 py-4 flex items-center justify-between">
        <div className="navbar-start">
          <div className="btn btn-ghost btn-circle">
            <Link to={"/"} className="ml-3 md:ml-0 text-black text-2xl">
              <FaHome />
            </Link>
          </div>
        </div>
        <a className="w-20 cursor-pointer">
          <img src={logo} alt="logo" />
        </a>
        <div className="navbar-center hidden lg:flex">
          {/* <ul className="menu menu-horizontal px-1">
            <li className="text-lg">
              <Link>Home</Link>
            </li>
          </ul> */}
        </div>
        <div className="navbar-end">
          <Link
            to={"/login"}
            className="btn btn-ghost btn-circle text-black btn-md mr-2"
          >
            <FaRegUser className="text-[20px]" />
          </Link>
          <Link to={"/cart"}>
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle text-black"
            >
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item">{0}</span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
