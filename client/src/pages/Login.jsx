import logo from "/images/N2P_LOGO.png";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <div className="bg-white p-8 rounded shadow-md max-w-sm w-full">
        <img src={logo} alt="logo" className="w-10" />
        <h2 className="text-3xl font-extrabold text-black mb-4">Login</h2>
        <form method="post">
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-black"
            >
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
              className="block text-sm font-medium text-black"
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
            className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
