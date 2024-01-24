import { CiInstagram, CiMail } from "react-icons/ci";
import { LiaCopyright } from "react-icons/lia";
import { Link } from "react-router-dom";
const year = new Date().getFullYear();

const Footer = () => {
  return (
    <div className="xl:px-24 px-8 py-4 w-full bg-gray-300 text-center text-xs md:text-base font-medium capitalize">
      <div className="flex justify-between items-center py-5 w-1/12 mx-auto">
        <Link>
          <CiInstagram className="text-3xl" />
        </Link>
        <Link>
          <CiMail className="text-3xl" />
        </Link>
      </div>
      <div className="flex items-center flex-col md:flex-row space-y-5 md:py-8 md:space-y-0">
        <span className="sm:w-full">
          <p className="flex items-center justify-center">
            <LiaCopyright className="mr-1" />
            nth2prove {year}
          </p>
        </span>

        <p className="sm:w-full">
          <a href="mailto:techbrosforall@gmail.com">Powered by techbros</a>
        </p>

        <p className="sm:w-full">Design by N2P</p>
      </div>
    </div>
  );
};

export default Footer;
