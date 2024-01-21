import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";

const year = new Date().getFullYear();

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
          <i className="fa-solid fa-copyright"></i> nth2prove {year}
        </a>
        <a href="mailto:techbrosforall@gmail.com">Powered by techbros</a>
        <a href="">designed by N2P</a>
      </div>
    </section>
  );
};

export default Footer;
