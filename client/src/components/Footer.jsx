import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <section className="footer">
      <div className="foot-links">
        <a href="/">
          <i>
            <FaFacebook />
          </i>
        </a>
        <a href="/">
          <i>
            <FaLinkedin />
          </i>
        </a>
        <a href="/">
          <i>
            <FaInstagram />
          </i>
        </a>
      </div>
      <div className="foot-rights head-none row">
        <a>
          <i className="fa-solid fa-copyright"></i> nth2prove 2023
        </a>
        <a href="https://github.com/TechBros4all">code by techbros</a>
        <a href="">designed by N2P</a>
      </div>
    </section>
  );
};

export default Footer;
