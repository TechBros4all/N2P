import { Link } from "react-router-dom";
import logo from "/images/N2P_LOGO.png";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";

const Signup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200 text-black">
      <div className="bg-white p-8 rounded shadow-md max-w-sm w-full">
        <img src={logo} alt="logo" className="w-10 mb-2" />
        <h2 className="text-3xl font-extrabold mb-4">Signup</h2>
        <form method="post">
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="mt-1 p-2 w-full outline-none rounded-md"
              placeholder="Enter your username"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium"
              autoComplete="off"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="mt-1 p-2 w-full outline-none rounded-md"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full hover:bg-black text-white btn bg-[#111] rounded-md"
          >
            Signup
          </button>
        </form>
        <div className="space-y-5 my-5">
          <div>
            <p className="text-center my-2">
              Have an account?
              <Link
                className="underline hover:text-gray-500 ml-1"
                to={"/login"}
              >
                Login!
              </Link>
            </p>
          </div>
          <div className="text-center space-x-3 mb-5">
            <div className="my-5">
              <p>OR</p>
            </div>
            <button className="btn btn-circle" onClick={console.log("Signup")}>
              <FaGoogle />
            </button>
            <button className="btn btn-circle">
              <FaFacebook />
            </button>
            <button className="btn btn-circle">
              <FaGithub />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
