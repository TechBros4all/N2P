import {
  FaBars,
  // FaHeart,
  // FaSearch,
  FaShoppingBag,
  // FaUser,
} from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { useState } from "react";
import logo from "/images/N2P_LOGO.png";

// scroll to top on page refresh/load
window.addEventListener("load", () => {
  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 1000);
});

const Navbar = () => {
  // mobile nav
  const [isNavOpen, setIsNavOpen] = useState(false);

  const openNav = () => {
    setIsNavOpen(true);
    document.body.classList.add("add");
  };

  const closeNav = () => {
    setIsNavOpen(false);
    document.body.classList.remove("add");
  };

  return (
    <div>
      <div className="navbar">
        <nav>
          <ul className="row">
            <li>
              <i id="bars" onClick={openNav}>
                <FaBars />
              </i>
            </li>
            <li
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: "-10px",
              }}
            >
              <a href="/">
                <img src={logo} alt="" style={{ width: "80px" }} />
              </a>
            </li>
            <li>
              <a href="/">home</a>
              {/* <a href="/">tees</a> */}
              {/* <a href="/">pants</a> */}
              {/* <a href="/">hats</a> */}
            </li>
            <li>
              {/* <i>
                <FaHeart />
              </i> */}
              {/* <i className="nomob">
                <FaSearch />
              </i> */}
              <a href="/cart">
                <i>
                  <FaShoppingBag />
                </i>
              </a>
              {/* <i>
                <FaUser />
              </i> */}
            </li>
          </ul>
          <div
            className="mobile-nav"
            id="mobNav"
            style={{ left: isNavOpen ? "0%" : "-80%" }}
          >
            <i id="xMark">
              <FaXmark onClick={closeNav} />
            </i>
            <li>
              <a href="/">home</a>
              {/* <a href="/">tees</a> */}
              {/* <a href="/">pants</a> */}
              <a href="/cart">Cart</a>
              {/* <a href="/">hats</a> */}
            </li>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
